"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("Investor");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const tabs = [
    "Investor",
    "Business",
    "Raqamyah",
    "Shari’a Compliant",
    "Finance Application",
  ];
  const faqData = {
    Investor: [
      {
        question: "How can I register as an investor?",
        answer:
          "To register as an investor, go to our platform, click on the 'Sign Up' button, and provide your name, email, and other personal details. Once you verify your email, complete the investor profile by submitting required documentation, such as proof of identity and funds. After our team reviews your submission, you'll receive confirmation to start investing.",
      },
      {
        question:
          "What is the maximum and minimum investment on RSIN Platform?",
        answer: "You can invest as little as $500 and as much as $1,000,000.",
      },
      {
        question: "How secure is my investment on this platform?",
        answer:
          "All investments are monitored and verified by our platform to ensure maximum security and transparency.",
      },
      {
        question: "What kind of businesses can I invest in?",
        answer:
          "You can invest in businesses from diverse industries, all vetted and verified by our team.",
      },
      {
        question: "Can I withdraw my investment early?",
        answer:
          "Early withdrawal depends on the terms agreed upon at the time of investment. Please check the specific business agreement for details.",
      },
    ],
    Business: [
      {
        question: "How do I apply for funding?",
        answer:
          "To apply, register on the platform and go to the 'Business Application' section. Fill out your business information, upload the required documents, and submit your application. You will be guided step-by-step through the process.",
      },
      {
        question: "What documents are required for funding?",
        answer:
          "You'll need to provide proof of business registration, financial statements, and a business plan.",
      },
      {
        question: "How long does the funding process take?",
        answer:
          "Once your application is submitted, it typically takes 7-10 business days for verification and approval.",
      },
      {
        question: "What type of businesses are eligible for funding?",
        answer:
          "Businesses of all sizes and industries can apply, provided they meet our platform's criteria.",
      },
      {
        question: "Can I reapply if my application is rejected?",
        answer:
          "Yes, you can reapply after addressing the feedback provided by our team.",
      },
    ],
    Raqamyah: [
      {
        question: "What is Raqamyah?",
        answer:
          "Raqamyah is a digital platform designed to bridge the gap between investors and businesses, providing secure and ethical funding opportunities aligned with Shari’a principles.",
      },
      {
        question: "How does Raqamyah ensure security?",
        answer:
          "The platform employs advanced encryption and regulatory compliance to protect all transactions.",
      },
      {
        question: "Who can use Raqamyah?",
        answer:
          "Both investors and businesses looking for funding that adheres to ethical and Shari’a principles can use Raqamyah.",
      },
      {
        question: "What industries does Raqamyah support?",
        answer:
          "Raqamyah supports a wide range of industries, from tech startups to established SMEs.",
      },
      {
        question: "Does Raqamyah charge fees?",
        answer:
          "Yes, there is a nominal fee for businesses to list their funding needs, while investors are not charged.",
      },
    ],
    "Shari’a Compliant": [
      {
        question: "What does Shari’a Compliant mean?",
        answer:
          "Shari’a Compliant financing refers to transactions and investments that adhere to Islamic principles, avoiding interest (riba), gambling (maisir), and unethical practices.",
      },
      {
        question: "How are businesses verified for Shari’a compliance?",
        answer:
          "Our team works with certified Shari’a scholars to review and approve all listed businesses.",
      },
      {
        question: "Can non-Muslims invest in Shari’a compliant businesses?",
        answer:
          "Yes, anyone can invest, provided they follow the platform's guidelines.",
      },
      {
        question:
          "How is profit-sharing structured in Shari’a compliant investments?",
        answer:
          "Profits are shared based on pre-agreed ratios instead of fixed interest rates.",
      },
      {
        question: "What is the role of Shari’a scholars on the platform?",
        answer:
          "Shari’a scholars review and ensure all transactions comply with Islamic laws.",
      },
    ],
    "Finance Application": [
      {
        question: "What is the process for submitting a finance application?",
        answer:
          "To submit a finance application, log in to your account, fill out the finance application form with accurate details, upload required documents, and submit it for review. You'll receive updates throughout the process.",
      },
      {
        question: "What documents do I need for a finance application?",
        answer:
          "You need identification documents, proof of income, and any relevant financial records.",
      },
      {
        question: "How is the application evaluated?",
        answer:
          "Applications are evaluated based on creditworthiness, business plans, and adherence to platform policies.",
      },
      {
        question: "What types of financing are available?",
        answer:
          "We offer a range of financing options, including equity-based, debt-based, and Shari’a compliant models.",
      },
      {
        question: "Can I modify my application after submission?",
        answer:
          "Yes, you can modify your application before it is reviewed by our team.",
      },
    ],
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800">
      <section className="max-w-[1536px] container mx-auto py-12 px-4">
        <div>
          <h3 className="text-center text-green-600 font-semibold mb-4 dark:text-green-400">FAQ</h3>
          <h2 className="text-center text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full font-medium ${
                  activeTab === tab
                    ? "bg-[#005397] text-white"
                    : "bg-white text-blue-500 border border-blue-500 dark:bg-gray-700 dark:text-blue-400 dark:border-gray-600"
                } transition-colors`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div>
            {faqData[activeTab]?.map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 dark:text-gray-100"
                  onClick={() =>
                    setExpandedQuestion(
                      expandedQuestion === index ? null : index
                    )
                  }
                >
                  {faq.question}
                  {expandedQuestion === index ? (
                    <FaChevronUp className="text-blue-500 dark:text-blue-300" />
                  ) : (
                    <FaChevronDown className="text-gray-500 dark:text-gray-300" />
                  )}
                </button>
                {expandedQuestion === index && (
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
