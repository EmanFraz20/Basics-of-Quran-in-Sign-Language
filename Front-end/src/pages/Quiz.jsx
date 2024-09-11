import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { setUserId } from "../Redux/result-reducer";
export default function Quiz() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <div className="container1">
      <h1 className="title text-light bg-clip-text text-transparent bg-gradient-to-r from bg-purple-500 to-pink-500">
        BQSL Quiz
      </h1>
      <ol className=" text-align gap-2 ml-5 pt-32 ">
        <li>You will be asked 5 question one after another.</li>
        <li>5 point is awarded for correct answer.</li>
        <li>Each question has three options.You can choose only one option.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input
          ref={inputRef}
          className="userid"
          required
          type="text"
          placeholder="username*"
        />
      </form>

      <Link to="/quizstart">
        <button
          onClick={startQuiz}
          className=" absolute m-3  bottom-25  right-1/2 text-center bg-purple-500 text-white p-2 sm:p-3 md:p-5 text-sm sm:text-base md:text-lg rounded hover:bg-purple-600 cursor-pointer"
        >
          Start Quiz
        </button>
      </Link>
    </div>
  );
}
