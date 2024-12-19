"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-white dark:bg-[#0a0a0a] z-50 relative">
      <div className="container max-w-[1536px] mx-auto shadow-sm">
        <div className="flex justify-between items-center h-16 px-4 md:px-8">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#005397] dark:text-[#36B0BE]">
            RS<span className="text-[#36B0BE] dark:text-[#005397]">I</span>N
          </h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-8 text-gray-600 dark:text-gray-300">
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Home</li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
              For Business
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
              For Investors
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
              Financing Rates
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Others</li>
          </ul>

          {/* Login & Apply Button */}
          <div className="hidden md:flex space-x-8">
            <button className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              Log In
            </button>
            <button className="bg-[#005397] text-white px-4 py-2 rounded-3xl hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500">
              Apply Now
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div onClick={handleNav} className="md:hidden z-50 cursor-pointer">
            {!nav ? (
              <AiOutlineMenu size={25} className="text-blue-600 dark:text-blue-400" />
            ) : (
              <AiOutlineClose size={25} className="text-blue-600 dark:text-blue-400" />
            )}
          </div>
        </div>

        {/* Mobile Nav Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-white dark:bg-[#0a0a0a] text-gray-600 dark:text-gray-300 md:hidden z-50 ${
            nav ? "block" : "hidden"
          }`}
        >
          <li className="py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">Home</li>
          <li className="py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            For Business
          </li>
          <li className="py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            For Investors
          </li>
          <li className="py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
            Financing Rates
          </li>
          <li className="py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">Others</li>
          <li className="py-4 px-6 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">Log In</li>
          <li className="py-2 px-6 bg-[#005397] text-white rounded-3xl dark:bg-blue-400 dark:hover:bg-blue-500">
            Apply Now
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
