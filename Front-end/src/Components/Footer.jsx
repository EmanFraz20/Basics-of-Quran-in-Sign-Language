import React from "react";
import "../index.css";
import Divider from "./Divider";


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
