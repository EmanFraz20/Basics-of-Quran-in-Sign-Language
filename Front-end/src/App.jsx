import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  
  return (
    //<div className="w-full h-screen">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />

    </Routes>
    </BrowserRouter>
    //</div>
  )
}

export default App;