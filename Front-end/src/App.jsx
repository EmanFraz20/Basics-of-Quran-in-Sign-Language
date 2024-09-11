import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import QuizStart from "./pages/QuizStart";
import Questions from "./pages/Questions";
import  Result from "./pages/Result";
import  ResultTable from "./pages/ResultTable";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import FetchQuestion from "./hooks/FetchQuestion"
import {CheckUserExist } from "./helpdata/Helper"
import Profile from "./pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
  function App() {
  

  return (
    //<div className="w-full h-screen">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/quiz" element={<Quiz /> } />
        <Route path="/quizstart" element={<CheckUserExist><QuizStart /></CheckUserExist>} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<CheckUserExist><Result/></CheckUserExist>} />
        <Route path="/resulttable"element={<ResultTable />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
       
       
        <Route path="/fetchquestion" element={<FetchQuestion />} />
       
      

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

