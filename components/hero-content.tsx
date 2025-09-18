"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div>
      <motion.div
        initial={{ borderColor: "rgba(0, 0, 0, 0)" }}
        animate={{ borderColor: "#FFFFFF2a" }}
        transition={{ duration: 2 }}
        className="flex justify-center md:flex-row flex-col w-[90vw] md:pr-4 gap-6 md:border-r border-[#FFFFFF2a] md:w-[85vw] ml-[5vw] md:ml-[7.5vw] pb-48"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="tracking-tighter	 w-full md:w-2/3 md:p-0 font-bold	text-[4.2rem] md:text-[6rem] 2xl:text-[8rem] leading-none"
        >
          <h1>Build your next project to the moon</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="w-4/5 md:w-1/3 md:p-0 pb-12 font-light text-sm 2xl:text-lg text-[#AAA]"
        >
          <h1>
            The year is 2035. Settlers at Tranquility Base on the Moon,
            established in 2033, grapple with life-threatening problems.
            Solaris, a groundbreaking space agency in New York City calls upon
            high schoolers across the nation to build innovative technology to
            save the lives of Tranquility Base settlers.
          </h1>
        </motion.div>
      </motion.div>

      {/* Container for both lines */}
      <div className="relative ml-[5vw] md:ml-[7.5vw]">
        {/* The thin, semi-transparent line */}
        <div className="h-px w-[90vw] md:w-[85vw] bg-white/20"></div>

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
