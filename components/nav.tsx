"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

// Initialize the Space Grotesk font for the button
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Nav() {
  // State to track if the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to add and clean up the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 50px, otherwise false
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div
      className={`fixed w-full px-[5vw] md:px-[7.5vw] py-4 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/20" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image src="/logo.png" alt="logo" width={200} height={0} />

        {/* Conditionally rendered Register Button with animation */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <a
                href="https://solaris.devpost.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className={`${spaceGrotesk.className} bg-white text-black font-bold uppercase tracking-wider px-4 py-2 rounded-none text-sm hover:bg-gray-200 transition-colors duration-300`}
                >
                  Register
                </button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
