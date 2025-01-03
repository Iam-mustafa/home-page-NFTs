interface Step {
    id: number
    title: string
    description: string
    icon: string
  }
  
  export const steps: Step[] = [
    {
      id: 1,
      title: "Setup Your Wallet",
      description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
      icon: "/images/howItWorks/setup.svg"
    },
    {
      id: 2,
      title: "Create Collection",
      description: "Upload your work and setup your collection. Add a description, social links and floor price.",
      icon: "/images/howItWorks/collection.svg"
    },
    {
      id: 3,
      title: "Start Earning",
      description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      icon: "/images/howItWorks/earning.svg"
    }
  ]