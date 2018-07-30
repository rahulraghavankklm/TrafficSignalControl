import React from "react";
import ReactDOM from "react-dom";

import Signal from "./Light/Signal";
import Settings from "./Form/Settings";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="Cols">
        <Signal />
      </div>
      <div className="Cols">
        <Settings />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
