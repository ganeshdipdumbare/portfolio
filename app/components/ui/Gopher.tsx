"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Gopher() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed right-4 top-16 z-50 h-24 w-24 cursor-pointer pointer-events-auto md:right-12 md:h-40 md:w-40"
      whileHover={{ y: 5 }}
      role="img"
      aria-label="Dancing Golang Gopher mascot"
    >
      <div className="relative h-full w-full">
        <Image
          src="/images/gopher-dance-hd.png"
          alt="Dancing Golang Gopher"
          width={768}
          height={768}
          sizes="(max-width: 768px) 96px, 160px"
          priority
          unoptimized
          className="h-full w-full object-contain drop-shadow-[0_8px_20px_rgba(34,197,94,0.45)]"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </motion.div>
  );
}
