import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NextButton from '../NextButton.js';
import {IntlProvider} from 'react-intl'
 

it("renders a button named Next that calls onClick", async () => {
  const stubFunction = jest.fn();
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <NextButton onClick={stubFunction} />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByRole('button'));
  
  // Button renders
  expect(screen.getByRole('button')).toBeVisible();
  
  // onClick works
  fireEvent.click(screen.getByRole("button", {name: "Next"}));
  expect(stubFunction).toHaveBeenCalledTimes(1);
});
