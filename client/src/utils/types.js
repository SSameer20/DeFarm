import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaGithub,
} from "react-icons/fa6";
export const features = [
  {
    title: "Wallet Authentication",
    description:
      "Securely log in using Phantom or other supported wallets to manage your DeHarvest experience.",
  },

  {
    title: "DAO Governance",
    description:
      "Vote on farming strategies, crop types, and ecosystem upgrades through our decentralized DAO mechanism.",
  },
  {
    title: "Agro Marketplace",
    description:
      "Buy organic, blockchain-verified produce using $AGRO tokens at discounted rates — straight from the farm to your wallet.",
  },
];

export const navigationMenu = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/deharvest_",
    icon: FaInstagram,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/99176972/",
    icon: FaLinkedinIn,
  },
  {
    name: "Discord",
    link: "https://discord.gg/SkE8mZ87",
    icon: FaDiscord,
  },
  {
    name: "Github",
    link: "https://github.com/0xLabs-org/DeHarvest",
    icon: FaGithub,
  },
];

export const airdropSteps = [
  {
    number: "1",
    title: "Connect Wallet",
    description:
      "Connect your Solana wallet (Phantom, Solflare, or compatible)",
    bgColor: "bg-green-200",
  },
  {
    number: "2",
    title: "Complete Tasks",
    description:
      "Follow our social media, join Discord, and verify your participation",
    bgColor: "bg-teal-200",
  },
  {
    number: "3",
    title: "Claim Tokens",
    description: "Receive your 2,500 HARVEST tokens directly to your wallet",
    bgColor: "bg-lime-200",
  },
];
