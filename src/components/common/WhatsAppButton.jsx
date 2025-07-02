import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-8 z-50 flex flex-col items-center space-y-2">
      <a
        href="https://wa.me/355692311606"
        className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-2xl transition-transform duration-200 hover:scale-110 border-4 border-white dark:border-gray-800"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-sm font-semibold text-green-700 dark:text-green-300 shadow-md border border-green-200 dark:border-green-700">
        Book here!
      </span>
    </div>
  );
};

export default WhatsAppButton;
