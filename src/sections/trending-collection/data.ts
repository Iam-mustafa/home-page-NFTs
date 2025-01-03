// import { Dog } from "../../../public/images/trendingCollection/dog.png"
interface CollectionCreator {
    avatar: string
    name: string
  }
  
  interface Collection {
    id: number
    title: string
    mainImage: string
    thumbnails: string[]
    count: string
    creator: CollectionCreator
  }
export const collections: Collection[] = [
    {
      id: 1,
      title: "DSGN Animals",
      mainImage: "/images/trendingCollection/dog.png",
      thumbnails: [
        "/images/trendingCollection/cat.png",
        "/images/trendingCollection/coatdog.png",
      ],
      count: "1025+",
      creator: {
        avatar: "/images/trendingCollection/mrfox.png",
        name: "MrFox"
      }
    },
    {
      id: 2,
      title: "Magic Mushrooms",
      mainImage: "/images/trendingCollection/mushroom.png",
      thumbnails: [
        "/images/trendingCollection/mushroomsmall.png",
        "/images/trendingCollection/mushroomsmall.png",
      ],
      count: "1025+",
      creator: {
        avatar: "/images/trendingCollection/shroomie.png",
        name: "Shroomie"
      }
    },
    {
      id: 3,
      title: "Disco Machines",
      mainImage: "/images/trendingCollection/astrobot.png",
      thumbnails: [
        "/images/trendingCollection/astrobotsmall.png",
        "/images/trendingCollection/astrobotsmall1.png",
      ],
      count: "1025+",
      creator: {
        avatar: "/images/trendingCollection/bekind2robots.png",
        name: "BeKind2Robots"
      }
    }
  ]