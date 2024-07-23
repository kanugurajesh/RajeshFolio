"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HomeMotion() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="flex items-center w-screen h-screen justify-center flex-col gap-4">
      <motion.button
        className="w-20 h-10 bg-blue-500 text-black rounded-md font-bold"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Click
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="w-32 h-32 bg-yellow-500 rounded-md border-black border-4 shadow-lg"
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [10, 40, 60] }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{ duration: 1, ease: "backInOut" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
