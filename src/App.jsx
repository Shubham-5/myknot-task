import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Slider from "./components/Slider";

function App() {
  return (
    <div className='App'>
      <Nav />
      <HeroSection />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
