import {
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaGithub,
} from "react-icons/fa6";

import Market from "../assets/marketplace.png";
import DAO from "../assets/dao.png";
import WalletAuthentication from "../assets/wallet-authentication.png";

export const features = [
  {
    title: "Wallet Authentication",
    description:
      "Securely log in using Phantom or other supported wallets to manage your DeHarvest experience.",
    image: WalletAuthentication,
  },

  {
    title: "DAO Governance",
    description:
      "Vote on farming strategies, crop types, and ecosystem upgrades through our decentralized DAO mechanism.",
    image: DAO,
  },
  {
    title: "Agro Marketplace",
    description:
      "Buy organic, blockchain-verified produce using DHAR tokens at discounted rates",
    image: Market,
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
    url: "https://www.instagram.com/deharvest.official",
    icon: FaInstagram,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/99176972/",
    icon: FaLinkedinIn,
  },
  {
    name: "Discord",
    url: "https://discord.gg/SkE8mZ87",
    icon: FaDiscord,
  },
  {
    name: "Github",
    url: "https://github.com/0xLabs-org/DeHarvest",
    icon: FaGithub,
  },
];

export const airdropSteps = [
  {
    number: "1",
    title: "Connect Wallet",
    description: "Connect your Solana wallet like Phantom or Sollet",
    bgColor: "bg-green-200",
  },
  {
    number: "2",
    title: "Complete Tasks",
    description: "Follow our social media and verify your participation",
    bgColor: "bg-teal-200",
  },
  {
    number: "3",
    title: "Claim Tokens",
    description: "Receive tokens directly to your wallet",
    bgColor: "bg-lime-200",
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
