import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DifferentiationSection from "./components/DifferentiationSection";
import PhilosophySection from "./components/PhilosophySection";
import PresenciaSection from "./components/PresenciaSection";
import EcosistemaSection from "./components/EcosistemaSection";
import AboutSection from "./components/AboutSection";
import PhilosophyMainSection from "./components/PhilosophyMainSection";
import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import PackagesSection from "./components/PackagesSection";
import MethodologySection from "./components/MethodologySection";
import TransparencySection from "./components/TransparencySection";
import JobSection from "./components/JobSection";
import ContactSection from "./components/ContactSection";
import SocialFeedSection from "./components/SocialFeedSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <DifferentiationSection />
      <PhilosophySection />
      <PresenciaSection />
      <EcosistemaSection />
      <AboutSection />
      <PhilosophyMainSection />
      <ServicesSection />
      <MapSection />
      <PackagesSection />
      <MethodologySection />
      <TransparencySection />
      <JobSection />
      <SocialFeedSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
