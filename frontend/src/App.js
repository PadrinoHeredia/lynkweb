import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QueHacemosSection from "./components/QueHacemosSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import MapSection from "./components/MapSection";
import PackagesSection from "./components/PackagesSection";
import MethodologySection from "./components/MethodologySection";
import JobSection from "./components/JobSection";
import CTASection from "./components/CTASection";
import SocialFeedSection from "./components/SocialFeedSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <QueHacemosSection />
      <AboutSection />
      <MapSection />
      <ServicesSection />
      <PackagesSection />
      <MethodologySection />
      <JobSection />
      <CTASection />
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
