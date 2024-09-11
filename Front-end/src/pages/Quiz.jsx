import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserId } from '../Redux/result-reducer';
import '../index.css'


export default function Quiz() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-purple-500 to-gray-100 text-gray-800">
      <div className="bg-white bg-opacity-100 p-10 rounded-xl shadow-lg text-center w-11/12 md:w-3/5 lg:w-2/5">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          BQSL Quiz
        </h1>

        <ul className="list-disc list-inside text-left text-base text-gray-700 opacity-95 mb-8 space-y-4">
          <li>You will be asked 5 questions, one after another.</li>
          <li>5 points are awarded for each correct answer.</li>
          <li>Each question has three options. You can choose only one option.</li>
          <li>The result will be declared at the end of the quiz.</li>
       </ul>

        <form id="form" className="w-full mb-6">
          <input
            ref={inputRef}
            className="w-full p-3 bg-gray-100 text-gray-800 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            required
            type="text"
            placeholder="Enter your username*"
          />
        </form>

        <Link to="/quizstart">
          <button
            onClick={startQuiz}
            className="bg-purple-500 text-white font-medium py-3 px-8 rounded-lg hover:bg-purple-600 transition transform hover:scale-105 duration-300">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}