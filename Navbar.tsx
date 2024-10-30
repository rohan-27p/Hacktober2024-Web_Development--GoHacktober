// improvised and more interactive navbar with hover effects drop down and smoother effects

import React, { useState } from "react";
import { Link } from "react-router-dom";
import acm_logo from "../assets/acm_logo.png";
import hacktoberlogo from "../assets/hacktoberlogo.png";
import profileIcon from "../assets/profileIcon.png";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left - Logo and Title */}
        <div className="flex items-center">
          <img src={acm_logo} alt="ACM Logo" className="h-12 mr-3" />
          <div className="text-lg font-semibold text-gray-700">
            ACM-JEC HACKTOBERFEST
          </div>
        </div>

        {/* Center - Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 font-semibold text-gray-700">
          {["HOME", "ABOUT", "DASHBOARD", "TEAM", "CONTACT"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="hover:text-green-600 hover:scale-105 transition duration-300"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right - Profile and Hamburger */}
        <div className="flex items-center space-x-4">
          <img src={hacktoberlogo} alt="Hacktober Logo" className="h-10 hidden md:inline" />

          {/* Profile Dropdown */}
          <div className="relative">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="h-10 w-10 rounded-full cursor-pointer transition duration-300 transform hover:scale-110"
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile Page
                </Link>
              </div>
            )}
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          {["HOME", "ABOUT", "DASHBOARD", "TEAM", "CONTACT"].map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
