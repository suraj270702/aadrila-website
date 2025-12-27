"use client"
import { ProductSectionProps } from "@/types/products";
import { ProductContent, ProductImage, useIntersectionObserver } from "@/utils/products/products";
import React, { useState, useEffect, useRef } from "react";
import Container from "./Container";

export const ProductSection: React.FC<ProductSectionProps> = ({
  data,
  layout,
  backgroundCircleUrl,
  showHeader = false,
}) => {
  const { ref, isVisible } = useIntersectionObserver(0.2);
  const [circleVisible, setCircleVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCircleVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const isImageLeft = layout === "image-left";
  const circlePosition = isImageLeft ? "left-0" : "right-0";
  const circleTransform = isImageLeft
    ? circleVisible ? "translate-x-0" : "-translate-x-full"
    : circleVisible ? "translate-x-0" : "translate-x-full";

  return (
    <div ref={ref} className="min-h-screen relative overflow-hidden py-12 md:py-20">
      
      <div
        className={`absolute ${circlePosition} top-0 z-0 transition-transform duration-1000 ease-out ${circleTransform}`}
      >
        <img
          src={backgroundCircleUrl}
          alt="Background decoration"
          className="object-contain w-64 md:w-96 lg:w-auto"
        />
      </div>

      <Container>
        <div className=" relative z-40 ">
        
        {showHeader && (
          <div
            className={`transition-all duration-700 mb-12 md:mb-20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <h1 className="text-[#CD6028] text-xl md:text-2xl font-bold text-center">
              features and benefits.
            </h1>
            <h1 className="text-[#141219] text-3xl md:text-5xl font-semibold text-center mt-2">
              Our Products
            </h1>
          </div>
        )}

        
        <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
          isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}>
          <ProductImage
            imageUrl={data.imageUrl}
            imageAlt={data.imageAlt}
            isVisible={isVisible}
          />
          <ProductContent data={data} isVisible={isVisible} />
        </div>
      </div>
      </Container>
    </div>
  );
};