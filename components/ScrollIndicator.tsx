"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      // Animate the 'y' position to move it up and down
      animate={{ y: [0, 10, 0] }}
      // Define the animation's properties
      transition={{
        duration: 2, // The animation should take 2 seconds
        repeat: Infinity, // It should repeat forever
        repeatType: "loop", // Loop the animation
        ease: "easeInOut", // Use a smooth easing function
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <Mouse className="text-black opacity-50" size={40} />
    </motion.div>
  );
}
