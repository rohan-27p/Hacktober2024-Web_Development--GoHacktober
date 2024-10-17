import React from 'react';
import acm_logo from '../assets/acm_logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">
        <img src={acm_logo} alt="Logo" className="h-8" />
      </div>
      <ul className="flex space-x-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
