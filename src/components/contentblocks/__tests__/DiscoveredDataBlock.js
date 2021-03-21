import React from "react";
import {render, waitFor, screen, within} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DiscoveredDataBlock from '../DiscoveredDataBlock.js';
import {IntlProvider} from 'react-intl'
 

it("renders a list of users", async () => {
    // Create a mock list of users
    const users = ["user1", "user2"];
  
  // Render the component
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <DiscoveredDataBlock users={users} />
    </IntlProvider>
  );
  
  // Get the list of users out of the component
  let items;
  await waitFor(() => {
    const list = screen.getByRole('list', {
      name: /users/i,
    });
    
    items = within(list).getAllByRole("listitem");
  });
  
  // There should be two elements
  expect(items.length).toBe(2);
});
