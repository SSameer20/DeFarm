import background from "../assets/animated-background.gif"; // Adjust the path as necessary
export default function Hero() {
  return (
    <div
      className={
        "relative w-full h-full overflow-hidden flex items-center justify-start p-20"
      }
    >
      <div className="absolute hero-content flex flex-col items-start justify-center h-1/2 w-1/2 px-5 bg-red-300 text-white text-center">
        <h1>
          Grow With the <span className="text-green-400">Future</span> of
          Farming
        </h1>
        <p>
          DeHarvest is the decentralized gateway to agricultural investment,
          yield sharing, and farm-to-table commerce all powered by blockchain.
        </p>
        <button className="cta-button">Airdrop</button>
      </div>
      <img
        src={background}
        alt="background video"
        className="z-0 object-cover h-full w-full"
      />
    </div>
  );
}
