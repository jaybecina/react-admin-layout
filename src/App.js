import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layouts from "./components/Layouts/Layouts";

import "./App.css";

function App() {
  return (
    <Router>
      <Layouts />
    </Router>
  );
}

export default App;
