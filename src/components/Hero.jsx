import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Welcome to Your Product
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        The best solution to grow your business online.
      </p>
      <motion.button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        whileHover={{ scale: 1.1 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default Hero;
