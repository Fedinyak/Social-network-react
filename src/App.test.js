import React from "react";
import ReactDOM from 'react-dom'
import JsApp from "./App";
// import App from "./App";

it('renders withiyt crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JsApp />, div);
  ReactDOM.unmountComponentAtNode(div)
})