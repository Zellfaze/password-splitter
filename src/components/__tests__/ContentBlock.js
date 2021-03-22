import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContentBlock from '../ContentBlock.js';

it("renders without crashing", async () => {
  let stubFunction = jest.fn();
  
  render(<ContentBlock title="Instructions">Content</ContentBlock>);
  
  await waitFor(() => screen.getByText("Instructions"));
  
  // Make sure content and instructions are rendered
  expect(screen.getByText("Instructions")).toHaveTextContent("Instructions");
  expect(screen.getByText("Content")).toHaveTextContent("Content");
});
