import React from "react";
import { motion } from "framer-motion";

export function SocialSidebar({ setActiveDecor }) {
  const socialLinks = [
    {
      src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521188/furniture_15639257_q4vsct.png",
      label: "Furniture",
      Id: "BedsSection",
    },
    {
      src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521188/seater-sofa_1698720_tetqrn.png",
      label: "Sofa",
      Id: "SofaSection",
    },
    {
      src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521188/chair_1889012_ljucth.png",
      label: "Chair",
      Id: "ChairSection",
    },
    {
      src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758522530/calligraphy_2784632_kffqdb.png",
      label: "Resin Arts",
      Id: "ResinArtSection",
    },
    {
      src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521187/whatsapp_12635043_kescsf.png",
      label: "WhatsApp",
      link: "https://wa.me/your-number",
    },
    {
      src: "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521188/instagram_1384063_hixrpv.png",
      label: "Instagram",
      link: "https://instagram.com/your-handle",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 flex flex-col items-center justify-center bg-gray-900 z-40 text-gray-400">
      <div className="flex flex-col space-y-6 relative">
        {/* DECOR heading */}
        <div className="relative flex flex-col items-center">
          <span className="text-xs tracking-widest transform -rotate-90 text-gray-100 mb-10">
            DECOR
          </span>
          <div className="absolute w-px h-10 bg-gray-600" />
        </div>

        {/* Social Icons */}
        {socialLinks.map(({ src, label, link, Id }, index) => {
          const handleClick = (e) => {
            if (Id) {
              e.preventDefault();
              setActiveDecor(Id);
              const section = document.getElementById("decor-section");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }
          };

          return (
            <motion.a
              key={label}
              href={link || "#"}
              onClick={handleClick}
              target={link ? "_blank" : "_self"}
              rel={link ? "noopener noreferrer" : undefined}
              className="relative group w-10 h-10 flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon with staggered shine */}
              <span
                className="relative block w-6 h-6 shine-icon overflow-hidden"
                style={{ animationDelay: `${index * 0.5}s` }} // stagger shine
              >
                <img
                  src={src}
                  alt={label}
                  className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition filter grayscale brightness-75 z-10"
                />
              </span>

              {/* Tooltip */}
              <span className="absolute left-12 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {label}
              </span>
            </motion.a>
          );
        })}
      </div>

      {/* Shine effect CSS */}
      <style jsx>{`
        .shine-icon::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255, 255, 255, 0.7) 50%,
            transparent 50%
          );
          animation: shine 10s infinite;
          animation-delay: inherit; 
          z-index: 20;
        }

        @keyframes shine {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>
    </div>
  );
}
