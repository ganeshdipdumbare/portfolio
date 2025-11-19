"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";
import { ArrowRight, Github, Linkedin, Mail, Copy } from "lucide-react";
import { Cube } from "../ui/Cube";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 border-b-2 border-dashed border-black/20 bg-[#f9f8f4]">
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="text-5xl font-black tracking-tight text-black md:text-7xl lg:text-8xl leading-[1.1]">
            The Backend <br />
            <span className="relative inline-block">
              Engineering
              <span className="absolute bottom-2 left-0 w-full h-4 bg-primary -z-10 opacity-60 transform -skew-x-12"></span>
            </span> Powerhouse
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl text-neutral-800 font-medium">
            {resumeData.personalInfo.tagline}
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="h-14 px-8 inline-flex items-center justify-center font-bold text-black bg-primary border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-[0px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              Hire Me <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <div className="h-14 pl-4 pr-2 inline-flex items-center border-2 border-dashed border-black bg-white gap-4 shadow-sm group hover:border-solid transition-all">
              <span className="font-mono text-sm text-black">github.com/ganeshdipdumbare</span>
              <a 
                 href="https://github.com/ganeshdipdumbare"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 hover:bg-neutral-100 transition-colors text-black group-hover:scale-110" 
                 title="Go to GitHub"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3D Animated Cube */}
        <div className="mt-24 flex justify-center items-center h-48">
             <Cube />
        </div>
      </Container>
      
      {/* Background Grid Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f9f8f4] pointer-events-none" />
    </section>
  );
}
