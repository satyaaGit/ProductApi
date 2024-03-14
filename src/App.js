import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JokesList from "./Jokes.js";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<JokesList/>} />
      </Routes>
    </Router>
  );
};
export default App;