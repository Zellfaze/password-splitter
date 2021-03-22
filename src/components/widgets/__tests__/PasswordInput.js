import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PasswordInput from '../PasswordInput.js';

it("renders without crashing and calls onChange with correct value", async () => {
  let stubFunction = jest.fn();
  
  render(<PasswordInput id="text-input-0" value="" onChange={stubFunction} />);
  
  await waitFor(() => screen.getByTestId('password-input'));
  
  // Make sure that it calls onChange with the correct value
  fireEvent.change(screen.getByTestId('password-input'), { target: { value: "secretpassword" } });
  expect(stubFunction).toHaveBeenCalledTimes(1);
  expect(stubFunction.mock.calls[0][0]).toBe("secretpassword");
});
