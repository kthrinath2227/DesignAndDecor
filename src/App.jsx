import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/common/Navbar';
import { SocialSidebar } from '@/components/common/SocialSidebar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { Portfolio } from '@/components/sections/Portfolio';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';

// Import Decor Sections
import { BedsSection } from '@/components/sections/decor/BedsSection';
import { SofaSection } from '@/components/sections/decor/SofaSection';
import { ChairSection } from '@/components/sections/decor/ChairSection';
import { ResinArtSection } from '@/components/sections/decor/ResinArtSection';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [activeDecor, setActiveDecor] = useState(null); // <-- NEW

  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'about', title: 'About' },
    { id: 'Services', title: 'Services' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' },
  ];

  const scrollToSection = (index) => {
    setActiveDecor(null); 
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (activeDecor) return; 

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor(
        (scrollPosition + windowHeight / 2) / windowHeight
      );
      setCurrentSection(Math.min(newSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length, activeDecor]);

  // Render decor dynamically
  const renderDecor = () => {
    switch (activeDecor) {
      case 'BedsSection':
        return <BedsSection />;
      case 'SofaSection':
        return <SofaSection />;
      case 'ChairSection':
        return <ChairSection />;
      case 'ResinArtSection':
        return <ResinArtSection />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>D LUXURIO | Professional Interior Design & Premium Furniture</title>
        <meta
          name="description"
          content="D LUXURIO offers luxury interior design solutions and premium furniture..."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden pt-16">
        <Navbar scrollToSection={scrollToSection} />
        <SocialSidebar setActiveDecor={setActiveDecor} /> {/* pass setter */}

        {/* Normal Sections */}
        {!activeDecor && (
          <>
            <HeroSection scrollToSection={scrollToSection} />
            <AboutSection />
            <ServicesSection />
            <ProcessTimeline />
            <Portfolio />
            <ContactSection />
          </>
        )}

        {/* Decor Sections */}
        {activeDecor && (
          <div id="decor-section" className="min-h-screen">
            {renderDecor()}
          </div>
        )}

        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;
