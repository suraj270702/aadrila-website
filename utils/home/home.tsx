import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedLogoProps, MainContentProps, NavbarProps } from "@/types/home";
import { Menu, X, Home, Info, Briefcase, Mail } from "lucide-react";
import InfiniteImageSlider from "@/components/Carousel";
import Container from "@/components/Container";

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ stage }) => {
  const getLogoVariants = () => {
    if (stage < 3) {
      return {
        initial: { scale: 0, opacity: 0 },
        animate: { 
          scale: 1, 
          opacity: 1
        }
      };
    }
    return {
      initial: { scale: 1, opacity: 1 },
      animate: { 
        scale: 1, 
        opacity: 1 
      }
    };
  };

  return (
    <motion.div
      className="fixed z-50"
      initial={false}
      animate={
        stage < 3
          ? {
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
            }
          : {
              top: "1rem",
              left: "max(2rem, calc((100vw - 1280px) / 2 + 1rem))",
              x: 0,
              y: 0,
            }
      }
      transition={{ 
        duration: 1.2, 
        ease: [0.6, 0.01, 0.05, 0.95],
        delay: stage >= 3 ? 0.5 : 0
      }}
    >
      <motion.div 
        className="flex items-center gap-3"
      >
        {/* Logo */}
        <motion.div
          variants={getLogoVariants()}
          initial="initial"
          animate="animate"
          transition={{ 
            duration: 0.8, 
            ease: [0.6, 0.01, 0.05, 0.95] 
          }}
          className="flex items-center justify-center flex-shrink-0"
        >
          <motion.div
            animate={stage >= 3 ? { width: 40, height: 40 } : { width: 96, height: 96 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className=""
          >
            <img src={"assets/logo.png"} alt="Logo" className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={
            stage >= 2 
              ? { width: "auto", opacity: 1 }
              : { width: 0, opacity: 0 }
          }
          transition={{ 
            duration: 1.2, 
            ease: [0.6, 0.01, 0.05, 0.95]
          }}
          className="overflow-hidden"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={stage >= 2 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut" 
            }}
            className="text-[#141219] font-bold whitespace-nowrap"
            style={{
              fontSize: stage >= 3 ? "1.25rem" : "3rem",
              lineHeight: stage >= 3 ? "1.75rem" : "1",
              transition: "font-size 1s ease-in-out, line-height 1s ease-in-out"
            }}
          >
            Aadrila<br />Technologies
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ stage, links, isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={stage >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={`#${link.name.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={stage >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.15,
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="text-[#1E1C26] hover:text-[#3E6EB4] text-[16px] flex items-center space-x-2"
                >
                  <span>{link.name}</span>
                </motion.a>
              );
            })}
          </div>

          
          <motion.button
            initial={{ opacity: 0 }}
            animate={stage >= 5 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            onClick={toggleMobileMenu}
            className="md:hidden text-[#1E1C26]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={`#${link.name.toLowerCase()}`}
                    className="flex items-center space-x-3 text-[#1E1C26] hover:text-[#3E6EB4] transition-colors py-2"
                    onClick={toggleMobileMenu}
                  >
                    <Icon size={18} />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export const MainContent: React.FC<MainContentProps> = ({ stage }) => {
  const images = [
    { id: 1, url: "/assets/doc.png", title: "Document" },
    { id: 2, url: "/assets/invoice.png", title: "Invoice" },
    { id: 3, url: "/assets/license.png", title: "License" },
  ];
  return (
    <div className="pt-20 md:pt-24 min-h-screen flex items-center">
     <Container>
       <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={stage >= 4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-[#CD6028] text-3xl md:text-4xl lg:text-5xl font-bold">
              AI-Powered
            </h1>
            <h1 className="text-[#141219] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Document Automation<br />& Fraud Detection
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={stage >= 4 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mt-6"
          >
            <p className="text-base md:text-lg lg:text-xl font-medium text-[#141219]">
              Enhance security, accuracy, and efficiency with our cutting-edge
              AI solutions for seamless document processing and fraud prevention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stage >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(62, 110, 180, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 h-[52px] text-white font-semibold text-base rounded-full bg-[#3E6EB4] hover:bg-[#2E5E9E] transition-colors"
            >
              Get a Demo
            </motion.button>
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 h-[52px] text-[#3E6EB4] font-semibold text-base rounded-full bg-transparent border-2 border-[#3E6EB4] hover:bg-[#3E6EB4]/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={stage >= 4 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <InfiniteImageSlider images={images} />
        </motion.div>
      </div>
     </Container>
    </div>
  );
};