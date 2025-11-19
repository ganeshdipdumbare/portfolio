"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Cube() {
  const [isHovered, setIsHovered] = useState(false);

  // Define common face styles
  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '2px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // Removed backfaceVisibility: 'hidden' to prevent rendering artifacts in some browsers
  };

  return (
    <div className="w-32 h-32 relative group" style={{ perspective: '1000px' }}>
      <motion.div
        className="w-full h-full relative"
        animate={{ 
          rotateX: isHovered ? 720 : 30, 
          rotateY: isHovered ? 720 : -45, 
        }}
        transition={{
          duration: isHovered ? 3 : 10,
          ease: "linear",
          repeat: Infinity,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ 
          transformStyle: "preserve-3d",
          width: '100%',
          height: '100%'
        }}
      >
        {/* Front Face: Initials - Translate Z +64px */}
        <div style={{ ...faceStyle, backgroundColor: '#ffdc58', transform: 'translateZ(64px)' }}>
          <span className="text-4xl font-black text-black select-none">GD</span>
        </div>

        {/* Back Face: Go - RotateY 180, Translate Z +64px */}
        <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(64px)' }}>
           <span className="text-3xl font-black text-black select-none">Go</span>
        </div>

        {/* Right Face: Postgres - RotateY 90, Translate Z +64px */}
        <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(64px)' }}>
            <span className="text-2xl font-black text-black select-none">Postgres</span>
        </div>

        {/* Left Face: TS - RotateY -90, Translate Z +64px */}
        <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(64px)' }}>
            <span className="text-3xl font-black text-black select-none">TS</span>
        </div>

        {/* Top Face: AWS - RotateX 90, Translate Z +64px */}
        <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(64px)' }}>
            <span className="text-3xl font-black text-black select-none">AWS</span>
        </div>

        {/* Bottom Face: Docker - RotateX -90, Translate Z +64px */}
        <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(64px)' }}>
            <span className="text-2xl font-black text-black select-none">Docker</span>
        </div>
      </motion.div>
    </div>
  );
}
