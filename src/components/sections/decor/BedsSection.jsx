import React from "react";
import { motion } from "framer-motion";

export function BedsSection() {
  return (
    <section
      id="BedsSection"
      className="min-h-screen flex items-center justify-center bg-pink-100"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Beds Section</h1>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=1138918193247416089"
          width="345"
          height="714"
          frameBorder="0"
          scrolling="no"
          allow="autoplay; encrypted-media"
          title="Pinterest Video"
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
