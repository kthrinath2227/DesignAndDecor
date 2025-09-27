import React from "react";
import { motion } from "framer-motion";
import { BedDouble, Sofa, Armchair, Palette, Instagram, MessageCircle } from "lucide-react";

export function SocialSidebar({ setActiveDecor }) {
  const socialLinks = [
    { icon: BedDouble, label: "Furniture", Id: "BedsSection" },
    { icon: Sofa, label: "Sofa", Id: "SofaSection" },
    { icon: Armchair, label: "Chair", Id: "ChairSection" },
    { icon: Palette, label: "Resin Arts", Id: "ResinArtSection" },
    { icon: MessageCircle, label: "WhatsApp", link: "https://wa.me/your-number" },
    { icon: Instagram, label: "Instagram", link: "https://instagram.com/your-handle" },
  ];

  return (
    <div className="
      fixed mt-10 left-0 top-0 h-full flex flex-col items-center justify-center
      bg-gray-900 z-40 text-[#dbb980] 
      w-20 md:w-20 sm:w-16 xs:w-14
    ">
      <div className="flex flex-col space-y-6 relative">
        {/* DECOR heading */}
        <div className="relative flex flex-col items-center">
          <span className="text-xs tracking-widest transform -rotate-90 text-[#dbb980] mb-10">
            DECOR
          </span>
          <div className="absolute w-px h-10 bg-gray-700" />
        </div>

        {/* Social Icons */}
        {socialLinks.map(({ icon: Icon, label, link, Id }, index) => {
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
              className="relative group flex items-center justify-center
                         w-10 h-10 md:w-10 md:h-10 sm:w-8 sm:h-8 xs:w-7 xs:h-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Icon
                aria-label={label}
                className="w-6 h-6 md:w-6 md:h-6 sm:w-5 sm:h-5 xs:w-4 xs:h-4
                           text-[#bba47d] transition-transform duration-300 
                           group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_#bba47d]"
              />

              {/* Tooltip */}
              <span
                className="absolute left-12 px-3 py-1 text-xs sm:text-[10px] xs:text-[9px]
                           text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100
                           transition whitespace-nowrap shadow-lg"
              >
                {label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
