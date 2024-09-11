import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import Divider from "./Divider";

/*function Footer() {
    return (
         <div className="w-full h-screen flex flex-col relative">
            <Divider />
            </div>
    );
}*/

/*function Footer() {
    return (
        <div className="w-full h-screen flex relative flex-col">
            <div className="w-full h-1/2 bg-purple-500"></div>
            <div className="absolute top-0 left-0 w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-black"></path>
    </svg>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20">
                <div className="flex flex-col gap-5">
                    <h2 className="text-3xl text-pink-500">Footer</h2>
                    <p>Basics of Quran in Sign Language for Kids</p>
                </div>
            </div>
            </div>
            </div>
    );
}*/

const Footer = () => {
  return (
    <div className="w-full flex relative flex-col mt-24 text-white">
      <div className="w-full h-1/6 py-2 bg-purple-500">
        <div className="grid lg:grid-row-4 md:grid-row-2 grid-row-1 py-5">
          <div className="flex flex-col gap-1 items-center justify-center">
            <h2 className="text-4xl text-center font-semibold uppercase">
              BQSL
            </h2>
            <ul>
              <li className="my-4 list-none text-center">
                Basics of Quran in Sign Language for Kids
              </li>
              <li className="my-4 list-none text-center">
                &copy; Copyright 2024
              </li>
              <li className="my-4 list-none text-center">
                All Rights Reserved
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-/6 py-2 bg-purple-500"></div>

      <Divider />
    </div>
  );
};

export default Footer;
