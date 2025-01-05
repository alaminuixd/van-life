import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./partials/Header";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
