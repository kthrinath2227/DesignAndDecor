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
    <section id="contact" className="min-h-screen relative bg-[#CBB37E] text-gray-800 ">

      <div className="relative z-10 max-w-7xl mx-auto ">

        <div className="mb-10 ml-20 px-6 py-20">
      <div className="text-gray-800 p-1">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide flex items-center gap-3">
          <Lightbulb className="w-8 h-8 text-gray-700" />
          Got an idea? Let’s make it happen.
        </h1>

        <p className="text-lg mb-6 text-gray-600">
          Get in touch and see what we can create together!
        </p>

        {/* Links Section */}
        <div className="space-y-4">
          <p className="flex items-center gap-3 text-lg">
            <Palette className="w-8 h-8 text-gray-700" />
            Explore our{" "}
            <span className="font-semibold text-gray-700">
              lime plaster designs
            </span>{" "}
            at{" "}
            <ArrowRight className="w-5 h-5 text-gray-700 ml-1" />
            <a
              href="https://dluxurio.in"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-lime-400 transition"
            >
              dluxurio.in
            </a>
            
          </p>

          <p className="flex items-center gap-3 text-lg">
            <Sofa className="w-8 h-8 text-gray-700" />
            Also explore our{" "}
            <span className="font-semibold text-gray-700">
              premium furniture concepts
            </span>{" "}
            at our DECOR section.
          </p>
        </div>
      </div>
    </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 ml-20">
          <img
  alt="Logo"
  src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758805302/DESIGN_DECOR_1_bmhkp8.png"
  className="w-[160px] h-[50px]"
/>

          <motion.div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-16 h-px bg-gray-800 mb-4"></div>
              <h3 className="text-sm tracking-wider mb-4">CALL</h3>
              <p className="text-lg">+91 9160000002</p>
            </div>

            <div>
              <div className="w-16 h-px bg-gray-800 mb-4"></div>
              <h3 className="text-sm tracking-wider mb-4">WRITE</h3>
              <p className="text-lg">dluxurio.in@gmail.com</p>
            </div>

            <div>
              <div className="w-16 h-px bg-gray-800 mb-4"></div>
              <h3 className="text-sm tracking-wider mb-4">VISIT</h3>
              <p className="text-lg leading-relaxed">
                Shivam Building, 3rd Floor<br/>Sriram Nagar, Botanical Garden Road<br/>Kondapur, Hyderabad - 500084
              </p>
              
            </div>
          </motion.div>
          
        

        </div>
        <div className="w-full relative ml-10 px-5">
  <button
    onClick={handleButtonClick}
    className="text-sm tracking-wider mt-4 hover:text-gray-300 transition-colors underline"
  >
    VIEW ON MAP
  </button>

  <div className="relative mt-4 w-full overflow-hidden">
    <img
      src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758806876/gmaps_tzqy3g.png"
      alt="Map"
      className="w-screen h-auto object-cover"
    />

    {/* Top White Fade */}
    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

    {/* Bottom White Fade */}
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
  </div>
</div>


      </div>
    </section>
  );
}