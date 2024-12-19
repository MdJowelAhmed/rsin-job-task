"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="w-full px-4 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6 flex gap-4">
          <div className="flex flex-col items-center justify-center ">
            {/* Saudi Bank Certified Card */}
            <div className="bg-[#E4FFDF] rounded-2xl p-6 shadow-md relative w-[271px] h-[291px] mb-[30px]">
              <h4 className="text-gray-800 font-semibold text-sm mb-4 text-center">
                Saudi Center Bank Certified
              </h4>

              {/* Circular Center Logo */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full  flex items-center justify-center">
                <Image
                  src="/Logo_Saudi.png"
                  alt="Center Logo"
                  height={55}
                  width={55}
                />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full  flex items-center justify-center">
                <Image
                  src="/Logo_Saudi.png"
                  alt="Center Logo"
                  height={22}
                  width={22}
                />
              </div>

              {/* Labels */}
              <div
                className="absolute top-36 left-10"
                style={{
                  transform: "rotate(20deg)",
                  transformOrigin: "right center",
                }}
              >
                <span className="px-3 py-1 text-xs font-medium bg-[#F1FFEE52] shadow rounded-full">
                  Investors
                </span>
              </div>
              <div
                className="absolute top-36 right-6"
                style={{
                  transform: "rotate(-20deg)",
                  transformOrigin: "left center",
                }}
              >
                <span className="px-3 py-1 text-xs font-medium bg-[#F1FFEE52] shadow rounded-full">
                  Start Investing
                </span>
              </div>
              <div
                className="absolute bottom-16 left-8"
                style={{
                  transform: "rotate(-20deg)",
                  transformOrigin: "left center",
                }}
              >
                <span className="px-3 py-1 text-xs font-medium bg-[#F1FFEE52] shadow rounded-full">
                  Financing
                </span>
              </div>
              <div
                className="absolute bottom-20 right-10"
                style={{
                  transform: "rotate(20deg)",
                  transformOrigin: "left center",
                }}
              >
                <span className="px-3 py-1 text-xs font-medium bg-[#F1FFEE52] shadow rounded-full">
                  Business
                </span>
              </div>

              {/* Get Funded Button */}
              <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full hover:bg-green-600">
                Get Funded
              </button>
            </div>

            {/* Trusted Investors Row */}
            <div className="flex items-center space-x-2 bg-[#F3F7FB] p-2 rounded-xl shadow-lg">
              <div className="flex -space-x-3">
                <Image
                  src="/Ellipse4.png"
                  alt="user1"
                  height={32}
                  width={32}
                  className=" rounded-full border-2 border-white"
                />
                <Image
                  src="/Ellipse3.png"
                  alt="user1"
                  height={32}
                  width={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/Ellipse2.png"
                  alt="user1"
                  height={32}
                  width={32}
                  className=" rounded-full border-2 border-white"
                />
                <Image
                  src="/Ellipse1.png"
                  alt="user1"
                  height={32}
                  width={32}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <span className="text-gray-600 text-xs">
                Trusted by 15k+ investors
              </span>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <Image
                src="/Owner.png"
                height={243}
                width={266}
                alt="owner pic"
              />
            </div>
            {/* Graph Section */}
            <div className="bg-white rounded-2xl   w-[271px]">
              <div className="text-center pt-6">
                <h4 className="text-gray-500 text-sm mb-2 text-left pl-4">
                  Invest Financing
                </h4>
                <p>(APR)</p>
                <p className="text-2xl font-bold text-gray-900">11% - 13.5%</p>
              </div>
              <div className="flex items-end  mt-4">
                <div className="w-[66px] h-[126px] bg-[#78E9F4]"></div>
                <div className="w-[66px] h-[176px] bg-[#82C4FB]"></div>
                <div className="w-[66px] h-[106px] bg-[#82FBDE]"></div>
                <div className="w-[66px] h-[90px] bg-[#A7EFAA]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          <div className="flex gap-2 max-w-72 items-center bg-[#00233F] text-[#19EB4B] text-xs   px-3 py-1 rounded-full">
            <Image
              src="/Logo_Saudi.png"
              alt="Center Logo"
              height={22}
              width={22}
              className="bg-white rounded-full"
            />
            Islamic Finance, Shari a Approved
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Smart Investments for Verified SMEs
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Smart Investments for Verified SMEs connects investors with vetted
            small businesses, promoting informed decisions and local economic
            growth.
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-blue-700">
              Start Investing
            </button>
            <button className="border border-gray-400 rounded-full px-6 py-2 text-sm font-semibold hover:bg-gray-100">
              Get Funded
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            See our{" "}
            <a href="#" className="font-semibold text-blue-600 underline">
              2,000 reviews
            </a>{" "}
            on{" "}
            <span className="text-green-600 font-semibold">⭐ Trustpilot</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
