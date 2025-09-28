import React from 'react';
import { useToast } from '@/components/ui/use-toast';

export function Footer({ scrollToSection }) {
  const { toast } = useToast();

  return (
    <footer className="bg-gray-900 w-full px-6 py-8">
      <div
        className="
          flex justify-between items-center pt-8 border-t border-gray-100 
          max-w-screen-xl mx-auto
          ml-16 sm:ml-20 md:ml-24
        "
      >
        {/* ✅ Clickable link */}
        <a
          href="https://thedevstechnologies.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-100 hover:text-lime-400 transition-colors"
        >
          Made with ❤️ by TheDevsTechnologies
        </a>

        <button
          onClick={() => scrollToSection(0)}
          className="text-sm tracking-wider text-gray-100 hover:text-gray-500 transition-colors flex items-center"
        >
          TO TOP
          <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
        </button>
      </div>
    </footer>
  );
}
