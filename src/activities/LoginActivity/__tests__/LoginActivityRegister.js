import React from "react";
import {fireEvent, render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import LoginActivityRegister from '../LoginActivityRegister.js';
 

it("renders without crashing", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginActivityRegister onSubmit={onSubmit} />
    </IntlProvider>
  );
});

it("calls onSubmit properly", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginActivityRegister onSubmit={onSubmit} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByLabelText('Username'));
  
  // Click the button without entering any credentials
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Click the button with just a username
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "user1" } });
  fireEvent.change(screen.getByLabelText("Password"), { target: { value: "" } });
  fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Click the button with just a password
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "" } });
  fireEvent.change(screen.getByLabelText("Password"), { target: { value: "test" } });
  fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "test" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Click the button with both a username and password (should finally call onSubmit)
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "user1" } });
  fireEvent.change(screen.getByLabelText("Password"), { target: { value: "test" } });
  fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "test" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});

it("ensures password and password confirm match", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginActivityRegister onSubmit={onSubmit} />
    </IntlProvider>
  );
  
  // Passwords don't match, don't call onSubmit
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "user1" } });
  fireEvent.change(screen.getByLabelText("Password"), { target: { value: "test" } });
  fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "taste" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(0);
  
  // Passwords do match, call onSubmit
  fireEvent.change(screen.getByLabelText("Username"), { target: { value: "user1" } });
  fireEvent.change(screen.getByLabelText("Password"), { target: { value: "test" } });
  fireEvent.change(screen.getByLabelText("Confirm Password"), { target: { value: "test" } });
  fireEvent.click(screen.getByRole("button"));
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
