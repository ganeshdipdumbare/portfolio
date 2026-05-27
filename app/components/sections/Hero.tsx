"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/app/data/resume";
import { TerminalDemo } from "../ui/TerminalDemo";
import { Github, Linkedin, Mail, Clipboard, Check } from "lucide-react";

export function Hero() {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

  const handleCopy = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-24 lg:pt-32 border-b border-midground/15 max-w-[1600px] mx-auto select-none">
      {/* 2-Column Desktop Grid Layout */}
      <div className="grid grid-cols-12 w-full text-midground">
        
        {/* Left Cell: Main Info & Actions */}
        <div className="col-span-12 lg:col-span-7 border-r border-midground/15 p-6 md:p-12 flex flex-col justify-center gap-8 relative group">
          {/* subtle hover glow inside grid cell */}
          <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.02]"></span>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 relative z-10"
          >
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[9px] tracking-widest text-yellow-hl border border-midground/20 bg-midground/5 px-2 py-0.5 uppercase">
                STATUS: AVAILABLE FOR CONTRACTS
              </span>
              <span className="size-2 bg-yellow-hl rounded-full animate-pulse" />
            </div>

            <h1 className="font-sans text-[2.75rem] md:text-[4rem] font-extrabold tracking-normal leading-[1.05] text-midground">
              SENIOR BACKEND<br />
              <span className="text-foreground">ENGINEER</span> &<br />
              <span className="text-yellow-hl">ARCHITECT</span>
            </h1>

            <p className="font-mono text-xs md:text-sm tracking-wider text-midground/45 lowercase mt-1">
              // based in berlin • expert in Golang, microservices, and smart contracts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-xl relative z-10"
          >
            <p className="font-mono text-[13px] md:text-[14px] leading-relaxed text-midground/80 normal-case">
              {resumeData.personalInfo.summary}
            </p>
          </motion.div>

          {/* Interactive Install Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5 max-w-lg w-full relative z-10 font-mono"
          >
            {/* Command 1 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] tracking-widest text-midground/40">
                <span>1. CLONE PORTFOLIO REPOSITORY</span>
                <button
                  onClick={() => handleCopy("git clone https://github.com/ganeshdipdumbare/portfolio.git", setCopied1)}
                  className="cursor-pointer border-none bg-transparent hover:text-foreground transition-colors flex items-center gap-1.5 active:scale-95 text-midground"
                >
                  {copied1 ? (
                    <>
                      <Check size={11} className="text-yellow-hl" />
                      <span className="text-[10px] text-yellow-hl uppercase font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Clipboard size={11} />
                      <span className="text-[10px] uppercase font-bold">COPY</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-black/25 dark:bg-black/25 border border-midground/20 px-3 py-2.5 text-xs text-midground/90 lowercase flex justify-between items-center">
                <code>git clone https://github.com/ganeshdipdumbare/portfolio.git</code>
              </div>
            </div>

            {/* Command 2 */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] tracking-widest text-midground/40">
                <span>2. SPIN UP LOCAL INSTANCE</span>
                <button
                  onClick={() => handleCopy("cd portfolio && npm i && npm run dev", setCopied2)}
                  className="cursor-pointer border-none bg-transparent hover:text-foreground transition-colors flex items-center gap-1.5 active:scale-95 text-midground"
                >
                  {copied2 ? (
                    <>
                      <Check size={11} className="text-yellow-hl" />
                      <span className="text-[10px] text-yellow-hl uppercase font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Clipboard size={11} />
                      <span className="text-[10px] uppercase font-bold">COPY</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-black/25 dark:bg-black/25 border border-midground/20 px-3 py-2.5 text-xs text-midground/90 lowercase flex justify-between items-center">
                <code>cd portfolio && npm i && npm run dev</code>
              </div>
            </div>

          </motion.div>

          {/* Social connections bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mt-2 relative z-10"
          >
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="inline-flex items-center gap-2 border border-midground/30 bg-midground/5 px-5 py-2.5 text-xs font-bold tracking-widest hover:bg-midground/10 hover:border-midground/50 transition-all font-mono"
            >
              <Mail size={14} />
              ESTABLISH_CONTACT()
            </a>

            <div className="flex items-center gap-4 text-midground/50">
              <a
                href="https://github.com/ganeshdipdumbare"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Link"
                className="hover:text-foreground transition-colors p-1"
              >
                <Github size={18} />
              </a>
              <a
                href={resumeData.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Link"
                className="hover:text-foreground transition-colors p-1"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Cell: Live Simulated Terminal */}
        <div className="col-span-12 lg:col-span-5 p-6 md:p-12 flex flex-col justify-center items-center gap-12 relative group bg-[#041c1c]/10 dark:bg-background/10">
          <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.01]"></span>

          {/* Interactive Terminal Demo Widget */}
          <div className="w-full relative z-10">
            <h3 className="font-sans text-[11px] tracking-widest text-midground/45 mb-3 uppercase">
              // live system diagnostic pipeline
            </h3>
            <TerminalDemo />
          </div>
        </div>

      </div>
    </section>
  );
}
