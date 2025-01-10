'use client'

import { motion } from 'framer-motion'
import { categories } from './data'
import Image from 'next/image'

export default function BrowseCategories() {
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
            className="text-4xl font-semibold text-white"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Browse Categories
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.div 
                className="relative h-[290px] rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Background Image with Blur */}
                <div className="absolute inset-0">
                  <Image
                    src={category.bgImage}
                    alt={category.name}
                    fill
                    className="object-cover filter blur-sm"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} mix-blend-overlay`} />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center">
                  {/* Icon Container with Glow Effect */}
                  <motion.div
                    className="flex-1 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute w-16 h-16 bg-white/20 rounded-full blur-lg"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Icon */}
                    <div className="relative w-2/3 h-2/3 transform transition-transform duration-300 group-hover:scale-110">
                      <Image 
                        src={category.icon} 
                        alt={category.name}
                        width={45}
                        height={45}
                        className="w-full h-full object-contain brightness-0 invert" // Makes icon pure white
                      />
                    </div>
                  </motion.div>

                  {/* Category Name */}
                  <div className="w-full bg-[#3B3B3B] backdrop-blur-sm py-4">
                    <motion.h3
                      className="text-xl font-semi-bold text-white text-center"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {category.name}
                    </motion.h3>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

