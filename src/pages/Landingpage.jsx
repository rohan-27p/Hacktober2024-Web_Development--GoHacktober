import React from "react";
import { Link } from "react-router-dom";
import Homelogo from "../assets/Homelogo.png";

const Landingpage = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-white text-center p-4 lg:px-8">
      {/* Title section */}
      <h1 className="font-bold text-4xl  mb-2 mt-20 lg:mt-0 lg:mb-4">
        Together, let's push the boundaries
      </h1>
      <h1 className="font-bold text-4xl mb-12 lg:mb-6">
        of what's possible in open source!
      </h1>

      {/* Get Started Button */}
      <Link to="/repo">
        <button className="bg-black text-white py-2 px-6 sm:px-8 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-10 hover:bg-gray-700 transition-colors rounded-lg">
          GET STARTED NOW..
        </button>
      </Link>

      {/* Logo Image */}
      <img
        src={Homelogo}
        alt="Home Logo"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg h-auto mt-4"
      />
    </div>
  );
};

export default Landingpage;
