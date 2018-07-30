import React from "react";
import ReactDOM from "react-dom";

import Signal from "./Light/Signal";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Signal />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
