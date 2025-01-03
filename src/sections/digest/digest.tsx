'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className="w-full py-24 relative">
      <div className="container mx-auto px-4 md:px-40">
        <motion.div 
          className="relative rounded-2xl overflow-hidden bg-[#2A2A2A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Image Section */}
            <motion.div 
              className="relative h-[300px] md:h-[300px] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/astronaut.svg"
                alt="Astronaut reading newspaper"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <div className="flex flex-col justify-center pt-6 space-y-6 md:px-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Join Our Weekly Digest
                </h2>
                <p className="text-xl text-white">
                  Get Exclusive Promotions & Updates Straight To Your Inbox.
                </p>
              </motion.div>

              {/* Subscribe Form */}
              <motion.form 
                onSubmit={handleSubmit}
                className="relative h-[50px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email here"
                    className="w-full h-1/2 px-4 py-4 rounded-full bg-white text-black placeholder:text-black placeholder:text-sm md:placeholder:text-lg"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="absolute w-[45%] right-0 top-0 bottom-0 px-4 md:px-6 bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-white hover:to-white hover:text-[#A259FF] border-2 border-[#A259FF] text-white rounded-full flex items-center justify-center space-x-3 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span>Subscribe</span>
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

