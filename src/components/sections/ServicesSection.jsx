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
          <div className="max-w-xs">
            <div className="text-9xl font-light text-gray-600 mb-6">02</div>
            <p className="text-sm tracking-widest font-semibold text-gray-400 uppercase mb-2">
              Our Services
            </p>
            <h2 className="text-4xl font-light">What We Offer</h2>
          </div>

          {/* Right Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            {/* Interior Design */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 
                         rounded-2xl shadow-xl p-10 h-[350px]">
              <div className="flex items-center gap-6 mb-8">
                <img
                  src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758443687/sofa_qfjhws.png"
                  alt="Interior Design"
                  className="w-20 h-20"
                />
                <h3 className="text-3xl font-semibold">Interior Design</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Modern and stylish interiors crafted to enhance your lifestyle. 
                From concept to completion, we design spaces that balance functionality 
                and beauty for your home or workspace.
              </p>
            </div>

            {/* Premium Furniture */}
            <div className="flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 
                         rounded-2xl shadow-xl p-10 h-[350px] ">
              <div className="flex items-center gap-6 mb-8">
                <img
                  src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758443687/bed_ik4kzg.png"
                  alt="Premium Furniture"
                  className="w-20 h-20 grayscale opacity-80"
                />
                <h3 className="text-3xl font-semibold">Premium Furniture</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Imported premium furniture for comfort, durability, and style. 
                We bring you timeless pieces that enhance your interiors while 
                maintaining exceptional quality and elegance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
