import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function PortfolioSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="portfolio" className="min-h-screen bg-gray-100 text-gray-800 ml-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Hero Image with slow zoom */}
        <motion.div
          className="mb-16 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            alt="Aerial view of modern resort with pool"
            className="w-full h-[600px] object-cover mb-8"
            src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1758210768/Design-decor-2_snsxmd.jpg"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          />
        </motion.div>

        <div className="text-center mb-16">
          <div className="w-16 h-px bg-gray-800 mx-auto mb-4"></div>
          <p className="text-sm tracking-wider">AUGUST 20, 2025</p>
        </div>

        {/* Content Image with slow zoom */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="w-16 h-px bg-gray-800 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              RUSHITOYA DESIGN BY
            </h2>
          </div>
          <motion.div className="overflow-hidden rounded-lg">
            <motion.img
              alt="Modern tropical villa with palm trees"
              className="w-full h-[500px] object-cover"
              src="https://res.cloudinary.com/dzwxkhkvi/image/upload/v1757333950/photo-1676615026612-8d7642335476_okr0up.jpg"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            />
          </motion.div>
        </motion.div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
            onClick={handleButtonClick}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
