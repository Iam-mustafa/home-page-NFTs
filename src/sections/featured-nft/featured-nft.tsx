'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import Mushroom from '../../../public/images/trendingCollection/mushroom.png'
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
        className="relative h-[600px] md:h-[550px] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <Image
          src={Mushroom}
          alt="Magic Mushrooms NFT"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF] to-transparent" />

        {/* Content Container */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-40 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-end">
              {/* Left Content */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Artist Tag */}
                <motion.div 
                  className="inline-flex items-center space-x-4 bg-black backdrop-blur-sm rounded-full px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={Avatar}
                      alt="Shroomie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white font-medium">Shroomie</span>
                </motion.div>

                {/* Title */}
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold text-white"
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
                >
                  <button 
                    className="flex items-center space-x-4 bg-white hover:bg-white/90 text-black text-sm font-bold rounded-full px-8 py-4"
                  >
                    <Eye className="mr-2 h-5 w-5 text-[#A259FF]" />
                    See NFT
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Content - Auction Timer */}
              <motion.div 
                className="bg-[#3B3B3B80] backdrop-blur-sm rounded-2xl px-6 py-5 w-[270px] ml-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                <p className="text-xs text-white mb-2">Auction ends in:</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-start">
                    <p className="text-4xl font-mono font-bold text-white">
                      {String(timeLeft.hours).padStart(2, '0')}:
                    </p>
                    <p className="text-white text-xs">Hours</p>
                  </div>
                  <div className="text-start">
                    <p className="text-4xl font-mono font-bold text-white">
                      {String(timeLeft.minutes).padStart(2, '0')}:
                    </p>
                    <p className="text-white text-xs">Minutes</p>
                  </div>
                  <div className="text-start">
                    <p className="text-4xl font-mono font-bold text-white">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </p>
                    <p className="text-white text-xs">Seconds</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

