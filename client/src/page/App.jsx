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

      <div className="features">
        <h2
          style={{
            gridColumn: "1/-1",
            textAlign: "center",
            marginBottom: "2rem",
            color: "white",
            fontSize: "2rem",
          }}
        >
          Platform Features
        </h2>
        {
          features.map((item, index) => {
            return <Card key={index} title={item.title} description={item.description}/>
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
