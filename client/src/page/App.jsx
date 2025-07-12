import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Card from "../components/ui/Card";
import "../styles/app.css";
import { features } from "../utils/types";
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
      <Footer />
    </div>
  );
}

export default App;
