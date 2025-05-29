"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed right-4 bottom-4 z-50 cursor-pointer md:right-6 md:bottom-6"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-8 w-8 rounded-full bg-[#0d0d2b] p-2 text-white" />
    </motion.div>
  );
}
