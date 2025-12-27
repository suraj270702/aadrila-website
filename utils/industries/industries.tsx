import React from 'react'
import { motion, useInView } from 'framer-motion'
import { BackgroundCircleProps, IndustryCard, IndustryCardProps } from '@/types/industries'


export const INDUSTRIES_DATA: IndustryCard[] = [
  {
    id: 1,
    title: 'Insurance',
    description: 'Automate claims processing with accurate document validation.',
    icon: '🛡️'
  },
  {
    id: 2,
    title: 'Lending',
    description: 'Ensure faster loan approvals with fraud detection and instant verification.',
    icon: '💳'
  },
  {
    id: 3,
    title: 'Healthcare',
    description: 'Streamline patient record management and ensure compliance with HIPAA standards',
    icon: '🏥'
  }
]


export const BackgroundCircle: React.FC<BackgroundCircleProps> = ({ isVisible, cardsVisible }) => {
  return (
    <motion.div 
      className="absolute top-10 md:top-20 -left-20 md:left-0 w-[200px] md:w-[300px] lg:w-auto"
      initial={{ x: -200, scale: 0.95, opacity: 0 }}
      animate={
        isVisible 
          ? cardsVisible 
            ? { x: 0, scale: 1, opacity: 0.3 } 
            : { x: 40, scale: 1, opacity: 0.3 }
          : { x: -200, scale: 0.95, opacity: 0 }
      }
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <img
        src="/assets/circle.png"
        alt="Industries Background"
        className="object-contain w-full"
      />
    </motion.div>
  )
}


export const IndustriesHeader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <motion.div 
      className="mb-12 md:mb-16 lg:mb-20 mt-8 md:mt-16 lg:mt-30"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 1 }}
    >
      <p className="text-base md:text-lg lg:text-[24px] font-bold text-[#CD6028] mb-2">
        AI-driven innovation for growth.
      </p>
      <h1 className="text-3xl md:text-4xl lg:text-[48px] font-semibold text-gray-900">
        Industries We Empower
      </h1>
    </motion.div>
  )
}

export const IndustryCardComponent: React.FC<IndustryCardProps> = ({ 
  industry, 
  index, 
  totalCards,
  isVisible 
}) => {
  return (
    <motion.div
      className="w-full md:w-auto"
      initial={{ x: 100, y: -50, opacity: 0 }}
      animate={isVisible ? { x: 0, y: 0, opacity: 1 } : { x: 100, y: -50, opacity: 0 }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut",
        delay: index * 0.2 
      }}
      whileHover={{ y: -8 }}
    >
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl flex items-center justify-center min-h-[280px] md:min-h-[320px] transition-shadow duration-300 border border-gray-100">
        <div className='flex items-center flex-col gap-y-3 md:gap-y-4'>
          <div className='flex items-center justify-center w-12 h-12 md:w-16 md:h-16'>
            <img src="assets/health_care_icon.svg" alt={industry.title} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl md:text-2xl lg:text-[24px] font-semibold text-[#141219] text-center">
            {industry.title}
          </h3>
          <p className="text-[#696969] text-sm md:text-base lg:text-[16px] font-medium text-center leading-relaxed">
            {industry.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export const IndustryCardsGrid: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <>
      {/* Mobile & Tablet: Vertical Stack */}
      <div className="block xl:hidden space-y-6 md:space-y-8">
        {INDUSTRIES_DATA.map((industry, index) => (
          <IndustryCardComponent
            key={industry.id}
            industry={industry}
            index={index}
            totalCards={INDUSTRIES_DATA.length}
            isVisible={isVisible}
          />
        ))}
      </div>

      {/* Desktop: Diagonal Ladder Layout */}
      <div className="hidden xl:flex justify-end mt-0">
        <div className="relative" style={{ width: 'fit-content', minHeight: '600px' }}>
          {INDUSTRIES_DATA.map((industry, index) => (
            <motion.div
              key={industry.id}
              className="absolute"
              style={{
                top: `${index * 120}px`,
                right: `${index * 420}px`,
                zIndex: INDUSTRIES_DATA.length - index
              }}
              initial={{ x: 100, y: -50, opacity: 0 }}
              animate={isVisible ? { x: 0, y: 0, opacity: 1 } : { x: 100, y: -50, opacity: 0 }}
              transition={{ 
                duration: 0.7, 
                ease: "easeOut",
                delay: index * 0.2 
              }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl flex items-center justify-center min-h-[320px] min-w-[320px] transition-shadow duration-300 w-80 border border-gray-100">
                <div className='flex items-center flex-col gap-y-[16px]'>
                  <div className='flex items-center justify-center'>
                    <img src="assets/health_care_icon.svg" alt={industry.title} />
                  </div>
                  <h3 className="text-[24px] font-semibold text-[#141219] text-center">
                    {industry.title}
                  </h3>
                  <p className="text-[#696969] text-[16px] font-medium text-center">
                    {industry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export const DecorativeDots: React.FC = () => {
  return (
    <div className='hidden lg:block absolute -bottom-[100%] right-0 opacity-50'>
      <img src="/assets/dots.png" alt="Decorative dots" className="w-32 lg:w-auto" />
    </div>
  )
}