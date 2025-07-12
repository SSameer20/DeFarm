import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import { Card, StepCard } from "../components/ui/Card";
import "../styles/app.css";
import { airdropSteps, features } from "../utils/types";
function App() {
  return (
    <div className="w-scree min-h-screen">
      <Navigation />
      <div className="h-screen w-screen relative p-20">
        <Hero />
      </div>
      <div className="feature-section">
        <h2
          style={{
            textAlign: "center",
            // marginBottom: "0.5rem",
            color: "white",
            fontSize: "2rem",
            marginTop: "3rem",
            fontWeight: "bold",
          }}
        >
          Why Choose DeHarvest ?
        </h2>
        {features.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          );
        })}
        <p
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            color: "white",
            fontSize: "18px",
            opacity: "0.5",
          }}
        >
          Building the market place for the next generation of sustainable
          agriculture
        </p>
        <div className="features">
          {features.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
      {/* airdrop section */}
      <div className="airdrop-section">
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "2rem",
            marginTop: "3rem",
            fontWeight: "bold",
          }}
        >
          How to Participate in the Airdrop ?
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            color: "white",
            fontSize: "18px",
            opacity: "0.5",
          }}
        >
          Simple steps to Claim your DHAR tokens and join the agricultural
          revolution
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
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
        ;{/* CTA Button */}
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-3">
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
        ;
      </div>
      <Footer />
    </div>
  );
}

export default App;
