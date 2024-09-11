import React,{useState} from 'react'
import Questions from './Questions';
import FetchQuestion from '../hooks/FetchQuestion';


  function QuizStart() {
  


 const [currentIndex,setCurrentIndex]=useState(0);
  const [{ isLoading,apiData,serverError}]=FetchQuestion();

  
 
 const questions=apiData?.questions||[];

  const handleNext=()=>{
    if(currentIndex<questions.length-1){
      setCurrentIndex(currentIndex+1);
  
    }
  };
  
   const handlePrev=()=>{
    if(currentIndex>0){
      setCurrentIndex(currentIndex-1);
      
    }
  };
  const handleSubmit=()=>{
   window.location.href='/result';
  
  };
  if( isLoading)<h3 className='text-light'>isLoading</h3>;
 if( serverError)<h3 className='text-light'>{serverError||"unknownError"}</h3>;
  return (
    <div className='container1'>
   <h1 className=' title text-light'>BQSL Quiz</h1>
       <Questions   question={questions[currentIndex]} 
        isLoading={isLoading}
        serverError={serverError}
        />
    
    <div className='grid'>
     
     <button className=' btn prev '  onClick={handlePrev} disabled={currentIndex===0} >Prev</button>
     <button className='btn next ' onClick={handleNext}disabled={currentIndex===questions.length-1} >Next</button>
  
      {currentIndex===questions.length-1 && (
      <button className='btn submit ' onClick={handleSubmit}  >Submit</button>)}
     </div>
    </div>
  )

}
export default QuizStart;
