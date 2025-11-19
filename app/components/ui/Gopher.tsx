"use client";

import { useEffect, useRef } from "react";

export function Gopher() {
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!leftEyeRef.current || !rightEyeRef.current || !containerRef.current) return;

      const updateEye = (eyeGroup: SVGGElement) => {
        const eye = eyeGroup.getBoundingClientRect();
        const eyeCenterX = eye.left + eye.width / 2;
        const eyeCenterY = eye.top + eye.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;
        const angle = Math.atan2(dy, dx);
        
        // Limit the pupil movement distance
        const maxDistance = 4;
        const distance = Math.min(maxDistance, Math.hypot(dx, dy) / 15);

        const moveX = Math.cos(angle) * distance;
        const moveY = Math.sin(angle) * distance;

        const pupil = eyeGroup.querySelector('.pupil') as SVGElement;
        if (pupil) {
          pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      };

      updateEye(leftEyeRef.current);
      updateEye(rightEyeRef.current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-0 right-4 md:right-8 z-50 w-20 h-16 md:w-32 md:h-24 pointer-events-none"
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 120 100" 
        className="w-full h-full overflow-visible"
        style={{ filter: "drop-shadow(4px 4px 0px #000000)" }}
      >
        {/* Gopher Head/Body */}
        <path 
          d="M20,100 L20,60 C20,30 40,10 60,10 C80,10 100,30 100,60 L100,100 Z" 
          fill="#00ADD8" 
          stroke="black" 
          strokeWidth="2" 
        />
        
        {/* Left Ear */}
        <circle cx="25" cy="25" r="8" fill="#00ADD8" stroke="black" strokeWidth="2" />
        <circle cx="25" cy="25" r="3" fill="#fce8e6" />
        
        {/* Right Ear */}
        <circle cx="95" cy="25" r="8" fill="#00ADD8" stroke="black" strokeWidth="2" />
        <circle cx="95" cy="25" r="3" fill="#fce8e6" />

        {/* Snout Area */}
        <ellipse cx="60" cy="65" rx="25" ry="18" fill="#fce8e6" stroke="black" strokeWidth="2" />

        {/* Nose */}
        <ellipse cx="60" cy="58" rx="6" ry="4" fill="black" />

        {/* Teeth */}
        <rect x="54" y="72" width="5" height="8" fill="white" stroke="black" strokeWidth="1.5" rx="1" />
        <rect x="61" y="72" width="5" height="8" fill="white" stroke="black" strokeWidth="1.5" rx="1" />

        {/* Eyes Group - Placed higher to look cute */}
        <g ref={leftEyeRef} className="eye">
          <circle cx="42" cy="45" r="11" fill="white" stroke="black" strokeWidth="2" />
          <circle className="pupil" cx="42" cy="45" r="4" fill="black" />
        </g>
        <g ref={rightEyeRef} className="eye">
          <circle cx="78" cy="45" r="11" fill="white" stroke="black" strokeWidth="2" />
          <circle className="pupil" cx="78" cy="45" r="4" fill="black" />
        </g>
      </svg>
    </div>
  );
}

