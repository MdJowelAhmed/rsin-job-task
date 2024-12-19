import Image from "next/image";

// components/AboutUsSection.jsx
const AboutUsSection = () => {
  return (
    <div className="w-full bg-gray-50">
      <section className="container max-w-[1536px] mx-auto  text-gray-700 px-4 ">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
          {/* Left Content */}
          <div className="bg-white py-32 px-6 rounded-lg">
            <h4 className="text-green-600 font-medium text-lg mb-2">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aspired To Build A Better Financial World
            </h2>
            <p className="mb-6 text-base md:text-lg">
              Raqamyah is a Sharia-compliant crowdlending platform licensed by
              the Saudi Central Bank (SAMA). It connects SMEs seeking financing
              with investors looking for competitive returns. By directly
              funding SMEs, investors earn profits while supporting business
              growth and economic development. The platform’s mission is to
              simplify and accelerate funding for small businesses to help them
              thrive.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span>Sharia-Compliant Crowdlending</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span>Empowering Business Growth</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span>Direct Investment Opportunities</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-2">✔</span>
                <span>Regulated and Trusted</span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 gap-4 bg-white p-2">
            {/* Image */}
            <div>
              <Image
                src="/Frame 23.png"
                alt="Office Space"
                height={455}
                width={710}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 bg-white">
              <div className="p-4 bg-gray-50 rounded-lg ">
                <div className="h-16 w-16 rounded-full bg-[#C3F2D3] relative mb-7">
                  <Image
                    src="/about/About Us icon.png"
                    height={32}
                    width={32}
                    alt="logo"
                    className="absolute right-4 top-4"
                  />
                </div>
                <p className="font-medium">Lower Rates</p>
              </div>
              {/* 2nd card  */}
              <div className="p-4 bg-gray-50 rounded-lg ">
                <div className="h-16 w-16 rounded-full bg-[#C3F2D3] relative mb-7">
                  <Image
                    src="/about/About Us icon (1).png"
                    height={32}
                    width={32}
                    alt="logo"
                    className="absolute right-4 top-4"
                  />
                </div>
                <p className="font-medium">Financing up to SAR 7.5M</p>
              </div>
              {/* 3rd card  */}
              <div className="p-4 bg-gray-50 rounded-lg ">
                <div className="h-16 w-16 rounded-full bg-[#C3F2D3] relative mb-7">
                  <Image
                    src="/about/About Us icon (2).png"
                    height={32}
                    width={32}
                    alt="logo"
                    className="absolute right-4 top-4"
                  />
                </div>
                <p className="font-medium">Faster Decision</p>
              </div>
              {/* 4th card  */}
              <div className="p-4 bg-gray-50 rounded-lg ">
                <div className="h-16 w-16 rounded-full bg-[#C3F2D3] relative mb-7">
                  <Image
                    src="/about/About Us icon (3).png"
                    height={32}
                    width={32}
                    alt="logo"
                    className="absolute right-4 top-4"
                  />
                </div>
                <p className="font-medium">Shari a Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
