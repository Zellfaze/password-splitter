import React from "react";
import {fireEvent, render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import LoginButton from '../LoginButton.js';
import constants from '../../../lib/constants.js';
 

it("renders without crashing", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginButton logoutUser={logoutUser} changeActivity={changeActivity} />
    </IntlProvider>
  );
});

it("shows login button without being passed a user", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginButton logoutUser={logoutUser} changeActivity={changeActivity} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByText('Login'));
});

it("shows login button being passed a null user", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginButton logoutUser={logoutUser} user={null} changeActivity={changeActivity} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByText('Login'));
});

it("shows logout button", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginButton logoutUser={logoutUser} user={{username: "Test"}} changeActivity={changeActivity} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByText('Logout'));
});

it("changes activity to login when clicked", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginButton logoutUser={logoutUser} changeActivity={changeActivity} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByText('Login'));
  
  fireEvent.click(screen.getByText("Login"));
  expect(changeActivity).toHaveBeenCalledTimes(1);
  expect(changeActivity).toHaveBeenLastCalledWith(constants.activities.LOGIN);
});

it("changes activity to logout when clicked", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginButton logoutUser={logoutUser} user={{username: "Test"}} changeActivity={changeActivity} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByText('Logout'));
  
  fireEvent.click(screen.getByText("Logout"));
  expect(logoutUser).toHaveBeenCalledTimes(1);
});
