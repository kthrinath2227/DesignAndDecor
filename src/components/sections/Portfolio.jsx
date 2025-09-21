import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451161/spacejoy-q3Qd86sfaoU-unsplash_ii8mlp.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451162/spacejoy-YqFz7UMm8qE-unsplash_feryex.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451150/spacejoy-trG8989WjFA-unsplash_obdc45.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451154/avery-klein-JaXs8Tk5Iww-unsplash_qdhidu.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451149/douglas-sheppard-9rYfG8sWRVo-unsplash_rbxzvb.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451149/spacejoy-4xRP0Ajk9ys-unsplash_jtvja2.jpg",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-900 text-white flex items-center ml-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="mb-12">
          <div className="text-8xl font-light text-gray-500">
              04
            </div>
          <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
            Projects
          </p>
          <h2 className="text-4xl font-semibold">Recent Projects</h2>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Slow Zoom Image */}
              <motion.img
                src={project.image}
                alt="Project"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg"
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium tracking-wide">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <a
            href="/AllProjects"
            className="px-8 py-3 bg-gray-200 text-black font-medium rounded-full shadow-lg hover:bg-white transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
