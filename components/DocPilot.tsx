"use client"
import React, { useState, useEffect } from "react";

const DocPilot = () => {
  const [circleVisible, setCircleVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate circle immediately
    setTimeout(() => {
      setCircleVisible(true);
    }, 100);
    
    // Then animate content after circle slides in
    const contentTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    
    return () => clearTimeout(contentTimer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Circle - Slides in from LEFT */}
      <div
        className={`absolute left-0 top-0 z-0 transition-transform duration-1000 ease-out ${
          circleVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src="/assets/circle.png"
          alt="Industries Background"
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl relative z-40 mx-auto px-4">
        <div className="flex items-center pt-20 gap-8">
          {/* Left Content - Slides in from left */}
          <div
            className={`w-1/2 transition-all duration-1000 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            <img src={"/assets/products.png"} alt="Product illustration" />
          </div>
          
          {/* Right Content - Slides in from right */}
          <div
            className={`w-1/2 transition-all duration-1000 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <button
              className="
                min-w-[200px] min-h-[82px]
                text-white font-bold text-[20px] text-center
                bg-[linear-gradient(90deg,#CD6028_11%,#88676B_54%,#3E6EB4_100%)]
                rounded-[50px]
              "
            >
              DocSim
            </button>

            <h1 className="text-[#141219] text-[32px] font-bold mt-[16px] leading-[48px]">
              AI-Powered Document Similarity <br />
              Engine
            </h1>

            <div className="mt-[16px] flex flex-col">
              <h1 className="text-[#696969] text-[20px] font-bold">Features:</h1>
              <span className="text-[#696969] text-[16px] font-normal leading-[32px]">
                • Detects near-duplicates and tampered documents.
              </span>
              <span className="text-[#696969] text-[16px] font-normal leading-[32px]">
                • Detects near-duplicates and tampered documents.
              </span>
              <span className="text-[#696969] text-[16px] font-normal leading-[32px]">
                • Detects near-duplicates and tampered documents.
              </span>
            </div>

            <div className="mt-[16px] flex flex-col">
              <h1 className="text-[#696969] text-[20px] font-bold">Benefits:</h1>
              <span className="text-[#696969] text-[16px] font-normal leading-[32px]">
                • Save 30% time on manual checks.
              </span>
              <span className="text-[#696969] text-[16px] font-normal leading-[32px]">
                • Reduce document fraud by up to 40%.
              </span>
            </div>

            <div className="mt-10 flex gap-5">
              <button className="w-full sm:w-[250px] h-[52px] text-[#fff] font-semibold text-[16px] rounded-[160px] bg-[#3E6EB4] hover:bg-[#2E5E9E] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3E6EB4]/50">
                Learn More
              </button>
              <button className="w-full sm:w-[250px] h-[52px] text-[#3E6EB4] font-semibold text-[16px] rounded-[160px] bg-transparent border-2 border-[#3E6EB4] hover:bg-[#3E6EB4]/10 transition-all duration-300 transform hover:-translate-y-1">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocPilot;