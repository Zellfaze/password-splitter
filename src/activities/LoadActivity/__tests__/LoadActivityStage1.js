import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import LoadActivityStage1 from '../LoadActivityStage1.js';

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

it("LoadActivityStage1 shallow renders without crashing", () => {
  let stubFunction = (() => {return;});
  const renderer = new ShallowRenderer();
  
  act(() => {
    renderer.render(<LoadActivityStage1 onNextSection={stubFunction} addMessage={stubFunction} id={0} />, container);
  });
});
 
