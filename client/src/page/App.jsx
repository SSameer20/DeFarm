import Navigation from "../components/Navigation";
import background from "../assets/background.jpg";
import "../styles/app.css";
function App() {
  return (
    <div className="app">
      <Navigation />
      <img src={background} alt="bg" className="hero-background" />
    </div>
  );
}

export default App;
