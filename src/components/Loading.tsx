"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2-3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
        >
          <div className="relative flex items-center justify-center">
            {/* Circular Loading Animation */}
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Rotating Circle Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-gray-200 border-t-rose-500"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Second Layer for Double Circle Effect */}
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-gray-100 border-t-pink-400"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Heart Icon in Center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 0.8] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* SVG Heart */}
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 text-rose-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>
            </div>

            {/* Optional Loading Text */}
            <motion.p
              className="absolute -bottom-12 text-gray-600 text-sm md:text-base font-felidae"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              D ❤️ N Wedding...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
