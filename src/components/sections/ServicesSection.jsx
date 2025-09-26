import React from "react";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section
      id="Services"
      className="min-h-screen bg-gray-900 text-white flex items-center ml-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col lg:flex-row items-start gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Left Heading Section */}
          <div className="max-w-sm">
            <p className="text-sm tracking-widest font-semibold text-[#dbb980] uppercase mb-2">
              Our Services
            </p>
            <h2 className="text-4xl font-light text-[#dbb980]">
              What We Offer
            </h2>
          </div>

          {/* Right Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
            {/* Interior Design */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/30 
                         rounded-2xl shadow-xl p-8 h-auto">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758806203/living-room_6333234_yq8xmj.png"
                  alt="Interior Design"
                  className="w-20 h-20"
                />
                <h3 className="text-2xl font-semibold text-[#dbb980]">
                  Interior Design
                </h3>
              </div>
              <p className="text-[#bba47d] text-lg leading-relaxed">
                From concept to completion, we create interiors that are both
                stylish and functional for everyday living
              </p>
            </div>

            {/* Premium Furniture */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/30 
                         rounded-2xl shadow-xl p-8 h-auto">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758443687/bed_ik4kzg.png"
                  alt="Premium Furniture"
                  className="w-16 h-16"
                />
                <h3 className="text-2xl font-semibold text-[#dbb980]">
                  Premium Furniture
                </h3>
              </div>
              <p className="text-[#bba47d] text-lg leading-relaxed">
                Experience the perfect blend of comfort, style, and lasting
                quality with our carefully curated imported furniture.
              </p>
            </div>

            {/* Decors & Resin Arts */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/30 
                         rounded-2xl shadow-xl p-8 h-auto">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758801336/decoration_17984249_tde3r9.png"
                  alt="Decors & Resin Arts"
                  className="w-16 h-16"
                />
                <h3 className="text-2xl font-semibold text-[#dbb980]">
                  Decors & Resin Arts
                </h3>
              </div>
              <p className="text-[#bba47d] text-lg leading-relaxed">
                Each handmade piece brings elegance, warmth, and a touch of
                artistry to your living space.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
