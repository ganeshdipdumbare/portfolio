"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function Cube() {
  const [isHovered, setIsHovered] = useState(false);

  // Define common face styles with enhanced aesthetics
  const faceStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: '2px solid rgba(0,0,0,0.8)', // Slightly softer black
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'visible',
    boxShadow: 'inset 0 0 15px rgba(0,0,0,0.1)', // Inner shadow for depth
  };

  // Text style helper
  const textStyle = "font-black select-none drop-shadow-md";

  return (
    <div className="w-32 h-32 relative group" style={{ perspective: '1000px' }}>
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360], 
        }}
        transition={{
          duration: isHovered ? 5 : 20, // Slower, more elegant rotation
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
        {/* Front Face: Initials - Yellow */}
        <div style={{ ...faceStyle, backgroundColor: '#FFD700', transform: 'translateZ(64px)' }}>
          <span className={`text-4xl text-black ${textStyle}`}>GD</span>
        </div>

        {/* Back Face: Golang - Gopher Blue */}
        <div style={{ ...faceStyle, backgroundColor: '#00ADD8', transform: 'rotateY(180deg) translateZ(64px)' }}>
           <span className={`text-2xl text-white ${textStyle}`}>Golang</span>
        </div>

        {/* Right Face: AI - Futuristic Purple */}
        <div style={{ ...faceStyle, backgroundColor: '#8B5CF6', transform: 'rotateY(90deg) translateZ(64px)' }}>
            <span className={`text-4xl text-white ${textStyle}`}>AI</span>
        </div>

        {/* Left Face: Go (replacing TS) - Gopher Blue */}
        <div style={{ ...faceStyle, backgroundColor: '#00ADD8', transform: 'rotateY(-90deg) translateZ(64px)' }}>
            <span className={`text-4xl text-white ${textStyle}`}>Go</span>
        </div>

        {/* Top Face: GCP (replacing AWS) - Google Blue */}
        <div style={{ ...faceStyle, backgroundColor: '#4285F4', transform: 'rotateX(90deg) translateZ(64px)' }}>
            <span className={`text-3xl text-white ${textStyle}`}>GCP</span>
        </div>

        {/* Bottom Face: Docker - Docker Blue */}
        <div style={{ ...faceStyle, backgroundColor: '#0DB7ED', transform: 'rotateX(-90deg) translateZ(64px)' }}>
            <span className={`text-2xl text-white ${textStyle}`}>Docker</span>
        </div>
      </motion.div>
    </div>
  );
}
