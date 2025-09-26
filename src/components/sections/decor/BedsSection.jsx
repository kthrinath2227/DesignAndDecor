import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Award, ShieldCheck, Truck } from "lucide-react";

export function BedsSection() {
 const projects = [
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451161/spacejoy-q3Qd86sfaoU-unsplash_ii8mlp.jpg",
    title: "Luxury King Bed",
    description: "Premium comfort with elegant design, crafted for restful nights.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451162/spacejoy-YqFz7UMm8qE-unsplash_feryex.jpg",
    title: "Modern Platform Bed",
    description: "Minimalist style designed for contemporary and sleek interiors.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451150/spacejoy-trG8989WjFA-unsplash_obdc45.jpg",
    title: "Classic Wooden Bed",
    description: "Timeless craftsmanship meets comfort and durability.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451154/avery-klein-JaXs8Tk5Iww-unsplash_qdhidu.jpg",
    title: "Upholstered Bed Frame",
    description: "Soft, padded headboard for cozy luxury and modern aesthetics.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451149/douglas-sheppard-9rYfG8sWRVo-unsplash_rbxzvb.jpg",
    title: "Canopy Bed",
    description: "Elegant design with a touch of grandeur and sophistication.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758451149/spacejoy-4xRP0Ajk9ys-unsplash_jtvja2.jpg",
    title: "Storage Bed",
    description: "Smart functionality with built-in storage for modern living.",
  },
];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Superior Quality",
      desc: "We use only the finest materials to ensure durability and luxury in every piece.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Expert Craftsmanship",
      desc: "Our furniture is built by skilled artisans with a passion for detail and design.",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "White-Glove Delivery",
      desc: "Enjoy hassle-free delivery and setup service right to your room of choice.",
    },
    // Removed Stellar Reviews and replaced it with a video card
  ];

  return (
    <>
      {/* ===== New Top Section (Like Attached Image) ===== */}
      

      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Hero background image */}
        <motion.img
          alt="bed-image"
          src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758808891/poojan-thanekar-u-RIsXlI8Q8-unsplash_dnpzpr.jpg"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Overlay for hero content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-snug text-[#dbb980]">
              Dreamy Beds for Ultimate Comfort.
            </h1>
            <p className="text-base lg:text-lg text-[#bba47d] mb-8">
              Indulge in unparalleled comfort and sophisticated design with our
              exquisite collection of beds. Crafted for restful nights and stylish mornings.
            </p>

            {/* Discover Beds button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-[#dbb980] text-gray-900 font-medium rounded-xl shadow-lg mx-auto"
            >
              <span className="text-lg">Discover Beds</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section className="w-full bg-[#CBB37E] text-gray-800 py-16 px-6 flex justify-center">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-semibold mb-5 text-center">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-10 text-center">
            We are dedicated to providing not just furniture, but a lifestyle of
            comfort, elegance, and lasting quality.
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-6 flex flex-col items-center text-center"
              >
                <div className="flex justify-center items-center w-14 h-14 mb-3 rounded-full bg-gray-800">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}

            {/* Video Card instead of Stellar Reviews */}
            <div className="p-4 flex flex-col items-center text-center">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4" // replace with your product video
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

<section className="min-h-screen bg-gray-900  flex  ml-20">
  <div className="max-w-7xl mx-auto px-6 py-20">
    {/* Section Heading */}
    <h2 className="text-2xl md:text-3xl tracking-widest text-[#dbb980] uppercase mb-10">
      Our Premium Collection
    </h2>
    {/* <p className="text-[#bba47d] font-semibold max-w-2xl mx-auto mb-12">
      Discover a curated selection of luxurious beds designed for ultimate
      comfort and timeless elegance. Each piece blends sophistication with
      functionality to transform your bedroom into a sanctuary.
    </p> */}

    {/* Equal Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
            alt={project.title}
            loading="lazy"
            className="w-full h-72 object-cover rounded-lg"
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />

          {/* Fade Overlay with Content */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-2 line-clamp-2">
              {project.description}
            </p>
            <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-sm rounded-md">
              View Details
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      <section className="relative w-full bg-white py-16 px-6 flex justify-center items-center">
        <div className="max-w-5xl w-full text-center relative">
          {/* Left Furniture Icon */}
          <img
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521188/furniture_15639257_q4vsct.png"
            alt="chair"
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 object-contain"
          />

          {/* Right Furniture Icon */}
          <img
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758521188/furniture_15639257_q4vsct.png"
            alt="stool"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 object-contain"
          />

          {/* Main Heading */}
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
            Discover Nature <br /> Inspired Furniture
          </h1>

          {/* Sub text */}
          <p className="text-gray-600 max-w-2xl mx-auto text-sm lg:text-base">
            Our Nature-Inspired Furniture Collection Is A Celebration Of
            Minimalist Design And The Timeless Allure Of The Great Outdoors.
            Immerse Yourself In A World Where Form Meets Function, And Every
            Piece Tells A Story Of Organic Harmony.
          </p>
        </div>
      </section>
    </>
  );
}
