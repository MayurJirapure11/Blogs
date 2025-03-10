import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">
      {/* Background Animated Circles */}
      <motion.div
        className="absolute w-72 h-72 bg-white opacity-10 rounded-full top-10 left-10"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-white opacity-10 rounded-full bottom-10 right-10"
        animate={{ scale: [1, 1.8, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Hero Text */}
      <motion.h1
        className="text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Blog
      </motion.h1>

      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explore insightful articles and stories.
      </motion.p>

      {/* Explore Button */}
      <motion.button
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/blog")}
      >
        Explore Now
      </motion.button>
    </div>
  );
}

export default LandingPage;