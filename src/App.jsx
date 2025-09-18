import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/common/Navbar';
import { SocialSidebar } from '@/components/common/SocialSidebar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/common/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'hero', title: 'Hero' },
    { id: 'about', title: 'About' },
    { id: 'stats', title: 'Stats' },
    { id: 'portfolio', title: 'Portfolio' },
    { id: 'contact', title: 'Contact' }
  ];

  const scrollToSection = (index) => {
    const section = document.getElementById(sections[index].id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor((scrollPosition + windowHeight / 2) / windowHeight); // Adjust for more accurate section detection
      setCurrentSection(Math.min(newSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <>
      <Helmet>
  <title>D LUXURIO | Professional Interior Design & Premium Furniture</title>
  
  <meta 
    name="description" 
    content="D LUXURIO offers luxury interior design solutions and premium furniture. We specialize in modern, timeless, and functional interiors that elevate every space." 
  />
  
  {/* Open Graph for social sharing */}
  <meta 
    property="og:title" 
    content="D LUXURIO | Professional Interior Design & Premium Furniture" 
  />
  <meta 
    property="og:description" 
    content="Transform your spaces with D LUXURIO’s expert interior design and high-quality premium furniture. Creating luxury homes and commercial interiors with elegance." 
  />
  
  {/* Optional: SEO extras */}
  <meta name="keywords" content="interior design, luxury furniture, home decor, modern interiors, D LUXURIO" />
  <meta name="author" content="D LUXURIO Studio" />
</Helmet>


      <div className="min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden pt-16">
        <Navbar />
        <SocialSidebar />
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <StatsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;