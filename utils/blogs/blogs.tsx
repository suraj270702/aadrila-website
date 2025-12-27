import { BlogCardProps, NavigationButtonProps } from "@/types/blogs"
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from "lucide-react"


export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

export const BlogCard: React.FC<BlogCardProps> = ({ blog, index, showGradients, showContent }) => {
  return (
    <div className='relative min-h-[250px] sm:min-h-[250px] md:h-[300px] lg:h-[300px]'>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showGradients ? 1 : 0, scale: showGradients ? 1 : 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="absolute bottom-0 w-full h-28 sm:h-32 md:h-36 lg:h-40 rounded-xl bg-gradient-to-r from-[#3E6EB4] via-[#A64CE8] to-[#B7C5E5] shadow-lg"
      />
      
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className='absolute bottom-4 sm:bottom-6 md:bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 w-[94%] sm:w-[92%] md:w-[90%] bg-white rounded-xl p-4 sm:p-5 md:p-6 border border-[#EDEDED] shadow-xl hover:shadow-2xl transition-shadow duration-300'
      >
        <h1 className='text-[#141219] text-base sm:text-lg md:text-[18px] font-bold leading-snug line-clamp-2 min-h-[44px] sm:min-h-[48px] md:min-h-[52px]'>
          {blog.title}
        </h1>
        <span className='text-xs sm:text-[11.5px] md:text-[12px] font-medium text-[#719AD0] block mt-2 md:mt-3'>
          {blog.date}
        </span>
        <div className='mt-3 md:mt-4 text-[13px] sm:text-[13.5px] md:text-[14px] font-normal text-[#696969] leading-relaxed line-clamp-3 min-h-[60px] sm:min-h-[66px] md:min-h-[72px]'>
          {blog.description}
        </div>
      </motion.div>
    </div>
  )
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, disabled }) => {
  const icon = direction === 'prev' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />
  const label = direction === 'prev' ? 'Previous page' : 'Next page'
  
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
        disabled 
          ? 'bg-gray-300 cursor-not-allowed opacity-50' 
          : 'bg-[#3E6EB4] hover:bg-[#2d5a9a] active:scale-95 shadow-md hover:shadow-lg text-white'
      }`}
      aria-label={label}
    >
      {icon}
    </button>
  )
}
