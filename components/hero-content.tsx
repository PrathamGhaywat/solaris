"use client";

import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

// Initialize the Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"], // Using a bold weight for the button
});

export default function HeroContent() {
  return (
    <div>
      <motion.div
        initial={{ borderColor: "rgba(0, 0, 0, 0)" }}
        animate={{ borderColor: "#FFFFFF2a" }}
        transition={{ duration: 2 }}
        className="flex justify-center md:flex-row flex-col w-full md:pr-4 gap-6 md:border-r border-[#FFFFFF2a] pb-48"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="tracking-tighter	 w-full md:w-2/3 md:p-0 font-bold	text-[4.2rem] md:text-[6rem] 2xl:text-[8rem] leading-none"
        >
          <h1>The most funded high school hackathon.</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-4/5 md:w-1/3 md:p-0 pb-12 font-light text-sm 2xl:text-lg text-[#AAA]"
        >
          <h1>
            Through our custom platform, Launchpad, we're leveraging that
            funding to empower every single participant. You will receive over
            $20,000 in enterprise-grade cloud resources from Google Cloud,
            completely free of charge, to build out your projects. Bring your
            biggest ideas—we'll provide the infrastructure to launch them.
          </h1>

          {/* Register Button - Now a link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8"
          >
            <a
              href="https://solaris.devpost.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`${spaceGrotesk.className} bg-white text-black font-bold uppercase tracking-wider px-6 py-2 rounded-none hover:bg-gray-200 transition-colors duration-300`}
              >
                Register
              </button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Container for both lines */}
      <div className="relative">
        {/* The thin, semi-transparent line */}
        <div className="h-px w-full bg-white/20"></div>

        {/* The thick, animated line, positioned on top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/2 -translate-y-1/2 left-0 h-[4px] w-[20vw] md:w-[10vw] bg-white"
        ></motion.div>
      </div>
    </div>
  );
}
