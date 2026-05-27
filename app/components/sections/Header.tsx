"use client";

import { useState } from "react";
import Link from "next/link";
import { resumeData } from "@/app/data/resume";
import { ScrambleText } from "../ui/ScrambleText";

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#041c1c]/90 dark:bg-background/90 backdrop-blur-md transition-all border-b border-midground/15 max-w-[1600px] mx-auto">
      {/* Desktop Brutalist Grid Header */}
      <div className="hidden lg:grid grid-cols-12 w-full select-none text-midground">
        {/* Column 1: Brand Logo (Sized to col-span-2) */}
        <Link 
          href="/" 
          className="col-span-2 border-r border-midground/15 p-5 flex flex-col justify-center cursor-pointer transition-colors hover:bg-midground/5"
        >
          <h2 className="font-sans text-[18px] font-extrabold tracking-wider leading-[1.15] text-midground">
            GANESHDIP<br />DUMBARE
          </h2>
        </Link>

        {/* Column 2: Experience Nav (col-span-2) */}
        <a 
          href="#experience" 
          onMouseEnter={() => setHoveredLink("experience")}
          onMouseLeave={() => setHoveredLink(null)}
          className="col-span-2 border-r border-midground/15 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden"
        >
          <span className="text-xs tracking-[0.18em] font-mono">
            <ScrambleText text="Experience" trigger={hoveredLink === "experience"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </span>
          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0"></span>
        </a>

        {/* Column 3: Skills Nav (col-span-2) */}
        <a 
          href="#skills" 
          onMouseEnter={() => setHoveredLink("skills")}
          onMouseLeave={() => setHoveredLink(null)}
          className="col-span-2 border-r border-midground/15 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden"
        >
          <span className="text-xs tracking-[0.18em] font-mono">
            <ScrambleText text="Skills" trigger={hoveredLink === "skills"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </span>
          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0"></span>
        </a>

        {/* Column 4: Certifications Nav (col-span-2) */}
        <a 
          href="#certifications" 
          onMouseEnter={() => setHoveredLink("certifications")}
          onMouseLeave={() => setHoveredLink(null)}
          className="col-span-2 border-r border-midground/15 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden"
        >
          <span className="text-xs tracking-[0.18em] font-mono">
            <ScrambleText text="Certifications" trigger={hoveredLink === "certifications"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </span>
          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0"></span>
        </a>

        {/* Column 5: Education Nav (col-span-2) */}
        <a 
          href="#education" 
          onMouseEnter={() => setHoveredLink("education")}
          onMouseLeave={() => setHoveredLink(null)}
          className="col-span-2 border-r border-midground/15 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden"
        >
          <span className="text-xs tracking-[0.18em] font-mono">
            <ScrambleText text="Education" trigger={hoveredLink === "education"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </span>
          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0"></span>
        </a>

        {/* Column 6: Contact Action & Theme Switcher (col-span-2) */}
        <div 
          className="col-span-2 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden text-yellow-hl gap-4"
        >
          <a 
            href={`mailto:${resumeData.personalInfo.email}`} 
            onMouseEnter={() => setHoveredLink("contact")}
            onMouseLeave={() => setHoveredLink(null)}
            className="text-xs tracking-[0.18em] font-mono font-bold text-yellow-hl z-10 cursor-pointer flex items-center"
          >
            <ScrambleText text="Hire_Me ↗" trigger={hoveredLink === "contact"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </a>

          {/* Symmetrical Theme Switcher capsule like Hermes placed far right */}
          <button 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative z-20 flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-current/25 bg-current/8 transition-colors hover:bg-current/15 select-none text-midground"
            type="button"
          >
            {/* Sun icon */}
            <svg className="absolute left-1 size-3.5 opacity-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
            {/* Moon icon */}
            <svg className="absolute right-1 size-3.5 opacity-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            {/* Sliding dot */}
            <span aria-hidden="true" className="absolute size-4 rounded-full transition-transform duration-200 ease-out pointer-events-none" style={{ transform: theme === "dark" ? "translateX(22px)" : "translateX(2px)", backgroundColor: "var(--midground)" }}></span>
          </button>

          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0 z-0"></span>
        </div>
      </div>

      {/* Mobile Flat Layout */}
      <div className="flex lg:hidden items-center justify-between p-4 text-midground w-full">
        <Link href="/">
          <h2 className="font-sans text-[18px] font-extrabold tracking-widest text-midground">
            GANESHDIP
          </h2>
        </Link>
        <div className="flex items-center gap-3">
          {/* Mobile Theme Switcher */}
          <button 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="relative flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-current/25 bg-current/8 transition-colors hover:bg-current/15 select-none text-midground"
            type="button"
          >
            <svg className="absolute left-1 size-3.5 opacity-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
            </svg>
            <svg className="absolute right-1 size-3.5 opacity-40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <span aria-hidden="true" className="absolute size-4 rounded-full transition-transform duration-200 ease-out pointer-events-none" style={{ transform: theme === "dark" ? "translateX(22px)" : "translateX(2px)", backgroundColor: "var(--midground)" }}></span>
          </button>

          <a 
            href={`mailto:${resumeData.personalInfo.email}`}
            className="text-xs font-mono tracking-widest border border-midground/30 bg-midground/5 px-3 py-1.5 hover:bg-midground/10 text-yellow-hl font-bold"
          >
            HIRE_ME
          </a>
        </div>
      </div>
    </header>
  );
}
