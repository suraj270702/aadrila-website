"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Blog } from '@/types/blogs'
import { BlogCard, NavigationButton, slideVariants } from '@/utils/blogs/blogs'

const Blogs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [showHeader, setShowHeader] = useState<boolean>(false)
  const [showGradients, setShowGradients] = useState<boolean>(false)
  const [showContent, setShowContent] = useState<boolean>(false)
  const [showButtons, setShowButtons] = useState<boolean>(false)
  const [direction, setDirection] = useState<number>(0)

  const blogData: Blog[] = [
    {
      title: "How AI is Revolutionizing Document Management for Enterprises",
      date: "24 July, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit harum vel consectetur, eligendi dolore ducimus repudiandae temporibus dolores facere."
    },
    {
      title: "The Future of Cloud Computing in Business Operations",
      date: "15 August, 2023",
      description: "Discover how cloud computing is transforming the way businesses operate, enabling scalability, flexibility, and cost-effectiveness."
    },
    {
      title: "Cybersecurity Best Practices for Remote Teams",
      date: "05 September, 2023",
      description: "Learn essential cybersecurity strategies to protect your organization's data and maintain secure operations in remote work."
    },
    {
      title: "Machine Learning Applications in Healthcare",
      date: "20 September, 2023",
      description: "Explore the revolutionary impact of machine learning on healthcare, from diagnostic tools to personalized treatment plans."
    },
    {
      title: "Building Scalable Microservices Architecture",
      date: "10 October, 2023",
      description: "A comprehensive guide to designing and implementing microservices architecture that scales with your business needs."
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      date: "25 October, 2023",
      description: "Understanding how modern data analytics tools can help organizations make informed decisions and gain advantages."
    }
  ]

  const blogsPerPage = 3
  const totalPages = Math.ceil(blogData.length / blogsPerPage)
  const startIdx = currentPage * blogsPerPage
  const currentBlogs = blogData.slice(startIdx, startIdx + blogsPerPage)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHeader(true), 100)
    const timer2 = setTimeout(() => setShowGradients(true), 800)
    const timer3 = setTimeout(() => setShowContent(true), 1400)
    const timer4 = setTimeout(() => setShowButtons(true), 2000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  useEffect(() => {
    if (currentPage !== 0) {
      setShowGradients(false)
      setShowContent(false)
      
      const timer1 = setTimeout(() => setShowGradients(true), 100)
      const timer2 = setTimeout(() => setShowContent(true), 700)
      
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [currentPage])

  const handleNext = (): void => {
    if (currentPage < totalPages - 1) {
      setDirection(1)
      setCurrentPage((prev) => prev + 1)
    }
  }

  const handlePrev = (): void => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handlePageChange = (page: number): void => {
    setDirection(page > currentPage ? 1 : -1)
    setCurrentPage(page)
  }

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16'>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -20 }}
        transition={{ duration: 0.7 }}
        className='text-[#141219] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-center mb-3 sm:mb-4'
      >
        Blogs
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showHeader ? 1 : 0, y: showHeader ? 0 : -20 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='text-[#CD6028] text-base sm:text-lg md:text-xl lg:text-[24px] text-center mb-12 sm:mb-16 md:mb-20 px-4 leading-relaxed'
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br className='hidden sm:block' /> Lorem Ipsum has been the industry's standard.
      </motion.p>
      
      <div className='relative overflow-hidden min-h-[420px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[550px]'>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div 
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.3 }
            }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10'
          >
            {currentBlogs.map((blog, index) => (
              <BlogCard
                key={`${currentPage}-${index}`}
                blog={blog}
                index={index}
                showGradients={showGradients}
                showContent={showContent}
              />
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showButtons ? 1 : 0, y: showButtons ? 0 : 20 }}
          transition={{ duration: 0.7 }}
          className='flex items-center justify-center mt-10 sm:mt-12 md:mt-14 lg:mt-16 gap-4 sm:gap-5'
        >
          <NavigationButton 
            direction="prev" 
            onClick={handlePrev} 
            disabled={currentPage === 0} 
          />
          
          
          
          <NavigationButton 
            direction="next" 
            onClick={handleNext} 
            disabled={currentPage === totalPages - 1} 
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Blogs