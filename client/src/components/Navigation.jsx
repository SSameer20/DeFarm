import "../styles/navigation.css";
import { useAlert } from "../utils/context/AlertContext";

function Navigation() {
  const { showAlert } = useAlert();
  return (
    <nav className="glass-navbar">
      <div className="logo">DeHarvest</div>
      <ul className="nav-menu">
        {/* <GooeyNav
          items={navigationMenu}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        /> */}

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
