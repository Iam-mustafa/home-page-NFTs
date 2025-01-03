'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {steps} from './data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const floatingElements = [
  { type: "star", className: "w-2 h-2 top-2 right-4" },
  { type: "circle", className: "w-2 h-2 bottom-4 left-4" },
  { type: "triangle", className: "w-3 h-3 top-1/2 right-2" }
]

export default function HowItWorks() {
  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto px-4 md:px-40">
        <motion.div 
          className="space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-xl text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Find Out How To Get Started
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="relative px-6 py-10 rounded-2xl bg-[#1A1A1A] group hover:bg-[#2A2A2A] transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Icon Container */}
              <motion.div 
                className="relative w-40 h-40 mx-auto mb-6"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Purple Gradient Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A259FF] to-[#377DF7] opacity-80" />
                
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#A259FF] blur-xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Floating Elements */}
                {floatingElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${element.className}`}
                    animate={{
                      y: [0, -4, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    {element.type === "star" && (
                      <div className="text-white text-xl">✦</div>
                    )}
                    {element.type === "circle" && (
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                    )}
                    {element.type === "triangle" && (
                      <div className="w-2 h-2 rounded-sm bg-white/50 rotate-45" />
                    )}
                  </motion.div>
                ))}

                {/* Icon */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="relative z-10"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semi-bold text-white group-hover:text-[#A259FF] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

