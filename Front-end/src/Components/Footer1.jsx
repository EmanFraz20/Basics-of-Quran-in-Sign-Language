import React from "react";
import "../index.css"; 


const Footer1 = () => {
  return (
    <>
    <div className="w-full flex relative flex-col mt-10 text-white">
      <div className="w-full h-1/4 py-2 bg-purple-500">
        <div className="grid lg:grid-row-4 md:grid-row-2 grid-row-1 py-5">
          <div className="flex flex-col gap-1 items-center justify-center">
            <h2 className="text-4xl text-center font-bold uppercase">
              BQSL
            </h2>
            <ul>
              <li className="my-4 list-none text-center">
                Basics of Quran in Sign Language for Kids
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer1;
