"use client";

import { useState, useEffect, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  trigger?: boolean;
}

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

export function ScrambleText({ text, trigger = false }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const frameRef = useRef(0);

  const startScramble = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    frameRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            
            // Increment progress: each character scrambles for a few frames before locking in
            const revealProgress = frameRef.current / 3;
            
            if (index < revealProgress) {
              return char; // lock original character
            }
            
            // Randomize character
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("");
      });

      frameRef.current += 1;

      // Finish scrambling when all characters are resolved
      if (frameRef.current >= text.length * 3) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 20);
  };

  useEffect(() => {
    if (trigger) {
      startScramble();
    } else {
      setDisplayText(text);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [trigger, text]);

  return <span className="font-mono">{displayText}</span>;
}
