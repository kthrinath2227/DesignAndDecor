import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Award,
  ShieldCheck,
  Truck,
  Brush,
  TestTubes,
  BringToFront,
} from "lucide-react";

export function SofaSection() {
  const projects = [
    {
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005573/sofa-1_rv8myi.avif",
      title: "Luxury Leather Sofas",
      description:
        "Elegant leather sofas crafted with premium materials for timeless comfort and style.",
    },
    {
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005572/saofa-3_br4m8f.avif",
      title: "Fabric Sofas",
      description:
        "Soft, stylish fabric sofas designed to match modern interiors with cozy charm.",
    },
    {
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005569/sofa-bg_ojqsuw.avif",
      title: "Sectional Sofas",
      description:
        "Spacious sectional sofas that combine versatility, comfort, and modern design.",
    },
    {
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005568/main-1_gqazvn.jpg",
      title: "Recliner Sofas",
      description:
        "Relax in luxury with recliner sofas built for ultimate comfort and durability.",
    },
    {
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005569/sofa-7_m4z2di.jpg",
      title: "Loveseats",
      description:
        "Compact loveseats perfect for cozy spaces without compromising style or comfort.",
    },
    {
      image:
        "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005568/sofa-10_ypkfut.jpg",
      title: "Sofa Beds",
      description:
        "Functional sofa beds offering comfort by day and convenience by night.",
    },
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Premium Quality",
      desc: "Crafted from the finest materials to ensure long-lasting comfort and luxury.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Skilled Craftsmanship",
      desc: "Each sofa is built with precision by expert artisans who value detail.",
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Doorstep Delivery",
      desc: "Hassle-free delivery and professional setup in your living room.",
    },
  ];

  const SofaFeatures = [
    {
      icon: <Brush className="w-8 h-8 text-white" />,
      title: "Stylish Designs",
      desc: "Modern, classic, and custom designs to match every home interior.",
    },
    {
      icon: <BringToFront className="w-8 h-8 text-white" />,
      title: "Customization Options",
      desc: "Choose fabrics, colors, and sizes to suit your unique taste.",
    },
    {
      icon: <TestTubes className="w-8 h-8 text-white" />,
      title: "Durability Assured",
      desc: "High-quality builds designed to last for years of everyday use.",
    },
  ];

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen overflow-hidden ml-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005575/sofa-main_jnyfn6.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 m-2 leading-snug text-[#dbb980]">
              Premium Sofas That Redefine Comfort & Style
            </h1>
            <p className="m-6 sm:mb-8 md:mb-10 text-center text-sm sm:text-base md:text-lg lg:text-xl text-[#bba47d]">
              Explore our handcrafted sofas designed for modern living spaces.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-[#dbb980] text-gray-900 font-medium rounded-xl shadow-lg mx-auto"
            >
              <span className="text-lg">Discover Sofas</span>
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
      <section className="w-full bg-[#CBB37E] text-gray-800 py-16 px-6 flex justify-center ml-10">
        <div className="max-w-6xl w-full">
          <h2 className="text-3xl font-semibold mb-5 text-center">
            Why Choose Our Sofas?
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 md:mb-10 text-center text-sm sm:text-base md:text-lg lg:text-xl">
            Experience unmatched comfort and timeless design with our premium
            sofas built for every lifestyle.
          </p>

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

            {/* Video Card */}
              <div className="p-4 flex flex-col items-center text-center">
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
    <video
      src="https://res.cloudinary.com/dzwxkhkvi/video/upload/v1759045293/28.09.2025_13.09.18_REC_jys6id.mp4"
      autoPlay
      loop
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
    />
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ===== Premium Sofa Collection Section ===== */}
      <section className="min-h-screen bg-gray-900 flex ml-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl md:text-3xl tracking-widest text-[#dbb980] uppercase mb-10 text-center">
            Our Premium Sofa Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 group bg-white/5 backdrop-blur-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-80 object-cover"
                  initial={{ scale: 1.02 }}
                  animate={{ scale: 1.07 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                />
                <div className="w-full p-5 rounded-b-xl backdrop-blur-lg border-b border-l border-r border-white/20 shadow-xl">
                  <h3 className="text-lg font-semibold text-[#dbb980]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3">
                    {project.description}
                  </p>
                  <button className="px-4 py-2 bg-[#dbb980] text-gray-900 font-medium text-sm rounded-full shadow hover:bg-[#c4a870] transition">
                    View More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Nature Inspired Sofa Section ===== */}
      <section className="w-full bg-[#CBB37E] text-gray-800 py-16 px-6 flex justify-center ml-10">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <img
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005572/chair-1_kvhqle.avif"
            alt="sofa"
            className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain shadow-lg"
            loading="lazy"
          />

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl md:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 m-1 leading-snug">
              Discover Nature-Inspired Sofa Collection
            </h1>
            <p className=" m-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-snug sm:leading-normal md:leading-relaxed text-center lg:text-left">
              Our Nature-Inspired Sofa Collection blends earthy tones and
              textures with modern design, creating comfort that feels as good
              as it looks.
            </p>
          </div>

          <img
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005571/side-1_jwc0ee.jpg"
            alt="sofa set"
            className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain shadow-lg"
            loading="lazy"
          />
        </div>
      </section>

      {/* ===== Closing Section with Testimonials ===== */}
      <section className="w-full bg-gray-900 flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-1xl ml-10 md:text-3xl lg:text-3xl tracking-widest text-[#dbb980] uppercase mb-10">
          Stylish Sofas. <br /> Designed for Modern Living.
        </h1>

        <div className="relative w-full m-10">
          <motion.img
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1759005568/sofa-9_g1jh2o.jpg"
            alt="sofa decor"
            className="w-full h-56 sm:h-[60vh] object-cover rounded-lg m-5"
            loading="lazy"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 60, repeat: Infinity, repeatType: "reverse" }}
          />

          <div
            className="absolute left-1/2 w-[80%] sm:w-4/5 max-w-[90%] "
            style={{ top: "80%" }}
          >
            <div className="ml-10 bg-white text-gray-900 rounded-xl shadow-lg p-4 sm:p-6 w-full -translate-x-1/2">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-1 sm:mb-2">
                Discover Comfort
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                Experience sofas that blend comfort, durability, and timeless
                elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16  w-full">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-8">
            What Our Customers Say
          </h2>
          <div className="ml-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-lg">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
              <p>"The sofa quality is amazing and super comfy!"</p>
              <span className="mt-2 block font-bold">— Murali Krishna</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
              <p>"My living room feels luxurious with this sofa set."</p>
              <span className="mt-2 block font-bold">— Thrinath Kandula</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
              <p>"Stylish, durable, and exactly what I wanted."</p>
              <span className="mt-2 block font-bold">— Arjun </span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
              <p>"Perfect blend of comfort and design. Highly recommend!"</p>
              <span className="mt-2 block font-bold">— Priya Nair</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
