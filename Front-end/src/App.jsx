import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz"
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App