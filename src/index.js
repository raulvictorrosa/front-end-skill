import React from "react";
import ReactDOM from "react-dom";
import Chip from "./components/Chip.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Chip avatar={"https://goo.gl/imoVYg"} />

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
