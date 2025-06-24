import Navigation from "../component/Navigation";
import "../styles/app.css";
import background from "../media/background.jpg";

function App() {
  return (
    <div className="app">
      <Navigation />
      <img src={background} alt="bg" className="hero-background" />
    </div>
  );
}

export default App;
