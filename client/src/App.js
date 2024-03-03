import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Pisite from "./components/Pisite";
import Sheet from "./components/Sheet";
import SocialMedias from "./components/SocialMedias";

function App() {
  return (
    <div className="App">
      <MobileNavbar />
      <SocialMedias />
      <Navbar />
      <Hero />
      <Info />
      <Sheet />
      <About />
      <Pisite />
      <Footer />
    </div>
  );
}

export default App;
