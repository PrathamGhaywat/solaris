"use client";

import Image from "next/image";
import Bg from "@/components/bg";
import { Be_Vietnam_Pro } from "next/font/google";
import { motion } from "framer-motion";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export default function Home() {
  return (
    <>
      <div className="bg-[url('/noise.png')] bg-no-repeat bg-cover fixed w-[100vw] h-[100vh]"></div>

      <div className={`${beVietnamPro.className} flex justify-center flex-col`}>
        <motion.div
          initial={{ borderColor: "rgba(0, 0, 0, 0)" }}
          animate={{ borderColor: "#FFFFFF2a" }}
          transition={{ duration: 2 }}
          className="flex justify-center md:flex-row flex-col mt-40 w-[90vw] md:h-[50vh] md:pr-4 gap-6 border-b md:border-r border-[#FFFFFF2a] md:w-[85vw] ml-[5vw] md:ml-[7.5vw]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="tracking-tighter	 w-full md:w-2/3 md:pt-6 pt-20 md:p-0 font-bold	text-[4.2rem] md:text-[6rem] 2xl:text-[8rem] leading-none md:pb-12"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="md:w-[10vw] w-[20vw] ml-[5vw] md:ml-[7.5vw] h-[4px] bg-[#FFF]"
        ></motion.div>
      </div>
    </>
  );
}
