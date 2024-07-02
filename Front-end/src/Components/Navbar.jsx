import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../index.css";

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const navItems = (
    <>
      <Link
        to="/"
        className="group relative inline-block cursor-pointer hover:text-purple-600"
      >
        <li>Home </li>
      </Link>
      <Link
        to="/about"
        className="group relative inline-block cursor-pointer hover:text-purple-600"
      >
        <li>About</li>
      </Link>
      <Link
        to="/lessons"
        className="group relative inline-block cursor-pointer hover:text-purple-600"
      >
        <li>Lessons</li>
      </Link>
      <Link
        to="/quiz"
        className="group relative inline-block cursor-pointer hover:text-purple-600"
      >
        <li>Quiz</li>
      </Link>
    </>
  );
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed-navbar z-50 3xl">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                cd
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" text-2xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5"
              >
                {navItems}
              </ul>
            </div>
            <Link to="/" className=" text-2xl font-bold cursor-pointer">
              NQSL
            </Link>
          </div>
          <div className="navbar-end space-x-8">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-8 p-5">
                {navItems}
              </ul>
            </div>
            <div className="">
              {currentUser ? (
                <Link to="/profile" className="cursor-pointer">
                  <img
                    src={currentUser.profilePicture}
                    alt="profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </Link>
              ) : (
                <Link
                  to="/signup"
                  className="bg-purple-500 text-white px-3 py-2 rounded-md hover:bg-purple-600 duration-300 cursor-pointer"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
