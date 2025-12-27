"use client"
import { ProductData } from "@/types/products";
import React, { useState, useEffect, useRef } from "react";

export const docSimData: ProductData = {
    buttonText: "DocSim",
    title: "AI-Powered Document Similarity Engine",
    features: [
      { text: "Detects near-duplicates and tampered documents." },
      { text: "Advanced ML algorithms for accurate matching." },
      { text: "Real-time processing and analysis." },
    ],
    benefits: [
      { text: "Save 30% time on manual checks." },
      { text: "Reduce document fraud by up to 40%." },
    ],
    imageUrl: "/assets/products.png",
    imageAlt: "DocSim Product",
  };

 export const docPilotData: ProductData = {
    buttonText: "DocPilot",
    title: "Intelligent Document Navigator",
    features: [
      { text: "Smart document classification and routing." },
      { text: "Automated workflow integration." },
      { text: "Contextual search capabilities." },
    ],
    benefits: [
      { text: "Increase productivity by 50%." },
      { text: "Streamline document management." },
    ],
    imageUrl: "/assets/products.png",
    imageAlt: "DocPilot Product",
  };

export const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export const GradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="
      min-w-[200px] min-h-[82px] px-6 py-4
      text-white font-bold text-lg md:text-xl text-center
      bg-gradient-to-r from-[#CD6028] via-[#88676B] to-[#3E6EB4]
      rounded-[50px]
      transition-all duration-300
      hover:shadow-lg hover:scale-105
    "
  >
    {children}
  </button>
);

export const ActionButtons: React.FC = () => (
  <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-5">
    <button className="w-full sm:w-[250px] h-[52px] text-white font-semibold text-base rounded-full bg-[#3E6EB4] hover:bg-[#2E5E9E] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3E6EB4]/50">
      Learn More
    </button>
    <button className="w-full sm:w-[250px] h-[52px] text-[#3E6EB4] font-semibold text-base rounded-full bg-transparent border-2 border-[#3E6EB4] hover:bg-[#3E6EB4]/10 transition-all duration-300 transform hover:-translate-y-1">
      Schedule Demo
    </button>
  </div>
);

export const InfoList: React.FC<{ title: string; items: { text: string }[] }> = ({ title, items }) => (
  <div className="mt-4 md:mt-6 flex flex-col">
    <h2 className="text-[#696969] text-lg md:text-xl font-bold mb-2">{title}</h2>
    {items.map((item, index) => (
      <span key={index} className="text-[#696969] text-sm md:text-base font-normal leading-7 md:leading-8">
        • {item.text}
      </span>
    ))}
  </div>
);

export const ProductContent: React.FC<{ data: ProductData; isVisible: boolean }> = ({ data, isVisible }) => (
  <div
    className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
      isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
    }`}
  >
    <GradientButton>{data.buttonText}</GradientButton>

    <h1 className="text-[#141219] text-2xl md:text-3xl lg:text-4xl font-bold mt-4 leading-tight md:leading-[48px]">
      {data.title}
    </h1>

    <InfoList title="Features:" items={data.features} />
    <InfoList title="Benefits:" items={data.benefits} />
    <ActionButtons />
  </div>
);

export const ProductImage: React.FC<{ imageUrl: string; imageAlt: string; isVisible: boolean }> = ({
  imageUrl,
  imageAlt,
  isVisible,
}) => (
  <div
    className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
      isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
    }`}
  >
    <img src={imageUrl} alt={imageAlt} className="w-full h-auto object-contain" />
  </div>
);
