import background from "../assets/animated-background.gif";
import ScrambledText from "./ui/ScrambleText";
export default function Hero() {
  return (
    <div
      className={
        "relative w-full h-full overflow-hidden flex items-end justify-start p-20"
      }
    >
      <div className="absolute hero-content flex flex-col items-start justify-center h-1/2 w-2/3 px-5 bg-red-300 text-white text-left">
        <h1>
          Grow With the <span className="text-green-400">Future</span> of
          Farming
        </h1>
        <ScrambledText
          className="cursor-pointer w-4/5"
          radius={10}
          duration={1.2}
          speed={0.5}
          scrambleChars={".:"}
        >
          DeHarvest is the decentralized gateway to agricultural investment,
          yield sharing, and farm-to-table commerce all powered by blockchain.
        </ScrambledText>

        <button className="cta-button">Airdrop</button>
      </div>

      <img
        src={background}
        alt="background video"
        className="z-0 object-cover h-full w-full opacity-60"
      />
    </div>
  );
}
