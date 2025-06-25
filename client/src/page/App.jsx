import Navigation from "../components/Navigation";
import background from "../assets/background.jpg";
import "../styles/app.css";
function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Grow With the Future of Farming</h1>
          <p>
            DeHarvest is the decentralized gateway to agricultural investment,
            yield sharing, and farm-to-table commerce all powered by blockchain.
          </p>
          <button className="cta-button">Airdrop</button>
        </div>
      </div>
      <div className="features">
        <h2
          style={{
            gridColumn: "1/-1",
            textAlign: "center",
            marginBottom: "2rem",
            color: "black",
            fontSize: "2rem",
          }}
        >
          Platform Features
        </h2>
        <div className="feature">
          <h2>🔐 Wallet Authentication</h2>
          <p>
            Securely log in using Phantom or other supported wallets to manage
            your DeHarvest experience.
          </p>
        </div>
        <div className="feature">
          <h2>💸 Stake $DHAR Tokens</h2>
          <p>
            Support real-world sustainable farming by staking your $DHAR tokens
            and earn yield from crop profits.
          </p>
        </div>
        <div className="feature">
          <h2>📈 Farming Yield Dashboard</h2>
          <p>
            Track real-time crop performance, revenue generated, and
            distribution metrics — all transparently recorded on-chain.
          </p>
        </div>
        <div className="feature">
          <h2>🗳️ DAO Governance</h2>
          <p>
            Vote on farming strategies, crop types, and ecosystem upgrades
            through our decentralized DAO mechanism.
          </p>
        </div>
        <div className="feature">
          <h2>🛒 Agro Marketplace</h2>
          <p>
            Buy organic, blockchain-verified produce using $AGRO tokens at
            discounted rates — straight from the farm to your wallet.
          </p>
        </div>
        <div className="feature">
          <h2>🧾 On-Chain Transparency</h2>
          <p>
            From seed to sale, every transaction, yield, and distribution is
            recorded on-chain for full transparency and traceability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
