import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Lessons from "./Lessons.jsx";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Banner from "../images/Banner.png";
import quiz from "../images/quiz.gif";
import quiz1 from "../images/quiz1.png";
import lesson from "../images/lesson.gif";
import { slideUpVariants, zoomInVariants } from "./animation";
import { motion } from "framer-motion";


function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* ---------------------------- Banner Section ---------------------------- */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-3">
        <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-40">
          <div className="space-y-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariants}
            >
              <h1 className="text-4xl font-bold">
                Welcome! Lets learn something{" "}
                <span className="text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  new everyday!!
                </span>
              </h1>
              <p className="text-xl mt-10 text-justify">
                Learning with us is easy and engaging. This platform is designed
                to help children with hearing impairments understand the basics
                of the Quran in an interactive way. Start exploring today!
              </p>
            </motion.div>
          </div>
          <Link to="/lessons">
            <button className="mt-12 bg-purple-500 text-white px-3 py-3 rounded-md hover:bg-purple-600 duration-300 cursor-pointer">
              Lessons
            </button>
          </Link>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-14 md:mt-20 md:ml-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
          >
            <img src={Banner} className="md:ml-10 w-[500px] h-[500px]" alt="" />
          </motion.div>
        </div>
      </div>

      {/* ---------------------------- About Section ---------------------------- */}

      <div className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex lg:flex-row flex-col md:ml-20 justify-between items-start gap-[50px] md:mt-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
        >
          <motion.h1
            variants={slideUpVariants}
            className="text-purple-500 uppercase text-[36px] font-bold"
          >
            Basics of Quran in Sign Language
          </motion.h1>
          <div className="w-[200px] h-[6px] bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[50%] w-full flex flex-col justify-center items-start gap-6"
        >
          <p className="text-black text-lg text-justify">
            Basics of Quran in Sign Language for Kids is an essential resource
            designed to introduce young learners to the foundational teachings
            of the Quran through sign language. This innovative approach not
            only makes the teachings accessible to children who are deaf or hard
            of hearing but also fosters inclusivity within the learning
            community. Through clear and engaging sign language demonstrations,
            children can grasp fundamental concepts allowing them to connect
            with the sacred text on a personal level.
          </p>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center my-10">
        <hr className="ml-8 flex-grow h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
        <img src={lesson} className="w-[80px] h-[80px] mx-4" alt="Icon" />
        <hr className="mr-8 flex-grow h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        <h1 className="mb-20 font-extrabold text-center font-serif text-4xl">
          <span className="text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            About Lessons
          </span>
        </h1>
      </motion.div>

      {/* ---------------------------- Image Card Slider ---------------------------- */}

      <div className="mt-5 w-3/4 m-auto mb-16">
        <div className="mt-auto">
          <Slider {...settings}>
            {data.map((d, index) => {
              // Determine the route for each lesson
              const lessonRoutes = [
                "/lessons",
                "/lesson2",
                "/lesson3",
                "/lesson4",
              ];
              return (
                <Link
                  key={index}
                  to={lessonRoutes[index]} // Use the route from the array
                  className="bg-slate-200 text-black rounded-lg transform transition-transform duration-300 hover:scale-100 hover:bg-slate-300"
                >
                  <div className="h-20 rounded-t-xl bg-purple-400 flex justify-center items-center">
                    <p className="text-xl font-semibold">{d.title}</p>
                  </div>
                  <div className="h-36 flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-2xl">{d.content}</p>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* ---------------------------- Quiz Section ---------------------------- */}

      <div className="flex items-center my-10">
        <hr className="ml-8 flex-grow h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
        <img src={quiz} className="w-[80px] h-[90px] mx-4" alt="Icon" />
        <hr className="mr-8 flex-grow h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        <h1 className=" mb-10 font-extrabold text-center font-serif text-4xl mt-2">
          <span className="text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            About Quiz
          </span>
        </h1>
      </motion.div>

      <div className=" mt-5 mb-5 flex items-center justify-between bg-slate-200 text-white p-14">
        <div className="flex items-center md:ml-10 sm:ml-5 xs:ml-1 xs:font-light">
          <div className="text-white rounded-full p-1 md:p-1 mr-3">
            <img src={quiz1} className="w-[40px] h-[40px]" alt="Icon" />
          </div>
          <Link to="/quiz">
            <span className="font-serif text-black hover:text-purple-500 cursor-pointer text-3xl">
              Take Quiz
            </span>
          </Link>
        </div>
        <div className="text-white">
          <span className="block w-6 h-6 text-center text-purple-500 arrow-container">
            <FaArrowRight />
          </span>
        </div>
      </div>

      {/* ---------------------------- Email Section ---------------------------- */}
      
      <div className="bg-white p-10 mt-7 shadow-2xl rounded-lg mx-auto max-w-lg text-center transition-transform transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-purple-500 mb-4">
          Looking for something?
        </h2>
        <p className="text-gray-700 mb-6">
          If you've got feedback or an idea that you think we should be working
          on, shoot us an email!
        </p>
        <a href="mailto:fypqsl@gmail.com">
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300">
            Email us!
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
}

{
  /* ----- Data for image card lessons ----- */
}
const data = [
  {
    title: "Lesson 1",
    content: "ا-خ",
  },
  {
    title: "Lesson 2",
    content: "ﺩ-ﺹ",
  },
  {
    title: "Lesson 3",
    content: "ﺽ-ﻕ",
  },
  {
    title: "Lesson 4",
    content: "ﻙ-ﻱ",
  },
];


export default Home;
