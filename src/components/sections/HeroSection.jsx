import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758211250/Design-decor-amith_g03nea.jpg",
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758211250/Design-decor-amith-3_g93bgj.jpg",
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758204597/Design-decor-home_odkkfa.jpg",
];

export function HeroSection({ scrollToSection }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center ml-20 overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Dynamic architectural background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }} // slow zoom in
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              opacity: { duration: 2 },
              scale: { duration: 15, ease: "linear" },
            }}
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Mouse Scroll Down Button */}
      <motion.div
        onClick={() => scrollToSection(1)}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center relative">
          <motion.div
            className="w-2 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
