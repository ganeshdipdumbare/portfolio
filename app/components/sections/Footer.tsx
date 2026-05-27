"use client";

import { useState } from "react";
import { resumeData } from "@/app/data/resume";
import { ScrambleText } from "../ui/ScrambleText";

export function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="relative border-b border-midground/15 max-w-[1600px] mx-auto select-none bg-[#041c1c]/10 dark:bg-background/10">
      {/* 5-Column Desktop Brutalist Grid */}
      <div className="grid grid-cols-12 w-full text-midground text-[11px] font-mono uppercase">
        
        {/* Cell 1: Copyright */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-midground/15 p-5 flex flex-col justify-center gap-1 group relative">
          <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />
          <span className="text-midground/40 tracking-widest text-[9px]">COPYRIGHT</span>
          <span className="font-bold tracking-wider text-midground">
            © {new Date().getFullYear()} GANESHDIP DUMBARE
          </span>
        </div>

        {/* Cell 2: Stack info */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-midground/15 p-5 flex flex-col justify-center gap-1 group relative">
          <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />
          <span className="text-midground/40 tracking-widest text-[9px]">ENGINE</span>
          <span className="text-midground/80 tracking-wide lowercase">
            next.js • tailwindcss v4 • gemini
          </span>
        </div>

        {/* Cell 3: GitHub Link */}
        <a
          href="https://github.com/ganeshdipdumbare"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink("github")}
          onMouseLeave={() => setHoveredLink(null)}
          className="col-span-6 sm:col-span-4 lg:col-span-2 border-b sm:border-b-0 sm:border-r border-midground/15 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden text-yellow-hl font-bold"
        >
          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0" />
          <span>
            <ScrambleText text="GITHUB ↗" trigger={hoveredLink === "github"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </span>
        </a>

        {/* Cell 4: LinkedIn Link */}
        <a
          href={resumeData.personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredLink("linkedin")}
          onMouseLeave={() => setHoveredLink(null)}
          className="col-span-6 sm:col-span-4 lg:col-span-2 border-r sm:border-r border-midground/15 p-5 flex items-center justify-between group relative cursor-pointer overflow-hidden text-yellow-hl font-bold"
        >
          <span className="absolute inset-1 bg-midground pointer-events-none transition-opacity duration-250 group-hover:opacity-5 opacity-0 group-hover:duration-0" />
          <span>
            <ScrambleText text="LINKEDIN ↗" trigger={hoveredLink === "linkedin"} />
            <span className="blink hidden group-hover:inline-block dither ml-1.5 w-[1.2ch] -mb-[0.15em] h-[1.1em]"></span>
          </span>
        </a>

        {/* Cell 5: License Statement */}
        <div className="col-span-12 sm:col-span-4 lg:col-span-1 p-5 flex flex-col justify-center group relative text-center sm:text-left">
          <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />
          <span className="text-midground/40 tracking-widest text-[9px] block">LICENSE</span>
          <span className="text-midground/70 font-semibold">MIT</span>
        </div>

      </div>
    </footer>
  );
}
