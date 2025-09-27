import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Award, ShieldCheck, Truck , Brush, TestTubes, BringToFront} from "lucide-react";

export function ResinArtSection() {
  const projects = [
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758953509/3e63873f63820dee0dc26ed48b99c620_fi1do1.jpg",
    title: "Resin Wall Art",
    description:
      "Captivating resin wall designs that bring depth, color, and elegance to your interiors.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758953508/8be60ec80a93ac53907bf16d0e4097f9_tzzjhz.jpg",
    title: "Resin Photo Frames",
    description:
      "Handcrafted resin frames that preserve memories with artistic flair and luxury detail.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758953508/41923a9dda1ad3386925f4fed5131edc_wzogot.jpg",
    title: "Resin Table Designs",
    description:
      "Functional masterpieces—resin tables blending art, durability, and modern style.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758953508/d6b21cf00103c907bfff81484dc5e8e1_gbzkei.jpg",
    title: "Custom Resin Clocks",
    description:
      "Unique resin clock designs that combine artistry with everyday functionality.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758953508/5b453ac7695bb6b83ca312ae5f27233d_mujfx2.jpg",
    title: "Resin Decorative Pieces",
    description:
      "One-of-a-kind resin creations that elevate your decor with vibrant textures and shine.",
  },
  {
    image:
      "https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758953508/0e2e9a1046c92cbe0aceba3f2b0ff855_d08wex.jpg",
    title: "Epoxy Resin Furniture",
    description:
      "Luxury epoxy resin furniture crafted for bold statement designs in modern spaces.",
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
  ];
  const ResinFeatures = [
    {
      icon: <Brush className="w-8 h-8 text-white" />,
      title: "Artistic Excellence",
      desc: "Each piece is a handcrafted resin masterpiece, designed to capture light, depth, and imagination.",
    },
    {
      icon: <BringToFront className="w-8 h-8 text-white" />,
      title: "Personalized Service",
      desc: "Our team works closely with you to create custom pieces that fit your unique style and needs.",
    },
    {
      icon: <TestTubes className="w-8 h-8 text-white" />,
      title: "Lasting Quality",
      desc: "Made with premium materials and expert techniques, our resin art is built to inspire for years to come.",
    },
  ];


  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="relative w-full h-screen overflow-hidden ml-10">
        {/* Hero background as motion div for smoother GPU animation */}
       <motion.div
  className="absolute inset-0"
  style={{
    backgroundImage:
      "url(https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758955421/istockphoto-1316233938-612x612_1_kapo97.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    willChange: "transform",
  }}
   initial={{ scale: 0.98 }}   // 👈 start slightly zoomed out
  animate={{ scale: 1 }}
  transition={{ duration: 40, repeat: Infinity, repeatType: "reverse" }}
/>


        {/* Overlay for hero content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <div className="w-full max-w-4xl">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-snug text-[#dbb980]">
              Handcrafted Resin Creations That Blend Art and Utility
            </h1>
            <p className="text-base lg:text-lg text-[#bba47d] mb-8">
              Unique resin masterpieces that bring art, style, and purpose into your home.
            </p>

            {/* Discover Beds button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-3 bg-[#dbb980] text-gray-900 font-medium rounded-xl shadow-lg mx-auto"
            >
              <span className="text-lg">Discover Resin Arts</span>
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
            Why Choose Us?
          </h2>
          <p className="text-gray-700 mb-6 sm:mb-8 md:mb-10 text-center text-sm sm:text-base md:text-lg lg:text-xl">
  Transform your space with resin art that fuses creativity, elegance, and lasting beauty.
</p>


          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ResinFeatures.map((item, i) => (
              <div key={i} className="p-6 flex flex-col items-center text-center">
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
            <div className="p-4 flex flex-col items-center text-center ">
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Premium Collection Section ===== */}
     <section className="min-h-screen bg-gray-900 flex ml-20">
  <div className="max-w-7xl mx-auto px-6 py-20">
    {/* Section Heading */}
    <h2 className="text-2xl md:text-3xl tracking-widest text-[#dbb980] uppercase mb-10 text-center">
      Our Premium Collection
    </h2>

    {/* Equal Grid Layout */}
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
          {/* Image Section with very slow zoom */}
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-80 object-cover"
            initial={{ scale: 1.02 }}
            animate={{ scale: 1.07 }}
            transition={{
              duration: 60, // super slow zoom
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />

          {/* Text Section (glass effect) */}
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


      {/* ===== Discover Nature Section ===== */}
      <section className="w-full bg-[#CBB37E] text-gray-800 py-16 px-6 flex justify-center ml-10">
  <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
    
    {/* Left Image */}
    <img
      src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758871282/1-750x650_ieev3m.jpg"
      alt="chair"
      className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
      loading="lazy"
    />

    {/* Text Column */}
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl md:max-w-2xl">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-snug">
        Discover Nature Inspired Furniture
      </h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-snug sm:leading-normal md:leading-relaxed text-center lg:text-left">
  Our Nature-Inspired Furniture Collection celebrates minimalist design
  and the timeless beauty of the great outdoors. Each piece blends form
  and function in perfect harmony.
</p>

    </div>

    {/* Right Image */}
    <img
      src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758898860/ehfdzdvw2po06wvrkb8u_ztkg4h.jpg"
      alt="stool"
      className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain"
      loading="lazy"
    />

  </div>
</section>



<section className="w-full bg-gray-900 flex flex-col items-center text-center px-6 py-20">
  {/* Heading */}
  <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-widest text-[#dbb980] uppercase mb-10">
    Beautiful Furniture. <br /> Increased Interior Beauty.
  </h1>

  {/* Image with overlay card */}
  <div className="relative w-full">
    <motion.img
      src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758901202/istockphoto-2154995163-612x612_rm2kpj.jpg"
      alt="decorative"
      className="w-full h-[60vh] object-cover rounded-lg"
      loading="lazy"
      initial={{ scale: 1 }}
      animate={{ scale: 1.05 }}
      transition={{ duration: 60, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    />

    {/* Overlay card */}
    <div className="absolute left-1/2 w-9/10 max-w-[90%]" style={{ top: "80%" }}>
      <div className="bg-white text-gray-900 rounded-xl shadow-lg p-6 w-full -translate-x-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-widest mb-2">Discover Elegance</h2>
        <p className="text-gray-700 tracking-widest">
          Experience furniture that blends comfort, style, and timeless quality.
        </p>
      </div>
    </div>
  </div>

  {/* Testimonials Section */}
  <div className="mt-16 max-w-4xl w-full">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-100 mb-8">
    What Our Clients Say
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Example testimonials */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
      <p>"Amazing furniture and excellent service!"</p>
      <span className="mt-2 block font-bold">— Murali Krishna</span>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
      <p>"Transformed my living space beautifully!"</p>
      <span className="mt-2 block font-bold">— Thrinath Kandula</span>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
      <p>"The craftsmanship is outstanding. Truly premium quality!"</p>
      <span className="mt-2 block font-bold">— Arjun </span>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-200">
      <p>"Loved the customization options, it fits perfectly in my home."</p>
      <span className="mt-2 block font-bold">— Priya Nair</span>
    </div>
  </div>
</div>

</section>






    </>
  );
}
