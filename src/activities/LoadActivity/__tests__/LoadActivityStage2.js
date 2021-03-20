import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import LoadActivityStage2 from '../LoadActivityStage2.js';

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

it("LoadActivityStage2 shallow renders without crashing", () => {
  let stubFunction = (() => {return;});
  const renderer = new ShallowRenderer();
  
  act(() => {
    renderer.render(<LoadActivityStage2 onNextSection={stubFunction} groupSize={2} users={["user1", "user2"]} />, container);
  });
});
 
 
