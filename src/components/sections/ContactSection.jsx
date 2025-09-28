import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Lightbulb, Palette, Sofa, ArrowRight } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="contact" className=" px-10 sm:px-0 min-h-screen relative bg-[#CBB37E] text-gray-800">
      {/* ✅ Added margin-left responsive to avoid overlap with social sidebar */}
      <div className="
        relative z-10 w-full px-4 sm:px-6 lg:px-10 py-16 max-w-screen-xl mx-auto
        ml-12 sm:ml-16 md:ml-20
      ">
        {/* Heading */}
        <div className="text-gray-800 mb-10">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-6 tracking-wide flex items-center gap-2 sm:gap-3">
            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-700" />
            Got an idea? Let’s make it happen.
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-600">
            Get in touch and see what we can create together!
          </p>

          {/* Links Section */}
          <div className="space-y-2 sm:space-y-3">
            <p className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
              <Palette className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-700" />
              Explore our{" "}
              <span className="font-semibold text-gray-700">
                lime plaster designs
              </span>{" "}
              at{" "}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700 ml-1" />
              <a
                href="https://dluxurio.in"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-lime-400 transition"
              >
                dluxurio.in
              </a>
            </p>

            <p className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg">
              <Sofa className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-700" />
              Also explore our{" "}
              <span className="font-semibold text-gray-700">
                premium furniture concepts
              </span>{" "}
              at our DECOR section.
            </p>
          </div>
        </div>

        {/* Contact Info */}
<div className="px-10 sm:px-0 grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          <img
            alt="Logo"
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758805302/DESIGN_DECOR_1_bmhkp8.png"
            className="w-32 sm:w-40 max-w-full h-auto mx-auto lg:mx-0"
          />

          <motion.div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="">
              <div className="w-10 h-px bg-gray-800 mb-1 sm:mb-2"></div>
              <h3 className="text-xs sm:text-sm tracking-wider mb-1 sm:mb-2">CALL</h3>
              <p className="text-sm sm:text-base md:text-lg">+91 9160000002</p>
            </div>

            <div>
              <div className="w-10 h-px bg-gray-800 mb-1 sm:mb-2"></div>
              <h3 className="text-xs sm:text-sm tracking-wider mb-1 sm:mb-2">WRITE</h3>
              <p className="text-sm sm:text-base md:text-lg">dluxurio.in@gmail.com</p>
            </div>

            <div>
              <div className="w-10 h-px bg-gray-800 mb-1 sm:mb-2"></div>
              <h3 className="text-xs sm:text-sm tracking-wider mb-1 sm:mb-2">VISIT</h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Shivam Building, 3rd Floor<br/>
                Sriram Nagar, Botanical Garden Road<br/>
                Kondapur, Hyderabad - 500084
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Button and Image */}
        <div className="w-full relative mt-6 sm:mt-8">
  <button
    onClick={() =>
      window.open(
        "https://www.google.com/maps/place/D+Luxurio/@17.4599208,78.3523069,17z",
        "_blank"
      )
    }
    className="text-xs sm:text-sm md:text-base tracking-wider hover:text-gray-300 transition-colors underline mb-3 sm:mb-4"
  >
    VIEW ON MAP
  </button>

  {/* Responsive Google Map */}
  <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9956814375887!2d78.35230697421125!3d17.45992080071339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ef6d2589a1%3A0x70bbba38da4ed5c2!2sD%20Luxurio!5e0!3m2!1sen!2sin!4v1759045938224!5m2!1sen!2sin"
      className="w-full h-64 sm:h-96 border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

      </div>
    </section>
  );
}
