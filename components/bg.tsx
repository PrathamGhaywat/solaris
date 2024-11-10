"use client";

import { motion } from "framer-motion";

export default function Bg() {
  return (
    //     <div className="">
    // <div className="absolute bottom-0 left-0 bg-[#FFF] rounded-[100%] w-[80vw] h-[60vw] shadow-[0_0_60px_3vw_#fff,0_0_100px_5vw_#fff,0_0_140vh_12vw_#8D79FF,0_0_140vh_32vw_#1A1A40] transform -translate-x-[5%] translate-y-[85%] z-[-1]"></div>
    // </div>
    <>
      <motion.svg
        preserveAspectRatio="xMidYMid slice"
        width="100vw"
        className="absolute md:block hidden z-[-1]"
        viewBox="0 0 1728 1117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
      >
        <ellipse
          cx="667"
          cy="1276"
          rx="1735"
          ry="1293"
          fill="url(#paint0_radial_284_169)"
        />
        <ellipse
          cx="667"
          cy="1276"
          rx="1735"
          ry="1293"
          fill="url(#pattern0_284_169)"
        />
        <motion.line
          x1="164"
          y1="731.5"
          x2="1683"
          y2="731.5"
          stroke="white"
          strokeOpacity="0.18"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 2, ease: "easeInOut" },
            },
          }}
        />
        <motion.circle
          cx="1526.5"
          cy="731.5"
          r="107"
          stroke="white"
          strokeOpacity="0.35"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 2, ease: "easeInOut" },
            },
          }}
        />
        <defs>
          <pattern
            id="pattern0_284_169"
            patternContentUnits="objectBoundingBox"
            width="0.138329"
            height="0.185615"
          >
            <use
              href="#image0_284_169"
              transform="scale(8.64553e-05 0.000116009)"
            />
          </pattern>
          <radialGradient
            id="paint0_radial_284_169"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(667 1276) rotate(90) scale(1293 1735)"
          >
            <stop offset="0.463542" stopColor="white" />
            <stop offset="0.67" stopColor="#8D79FF" stopOpacity="0.55" />
            <stop offset="0.855" stopColor="#0013FF" stopOpacity="0.241667" />
            <stop offset="1" stopColor="#0029FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>

      <svg
        viewBox="0 0 440 1739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        width="100vw"
        className="absolute md:hidden block z-[-1]"
      >
        <ellipse
          cx="-82"
          cy="1434"
          rx="1735"
          ry="1517"
          fill="url(#paint0_radial_286_170)"
        />
        <circle
          cx="413.5"
          cy="600.5"
          r="107"
          stroke="white"
          strokeOpacity="0.35"
        />
        <defs>
          <radialGradient
            id="paint0_radial_286_170"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-82 1434) rotate(90) scale(1517 1735)"
          >
            <stop offset="0.463542" stopColor="white" />
            <stop offset="0.67" stopColor="#8D79FF" stopOpacity="0.55" />
            <stop offset="0.855" stopColor="#0013FF" stopOpacity="0.241667" />
            <stop offset="1" stopColor="#0029FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </>
  );
}
