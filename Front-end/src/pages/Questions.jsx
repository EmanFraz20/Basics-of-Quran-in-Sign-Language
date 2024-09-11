import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pushResultAction } from '../Redux/result-reducer';
import '../index.css'

export default function Questions({ question }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    setChecked(undefined);
  }, [question]);

  const handleSelect = (optionindex) => {
    setChecked(optionindex);
    dispatch(pushResultAction(optionindex));
  };

  if (!question) return <h3 className='text-gray-600 text-center'>Question not available</h3>;

  return (
    <div className='relative p-6 rounded-lg'>
    
      <div className='absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#EC4889] rounded-lg -z-10'></div>
      
      <div className='relative bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4 text-gray-900'>{question.question}</h2>
        <ul className='space-y-2'>
          {question.options.map((option, i) => (
            <li key={i} className='flex items-center text-lg text-gray-900'>
              <input 
                type="radio"
                value={i}
                name={`question-${question.id}`}
                id={`q${i}-option`}
                checked={checked === i}
                onChange={() => handleSelect(i)}
                className='mr-2 text-pink-500 focus:ring-pink-500'
              />
              <label className='text-gray-900' htmlFor={`q${i}-option`}>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}