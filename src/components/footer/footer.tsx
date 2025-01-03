import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.png'
import discord from '../../../public/images/footer/DiscordLogo.svg'
import youtube from '../../../public/images/footer/YoutubeLogo.svg'
import twitter from '../../../public/images/footer/TwitterLogo.svg'
import instagram from '../../../public/images/footer/InstagramLogo.svg'

export function Footer() {
    return (
      <footer className="w-full bg-[#0F0F0F] py-16">
        <div className="container mx-auto px-4 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Logo and Social Section */}
            <div className="md:col-span-4">
              <div className="relative w-[219px] h-[62px]">
                <Image
                  src={logo}
                  alt="Pixpel"
                  width={180}
                  height={72}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 mb-3">Join our community</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image
                    src={discord}
                    alt="Discord"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image
                    src={youtube}
                    alt="YouTube"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image
                    src={twitter}
                    alt="Twitter"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
  
            {/* Explore Links */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold text-white mb-6">Explore</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    NFT Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    DEX
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Launchpad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Games
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Connect a Wallet
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Company Links */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-bold text-white mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">PIXPEL © 2024</p>
            <p className="text-gray-400">
              Pixpel LDA - Rua das Mercês, 41. 9000-224, Funchal, Madeira, Portugal
            </p>
          </div>
        </div>
      </footer>
    )
  }

