import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Component
import MainComponent from "./components/Main";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={MainComponent} />
    </div>
  );
}

export default App;
