interface Category {
    id: number
    name: string
    icon: string
    bgImage: string
    gradient: string
  }
  
export const categories: Category[] = [
    {
      id: 1,
      name: "Art",
      icon: "/images/categories/icons/paintbrush.svg",
      bgImage: "/images/categories/art.svg",
      gradient: "from-purple-500/30 to-blue-500/30"
    },
    {
      id: 2,
      name: "Collectibles",
      icon: "/images/categories/icons/swatches.svg",
      bgImage: "/images/categories/collectibles.svg",
      gradient: "from-yellow-500/30 to-orange-500/30"
    },
    {
      id: 3,
      name: "Music",
      icon: "/images/categories/icons/musicnotes.svg",
      bgImage: "/images/categories/music.svg",
      gradient: "from-red-500/30 to-purple-500/30"
    },
    {
      id: 4,
      name: "Photography",
      icon: "/images/categories/icons/videocamera.svg",
      bgImage: "/images/categories/photography.svg",
      gradient: "from-green-500/30 to-blue-500/30"
    },
    {
      id: 5,
      name: "Video",
      icon: "/images/categories/icons/camera.svg",
      bgImage: "/images/categories/video.svg",
      gradient: "from-cyan-500/30 to-blue-500/30"
    },
    {
      id: 6,
      name: "Utility",
      icon: "/images/categories/icons/magicwand.svg",
      bgImage: '/images/categories/utility.svg',
      gradient: "from-orange-500/30 to-red-500/30"
    },
    {
      id: 7,
      name: "Sport",
      icon: "/images/categories/icons/basketball.svg",
      bgImage: '/images/categories/sport.svg',
      gradient: "from-blue-500/30 to-green-500/30"
    },
    {
      id: 8,
      name: "Virtual Worlds",
      icon: "/images/categories/icons/planet.svg",
      bgImage: '/images/categories/virtual.svg',
      gradient: "from-purple-500/30 to-pink-500/30"
    }
  ]