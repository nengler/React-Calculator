import React from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard";
import Results from "./components/Results";

function App() {
  return (
    <div className="Calculator">
      <Results />
      <KeyBoard />
    </div>
  );
}

export default App;
