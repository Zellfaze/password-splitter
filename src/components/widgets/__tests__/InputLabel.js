import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputLabel from '../InputLabel.js';
 

it("renders label text", async () => {
  render(<InputLabel id="testlabel">Test</InputLabel>);
  
  await waitFor(() => screen.getByText("Test"));
  
  expect(screen.getByText("Test")).toHaveAttribute("for", "testlabel");
});
