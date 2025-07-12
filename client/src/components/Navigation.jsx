import "../styles/navigation.css";
import { useAlert } from "../utils/context/AlertContext";

function Navigation() {
  const { showAlert } = useAlert();
  return (
    <nav className="glass-navbar">
      <div className="logo">DeHarvest</div>
      <ul className="nav-menu">
        <button
          className="connect-btn"
          onClick={() =>
            showAlert("wallet connection will enable soon", "info")
          }
        >
          Connect
        </button>

      </ul>
    </nav>
  );
}

export default Navigation;
