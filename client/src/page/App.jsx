import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import { Card, StepCard } from "../components/ui/Card";
import "../styles/app.css";
import { useAlert } from "../utils/context/AlertContext";
import { airdropSteps, features } from "../utils/types";

function App() {
  const { showAlert } = useAlert();
  return (
    <div className="w-scree min-h-screen">
      <Navigation />
      <div className="hero-section min-h-[100vh] w-screen relative">
        <Hero />
      </div>

      {/* Feature Section */}
      <div className="relative w-full flex flex-col justify-center items-center px-4 py-16 bg-[#0f1117]">
        <h2 className="text-center text-white font-bold text-2xl sm:text-3xl lg:text-[2rem] mt-12 mb-4">
          Why Choose DeHarvest?
        </h2>
        <p className="text-center text-white text-base sm:text-lg opacity-60 mb-8 max-w-xl">
          Building the marketplace for the next generation of sustainable and
          decentralized agriculture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {features.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>

      {/* airdrop section */}
      <div className="w-full flex flex-col items-center justify-center px-4 py-20 gap-12 bg-black">
        <div className="text-center max-w-xl">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Easy Airdrop Process
          </h2>
          <p className="text-white text-base sm:text-lg opacity-60">
            Simple steps to Claim your DHAR tokens and join the agricultural
            revolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {airdropSteps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={step.number}
              title={step.title}
              description={step.description}
              bgColor={step.bgColor}
            />
          ))}
        </div>

        <div className="mt-8">
          <button
            className="cta-button flex items-center gap-2 text-white px-6 py-3 rounded bg-green-500 hover:bg-green-600"
            onClick={() => showAlert("Airdrop starts soon", "info")}
          >
            Start Now
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;
