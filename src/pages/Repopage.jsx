import React from "react";
import Andriod from "../assets/Andriod.png";
import Cp from "../assets/Cp.png";
import Ml from "../assets/Ml.png";
import Homelogo from "../assets/Homelogo.png";
import WebDev from "../assets/WebDev.png";

const Repopage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 uppercase text-center">
        Repositories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-full h-32 sm:h-40">
          <img src={Andriod} alt="Android" className="h-12 sm:h-16 mb-2" />
          <span className="text-lg font-semibold">Android</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-full h-32 sm:h-40">
          <img
            src={WebDev}
            alt="Web Development"
            className="h-12 sm:h-16 mb-2"
          />
          <span className="text-lg font-semibold">Web Dev</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-full h-32 sm:h-40">
          <img src={Ml} alt="Machine Learning" className="h-12 sm:h-16 mb-2" />
          <span className="text-lg font-semibold">ML</span>
        </div>

        <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-md w-full h-32 sm:h-40">
          <img
            src={Cp}
            alt="Competitive Programming"
            className="h-12 sm:h-16 mb-2"
          />
          <span className="text-lg font-semibold">CP</span>
        </div>
      </div>

      {/* Homepage logo */}
      <img
        src={Homelogo}
        alt="Homepage Logo"
        className="mt-10 max-w-full h-auto max-h-[300px] md:max-h-[400px]"
      />
    </div>
  );
};

export default Repopage;
