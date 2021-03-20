import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import HomeActivity from '../HomeActivity.js';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Home Activity shallow renders without crashing", () => {
  let stubFunction = (() => {return;});
  const renderer = new ShallowRenderer();
  
  act(() => {
    renderer.render(<HomeActivity changeActivity={stubFunction} addMessage={stubFunction}/>, container);
  });
});
