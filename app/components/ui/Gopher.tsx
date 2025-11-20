"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function Gopher() {
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Eye Tracking Logic
  useEffect(() => {
    const updateEyes = (clientX: number, clientY: number) => {
      if (!leftEyeRef.current || !rightEyeRef.current) return;

      const moveEye = (eyeGroup: SVGGElement) => {
        const eye = eyeGroup.getBoundingClientRect();
        const eyeCenterX = eye.left + eye.width / 2;
        const eyeCenterY = eye.top + eye.height / 2;

        const dx = clientX - eyeCenterX;
        const dy = clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        
        // Limit the pupil movement within the eye
        const maxDistance = 3.5;
        const distance = Math.min(maxDistance, Math.hypot(dx, dy) / 20);

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        const pupil = eyeGroup.querySelector('.pupil') as SVGElement;
        if (pupil) {
          pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      };

      moveEye(leftEyeRef.current);
      moveEye(rightEyeRef.current);
    };

    const handleMouseMove = (e: MouseEvent) => updateEyes(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) updateEyes(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Random Blinking Logic
  useEffect(() => {
    const blinkLoop = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
      
      const nextBlink = Math.random() * 3000 + 2000;
      setTimeout(blinkLoop, nextBlink);
    };
    
    const timeoutId = setTimeout(blinkLoop, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-0 right-4 md:right-12 z-50 w-24 h-20 md:w-36 md:h-28 cursor-pointer pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      role="img"
      aria-label="Cute Golang Gopher mascot"
    >
      <svg 
        viewBox="0 0 120 100" 
        className="w-full h-full overflow-visible"
        style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.3))" }}
      >
        <defs>
          {/* Body Gradient - Gopher Blue */}
          <linearGradient id="bodyGradient" x1="30%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stopColor="#00ADD8" />
            <stop offset="100%" stopColor="#007ea8" />
          </linearGradient>
          
          {/* Snout Gradient */}
          <linearGradient id="snoutGradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#fce8e6" />
          </linearGradient>

          {/* Eye Reflection */}
          <radialGradient id="eyeShine" cx="30%" cy="30%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Body Shape - Rounded and cute */}
        <path 
          d="M25,100 L25,55 C25,25 45,12 60,12 C75,12 95,25 95,55 L95,100 Z" 
          fill="url(#bodyGradient)" 
          stroke="#005f7f" 
          strokeWidth="1.5" 
        />
        
        {/* Left Ear */}
        <g transform="translate(0, 2)">
           <circle cx="28" cy="22" r="9" fill="url(#bodyGradient)" stroke="#005f7f" strokeWidth="1.5" />
           <circle cx="28" cy="22" r="4" fill="#005f7f" opacity="0.2" />
        </g>
        
        {/* Right Ear */}
        <g transform="translate(0, 2)">
           <circle cx="92" cy="22" r="9" fill="url(#bodyGradient)" stroke="#005f7f" strokeWidth="1.5" />
           <circle cx="92" cy="22" r="4" fill="#005f7f" opacity="0.2" />
        </g>

        {/* Snout Area */}
        <ellipse cx="60" cy="62" rx="28" ry="20" fill="url(#snoutGradient)" stroke="#e6c8c5" strokeWidth="1" />

        {/* Nose */}
        <ellipse cx="60" cy="54" rx="7" ry="5" fill="#2a2a2a" />
        <ellipse cx="58" cy="52" rx="2" ry="1" fill="white" opacity="0.5" />

        {/* Teeth */}
        <rect x="53" y="70" width="6" height="9" fill="white" stroke="#e6c8c5" strokeWidth="1" rx="1.5" />
        <rect x="61" y="70" width="6" height="9" fill="white" stroke="#e6c8c5" strokeWidth="1" rx="1.5" />

        {/* Eyes Container */}
        <g transform="translate(0, -2)">
            {/* Left Eye */}
            <g ref={leftEyeRef} className="eye">
            <circle cx="40" cy="42" r="12" fill="white" stroke="#e6c8c5" strokeWidth="1" />
            <circle className="pupil" cx="40" cy="42" r="4.5" fill="#2a2a2a" />
            <circle cx="37" cy="39" r="2" fill="white" opacity="0.8" /> {/* Sparkle */}
            </g>

            {/* Right Eye */}
            <g ref={rightEyeRef} className="eye">
            <circle cx="80" cy="42" r="12" fill="white" stroke="#e6c8c5" strokeWidth="1" />
            <circle className="pupil" cx="80" cy="42" r="4.5" fill="#2a2a2a" />
            <circle cx="77" cy="39" r="2" fill="white" opacity="0.8" /> {/* Sparkle */}
            </g>
        </g>

        {/* Eyelids (Blinking) */}
        <g 
          style={{ 
            opacity: isBlinking ? 1 : 0, 
            transition: "opacity 0.1s ease-in-out"
          }}
        >
             <path d="M28,42 Q40,54 52,42" stroke="#005f7f" strokeWidth="3" fill="none" opacity="0.7" />
             <path d="M68,42 Q80,54 92,42" stroke="#005f7f" strokeWidth="3" fill="none" opacity="0.7" />
        </g>

        {/* Paws (Peeking) */}
        <g transform={isHovered ? "translate(0, -4)" : "translate(0, 0)"} style={{ transition: "transform 0.2s ease" }}>
            <ellipse cx="35" cy="95" rx="10" ry="8" fill="url(#bodyGradient)" stroke="#005f7f" strokeWidth="1.5" />
            <ellipse cx="85" cy="95" rx="10" ry="8" fill="url(#bodyGradient)" stroke="#005f7f" strokeWidth="1.5" />
        </g>
      </svg>
    </motion.div>
  );
}
