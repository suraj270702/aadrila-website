"use client"
import React, { useEffect } from "react";
import HomePage from "./Home";
import Industries from "./Industries";
import { ProductSection } from "./Products";
import { docPilotData, docSimData } from "@/utils/products/products";
import Blogs from "./Blogs";
import Contact from "./Contact";

const LandingPage = () => {
    useEffect(() => {
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }
}, []);
  return (
    <div>
      <HomePage />
      <Industries />
      <ProductSection
        data={docSimData}
        showHeader={true}
        layout="image-left"
        backgroundCircleUrl="assets/circle.png"
      />
      <ProductSection
        data={docPilotData}
        showHeader={false}
        layout="image-right"
        backgroundCircleUrl="assets/right_circle.png"
      />
      <ProductSection
        data={docSimData}
        showHeader={false}
        layout="image-left"
        backgroundCircleUrl="assets/circle.png"
      />
      <Blogs />
      <Contact />
    </div>
  );
};

export default LandingPage;
