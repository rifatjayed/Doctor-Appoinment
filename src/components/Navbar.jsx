import React from "react";
import { Link } from "react-router";
import { FaRegUser } from "react-icons/fa";

import heroIcon from "../assets/img/Medinova.png";
const Navbar = () => {
  return (
    <div className="">
      <nav className=" text-black py-4 px-6 flex justify-between items-center shadow-lg h-[80px]">
        {/* Left Side - Logo/Icon */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold flex items-center text-blue-400">
            <img src={heroIcon} alt="" className="w-[50px]" />
            <p className="ml-2">Medica</p>
          </span>
        </div>

        {/* Center - Menu Links */}
        <div className="hidden md:flex space-x-6 font-poppins uppercase font-medium text-base">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/alldoctor" className="hover:text-blue-400 transition">
            All Doctor
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Right Side - User Button */}
        <Link className="flex items-center w-[30px] py-2 rounded-lg transition">
          {/* <User className="w-5 h-5 mr-2" /> */}
          <FaRegUser className="text-[25px]" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
