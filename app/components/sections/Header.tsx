"use client";

import { Container } from "../ui/Container";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { resumeData } from "@/app/data/resume";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-black">
      <Container className="flex h-16 items-center justify-between px-4 max-w-none">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center bg-primary border-2 border-black">
             {/* Hand/Icon representation */}
             <span className="text-xl font-bold">GD</span>
          </div>
          <div className="hidden md:flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight">Ganeshdip</span>
            <span className="text-xs text-neutral-500 font-mono">Dumbare</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-mono text-sm font-medium">
             {/* Simulate the dashed box nav items */}
             <a href="#experience" className="border-b-2 border-transparent hover:border-black transition-colors px-2 py-1">Experience</a>
             <a href="#skills" className="border-b-2 border-transparent hover:border-black transition-colors px-2 py-1">Skills</a>
             <a href="#education" className="border-b-2 border-transparent hover:border-black transition-colors px-2 py-1">Education</a>
        </nav>

        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center border-2 border-dashed border-black px-3 py-1.5 bg-white gap-2 font-mono text-xs">
              <Terminal size={14} />
              <span>go get contactme</span>
           </div>
           
           <a 
             href={`mailto:${resumeData.personalInfo.email}`}
             className="bg-primary border-2 border-black px-4 py-2 font-bold text-sm hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
           >
             Get in touch
           </a>
        </div>
      </Container>
    </header>
  );
}

