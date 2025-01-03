'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Rocket } from 'lucide-react'
import Logo from '../../../public/images/logo.png'

export function Header() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <header className="w-full bg-black/90 py-4 sticky top-0 z-50">
      <div className="container mx-1 px-2 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Pixpel"
              width={150}
              height={100}
              className="object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-[#1A1A1A] rounded-full px-2">
              <Link
                href="#nftmarketplace"
                onClick={(e) => scrollToSection(e, 'nftmarketplace')}
                className="text-gray-300 hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                NFT Marketplace
              </Link>
              <Link
                href="#dex"
                onClick={(e) => scrollToSection(e, 'dex')}
                className="text-gray-300 hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                DEX
              </Link>
              <Link
                href="#launchpad"
                onClick={(e) => scrollToSection(e, 'launchpad')}
                className="text-gray-300 hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                Launchpad
              </Link>
              <Link
                href="#games"
                onClick={(e) => scrollToSection(e, 'games')}
                className="text-gray-300 hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                Games
              </Link>
              <Link
                href="#connectwallet"
                onClick={(e) => scrollToSection(e, 'connectwallet')}
                className="text-gray-300 hover:text-[#A259FF] transition-colors px-4 py-2"
              >
                Connect a wallet
              </Link>
            </div>
          </nav>

          {/* Sign Up Button */}
          <button className="flex items-center space-x-3 bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-3 py-2 md:px-8 md:py-3 rounded-full transition-colors">
          <Rocket className="w-4 h-4" />
          <span>Get Started</span>
          </button>
        </div>
      </div>
    </header>
  )
}

