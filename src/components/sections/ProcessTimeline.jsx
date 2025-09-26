import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, DraftingCompass, Construction, Sparkles } from "lucide-react";

const steps = [
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

export function ProcessTimeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.1", "end 0.9"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
   <section id="process" className="relative min-h-screen bg-[#CBB37E] text-gray-800 px-6 py-16">
      
      <div className="max-w-6xl mx-auto ml-20">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl font-semibold mb-2">Our Process</h2>
          <p className="text-gray-700">
            We keep things simple, clear, and effective.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full flex justify-center">
            <div className="w-[3px] bg-gray-300 rounded-full relative">
              {/* Animated filling line */}
              <motion.div
                className="absolute left-0 top-0 w-[3px] bg-gray-700 rounded-full"
                style={{ height }}
              />
            </div>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-16 mb-32 min-h-[250px] relative ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-black border-4 border-gray-700 z-10"></div>

              {/* Content (alternating left/right) */}
              <div className="lg:w-1/2 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-900 text-2xl font-semibold">{step.id})</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
                    {step.icon}
                  </div>
                  {/* Serial number + Title */}
                  <h3 className="text-2xl font-semibold">
                    
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>

              {/* Empty side */}
              <div className="lg:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
