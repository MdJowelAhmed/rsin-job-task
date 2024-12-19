import { FaAssistiveListeningSystems, FaHandHoldingUsd } from "react-icons/fa";
import {
  MdAssignmentReturn,
  MdOnlinePrediction,
  MdOutlineExploreOff,
  MdReceipt,
  MdVerified,
} from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const ProcessSection = () => {
  const investorData = [
    {
      icon: <MdOutlineExploreOff />,
      title: "Explore Opportunities",
      description: "Browse verified businesses seeking investment.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Invest",
      description: "Choose and invest in a business that fits your goals.",
    },
    {
      icon: <GiProgression />,
      title: "Track Progress",
      description: "Monitor your investment’s performance on our platform.",
    },
    {
      icon: <MdAssignmentReturn />,
      title: "Receive Returns",
      description: "Get monthly repayments and profits directly.",
    },
  ];

  const businessData = [
    {
      icon: <MdOnlinePrediction />,
      title: "Apply Online",
      description: "Submit your financing application online.",
    },
    {
      icon: <MdVerified />,
      title: "Get Verified",
      description: "Our team reviews and approves your application.",
    },
    {
      icon: <FaAssistiveListeningSystems />,
      title: "Listed for Funding",
      description: "Approved businesses are listed for investors.",
    },
    {
      icon: <MdReceipt />,
      title: "Receive Funding",
      description: "Get the capital needed to grow your business.",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <section className="container  py-12 px-4  max-w-[1536px] mx-auto">
        {/* Header */}
        <div className="bg-white shadow-sm p-6 rounded-lg mb-6 ">
          <div className="mb-6  text-center md:text-start">
            <p className="text-green-600 font-semibold mb-2">How it Works</p>
            <h2 className="text-2xl md:text-4xl font-bold max-w-[350px]">
              Our Process for Investors and Businesses
            </h2>
          </div>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Investors */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-center md:text-start">For Investors</h3>
            <div className="flex justify-center mb-6">
              <div className="shadow-md w-16 h-16 flex items-center justify-center rounded-full">
                <span className="text-xl font-semibold">RSIN</span>
              </div>
            </div>
            <div className="space-y-4">
              {investorData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-50 p-3 rounded-md"
                >
                  <div className="bg-[#ECFBF1] shadow-sm w-8 h-8 rounded-full flex items-center justify-center text-green-500 text-2xl mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-10">
              <button className="bg-[#005397] text-white px-6 py-2 rounded-3xl font-medium hover:bg-blue-700">
                Start Investing
              </button>
              <button className="flex items-center text-blue-600 border border-1 border-[#005397] px-4 rounded-3xl hover:text-blue-800">
                <span className="mr-2">▶</span> Tutorial
              </button>
            </div>
          </div>

          {/* For Businesses */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-bold mb-4 text-center md:text-start">For Businesses</h3>
            <div className="flex justify-center mb-6">
              <div className="shadow-md w-16 h-16 flex items-center justify-center rounded-full">
                <span className="text-xl font-semibold">RSIN</span>
              </div>
            </div>
            <div className="space-y-4">
              {businessData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-gray-50 p-3 rounded-md"
                >
                  <div className="bg-[#ECFBF1] shadow-sm text-2xl w-8 h-8 rounded-full flex items-center justify-center text-green-500 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-10">
              <button className="bg-[#005397] text-white px-6 py-2 rounded-3xl font-medium hover:bg-blue-700">
                Get Funding
              </button>
              <button className="flex items-center text-blue-600 border border-1 border-[#005397] px-4 rounded-3xl hover:text-blue-800">
                <span className="mr-2">▶</span> Tutorial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessSection;
