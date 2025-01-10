import Image from "next/image";
import { FileText, Rocket } from "lucide-react";
import Logo from "../../../public/images/hero.svg";
import Avatar from "../../../public/images/avatar.png";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="container mx-auto px-4 md:px-40 relative pt-5 md:pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white/90 leading-tight">
              Crypto Games
              <br className="h-1" />
              Safe & Fun
            </h1>
            <p className="text-lg text-white max-w-2xl leading-relaxed">
              Pixpel Was Created To Provide All-Around Services For The Crypto Games Community, Where Game Developers And Players Have A Place To Connect, Invest, And Play.
            </p>
            <p className="text-lg text-white">
              If You Want To Know More About Us, Please Check Out Our Deck.
            </p>
            <div className="flex justify-center sm:justify-start flex-wrap gap-8">
              <button className="flex items-center space-x-3 bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-8 md:px-10 py-4 rounded-full transition-all">
                <FileText className="w-5 h-5" />
                <span>White Paper</span>
              </button>
              <button className="flex items-center space-x-3 bg-gradient-to-r from-[#A259FF] to-[#377DF7] hover:from-transparent hover:to-transparent border-[#A259FF] border-2 text-white px-8 md:px-10 py-4 rounded-full transition-all">
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">240k+</h3>
                <p className="text-white/60">Total Sale</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">100k+</h3>
                <p className="text-white/60">Auctions</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">240k+</h3>
                <p className="text-white/60">Artists</p>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="relative h-[580px] w-full rounded-2xl overflow-hidden hiden flex-col lg:flex">
            {/* Image */}
            <div className="relative flex-grow">
              <Image
                src={Logo}
                alt="Space Walking"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
            
          {/* Text Container */}
          <div className="h-[109px] w-full bg-black space-y-2 px-6 py-5">
              <h3 className="text-lg font-semibold text-white">
                Space Walking
              </h3>
              <div className="flex items-center space-x-2">
                <Image
                  src={Avatar}
                  alt="Animakid"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-white/80">Animakid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
