import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import LoadText from '../LoadText.js';

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

it("LoadText shallow renders without crashing", () => {
  let stubFunction = (() => {return;});
  const renderer = new ShallowRenderer();
  
  act(() => {
    renderer.render(<LoadText />, container);
  });
});
 
 
 
