import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Dostupnost from "./components/Dostupnost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Pisite from "./components/Pisite";
import Sheet from "./components/Sheet";
import SocialMedias from "./components/SocialMedias";
import Admin from "./components/Admin";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Dostupnost />
            <MobileNavbar />
            <SocialMedias />
            <Navbar />
            <Hero />
            <Info />
            <Sheet />
            <About />
            <Pisite />
            <Footer />
          </>
        } />
        
        <Route path="/admin-login" element={<Login />} />
        <Route path="/specijalna-ruta-za-admina" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
