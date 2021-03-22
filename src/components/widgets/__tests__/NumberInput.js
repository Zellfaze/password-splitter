import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NumberInput from '../NumberInput.js';

it("renders a spinbutton without crashing", async () => {
  const stubFunction = jest.fn();
  render(<NumberInput id="testinput" value={2} onChange={stubFunction} maxValue={255} minValue={2} />);
  
  await waitFor(() => screen.getByRole('spinbutton'));
});

it("calls onChange with correct value", async () => {
  const stubFunction = jest.fn();
  render(<NumberInput id="testinput" value={2} onChange={stubFunction} maxValue={255} minValue={2} />);
  
  await waitFor(() => screen.getByRole('spinbutton'));
  
  // Change the button to 5
  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: 5 } });
  
  expect(stubFunction).toHaveBeenCalledTimes(1);
  expect(stubFunction.mock.calls[0][0]).toBe(5);
  
  // Try to change the button to 300 (shouldn't change, too high)
  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: 300 } });
  
  expect(stubFunction).toHaveBeenCalledTimes(1);
  
  // Try to change the button to 1 (shouldn't change, too low)
  fireEvent.change(screen.getByRole("spinbutton"), { target: { value: 1 } });
  
  expect(stubFunction).toHaveBeenCalledTimes(1);
});

/* TODO
 * Not sure why this isn't working. It seems to be throwing just fine, but the
 * expect function isn't catching the exception. I have tried to render the
 * element in a try/catch block, but that too does not seem to catch the error.
 * There is probably some async magic going on somewhere in React. I'll fix
 * this test once I figure that out.
it("throws an error if minValue > maxValue", async () => {
  const stubFunction = jest.fn();
  expect(() => render(<NumberInput id="testinput" value={2} onChange={stubFunction} maxValue={1} minValue={2} />)).toThrow("Max value can not be less than min value!");
});
*/
