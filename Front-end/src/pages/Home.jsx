import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
          slidesToScroll: 1,
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
      <div className="mb-12 carousel h-72 w-full sm:h-[40rem] xl:h-[36rem] 2xl:h-[40rem]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="src/images/Slide1.jpg"
            className="w-full h-full object-cover"
          />
          <Link to="/lessons">
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 sm:p-3 md:p-5 text-sm sm:text-base md:text-lg rounded hover:bg-purple-600 cursor-pointer">
              Start Learning
            </button>
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="src/images/Slide2.jpg"
            className="w-full h-full object-cover"
          />
          <Link to="/quiz">
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 sm:p-3 md:p-5 text-sm sm:text-base md:text-lg rounded hover:bg-purple-600 cursor-pointer">
              Start Quiz
            </button>
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="src/images/Slide3.jpg"
            className="w-full h-full object-cover"
          />
          <Link to="/login">
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 sm:p-3 md:p-5 text-sm sm:text-base md:text-lg rounded hover:bg-purple-600 cursor-pointer">
              User Profile
            </button>
          </Link>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      {/* ---------------------------- About Section ---------------------------- */}

      <div className="flex flex-wrap gap-6 p-4 md:p-6 lg:p-8">
        <div className="bg-purple-200 p-4 md:p-6 lg:p-10 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h1 className="text-xl md:text-2xl font-bold text-purple-700 mb-4">
            Basics of Quran In Sign Language For Kids
          </h1>
          <p className="text-black text-base md:text-lg sm:text-sm leading-relaxed">
            "Basics of Quran in Sign Language for Kids" is an essential resource
            designed to introduce young learners to the foundational teachings
            of the Quran through sign language. This innovative approach not
            only makes the teachings accessible to children who are deaf or hard
            of hearing but also fosters inclusivity within the learning
            community. Through clear and engaging sign language demonstrations,
            children can grasp fundamental concepts allowing them to connect
            with the sacred text on a personal level.
          </p>
        </div>

        <div className="w-full md:w-3/4 lg:w-2/3 lg:ml-16 xl:w-1/3 p-4 md:p-6 lg:p-8">
          <video className="w-full lg:h-72" controls>
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <hr className=" border-purple-300 my-10 ml-10 mr-10" />

      <h1 className=" mb-20 font-extrabold text-center font-serif text-4xl">
        About Lessons
      </h1>

      {/* ---------------------------- Image Card Slider ---------------------------- */}

      <div className="mt-5 w-3/4 m-auto mb-9">
        <div className="mt-auto">
          <Slider {...settings}>
            {data.map((d) => (
              <div className=" bg-slate-200 text-black rounded-lg">
                <div className=" h-20 rounded-t-xl bg-purple-400 flex justify-center items-center">
                  <p className="text-xl font-semibold">{d.title}</p>
                </div>
                <div className="h-36 flex flex-col justify-center items-center gap-4 p-4">
                  <p>{d.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ---------------------------- Quiz Section ---------------------------- */}

      <hr className=" border-purple-300 my-16 ml-10 mr-10" />
      <h1 className=" mb-10 font-extrabold text-center font-serif text-4xl">
        About Quiz
      </h1>

      <div className=" mt-5 mb-5 flex items-center justify-between bg-slate-200 text-white p-14">
        <div className=" ml-20 flex items-center md:ml-10 sm:ml-5 xs:ml-1 xs:font-light">
          <div className="bg-purple-500 text-white rounded-full p-2 mr-3">
            <span className="block w-6 h-6 text-center">?</span>
          </div>
          <Link to="/quiz">
            <span className="custom-font font-serif text-black hover:text-purple-500 cursor-pointer sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
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
    content: "The Alphabets",
  },
  {
    title: "Lesson 2",
    content: "The Movements",
  },
  {
    title: "Lesson 3",
    content: "Joint Letters",
  },
  {
    title: "Lesson 4",
    content: "Basics of Tanveen",
  },
];

export default Home;
