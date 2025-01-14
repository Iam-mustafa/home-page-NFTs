'use client'

import { motion } from 'framer-motion'
import { RocketIcon } from 'lucide-react'
import Image from 'next/image'
import {creators} from './data'

export default function TopCreators() {
    return (
        <section className="w-full py-24 relative">
            <div className="container mx-auto px-7 sm:px-35 lg:px-40">
                <div className="flex justify-between items-start mb-16">
                    <motion.div
                        className="space-y-4 w-2/3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-semibold text-white"
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Top Creators
                        </motion.h2>
                        {/* <motion.p
                            className="text-xl text-white"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Checkout Top Rated Creators On The NFT Marketplace
                        </motion.p> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            className="hidden sm:flex justify-center items-center space-x-2 bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-2 border-[#A259FF] text-white test-xs md:text-md rounded-full px-5 md:px-10 py-3"
                        >
                            <RocketIcon className="h-5 w-6 mr-2" />
                            View Rankings
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {creators.map((creator, index) => (
                        <motion.div
                            key={creator.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            {/* Hover Glow Effect */}
                            <motion.div
                                className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "linear-gradient(45deg, rgba(162, 89, 255, 0.4), rgba(55, 125, 247, 0.4))",
                                    filter: "blur(8px)",
                                }}
                            />

                            <motion.div
                                className="relative p-6 bg-[#202020] rounded-2xl group-hover:bg-[#717171] transition-colors duration-300 
                                [box-shadow:11.933px_-11.933px_11.933px_rgba(45,45,45,0.1)_inset,_-11.933px_11.933px_11.933px_rgba(255,255,255,0.1)_inset] 
                                [backdrop-filter:blur(11.933px)]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {/* Rank Number */}
                                <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center bg-[#1A1A1A] group-hover:bg-[black] rounded-full">
                                    <span className="text-white/80 text-sm font-medium">{creator.rank}</span>
                                </div>

                                {/* Avatar */}
                                <motion.div
                                    className="relative w-24 h-24 mx-auto mb-4"
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={creator.avatar}
                                            alt={creator.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Avatar Glow */}
                                    <motion.div
                                        className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{
                                            background: "linear-gradient(45deg, rgba(162, 89, 255, 0.2), rgba(55, 125, 247, 0.2))",
                                            filter: "blur(10px)",
                                        }}
                                    />
                                </motion.div>

                                {/* Creator Info */}
                                <motion.div
                                    className="text-center space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-xl font-bold text-white transition-colors duration-300">
                                        {creator.name}
                                    </h3>
                                    <div className="flex items-center justify-center space-x-1 text-[#A0A0A0]">
                                        <span>Total Sales:</span>
                                        <span className="font-medium text-white">{creator.totalSales}</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

