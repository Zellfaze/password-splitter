import React from "react";
import {render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header.js';
 

it("renders without crashing", async () => {
  let changeActivity = jest.fn();
  let logoutUser = jest.fn();
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <Header logoutUser={logoutUser} changeActivity={changeActivity} />
    </IntlProvider>
  );
});
