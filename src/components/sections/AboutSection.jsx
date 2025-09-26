import React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#CBB37E] text-gray-800 flex items-center"
    >
      <div className="w-full mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start px-6 py-20 ml-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-sm tracking-widest font-semibold text-gray-600 uppercase">
                What We Do
              </p>
              <h2 className="text-4xl mb-2 md:text-5xl font-bold leading-tight">
                DLuxurio <br />
                Elevating spaces, redefining modern luxury
              </h2>
            </div>

            <div className="w-16 h-1 mt-2 bg-gray-800 mb-12"></div>

            {/* First Image with zoom effect */}
            <motion.div
  className="overflow-hidden rounded-lg shadow-lg w-full"
  initial={{ scale: 1 }}
  animate={{ scale: 1.05 }}
  transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
>
  <img
    src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758204597/Design-decor-home_odkkfa.jpg"
    alt="Luxury Interior 1"
    className="w-full h-full object-cover"
  />
</motion.div>

          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative space-y-6 flex flex-col items-start justify-start mt-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background 01 */}
            {/* <div className="text-9xl font-light text-gray-300 absolute -top-16 -right-8 z-0">
              01
            </div> */}

            {/* Second Image + Description */}
            <div className="relative z-10">
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg max-w-sm mx-auto mt-5"
                whileInView={{ scale: 1.05 }}
                viewport={{ once: true }}
                 initial={{ scale: 1 }}
                 animate={{ scale: 1.05 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              >
                <img
                                src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758437535/spacejoy-OlFHzNjg9kY-unsplash_tytydg.jpg"

                  alt="Luxury Interior 2"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              

              <p className="text-gray-600 leading-relaxed mt-4">
                DLuxurio Interior Studio creates bespoke designs that combine
                modern elegance with timeless luxury. Each project reflects
                artistry, functionality, and a dedication to transforming spaces
                into extraordinary experiences.
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div className="w-screen h-screen overflow-hidden">
  <motion.img
    alt="Aerial view of modern resort with pool"
    className="w-full h-full object-cover"
    src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758210768/Design-decor-2_snsxmd.jpg"
    initial={{ scale: 1 }}
    animate={{ scale: 1.1 }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    }}
  />
</motion.div>
        </div>
      </div>
    </section>
  );
}
