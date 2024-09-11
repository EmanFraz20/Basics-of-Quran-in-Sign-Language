import React, { useState } from 'react';
import Questions from './Questions';
import FetchQuestion from '../hooks/FetchQuestion';
import Navbar from '../Components/Navbar'
import Footer1 from '../Components/Footer1';
import '../index.css'

function QuizStart() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [{ isLoading, apiData, serverError }] = FetchQuestion();

  const questions = apiData?.questions || [];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    window.location.href = '/result';
  };

  if (isLoading)<h3 className='text-gray-600 text-center'>Loading...</h3>;
  if (serverError)<h3 className='text-red-600 text-center'>{serverError || "Unknown Error"}</h3>;

  return (
    <>
    <Navbar/>
    <div className='min-h-screen bg-gradient-to-br bg-white flex items-center justify-center'>
      <div className='w-full max-w-4xl bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500'>
          BQSL Quiz
        </h1>
        <Questions question={questions[currentIndex]} 
        isLoading = {isLoading}
        serverError = {serverError}
        />

        <div className='flex justify-between mt-6'>
          <button className='bg-gradient-to-r from-[#A855F7] to-[#EC4889] text-white px-10 py-2 ml-9 rounded hover:opacity-90' 
                  onClick={handlePrev} 
                  disabled={currentIndex === 0}>
            Prev
          </button>
          <button className='bg-gradient-to-r from-[#A855F7] to-[#EC4889] text-white px-10 py-2 mr-9 rounded hover:opacity-90' 
                  onClick={handleNext} 
                  disabled={currentIndex === questions.length - 1}>
            Next
          </button>
        </div>

        {currentIndex === questions.length - 1 && (
          <button className='bg-gradient-to-r from-[#A855F7] to-[#EC4889] text-white px-6 py-2 rounded hover:opacity-90 mt-6 w-full' 
                  onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
    <Footer1 />
    </>
  );
}

export default QuizStart;

