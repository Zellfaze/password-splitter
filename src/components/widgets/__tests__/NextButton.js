import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NextButton from '../NextButton.js';
import {IntlProvider} from 'react-intl'
 

it("renders a button", async () => {
  const stubFunction = (() => {return;});
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <NextButton onClick={stubFunction} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByRole('button'));
  
  expect(screen.getByRole('button')).toBeVisible();
});
