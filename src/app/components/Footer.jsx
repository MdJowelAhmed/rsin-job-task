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
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
      {/* Top Section */}
      <div className="container mx-auto py-10 px-6 md:flex md:justify-between ">
        {/* Logo and Disclaimer */}
        <div className=" mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600 mb-8">RSIN</h2>
          <p className="mt-4 text-sm w-80">
            <span className="font-medium">Disclaimer:</span> Due to the periodic
            changes of information / requirement / document, RSIN does not
            provide any confirmation, guarantee, or representation, express or
            implied, that the information contained or referenced herein is
            completely accurate or final.
            <a href="#" className="text-blue-500 ">
              click here
            </a>
          </p>
        </div>

        {/* Links */}
        <div className="md:w-2/3 flex justify-between lg:ml-16">
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  For Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  For Business
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Learn more as an Investor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Learn More as a Borrower
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Key Principles & Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Complaints and Suggestions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Action</h3>
            <div className="space-y-2 flex flex-col">
              <button className="bg-blue-500 text-white rounded-3xl px-3 py-2  hover:bg-blue-600">
                Start Investing
              </button>
              <button className="border border-blue-500 text-blue-500 px-3 py-2 rounded-3xl  hover:bg-blue-100">
                Get Funded
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="bg-gray-200 dark:bg-gray-800 py-6 text-sm">
        <div className="container mx-auto px-6 md:flex md:justify-between md:items-center">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-4 md:mb-0">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="flex items-center space-x-2">
                <AiOutlineMail /> <span>contactus@rsin.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <AiOutlinePhone /> <span>8001000265</span>
              </p>
              <div className="flex space-x-4 mt-4">
                <FaFacebook className="cursor-pointer hover:text-blue-500" />
                <FaLinkedin className="cursor-pointer hover:text-blue-500" />
                <FaInstagram className="cursor-pointer hover:text-pink-500" />
                <FaTwitter className="cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="w-80">
            <h3 className="font-semibold mb-2">Office Address</h3>
            <p className="flex items-center space-x-2">
              <span>
                1st Floor, Homestead Gulshan Link Tower, DCC TA-99,
                Gulshan-Badda Link Road, Gulshan-1, Dhaka-1212
              </span>
            </p>
            <a href="#" className="text-blue-500 flex mt-2  items-center gap-2">
              <FiMapPin />
              View Location
            </a>
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

        <div className="flex justify-between items-center mt-20">
          <div className="text-center mt-6">
            Copyright © RSIN@2024. All rights reserved. V-0.114
          </div>

          <div className="text-center mt-2">
            <a href="#" className="hover:text-blue-500 mx-2">
              Terms and Conditions
            </a>
            |
            <a href="#" className="hover:text-blue-500 mx-2">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:text-blue-500 mx-2">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
