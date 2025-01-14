'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Gamepad2, CodeSquare, Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import Logo from '../../../public/images/logo.png'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import discord from '../../../public/images/footer/DiscordLogo.svg'
import youtube from '../../../public/images/footer/YoutubeLogo.svg'
import twitter from '../../../public/images/footer/TwitterLogo.svg'
import instagram from '../../../public/images/footer/InstagramLogo.svg'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#games', label: 'Games' },
    { href: '#dex', label: 'DEX' },
    { href: '#launchpad', label: 'Launchpad' },
  ]

  const moreItems = [
    { href: '#get-in-touch', label: 'Get in touch' },
    { href: '#voting', label: 'Voting' },
    { href: '#documents', label: 'Documents' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#merchandise', label: 'Merchandise' },
  ]
  return (
    <header className="w-full bg-transparent py-5 sticky top-0 z-50">
      <div className="container mx-auto w-full px-2 xl:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Pixpel"
              width={180}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center bg-[#1A1A1A] rounded-full px-2">
              {/* <Link
                href="#nftmarketplace"
                onClick={(e) => scrollToSection(e, 'nftmarketplace')}
                className="text-gray-300 hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                NFT Marketplace
              </Link> */}
              <Link
                href="#games"
                onClick={(e) => scrollToSection(e, 'games')}
                className="text-white hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                Games
              </Link>
              <Link
                href="#dex"
                onClick={(e) => scrollToSection(e, 'dex')}
                className="text-white hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                DEX
              </Link>
              <Link
                href="#launchpad"
                onClick={(e) => scrollToSection(e, 'launchpad')}
                className="text-white hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                Launchpad
              </Link>
              <Link
                href="#connectwallet"
                onClick={(e) => scrollToSection(e, 'connectwallet')}
                className="text-white hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                Connect a wallet
              </Link>
            </div>
          </nav>

          {/* Sign Up Button */}
          <button className="hidden lg:flex justify-center items-center space-x-3 self-stretch bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-3 py-2 md:px-8 md:py-3 rounded-full transition-colors">
            <Gamepad2 className="w-5 h-5" />
            <span className="text-base">Player Login</span>
          </button>
          <button className="hidden lg:flex justify-center items-center space-x-2 self-stretch bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-3 py-2 md:px-8 md:py-3 rounded-full transition-colors">
            <CodeSquare className="w-5 h-5" />
            <span className="text-base">Developer Login</span>
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 top-0 right-0 w-full h-full bg-black z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full p-6">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="self-end text-white p-2"
                >
                  <X size={24} />
                </button>

                {/* Connect Wallet Button */}
                <button className="w-2/3 sm:w-1/3 self-end bg-white border border-white/20 text-black rounded-full py-2 px-4 mb-6">
                  Connect Wallet
                </button>

                {/* Login Buttons */}
                <div className="space-y-3 mb-8">
                  <button className="w-2/3 sm:w-1/3 flex justify-self-end justify-center items-center space-x-2 bg-[#A259FF] hover:bg-[#A259FF]/90 text-white rounded-full py-2 px-4">
                    <Gamepad2 className="w-5 h-5" />
                    <span>Player Log in</span>
                  </button>
                  <button className="w-2/3 sm:w-1/3 flex justify-self-end justify-center items-center space-x-2 bg-[#A259FF] hover:bg-[#A259FF]/90 text-white rounded-full py-2 px-4">
                    <CodeSquare className="w-5 h-5" />
                    <span>Developer Log in</span>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-4 justify-items-end">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={(e) => scrollToSection(e, item.href.slice(1))}
                          className="text-white hover:text-[#A259FF] transition-colors block py-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}

                    {/* More Section */}
                    <li>
                      <button
                        onClick={() => setIsMoreOpen(!isMoreOpen)}
                        className="text-white transition-colors w-full flex items-center justify-between py-2"
                      >
                        <span>More</span>
                        {isMoreOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                      <AnimatePresence>
                        {isMoreOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {moreItems.map((item) => (
                              <motion.li
                                key={item.href}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -10, opacity: 0 }}
                              >
                                <Link
                                  href={item.href}
                                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                                  className="text-white/70 hover:text-[#A259FF] transition-colors block py-2"
                                >
                                  {item.label}
                                </Link>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  </ul>
                </nav>

                {/* Social Links */}
                <div className="flex justify-end space-x-6 pt-6 border-t border-white/10">
                  <Link href="#" className="text-white/60 hover:text-white">
                    <Image src={discord} alt="Discord" width={24} height={24} />
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-white">
                    <Image src={twitter} alt="Twitter" width={24} height={24} />
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-white">
                    <Image src={instagram} alt="Instagram" width={24} height={24} />
                  </Link>
                  <Link href="#" className="text-white/60 hover:text-white">
                    <Image src={youtube} alt="YouTube" width={24} height={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}

