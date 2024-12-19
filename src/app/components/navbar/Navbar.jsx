"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-white z-50 relative">
      <div className="container max-w-[1536px] mx-auto shadow-sm">
        <div className="flex justify-between items-center h-16 px-4 md:px-8">
          {/* Logo */}
          <h1 className="text-3xl font-bold text-[#005397]">
            RS<span className="text-[#36B0BE]">I</span>N
          </h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-8 text-gray-600">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">For Business</li>
            <li className="cursor-pointer hover:text-blue-600">
              For Investors
            </li>
            <li className="cursor-pointer hover:text-blue-600">
              Financing Rates
            </li>
            <li className="cursor-pointer hover:text-blue-600">Others</li>
          </ul>

          {/* Login & Apply Button */}
          <div className="hidden md:flex space-x-8">
            <button className="text-gray-600">Log In</button>
            <button className="bg-[#005397] text-white px-4 py-2 rounded-3xl hover:bg-blue-700">
              Apply Now
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div onClick={handleNav} className="md:hidden z-50 cursor-pointer">
            {!nav ? (
              <AiOutlineMenu size={25} className="text-blue-600" />
            ) : (
              <AiOutlineClose size={25} className="text-blue-600" />
            )}
          </div>
        </div>

        {/* Mobile Nav Links */}
        <ul
          className={`absolute top-16 left-0 w-full bg-white text-gray-600 md:hidden z-50 ${
            nav ? "block" : "hidden"
          }`}
        >
          <li className="py-4 px-6 hover:bg-gray-100 cursor-pointer">Home</li>
          <li className="py-4 px-6 hover:bg-gray-100 cursor-pointer">
            For Business
          </li>
          <li className="py-4 px-6 hover:bg-gray-100 cursor-pointer">
            For Investors
          </li>
          <li className="py-4 px-6 hover:bg-gray-100 cursor-pointer">
            Financing Rates
          </li>
          <li className="py-4 px-6 hover:bg-gray-100 cursor-pointer">Others</li>
          <li className="py-4 px-6 hover:bg-gray-100 cursor-pointer">Log In</li>
          <li className="py-2 px-6 bg-[#005397] text-white rounded-3xl">
            Apply Now
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
