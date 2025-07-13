import "../styles/navigation.css";
import { useAlert } from "../utils/context/AlertContext";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

function Navigation() {
  const { showAlert } = useAlert();
  return (
    <nav className="glass-navbar">
      <div className="logo">DeHarvest</div>
      <ul className="nav-menu">
        <WalletMultiButton
          className="connect-btn"
          style={{ backgroundColor: "#28a745" }}
          onClick={() =>
            showAlert("wallet connection will enable soon", "info")
          }
        ></WalletMultiButton>
      </ul>
    </nav>
  );
}

export default Navigation;
