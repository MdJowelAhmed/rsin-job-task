import Image from "next/image";

// components/FinanceSolutions.jsx
const  OurFinance =() => {
    return (
      <section className="bg-gray-50 text-gray-800 px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Images */}
          <div className="relative flex justify-center items-center gap-6">
            <div className="absolute bg-green-200 w-40 h-40 lg:w-52 lg:h-52 rounded-md top-20 left-16 -z-10"></div>
            <Image
              src="/finance/Rectangle 1770.png"
              alt="Finance Chart"
              height={341}
              width={341}
              className=" rounded-md shadow-lg"
            />
           <Image
              src="/finance/Rectangle 1771.png"
              alt="Finance Chart"
              height={365}
              width={365}
              className=" rounded-md shadow-lg mt-28"
            />
             <div className="h-60 w-60 bg-[#26FC0326] absolute -bottom-16 right-48">
          </div>
         

          </div>
  
          {/* Right Side - Content */}
          <div>
            <h4 className="text-green-600 font-medium mb-2 uppercase">Solutions</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Finance Solutions
            </h2>
            <div className="space-y-4">
              {/* Active Section */}
              <div>
                <h3 className="text-blue-800 font-semibold text-lg">
                  Business Expansion
                </h3>
                <p className="text-gray-600 text-sm">
                  Scale your business by adding new products, service or open new
                  branch
                </p>
                <div className="w-8 h-1 bg-blue-800 mt-2"></div>
              </div>
  
              {/* Inactive Sections */}
              {[
                "Upgrade Your Premises",
                "Marketing",
                "Purchase Equipment",
                "Increase Inventory",
                "Invoice Finance",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b pb-2 text-gray-500 hover:text-gray-800 transition duration-300 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
  
            {/* Buttons */}
            <div className="flex mt-8 space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow">
                Get Started
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md shadow hover:bg-blue-100 transition">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default OurFinance