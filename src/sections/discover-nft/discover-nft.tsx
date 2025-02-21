'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye } from 'lucide-react'
import Space  from '../../../public/images/discovernft/space.svg'
import Sky  from '../../../public/images/discovernft/sky.svg'
import Astronaut  from '../../../public/images/discovernft/astronaut.svg'

interface NFT {
    id: number
    image: string
}

const nfts: NFT[] = [
    {
        id: 1,
        image: Space,
    },
    {
        id: 2,
        image: Sky,
    },
    {
        id: 3,
        image: Astronaut,
    }
]

export default function DiscoverNFTs() {
    return (
        <section className="w-full py-24 relative">
            <div className="container mx-auto px-4 md:px-15">
                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                    <motion.div
                        className="space-y-4 w-full sm:w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h2
                            className="text-3xl lg:text-4xl font-semibold text-white"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Discover More NFTs
                        </motion.h2>
                        <motion.p
                            className="text-base lg:text-xl text-white"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Explore New Trending NFTs
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <button
                            className="hidden sm:flex justify-center items-center space-x-3 bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-2 border-[#A259FF] text-white rounded-full px-10 py-3"
                        >
                            <Eye className="mr-2 h-5 w-5" />
                            See All
                        </button>
                    </motion.div>
                </div>

                {/* NFT Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nfts.map((nft, index) => (
                        <motion.div
                        key={nft.id}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <motion.div
                          className="relative rounded-2xl overflow-hidden h-[440px]"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {/* Image */}
                          <Image
                            src={nft.image}
                            alt={"NFT Name"}
                            fill
                            className="object-full"
                          />
          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:to-black/70 transition-all duration-300" />
          
                          {/* Content Overlay */}
                          <div className="absolute inset-0 px-7 py-3 h-1/4 flex flex-col self-end justify-end bg-[#3b3b3b] mix-blend-screen group-hover:bg-[#3b3b3b] group-hover:mix-blend-normal">
                            {/* Price Info */}
                            <div className="flex justify-between items-center text-white mb-1">
                            <div>
                                            <p className="text-xs text-white/60 mb-1">Price</p>
                                            <p className="text-base font-mono text-white">
                                                1.63 ETH
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/60 mb-1">Highest Bid</p>
                                            <p className="text-base font-mono text-white">
                                                0.33 wETH
                                            </p>
                                        </div>
                            </div>
          
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-3">
                            NFT Name
                            </h3>
          
                            {/* Artist */}
                            {/* <div className="flex items-center space-x-2">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                  src={nft.image}
                                  alt={"NFT Name"}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <span className="text-white/90 font-mono">
                                NFT Name
                              </span>
                            </div> */}
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

