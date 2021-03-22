import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {IntlProvider} from 'react-intl';

// Testing
import LoadActivity from '../LoadActivity.js';

// Mock these modules
import CryptoFunctions from '../../lib/crypto.js';
import api from '../../lib/api.js';
jest.mock('../../lib/crypto.js');
jest.mock('../../lib/api.js');

it("renders without crashing", () => {
  const stubFunction = jest.fn()
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoadActivity addMessage={stubFunction} id=""/>
    </IntlProvider>
  );
});

it("passes integration test", async () => {
  // Mock some functions
  const addMessage = jest.fn()
  api.loadBlob.mockResolvedValue({id: "abcdefabcdefabcd", data: "actually-cipher-text" });
  CryptoFunctions.extractMetadataFromBlob.mockResolvedValue({groupSize: 5, requiredMembers: 4, users: ["user1", "user2", "user3", "user5"]});
  CryptoFunctions.decryptBlob.mockResolvedValue("This is test plaintext.");
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <LoadActivity addMessage={addMessage} id=""/>
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByLabelText("ID Number"));
  
  // Enter some input into the key ID box and click the next button
  fireEvent.change(screen.getByLabelText("ID Number"), { target: { value: 'abcdefabcdefabcd' } });
  fireEvent.click(screen.getByRole("button", {name: "Next"}));
  
  expect(addMessage).toHaveBeenCalledTimes(0);
  
  await waitFor(() => screen.getAllByLabelText("Username"));
  
  // We should have exactly four username boxes
  expect(screen.getAllByLabelText("Username").length).toBe(4);
  
  // Fill in each username box
  screen.getAllByLabelText("Username").forEach( (userbox, index) => {
    fireEvent.change(userbox, { target: { value: `user${index}` } });
  });
  
  // We should have exactly four password boxes
  expect(screen.getAllByLabelText("Password").length).toBe(4);
  
  // Fill in each password box
  screen.getAllByLabelText("Password").forEach( (passbox, index) => {
    fireEvent.change(passbox, { target: { value: `pass${index}` } });
  });
  
  // Click next
  fireEvent.click(screen.getByRole("button", {name: "Next"}));
  
  await waitFor(() => screen.getByLabelText("Ciphertext"));
  
  // We should see the final output
  expect(screen.getByLabelText("Ciphertext")).toHaveValue("This is test plaintext.");
});
