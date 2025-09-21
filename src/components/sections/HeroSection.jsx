import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758211250/Design-decor-amith_g03nea.jpg",
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758211250/Design-decor-amith-3_g93bgj.jpg",
  "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758204597/Design-decor-home_odkkfa.jpg",
];

export function HeroSection({ scrollToSection }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 10000; // 15s

  // Auto slide every 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center ml-20 overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" initial={false}>
  <motion.div
    key={currentIndex}
    className="absolute inset-0"
  >
    <motion.img
      src={images[currentIndex]}
      alt="Dynamic architectural background"
      className="w-full h-full object-cover"
      initial={{ scale: 1 }}
      animate={{ scale: 1.15 }}
      transition={{ duration: duration / 1000, ease: "linear" }}
    />
  </motion.div>
</AnimatePresence>


        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Top Progress Bars */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2 w-[30%] max-w-2xl z-20">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="flex-1 h-1 bg-gray-400 rounded-full cursor-pointer overflow-hidden"
          >
            {index === currentIndex && (
              <motion.div
                className="h-full bg-gray-200"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration / 1000, ease: "linear" }}
              />
            )}
            {index < currentIndex && (
              <div className="h-full w-full bg-gray-100"></div>
            )}
          </div>
        ))}
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
