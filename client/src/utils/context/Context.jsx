import { AlertProvider } from "./AlertContext";
import { WalletAdapterProvider } from "./WalletAdapters";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function Context({ children }) {
  return (
    <>
      <WalletAdapterProvider>
        <AlertProvider>{children}</AlertProvider>
      </WalletAdapterProvider>
    </>
  );
}
