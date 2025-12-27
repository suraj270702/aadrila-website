"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ContactForm, OfficeInfo } from "@/utils/contact/contact";
import Container from "./Container";

const Contact: React.FC = () => {
  const leftContentRef = useRef(null);
  const formRef = useRef(null);
  const footerRef = useRef(null);

  const isLeftContentInView = useInView(leftContentRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" });

  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative">
      <Container>
        <div className=" py-8 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 mb-32 md:mb-40">
          {/* Left Content */}
          <motion.div 
            ref={leftContentRef}
            className="w-full lg:w-1/2"
            initial="hidden"
            animate={isLeftContentInView ? "visible" : "hidden"}
            variants={leftContentVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-[#141219] mb-4">
              Contact Us
            </h1>
            <p className="text-[#CD6028] text-base md:text-lg lg:text-[20px] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's.
            </p>
            
            <div className="mt-8 md:mt-10 space-y-6">
              <OfficeInfo
                title="US Office"
                address="Aadrila Technologies INC, 8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901."
              />
              
              <OfficeInfo
                title="India Office"
                address="Aadrila Technologies Private Limited, Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053."
              />
            </div>
          </motion.div>

          {/* Contact Form - Stacked on Footer */}
          <motion.div 
            ref={formRef}
            className="w-full lg:w-1/2 relative z-20"
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={formVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
      </Container>

      
      <motion.div 
        ref={footerRef}
        className="bg-[#3E6EB4] w-full absolute bottom-0  z-0 -mt-24 md:-mt-32 pt-32 -md:pt-40"
        initial="hidden"
        animate={isFooterInView ? "visible" : "hidden"}
        variants={footerVariants}
      >
        <Container>
            <div className=" pb-12 md:pb-16 lg:pb-20">
          <p className="text-[#fff] text-xs md:text-sm leading-relaxed">
            © 2025 by Aadrila Technologies Private Limited CIN U74999UP2017PTC094688
          </p>
          <p className="text-[#fff] text-xs md:text-sm mt-4 md:mt-6 leading-relaxed">
            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Uttar Pradesh, India, 226024
          </p>
        </div>
        </Container>
      </motion.div>
    </div>
  );
};

export default Contact;