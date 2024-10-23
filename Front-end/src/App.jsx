import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import QuizStart from "./pages/QuizStart";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import ResultTable from "./pages/ResultTable";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import FetchQuestion from "./hooks/FetchQuestion"
import {CheckUserExist } from "./helpdata/Helper"
import Profile from "./pages/Profile";
import PrivateRoute from "./Components/PrivateRoute";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>
        <Route path="/quizstart" element={<CheckUserExist><QuizStart /></CheckUserExist>} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<CheckUserExist><Result/></CheckUserExist>} />
        <Route path="/resulttable"element={<ResultTable />}/>
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/fetchquestion" element={<FetchQuestion />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute />}>
        <Route path="/lessons" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

