"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {  Home, Info, Briefcase, Mail } from "lucide-react";
import { NavLink } from "@/types/home";
import { AnimatedLogo, MainContent, Navbar } from "@/utils/home/home";


export default function HomePage() {
  const [animationStage, setAnimationStage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", icon: Home },
    { name: "About", icon: Info },
    { name: "Services", icon: Briefcase },
    { name: "Contact", icon: Mail },
  ];

  useEffect(() => {
    
    document.body.style.overflow = "hidden";

    const timers = [
      setTimeout(() => setAnimationStage(1), 1000),
      setTimeout(() => setAnimationStage(2), 2200), 
      setTimeout(() => {
        setAnimationStage(3);
        setShowBackground(true);
      }, 3800), 
      setTimeout(() => setAnimationStage(4), 5400), 
      setTimeout(() => setAnimationStage(5), 5800), 
      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 6500),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackground ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/assets/landing.png')" }}
      />

      
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: showBackground ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-white -z-10"
      />

      <AnimatedLogo stage={animationStage} />
      
      <Navbar
        stage={animationStage}
        links={navLinks}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      <MainContent stage={animationStage} />
    </div>
  );
}