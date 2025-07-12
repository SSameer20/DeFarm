import ScrambledText from "./ui/ScrambleText";
import background from "../assets/animated-background.gif";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex sm:items-center sm:justify-center  lg:items-end  lg:justify-start box-border">
      {/* Overlay Content */}
      <div
        className="flex flex-col items-center justify-center gap-6 z-10 px-6 py-12 
                      text-white sm:text-center 
                      sm:w-full sm:h-full 
                      md:w-4/5 md:h-auto 
                      lg:items-start lg:justify-start lg:text-left lg:w-1/2 lg:h-1/2 lg:mx-10"
      >
        {/* Heading */}
        <ScrambledText
          className="cursor-pointer font-bold lg:text-4xl sm:text-3xl md:text-4xl"
          radius={20}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Grow With the <span className="text-green-400">Future</span> of
          Farming
        </ScrambledText>

        {/* Description */}
        <ScrambledText
          className="cursor-pointer text-base sm:text-sm leading-relaxed"
          radius={20}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          DeHarvest is the decentralized gateway to agricultural investment,
          yield sharing and farm-to-table commerce all powered by blockchain.
        </ScrambledText>

        {/* Button */}
        <button className="mt-4 px-6 py-3 bg-green-500 hover:bg-green-600 transition-colors text-white rounded-lg shadow-md">
          Airdrop
        </button>
      </div>

      {/* Background */}
      <img
        src={background}
        alt="animated background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
      />
    </div>
  );
}
