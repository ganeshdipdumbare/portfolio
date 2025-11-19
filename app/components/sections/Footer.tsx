"use client";

import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
             <p className="text-sm font-mono font-bold">
               © {new Date().getFullYear()} {resumeData.personalInfo.name}
             </p>
             <p className="text-xs text-neutral-500">
               Built with Next.js, Tailwind, and Brutalism.
             </p>
          </div>
          
          <div className="flex gap-4">
            <SocialLink href={resumeData.personalInfo.linkedin} label="LinkedIn" />
            <SocialLink href={`mailto:${resumeData.personalInfo.email}`} label="Email" />
            <SocialLink href="https://github.com/ganeshdipdumbare" label="GitHub" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="px-4 py-2 font-bold border-2 border-black bg-white text-black hover:bg-black hover:!text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none"
    >
      {label}
    </a>
  );
}
