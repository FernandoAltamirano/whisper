import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";
import Reducer, { initialState } from "./context/Reducer";
ReactDOM.render(
  <ContextProvider reducer={Reducer} initialState={initialState}>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
