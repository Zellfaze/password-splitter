import React from "react";
import {render, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContentBlockInstructions from '../ContentBlockInstructions.js';
 

it("renders instructions text", async () => {
  render(<ContentBlockInstructions>Test</ContentBlockInstructions>);
  
  await waitFor(() => screen.getByText("Test"));
  
  expect(screen.getByText("Test")).toHaveTextContent("Test");
});
