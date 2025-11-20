"use client";

import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white py-12 relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col gap-2">
             <p className="text-sm font-mono font-bold flex items-center gap-2">
               © {new Date().getFullYear()} {resumeData.personalInfo.name}
               <span className="w-2 h-2 bg-gopher rounded-full animate-pulse" />
             </p>
             <p className="text-xs text-neutral-500 font-medium">
               Built with Next.js, Tailwind, and <span className="text-primary font-bold">Polished Brutalism</span>.
             </p>
          </div>
          
          <div className="flex gap-4">
            <SocialLink href={resumeData.personalInfo.linkedin} label="LinkedIn" color="hover:bg-[#0077b5]" />
            <SocialLink href={`mailto:${resumeData.personalInfo.email}`} label="Email" color="hover:bg-primary" />
            <SocialLink href="https://github.com/ganeshdipdumbare" label="GitHub" color="hover:bg-[#333]" />
          </div>
        </div>
      </Container>
      
      {/* Decorative footer strip */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gopher via-gcp to-ai" />
    </footer>
  );
}

function SocialLink({ href, label, color }: { href: string; label: string; color: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`px-4 py-2 font-bold border-2 border-black bg-white text-black ${color} hover:!text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}
    >
      {label}
    </a>
  );
}
