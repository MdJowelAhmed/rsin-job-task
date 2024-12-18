"use client"; // For Next.js App Router compatibility
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const NewsLogoSlider = () => {
  return (
    <div className="w-full py-8 bg-white">
      {/* Title */}
      <div className="flex items-center mb-6">
        <span className="text-gray-600 text-sm font-medium mr-2">
          Feature in Trusted by
        </span>
        <span className="text-gray-400">→</span>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
        loop={true}
      >
        {/* Slides */}
        <SwiperSlide>
          <Image
            src="/newsLogo/Vector (1).png"
            alt="Al Jazeera"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          src="/newsLogo/Group 2 (1).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          src="/newsLogo/Vector (1).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          src="/newsLogo/Vector (4).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          src="/newsLogo/Vector (5).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          src="/newsLogo/Vector (1).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          src="/newsLogo/Vector (2).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Image
          src="/newsLogo/Vector (2).png"
            alt="Asharq"
            height={30}
            width={30}
            className="h-12 mx-auto"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsLogoSlider;
