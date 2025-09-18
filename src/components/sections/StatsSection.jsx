import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Counter = ({ from = 0, to, duration = 2 }) => {
  const controls = useAnimation();
  const [value, setValue] = React.useState(from);

  useEffect(() => {
    controls.start({
      val: to,
      transition: { duration, ease: "easeOut" },
    });
  }, [to, duration, controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ val: from }}
      onUpdate={(latest) => setValue(Math.floor(latest.val))}
    >
      {value}
    </motion.span>
  );
};

export function StatsSection() {
  return (
    <section
      id="stats"
      className="min-h-screen bg-gray-900 text-white flex items-center ml-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Heading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-9xl font-light text-gray-600 mb-8">02</div>
            <h2 className="text-4xl font-light mb-4">SOME INTERESTING</h2>
            <h3 className="text-4xl font-normal mb-12">FACTS</h3>
          </motion.div>

          {/* Glass Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { from: 100, to: 200, label: "Projects Completed" },
              { from: 50, to: 150, label: "Happy Clients" },
              { from: 5, to: 10, label: "Years Of Experience" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center text-center 
                           bg-white/10 backdrop-blur-lg border border-white/20 
                           rounded-xl shadow-lg p-6 h-40"
              >
                {/* Smaller number */}
                <div className="text-3xl md:text-4xl font-semibold mb-2">
                  <Counter from={item.from} to={item.to} duration={2.5} />+
                </div>

                {/* Smaller label */}
                <p className="text-gray-200 text-base font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
