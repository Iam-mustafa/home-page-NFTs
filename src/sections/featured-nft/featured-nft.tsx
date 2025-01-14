'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import Mushroom from '../../../public/images/mushroom.png'
import Avatar from '../../../public/images/trendingCollection/shroomie.png'

export default function FeaturedNFT() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full relative overflow-hidden">
      <motion.div 
        className="relative h-[600px] sm:h-[550px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <Image
           src={Mushroom}
           alt="Magic Mushrooms NFT"
           fill
           quality={100}
           priority
           className="object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent" />

        {/* Content Container */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-7 sm:px-35 lg:px-40 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start sm:items-end">
              {/* Left Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Artist Tag */}
                <motion.div 
                  className="inline-flex items-center gap-[12px] bg-black backdrop-blur-sm rounded-[20px] px-[20px] py-[10px]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={Avatar}
                      alt="Shroomie"
                      fill
                      quality={100}
                      priority
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white text-[16px] font-normal ">Shroomie</span>
                </motion.div>

                {/* Title */}
                <motion.h1 
                  className="text-3xl sm:text-[51px] font-semibold text-white leading-[56.1px] capitalize sm:leading-[56.1px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  Magic Mashrooms
                </motion.h1>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className='hidden sm:block'
                >
                  <button 
                    className="flex justify-center items-center space-x-4 bg-[#FF7262] border-transparent border-2 hover:border-[#A259FF] hover:border-2 text-[#1A1A1A] text-sm font-bold rounded-full px-12 py-4"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    See NFT
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Content - Auction Timer */}
              <motion.div 
                className="bg-[#3B3B3B80] backdrop-blur-sm rounded-2xl px-6 py-5 w-auto sm:ml-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <p className="text-sm sm:text-xs text-white mb-4 sm:mb-2">Auction ends in:</p>
                <div className="grid grid-cols-3 gap-12 sm:gap-3">
                  <div className="text-start">
                    <p className="text-5xl sm:text-4xl font-mono font-bold text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:
                    </p>
                    <p className="text-white text-sm sm:text-xs">Hours</p>
                  </div>
                  <div className="text-start">
                    <p className="text-5xl sm:text-4xl font-mono font-bold text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}:
                    </p>
                    <p className="text-white text-sm sm:text-xs">Minutes</p>
                  </div>
                  <div className="text-start">
                    <p className="text-5xl sm:text-4xl font-mono font-bold text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </p>
                    <p className="text-white text-sm sm:text-xs">Seconds</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className='sm:hidden'
                >
                  <button 
                    className="flex justify-center items-center w-full space-x-4 bg-[#FF7262] border-transparent border-2 hover:border-[#A259FF] hover:border-2 text-[#1A1A1A] text-sm font-bold rounded-full px-2 py-3 sm:px-12 sm:py-4"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    See NFT
                  </button>
                </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

