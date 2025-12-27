"use client"

import React,{useState,useRef,useEffect} from 'react'
import { useInView } from 'framer-motion'
import { BackgroundCircle, IndustriesHeader, IndustryCardsGrid } from '@/utils/industries/industries'
import Container from './Container'


const Industries: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setCardsVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <BackgroundCircle isVisible={isInView} cardsVisible={cardsVisible} />
      
      <Container>
        <div className="relative z-10 py-12 md:py-16">
        <IndustriesHeader isVisible={isInView} />
        <IndustryCardsGrid isVisible={cardsVisible} />
        
      </div>
      </Container>
    </div>
  )
}

export default Industries