"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Razu Sardar",
      role: "CEO of RSM",
      badge: "Fund Seeker",
      review:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
      date: "2 days ago",
    },
    {
      name: "Arlene McCoy",
      role: "CTO",
      badge: "Investor",
      review:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
      date: "2 days ago",
    },
    {
      name: "Floyd Miles",
      role: "MD of Starbucks",
      badge: "Investor",
      review:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
      date: "2 days ago",
    },
    {
      name: "Razu Sardar",
      role: "CEO of RSM",
      badge: "Fund Seeker",
      review:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
      date: "2 days ago",
    },
    {
      name: "Jane Cooper",
      role: "HR Of Gillette",
      badge: "Fund Seeker",
      review:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
      date: "2 days ago",
    },
    {
      name: "Darlene Robertson",
      role: "HDO of McDonald's",
      badge: "Investor",
      review:
        "Fast at letting me know I got approved for the loan. Fund deposit was fast.",
      date: "2 days ago",
    },
  ];

  return (
    <div className="w-full bg-[#005397] dark:bg-[#0a0a0a]">
      <section className="container max-w-[1536px] mx-auto text-white dark:text-gray-300 py-12 px-6 relative">
        <div className="mb-16">
          {/* Header */}
          <div className="flex justify-between">
            <div className="mb-8 max-w-md">
              <p className="text-green-300 dark:text-green-400 font-semibold mb-4">
                Testimonial
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                For nearly 07 years people have chosen VISAThing!
              </h2>
            </div>

            <div className="hidden md:block">
              <div className="flex gap-1 text-gray-50 dark:text-gray-400">
                <p>
                  See our{" "}
                  <span className="text-white dark:text-gray-200">
                    2,000 reviews
                  </span>{" "}
                  on
                </p>
                <FaStar className="text-yellow-400" />
                <p>Trustpilot</p>
              </div>
            </div>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="hidden md:block">
            <div className="absolute top-36 right-32 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 w-16 h-16 flex items-center justify-center rounded-md">
              <button className="swiper-button-prev text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"></button>
            </div>
            <div className="absolute top-36 right-12 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 w-16 h-16 flex items-center justify-center rounded-md">
              <button className="swiper-button-next text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600"></button>
            </div>
          </div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              450: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl shadow-lg p-4 h-52 flex flex-col justify-between">
                  {/* Content */}
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-bold">{t.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {t.role}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t.badge}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <IoStarOutline
                            key={i}
                            className="bg-[#2B9851] text-white dark:text-gray-900"
                          />
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {t.date}
                      </p>
                    </div>
                    <p className="text-sm">{t.review}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
