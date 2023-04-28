import React from "react";
import "./index.css";
import Home from "./router/Home";
import Contact from "./router/Contact";
import About from "./router/About";
import Project from "./router/Project";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
