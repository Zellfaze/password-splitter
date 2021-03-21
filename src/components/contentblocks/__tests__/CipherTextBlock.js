import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CipherTextBlock from '../CipherTextBlock.js';
import {IntlProvider} from 'react-intl'
 

it("renders a textbox", async () => {
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <CipherTextBlock cipherText="Ciphertext" />
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByRole('textbox'));
  expect(screen.getByRole('textbox')).toHaveValue("Ciphertext");
});
