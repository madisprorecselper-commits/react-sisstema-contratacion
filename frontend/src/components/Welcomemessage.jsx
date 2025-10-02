import React from "react";
import { motion } from "framer-motion";

export function WelcomeMessage({ name }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="mt-6 text-center"
    >
      <h3
        className="text-4xl font-extrabold bg-gradient-to-r from-yellow-800 via-orange-700 to-amber-400 bg-clip-text text-transparent drop-shadow-lg"
      >
        ¡Bienvenido, {name}! 👋
      </h3>

      <p className="text-gray-700 font-medium mt-2">
        Nos alegra verte de nuevo 🚀
      </p>
    </motion.div>
  );
}


