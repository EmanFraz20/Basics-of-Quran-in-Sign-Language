import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards';
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer1 from '../Components/Footer1';


function Lesson2() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  //Call Backend API by defining state to get the data
  const [lesson, setLesson] = useState([]);
  useEffect(() => {
    const getLesson = async () => {
      try {
        const res = await axios.get("/api/lesson2/lesson2");
        console.log(res.data);
        setLesson(res.data); //Put the rseponse data in the state so that we can use it later for mapping
      }catch (error) {
        console.log(error);
      }
    };
    getLesson();
  }, []); //Pass empty array in useEffect so that it runs only once

  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className="max-w-3xl mx-auto text-center mt-20 pt-6">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Lesson 2</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
       <p className="text-lg text-gray-800 mb-8">Alphabets are the building blocks so need special
          attention. Remember, if not taught properly, both the student and teacher will be in 
          trouble in latter lessons.</p>
      </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {lesson.map((item) => (
            <Cards item = {item} key = {item.id}/> //passing props from parent
          ))}
        </div>
      </div>


      <div className="flex flex-1 px-4 py-3 mt-10 mb-24 bg-white border-t border-gray-200 shadow-md sm:px-6">
    <div className="flex justify-between flex-1 sm:hidden">
         <Link to="/lessons">
         <button type="button" className="relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-medium rounded-md sm:rounded-none sm:rounded-r-md border-2 border-purple-500 cursor-pointer before:bg-purple-500 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" data-id="pagination-next">Previous <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
         </Link>
        <Link to="/lesson3">
        <button type="button" className=" relative inline-flex items-center px-2 py-2 text-sm 5xl:text-xl   font-bold rounded-md sm:rounded-none border-2 border-purple-500 cursor-pointer before:bg-purple-500 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" data-id="pagination-next">Next <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
        </Link>
    </div>
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="relative z-0 flex justify-between w-full -space-x-px rounded-md" aria-label="Pagination">
            <Link to="/lessons">
            <button type="button" className=" relative inline-flex items-center px-4 py-2 text-sm 5xl:text-xl   font-medium rounded-md sm:rounded-none sm:rounded-r-md border-2 border-purple-500 cursor-pointer before:bg-purple-500 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" data-id="pagination-next">Previous Lesson <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
            </Link>
            <Link to="/lesson3">
            <button type="button" className="relative inline-flex items-center px-4 py-2 text-sm 5xl:text-xl   font-bold rounded-md sm:rounded-none sm:rounded-r-md border-2 border-purple-500 cursor-pointer before:bg-purple-500 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100" data-id="pagination-next">Next Lesson <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>
            </Link>
        </div>
    </div>
</div>
      </div>
    <Footer1/>
    </>
  )
}

export default Lesson2;