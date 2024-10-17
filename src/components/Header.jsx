import React from 'react';
import dot from "../assets/dot.png"; // Ensure this path is correct

const Header = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white text-center p-6">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>

      {/* Text Content */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-2 relative">JEC ACM</h2>
      <p className="text-lg md:text-xl max-w-2xl mb-6 relative">
        We see a world where computing helps solve tomorrow’s problems – where we use our knowledge and skills to advance the profession and make a positive impact.
      </p>
      <div className="flex space-x-4 relative">
        <a
          href="#about"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-gray-200"
        >
          About Us Brochure
        </a>
        <a
          href="#contact"
          className="bg-transparent border border-white text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-white hover:text-blue-600"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Header;
