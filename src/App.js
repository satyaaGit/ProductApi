import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList.js";
import ProductDetails from "./ProductDetails.js";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductList/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
};
export default App;