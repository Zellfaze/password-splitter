import React from "react";
import {render, waitFor, screen} from '@testing-library/react';
import {IntlProvider} from 'react-intl';
import '@testing-library/jest-dom/extend-expect'
import Sidebar from '../Sidebar.js';
 

it("renders without crashing", async () => {
  let onSubmit = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <Sidebar>
        Test
      </Sidebar>
    </IntlProvider>
  );
}); 
