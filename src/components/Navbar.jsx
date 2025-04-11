// import React, { useState } from "react";
// import { Link } from "react-router";
// import { FaRegUser } from "react-icons/fa";

// import heroIcon from "../assets/img/Medinova.png";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="">
//       <nav className=" text-black py-4 px-6 flex justify-between items-center shadow-lg h-[80px]">
//         {/* Left Side - Logo/Icon */}
//         <div className="flex items-center space-x-2">
//           <span className="text-2xl font-bold flex items-center text-blue-400">
//             <img src={heroIcon} alt="" className="w-[50px]" />
//             <p className="ml-2">Medica</p>
//           </span>
//         </div>

//         {/* Center - Menu Links */}
//         <div className="hidden md:flex space-x-6 font-poppins uppercase font-medium text-base">
//           <Link to="/" className="hover:text-blue-400 transition">
//             Home
//           </Link>
//           <Link to="/about" className="hover:text-blue-400 transition">
//             About
//           </Link>
//           <Link to="/finddoctor" className="hover:text-blue-400 transition">
//             Find Doctor
//           </Link>
//           <Link to="/findambulance" className="hover:text-blue-400 transition">
//             Find Ambulance
//           </Link>
//           <Link to="/contact" className="hover:text-blue-400 transition">
//             Contact
//           </Link>
//         </div>

//         {/* Right Side - User Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center w-[30px] py-2 rounded-lg transition "
//         >
//           {/* <User className="w-5 h-5 mr-2" /> */}
//           <FaRegUser className="text-[25px]" />

//           {/* Dropdown Menu */}
//           {isOpen && (
//             // <div className="absolute right-0 w-48 bg-white shadow-lg rounded-lg p-2">
//             <div className="absolute right-0 w-48 bg-white shadow-lg rounded-lg p-2">
//               <ul className="text-black flex flex-col">
//                 <Link className="px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
//                   Profile
//                 </Link>
//                 <Link className="px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
//                   Dashboard
//                 </Link>
//                 <Link
//                   to="/login"
//                   className="px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"
//                 >
//                   Login
//                 </Link>
//               </ul>
//             </div>
//           )}
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Link } from "react-router"; //
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi"; //

import heroIcon from "../assets/img/sasthyo.png";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="relative bg-white text-black py-4 px-6 shadow-md w-full top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={heroIcon} alt="Medica" className="w-[100px]" />
          {/* <p className="text-2xl font-bold text-blue-400">Medica</p> */}
        </Link>

        {/* Center - Menu Links */}
        <div className="hidden md:flex space-x-6 uppercase font-medium text-base">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/findhospital" className="hover:text-blue-400 transition">
            Find Hospital
          </Link>
          <Link to="/finddoctor" className="hover:text-blue-400 transition">
            Find Doctor
          </Link>
          <Link to="/findambulance" className="hover:text-blue-400 transition">
            Find Ambulance
          </Link>
        </div>

        {/* Right Side - User Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* User Icon with Dropdown */}
          <div className="relative">
            {user ? (
              <>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-[18px]"
                >
                  {/* <p>{user.displayName}</p> */}
                  <img
                    className="w-[40%] rounded-full"
                    src={user.photoURL}
                    alt=""
                    srcset=""
                  />
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-[25px]"
                >
                  <FaRegUser />
                </button>
              </>
            )}

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
                <ul className="text-black flex flex-col">
                  <Link className="px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                    Profile
                  </Link>
                  <Link className="px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                    Dashboard
                  </Link>

                  {/* aikahne update menu bosabo */}
                  {user ? (
                    <>
                      {/* <p>{user.displayName}</p> */}
                      <button
                        onClick={handleLogOut}
                        className="inline-block text-base font-semibold py-2 px-3 uppercase"
                      >
                        LogOut{" "}
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button className="inline-block text-base font-semibold py-2 px-3 uppercase">
                          LogIn{" "}
                        </button>
                      </Link>
                    </>
                  )}
                  {/* aikahne update menu bosabo */}

                  {/* aita puran menu */}
                  {/* <Link
                    to="/login"
                    className="px-3 py-2 hover:bg-gray-200 rounded-lg cursor-pointer"
                  >
                    Login
                  </Link> */}
                  {/* aita puran menu */}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col space-y-3 text-center uppercase font-medium">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              About
            </Link> */}
            <Link
              to="/findhospital"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Find Hospital
            </Link>
            <Link
              to="/finddoctor"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Find Doctor
            </Link>
            <Link
              to="/findambulance"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              Find Ambulance
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
