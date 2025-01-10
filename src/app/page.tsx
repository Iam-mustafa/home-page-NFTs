import LayoutWrapper from "@/components/layout-wrapper/layout-wrapper";
import BrowseCategories from "@/sections/categories/categories";
import Hero from "@/sections/hero/hero";
import TopCreators from "@/sections/top-creators/top-creators";
import TrendingCollection from "@/sections/trending-collection/trending-collection";
import DiscoverNFTs from "@/sections/discover-nft/discover-nft";
import FeaturedNFT from "@/sections/featured-nft/featured-nft";
import HowItWorks from "@/sections/how-it-works/how-it-works";
import Digest from "@/sections/digest/digest";


export default function Home() {
  return (
    <main>
      <LayoutWrapper>
        <FeaturedNFT />
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories />
        <DiscoverNFTs />
        <HowItWorks />
        <Hero />
        <Digest />
      </LayoutWrapper>
    </main>
  )
}
