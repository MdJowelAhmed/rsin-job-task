import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="w-full bg-gray-50">
      <section className="container max-w-[1536px] mx-auto  py-12 px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Image Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/ImageSection/Frame 528.png"
              alt="Image 1"
              height={345}
              width={345}
              className=" object-cover"
            />
          </div>

          {/* Stats Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <p className="text-gray-500 text-sm">
              New investors <br /> last month
            </p>
            <h3 className="text-4xl font-bold">3,964</h3>
          </div>

          {/* Image Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/ImageSection/Frame 531.png"
              alt="Image 1"
              height={345}
              width={345}
              className=" object-cover"
            />
          </div>

          {/* Stats Card 2 */}
          <div className="bg-[#7CE4A1] rounded-lg shadow-md p-6 flex flex-col justify-between">
            <p className="text-gray-500 text-sm">
              Unique investments <br /> last month
            </p>
            <h3 className="text-4xl font-bold">8,457</h3>
          </div>

          {/* Stats Card 3 */}
          <div className="bg-[#7CE4A1] rounded-lg shadow-md p-6 flex flex-col justify-between">
            <p className="text-gray-500 text-sm">
              Total invested <br /> last month
            </p>
            <h3 className="text-4xl font-bold text-green-600">$7.5m</h3>
          </div>

          {/* Image Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/ImageSection/Frame 534.png"
              alt="Image 1"
              height={345}
              width={345}
              className=" object-cover"
            />
          </div>

          {/* Stats Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <p className="text-gray-500 text-sm">
              Site visitors <br /> last month
            </p>
            <h3 className="text-4xl font-bold">308k</h3>
          </div>

          {/* Image Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="/ImageSection/Frame 536.png"
              alt="Image 1"
              height={345}
              width={345}
              className=" object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageSection;
