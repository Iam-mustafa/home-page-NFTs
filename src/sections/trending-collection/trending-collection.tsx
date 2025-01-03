'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { collections } from './data'

export default function TrendingCollection() {

    return (
        <section className="w-full py-24 relative">
            <div className="container mx-auto px-4 md:px-40 relative">
                {/* Header */}
                <motion.div
                    className="mb-16 space-y-4"
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
                        Trending Collection
                    </motion.h2>
                    <motion.p
                        className="text-xl text-white"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Checkout Our Weekly Updated Trending Collection.
                    </motion.p>
                </motion.div>

                {/* Collections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            {/* Hover Border Effect */}
                            <motion.div
                                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: "linear-gradient(45deg, rgba(162, 89, 255, 0.4), rgba(55, 125, 247, 0.4))",
                                    filter: "blur(8px)",
                                }}
                            />

                            <motion.div
                                className="relative space-y-4 bg-[#1A1A1A] p-4 rounded-2xl"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {/* Main Image */}
                                <motion.div
                                    className="relative aspect-square rounded-xl overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <Image
                                        src={collection.mainImage}
                                        alt={collection.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Thumbnails and Count */}
                                <div className="flex gap-4">
                                    {collection.thumbnails.map((thumb, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="relative w-24 h-24 rounded-xl overflow-hidden"
                                            whileHover={{ scale: 1.05, rotate: 2 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        >
                                            <Image
                                                src={thumb}
                                                alt={`${collection.title} thumbnail ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        className="flex items-center justify-center w-24 h-24 rounded-xl bg-[#A259FF]"
                                        whileHover={{ scale: 1.05, rotate: -2 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <span className="text-white font-bold">{collection.count}</span>
                                    </motion.div>
                                </div>

                                {/* Collection Info */}
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h3 className="text-xl font-bold text-white">{collection.title}</h3>
                                    <div className="flex items-center space-x-2">
                                        <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                            <Image
                                                src={collection.creator.avatar}
                                                alt={collection.creator.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="text-white/80">{collection.creator.name}</span>
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

