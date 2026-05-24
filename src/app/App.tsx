import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProjectsPreview } from './components/ProjectsPreview';
import { ProductionPreview } from './components/ProductionPreview';
import { AboutSection } from './components/AboutSection';
import { EquipmentSection } from './components/EquipmentSection';
import { ProductionSection } from './components/ProductionSection';
import { ContactsSection } from './components/ContactsSection';
import { Footer } from './components/Footer';

// Компонент для определения текущего пути
function CurrentSectionProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path === '/about') return 'about';
    if (path === '/equipment') return 'equipment';
    if (path === '/production') return 'production';
    if (path === '/contacts') return 'contacts';
    return 'home';
  };
  
  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <CurrentSectionProvider>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <AdvantagesSection />
                  <IndustriesSection />
                  <ProjectsPreview />
                  <ProductionPreview />
                </>
              } />
              <Route path="/home" element={
                <>
                  <HeroSection />
                  <AdvantagesSection />
                  <IndustriesSection />
                  <ProjectsPreview />
                  <ProductionPreview />
                </>
              } />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/equipment" element={<EquipmentSection />} />
              <Route path="/production" element={<ProductionSection />} />
              <Route path="/contacts" element={<ContactsSection />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CurrentSectionProvider>
    </Router>
  );
}