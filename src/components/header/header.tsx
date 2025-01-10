'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Gamepad2, CodeSquare } from 'lucide-react'
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
    <header className="w-full bg-transparent py-5 sticky top-0 z-50">
      <div className="container mx-auto w-full px-2 md:px-12">
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
          <nav className="hidden md:flex items-center">
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
          <button className="flex justify-center items-center space-x-3 w-[18%] self-stretch bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-3 py-2 md:px-8 md:py-3 rounded-full transition-colors">
            <Gamepad2 className="w-5 h-5" />
            <span>Player Login</span>
          </button>
          <button className="flex justify-center items-center space-x-2 w-[18%] self-stretch bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-3 py-2 md:px-8 md:py-3 rounded-full transition-colors">
            <CodeSquare className="w-5 h-5" />
            <span className="whitespace-nowrap">Developer Login</span>
          </button>
        </div>
      </div>
    </header>
  )
}

