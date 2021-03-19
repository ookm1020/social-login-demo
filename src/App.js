import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Component
import MainComponent from "./components/Main";

let App = () => {
  useEffect(() => {
    console.log("component mounted...");
  }, []);

  return (
    <div className="App">
      <Route exact path="/" component={MainComponent} />
    </div>
  );
};

export default App;
