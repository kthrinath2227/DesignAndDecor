import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare, DraftingCompass, Construction, Sparkles } from 'lucide-react';

export function AboutSection() {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const processSteps = [
    {
      id: "01",
      title: "Consultation",
      description:
        "We start by understanding your vision, needs, and lifestyle through an in-depth consultation.",
      icon: <MessageSquare className="w-8 h-8 text-white" />,
    },
    {
      id: "02",
      title: "Design & Concept",
      description:
        "Our team develops a comprehensive design concept with mood boards, layouts, and 3D renderings.",
      icon: <DraftingCompass className="w-8 h-8 text-white" />,
    },
    {
      id: "03",
      title: "Execution",
      description:
        "We manage the entire project, coordinating with contractors and overseeing every detail of the implementation.",
      icon: <Construction className="w-8 h-8 text-white" />,
    },
    {
      id: "04",
      title: "The Reveal",
      description:
        "The final step is the grand reveal of your newly transformed space, ready for you to enjoy.",
      icon: <Sparkles className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-100 text-gray-800 flex items-center ml-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-8">
              WELCOME WE <span className="font-normal">ARE D LUXURIO</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. All our projects incorporate a unique artistic image and functional solutions. Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality through photography.
            </p>
            <div className="w-16 h-1 bg-gray-800 mb-12"></div>

            <div className="mb-12">
               <h3 className="text-xl font-semibold mb-6">Our Process</h3>
               <p className="text-sm font-semibold mb-6">A seamless journey from initial concept to final masterpiece, tailored just for you.</p>

        
           <motion.div
  className="relative"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Wrapper with relative for the connecting line */}
  <div className="relative flex flex-wrap lg:flex-nowrap justify-between items-start gap-6 w-full">
    {/* Connecting Line - always behind cards */}
    <div className="absolute top-12 left-0 w-full h-[2px] bg-gray-300 z-0"></div>

    {processSteps.map((step, index) => (
      <motion.div
        key={step.id}
        className="relative bg-[#F9FAFB] shadow-md rounded-2xl p-6 text-center flex-1 min-w-[240px] max-w-[280px] z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {/* Icon Circle placed directly on the line */}
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gray-800 mb-6 relative z-20">
          {step.icon}
        </div>

        {/* Title */}
        <h4 className="font-bold text-lg mb-2">
          {step.id}. {step.title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>

            </div>

           
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-9xl font-light text-gray-300 absolute -top-16 -right-8 z-0">01</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}