import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorBlock from '../ErrorBlock.js';

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

it("ErrorBlock component shallow renders without crashing", () => {
  let stubFunction = (() => {return;});
  const renderer = new ShallowRenderer();
  
  let messages = [
    {id: 0, message: "message0", level: "info"},
    {id: 1, message: "message1", level: "danger"}
  ]
  
  act(() => {
    renderer.render(<ErrorBlock messages={messages} removeMessage={stubFunction} />, container);
  });
});
 
 
