"use client"

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
    // <div className="flex justify-center flex-col items-center">
    //   <Bg />
    //   <div className="flex justify-center mt-32 pt-8 pr-4 gap-6 border-b border-r border-[#FFFFFF2a] w-[80vw]">
    //     <div className="-mr-44 -ml-8 -rotate-90  whitespace-nowrap">
    //       <p className="font-thin text-[#EEE] text-xs"> Your next building adventure </p>
    //     </div>

    //     <div className="w-2/3">
    //       <h1 className={`${beVietnamPro.className} font-bold	text-[5.5rem] leading-none pb-6`}>Build your next project to the moon</h1>
    //       <div className="w-[8vw] h-[4px] bg-[#FFF]"></div>
    //     </div>
    //     <div className="w-1/3">
    //       <h1 className={`${beVietnamPro.className} font-light text-sm text-[#AAA]`}>The year is 2035. Settlers at Tranquility Base on the Moon, established in 2033, grapple with life-threatening problems. Solaris, a groundbreaking space agency in New York City calls upon high schoolers across the nation to build innovative technology to save the lives of Tranquility Base settlers.</h1>
    //     </div>
    //   </div>
    // </div>
    <div
      className={`${beVietnamPro.className} flex justify-center flex-col items-center`}
    >
      <motion.div
        initial={{ borderColor: 'rgba(0, 0, 0, 0)' }}
        animate={{ borderColor: '#FFFFFF2a'}}
        transition={{ duration: 2 }}        
        className="flex justify-center md:flex-row flex-col mt-40 w-[85vw] md:pr-4 gap-6 border-b md:border-r border-[#FFFFFF2a] md:w-[80vw]"
      >
        <div className="w-full md:w-2/3">
          <h1
            className={`font-bold	text-[4.5rem] md:text-[5.5rem] leading-none pb-12`}
          >
            Build your next project to the moon
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 4 }} transition={{ duration: 2 }} className="w-[8vw] h-[4px] bg-[#FFF] hidden md:block"></motion.div>
        </div>
        <div className="w-2/3 md:w-1/3 pb-12">
          <h1 className={` font-light md:text-sm text-xs text-[#AAA]`}>
            The year is 2035. Settlers at Tranquility Base on the Moon,
            established in 2033, grapple with life-threatening problems.
            Solaris, a groundbreaking space agency in New York City calls upon
            high schoolers across the nation to build innovative technology to
            save the lives of Tranquility Base settlers.
          </h1>
        </div>
        <div className="md:hidden block w-[12vw] h-[4px] bg-[#FFF]"></div>
      </motion.div>
    </div>
  );
}
