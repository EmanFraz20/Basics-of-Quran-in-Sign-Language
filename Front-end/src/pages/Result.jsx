import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux';

import {usePublishResult} from '../hooks/SetResult'

import { resetResultAction} from '../Redux/result-reducer';
import { resetAllAction } from '../Redux/question-reducer';
export default function Result(){
    const dispatch=useDispatch();
    const {questions:{queue,answers},result:{result,userId}}=useSelector(state=>state);
  
    const totalPoints=queue?.length? queue.length * 10:0;
  
  const  attempts=result?.length?result.length:0;

     const correctAnswer=result?.length?result.filter((answer,index)=>answer===answers[index]).length:0;
   const earnPoints=correctAnswer*10;
   
     const  Passed=earnPoints>=(totalPoints/2);
  
     useEffect(() => {
      if (userId && result.length > 0){
     usePublishResult({
      
     username:userId,
     result,
      attempts,
      points:earnPoints,
         achived:Passed?"Passed":"Failed"});
        }else {
          console.error("Data is missing for publishing results", { userId, result });
      }
  }, [userId, result, attempts, earnPoints, Passed]);  
     
    function onRestart()
    {
        
      dispatch(resetAllAction())
      dispatch(resetResultAction())
    }
    return (
        <div className='container1'>
            <h1 className='title text-light'> BQSL Quiz</h1>
    
            <div className='result flex-center '>
                <div className='flex'>
                    <span>Username:</span>
                    <span className='bold'>{userId||0}</span>
                </div>
                <div className='flex'>
                    <span>Total Quiz Points : </span>
                    <span className='bold'>{totalPoints||0}</span>
                </div>
                <div className='flex'>
                    <span>Total Questions : </span>
                    <span className='bold'>{queue.length||0}</span>
                </div>
                <div className='flex'>
                    <span>Total Attempts : </span>
                    <span className='bold'>{attempts}</span>
                </div>
                <div className='flex'>
                    <span>Total Earn Points : </span>
                    <span className='bold'>{earnPoints}</span>
                </div>
                <div className='flex'>
                    <span>Quiz Result:</span>
                    <span style={{color:Passed?"#2aff95":"#ff2a66"}} className='bold'>{Passed?"Passed":"Failed"}</span>
                </div>
            
    </div>
            <div className='start'>
              <Link className='btn' to={'/quizstart'} onClick={onRestart}>Restart</Link>
            </div>
            
          <div className='container1'>
            <ResultTable></ResultTable>
        </div>
        </div>
        
    )
    }