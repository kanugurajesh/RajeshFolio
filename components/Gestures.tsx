"use client";

import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <motion.button
          className="h-10 bg-blue-700 text-black font-bold rounded-md p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.95,
            rotate: "2.5deg",
            color: "blue",
            background: "white",
            border: "2px blue solid",
          }}
        >
          Click Me!
        </motion.button>
        <motion.button
          className="h-10 bg-red-500 text-black font-bold rounded-md p-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.95,
            rotate: "-2.5deg",
            color: "red",
            background: "white",
            border: "2px red solid",
          }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
