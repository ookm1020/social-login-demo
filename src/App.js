import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// components
import MainComponent from "./components/Main";

let App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={MainComponent} />
    </div>
  );
};

export default App;
