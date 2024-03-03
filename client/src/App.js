import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Sheet from "./components/Sheet";
import SocialMedias from "./components/SocialMedias";

function App() {
  return (
    <div className="App">
      <SocialMedias />
      <Navbar />
      <Hero />
      <Info />
      <Sheet />
    </div>
  );
}

export default App;
