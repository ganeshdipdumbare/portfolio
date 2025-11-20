"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";
import { ArrowRight, Github } from "lucide-react";
import { Cube } from "../ui/Cube";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 border-b-2 border-dashed border-black/20 bg-[#fdfbf7] overflow-hidden">
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-5xl font-black tracking-tight text-black md:text-7xl lg:text-8xl leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-800">Senior</span> <br />
            <span className="relative inline-block mx-2">
              Backend
              {/* Underline decoration */}
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary opacity-80 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> <br/>
            <span className="relative inline-block text-gopher">
               Engineer
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-neutral-800 font-medium leading-relaxed">
            {resumeData.personalInfo.tagline}
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="brutal-btn group"
            >
              Hire Me <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="h-14 pl-4 pr-2 inline-flex items-center border-2 border-dashed border-black bg-white gap-4 shadow-sm group hover:border-solid transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-mono text-sm text-black">github.com/ganeshdipdumbare</span>
              <a 
                 href="https://github.com/ganeshdipdumbare"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 hover:bg-neutral-100 transition-colors text-black group-hover:scale-110 group-hover:text-gopher" 
                 title="Go to GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3D Animated Cube */}
        <div className="mt-24 flex justify-center items-center h-48 perspective-1000">
             <Cube />
        </div>
      </Container>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-gcp rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-6 h-6 bg-ai rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fdfbf7] pointer-events-none" />
    </section>
  );
}
