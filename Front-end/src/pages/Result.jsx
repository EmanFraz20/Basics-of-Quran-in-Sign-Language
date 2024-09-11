import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux';
import { usePublishResult } from '../hooks/SetResult'
import { resetResultAction } from '../Redux/result-reducer';
import { resetAllAction } from '../Redux/question-reducer';
import Navbar from '../Components/Navbar'
import Footer1 from '../Components/Footer1';
import '../index.css'


export default function Result() {
    const dispatch = useDispatch();
    const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);

    const totalPoints = queue?.length ? queue.length * 10 : 0;
    const attempts = result?.length ? result.length : 0;
    const correctAnswer = result?.length ? result.filter((answer, index) => answer === answers[index]).length : 0;
    const earnPoints = correctAnswer * 10;
    const Passed = earnPoints >= (totalPoints / 2);

    useEffect(() => {
        if (userId && result.length > 0) {
            usePublishResult({
                username: userId,
                result,
                attempts,
                points: earnPoints,
                achived: Passed ? "Passed" : "Failed"
            });
        } else {
            console.error("Data is missing for publishing results", { userId, result });
        }
    }, [userId, result, attempts, earnPoints, Passed]);

    function onRestart() {
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }

    return (
      <>
      <Navbar/>
        <div className='flex flex-col items-center mt-18 -mb-9 p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen '>
            <h1 className='text-3xl font-bold text-white mt-24 mb-10 shadow-md rounded-lg p-6 bg-gradient-to-r from-purple-500 to-pink-500'>
                Quiz Result
            </h1>

            <div className='bg-white shadow-lg rounded-xl p-8 mb-10 w-full max-w-xl transform hover:scale-105 transition-transform duration-300'>
                <div className='space-y-6'>
                    <div className='flex justify-between text-lg'>
                        <span className='text-1xl text-gray-700'>Username:</span>
                        <span className='text-1xl font-semibold text-gray-900'>{userId || 0}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span className='text-1xl text-gray-700'>Total Quiz Points:</span>
                        <span className='text-1xl font-semibold text-gray-900'>{totalPoints || 0}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span className='text-1xl text-gray-700'>Total Questions:</span>
                        <span className='text-1xl font-semibold text-gray-900'>{queue.length || 0}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span className='text-1xl text-gray-700'>Total Attempts:</span>
                        <span className='text-1xl font-semibold text-gray-900'>{attempts}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span className='text-1xl text-gray-700'>Total Earned Points:</span>
                        <span className='text-1xl font-semibold text-gray-900'>{earnPoints}</span>
                    </div>
                    <div className='flex justify-between text-lg'>
                        <span className='text-1xl text-gray-700'>Result:</span>
                        <span style={{color:Passed?"#2aff95":"#ff2a66"}} className='bold'>{Passed?"Passed":"Failed"}</span>
                    </div>
                </div>
            </div>

            <Link 
                className='bg-purple-500 text-white px-9 py-4 rounded-full shadow-lg hover:bg-purple-600 transform hover:scale-105 transition-transform duration-300'
                to={'/quizstart'} 
                onClick={onRestart}
            >
                Restart
            </Link>

            <div className='mt-12 w-full max-w-3xl'>
                <ResultTable />
            </div>
        </div>
        <Footer1/>
        </>
    )
}