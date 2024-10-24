import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/assets/images/logo.webp";

const Intro = ({ onAnimationEnd }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 2500);

    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 8);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onAnimationEnd]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="w-64 h-auto mb-4"
      >
        <Image src={logo} alt="Resetas.lt logo" />
      </motion.div>

      <div className="w-2/3 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
