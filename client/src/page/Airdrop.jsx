import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Airdrop() {
  const { connected, publicKey } = useWallet();
  return (
    <div>
      <h1>Airdrop Page</h1>
    </div>
  );
}
