import React from "react";
import {render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import MainBox from '../MainBox.js';
 

it("renders without crashing", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <MainBox>
        Test
      </MainBox>
    </IntlProvider>
  );
}); 
