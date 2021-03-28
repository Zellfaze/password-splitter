import React from "react";
import {render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import LoginActivity from '../LoginActivity.js';
 

it("renders without crashing", async () => {
  let loginUser = jest.fn();
  let registerUser = jest.fn();

  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoginActivity loginUser={loginUser} registerUser={registerUser} />
    </IntlProvider>
  );
});
