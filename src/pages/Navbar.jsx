import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import acm_logo from "../assets/acm_logo.png";
import hacktoberlogo from "../assets/hacktoberlogo.png";
import profileIcon from "../assets/profileIcon.png"; 

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      
      <Link to={"/"} className="flex items-center">
        <img src={acm_logo} alt="ACM Logo" className="h-20" />
        <span className="ml-2 text-lg font-semibold">ACM-JEC Hacktoberfest</span>
      </Link>

      
      <img src={hacktoberlogo} alt="Hacktober Logo" className="h-10" />

      
      <div className="relative">
        <img
          src={profileIcon}
          alt="Profile Icon"
          className="h-10 w-10 rounded-full cursor-pointer"
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
    </div>
  );
};

export default Navbar;
