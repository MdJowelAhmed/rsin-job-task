

import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900">
      <footer className="container max-w-[1536px] mx-auto text-gray-700 dark:text-gray-300">
        {/* Top Section */}
        <div className="container mx-auto py-10 px-6 md:flex md:justify-between">
          {/* Logo and Disclaimer */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-[#005397] dark:text-[#36B0BE]">
              RS<span className="text-[#36B0BE] dark:text-[#005397]">I</span>N
            </h1>
            <p className="mt-4 text-sm w-80 text-gray-600 dark:text-gray-400">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Disclaimer:
              </span>{" "}
              Due to the periodic changes of information / requirement /
              document, RSIN does not provide any confirmation, guarantee, or
              representation, express or implied, that the information
              contained or referenced herein is completely accurate or final.
              <a href="#" className="text-blue-500 dark:text-blue-400">
                click here
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="md:w-2/3 flex justify-between lg:ml-16 text-sm">
            <div>
              <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    For Investors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    For Business
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Information
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Legal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Learn more as an Investor
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Learn More as a Borrower
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Key Principles & Rules
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    Complaints and Suggestions
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <h3 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Action
              </h3>
              <div className="space-y-2 flex flex-col">
                <button className="bg-blue-500 text-white rounded-3xl px-3 py-2 hover:bg-blue-600 dark:hover:bg-blue-400">
                  Start Investing
                </button>
                <button className="border border-blue-500 text-blue-500 px-3 py-2 rounded-3xl hover:bg-blue-100 dark:hover:bg-blue-900">
                  Get Funded
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Bottom Section */}
        <div className="bg-white dark:bg-gray-800 py-6 text-sm">
          <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="flex justify-between gap-6 md:gap-32 lg:gap-48">
                <div className="mb-4 md:mb-0 space-y-3">
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Contact Us
                  </h3>
                  <p className="flex items-center space-x-2">
                    <AiOutlineMail />{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      contactus@rsin.com
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <AiOutlinePhone />{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                      8001000265
                    </span>
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <FaFacebook className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
                    <FaLinkedin className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400" />
                    <FaInstagram className="cursor-pointer hover:text-pink-500 dark:hover:text-pink-400" />
                    <FaTwitter className="cursor-pointer hover:text-blue-400 dark:hover:text-blue-300" />
                  </div>
                </div>
                <div className="w-80">
                  <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Office Address
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    1st Floor, Homestead Gulshan Link Tower, DCC TA-99,
                    Gulshan-Badda Link Road, Gulshan-1, Dhaka-1212
                  </p>
                  <a
                    href="#"
                    className="text-blue-500 dark:text-blue-400 flex mt-2 items-center gap-2"
                  >
                    <FiMapPin />
                    View Location
                  </a>
                </div>
              </div>
            </div>

            {/* App Store Links */}
            <div className="mt-6 md:mt-5 flex flex-col md:items-end">
              <div className="flex items-center justify-between space-x-6">
                {/* App Store and Play Store Buttons */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-1 bg-black text-white px-1 rounded-md">
                    <FaApple className="text-4xl" />
                    <div>
                      <p className="text-[9px]">Download on the</p>
                      <h2 className="font-bold text-sm">Apple Store</h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-black text-white px-1 rounded-md">
                    <FaGooglePlay className="text-3xl text-green-400" />
                    <div>
                      <p className="text-[9px]">Download on the</p>
                      <h2 className="font-bold text-sm">Google Play</h2>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-center">
                    Get the app now
                  </p>
                </div>

                {/* Image */}
                <div className="flex flex-col items-center">
                  <Image
                    src="/image 33.png"
                    alt="Scan to download"
                    height={120}
                    width={120}
                    className="cursor-pointer"
                  />
                  <p className="text-sm font-medium text-center">
                    Scan to download
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between md:mx-4 items-center mt-16">
            <div className="text-center mt-6 text-gray-700 dark:text-gray-300">
              Copyright © RSIN@2024. All rights reserved. V-0.114
            </div>

            <div className="text-center mt-2 text-gray-700 dark:text-gray-300">
              <a
                href="#"
                className="hover:text-blue-500 dark:hover:text-blue-400 mx-2"
              >
                Terms and Conditions
              </a>
              |
              <a
                href="#"
                className="hover:text-blue-500 dark:hover:text-blue-400 mx-2"
              >
                Privacy Policy
              </a>
              |
              <a
                href="#"
                className="hover:text-blue-500 dark:hover:text-blue-400 mx-2"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
