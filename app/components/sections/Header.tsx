"use client";

import { Container } from "../ui/Container";
import { Terminal } from "lucide-react";
import { resumeData } from "@/app/data/resume";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b-2 border-black transition-all">
      <Container className="flex h-16 items-center justify-between px-4 max-w-none">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center bg-primary border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
             <span className="text-xl font-black">GD</span>
          </div>
          <div className="hidden md:flex flex-col leading-none">
            <span className="font-bold text-lg tracking-tight group-hover:text-gopher transition-colors">Ganeshdip</span>
            <span className="text-xs text-neutral-500 font-mono">Dumbare</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-mono text-sm font-bold">
             <a href="#experience" className="relative hover:text-gopher transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-1 after:bg-gopher after:transition-all hover:after:w-full">Experience</a>
             <a href="#skills" className="relative hover:text-gcp transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-1 after:bg-gcp after:transition-all hover:after:w-full">Skills</a>
             <a href="#education" className="relative hover:text-ai transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-1 after:bg-ai after:transition-all hover:after:w-full">Education</a>
        </nav>

        <div className="flex items-center gap-4">
           <div className="hidden md:flex items-center border-2 border-dashed border-black px-3 py-1.5 bg-neutral-50 gap-2 font-mono text-xs hover:bg-white transition-colors">
              <Terminal size={14} className="text-gopher" />
              <span className="text-neutral-600">go get contactme</span>
           </div>
           
           <a 
             href={`mailto:${resumeData.personalInfo.email}`}
             className="bg-black !text-white border-2 border-black px-4 py-2 font-bold text-sm hover:bg-primary hover:!text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all active:translate-y-0 active:shadow-none"
           >
             Get in touch
           </a>
        </div>
      </Container>
    </header>
  );
}
