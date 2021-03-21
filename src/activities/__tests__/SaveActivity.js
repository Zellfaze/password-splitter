import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {IntlProvider} from 'react-intl';

// Testing
import SaveActivity from '../SaveActivity.js';

// Mock these modules
import CryptoFunctions from '../../lib/crypto.js';
import api from '../../lib/api.js';
jest.mock('../../lib/crypto.js');
jest.mock('../../lib/api.js');

it("renders without crashing", () => {
  const stubFunction = jest.fn()
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <SaveActivity addMessage={stubFunction}/>
    </IntlProvider>
  );
});

it("passes integration test", async () => {
  // Mock some functions
  const addMessage = jest.fn();
  api.saveBlob.mockResolvedValue("abcdef");
  CryptoFunctions.generateBlob.mockResolvedValue(Promise.resolve("blob"));
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <SaveActivity data-testid="save-test" addMessage={addMessage}/>
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByLabelText("Text to encrypt"));
  
  // Enter some input into the input box and click the next button
  fireEvent.change(screen.getByLabelText("Text to encrypt"), { target: { value: 'This is test plaintext.' } });
  fireEvent.click(screen.getByRole("button", {name: "Next"}));
  
  expect(addMessage).toHaveBeenCalledTimes(0);
  
  await waitFor(() => screen.getByLabelText("Group Size"));
  
  // Enter our group size and required members and then click next
  fireEvent.change(screen.getByLabelText("Group Size"), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText("Required Members"), { target: { value: "3" } });
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
  
  await waitFor(() => screen.getByTestId("final-link"));
  
  // The link should be available on screen
  expect(screen.getByTestId("final-link")).toBeVisible();
  
  // And it should have the mocked ID
  expect(screen.getByTestId("final-link").href).toMatch(/abcdef/);
  
  expect(api.saveBlob).toHaveBeenCalledTimes(1);
});
