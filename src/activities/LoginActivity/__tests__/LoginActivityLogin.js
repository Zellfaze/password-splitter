import React from "react";
import {fireEvent, render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import LoginActivityLogin from '../LoginActivityLogin.js';
 

it("renders without crashing", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginActivityLogin onSubmit={onSubmit} />
    </IntlProvider>
  );
});

it("calls onSubmit properly", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginActivityLogin onSubmit={onSubmit} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByLabelText('Username'));
  
  // Click the button without entering any credentials
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Click the button with just a username
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "test" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Click the button with just a password
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "" } });
  fireEvent.change(screen.getByLabelText("Password"), { target: { value: "test" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Click the button with both a username and password (should finally call onSubmit)
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "test" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
