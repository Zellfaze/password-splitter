import React from "react";
import {render, waitFor, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ActivityStage from '../ActivityStage.js';
import {IntlProvider} from 'react-intl';

it("renders components and instructions without crashing", async () => {
  let stubFunction = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <ActivityStage advanceSection={stubFunction}>
        <div data-testid="activitystage-component">Content</div>
      </ActivityStage>
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByTestId("activitystage-component"));
  
  // Make sure components and instructions are rendered
  expect(screen.getByTestId("activitystage-component")).toHaveTextContent("Content");
});

it("renders a button that calls advanceSection when clicked", async () => {
  let stubFunction = jest.fn();
  
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <ActivityStage advanceSection={stubFunction}>
        <div data-testid="activitystage-component">Content</div>
      </ActivityStage>
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByRole("button"));
  
  fireEvent.click(screen.getByRole("button"));
  expect(stubFunction).toHaveBeenCalledTimes(1);
});

it("doesn't render a button if advanceSection is not supplied", async () => {
  render(
    <IntlProvider locale="en" defaultLocale="en">
      <ActivityStage>
        <div data-testid="activitystage-component">Content</div>
      </ActivityStage>
    </IntlProvider>
  );
  
  await waitFor(() => screen.getByTestId("activitystage-component"));
  
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});
