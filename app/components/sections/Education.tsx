"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 border-t-2 border-black bg-white">
      <Container>
        <div className="mb-16 flex items-center gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-black text-white">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">Education</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-2 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-bold text-black">{edu.degree}</h3>
              <p className="text-lg font-medium text-neutral-700 mt-2">{edu.institution}</p>
              <div className="flex justify-between mt-4 text-sm font-mono text-neutral-500 border-t-2 border-dashed border-neutral-300 pt-4">
                <span>{edu.location}</span>
                <span>{edu.year}</span>
              </div>
            </motion.div>
          ))}
          
          {/* Interests Section - Updated for better visibility */}
           <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-2 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
            >
               {/* Decorative corner */}
              <div className="absolute top-0 right-0 bg-primary border-l-2 border-b-2 border-black px-3 py-1 font-bold text-xs">
                  PERSONAL
              </div>

              <h3 className="text-2xl font-bold text-black mb-6">Interests</h3>
              <div className="flex flex-wrap gap-3">
                 {resumeData.interests.map((interest, i) => (
                    <span 
                        key={i} 
                        className="px-4 py-2 bg-primary border-2 border-black text-black font-bold text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                    >
                        {interest}
                    </span>
                 ))}
              </div>
            </motion.div>
        </div>
      </Container>
    </section>
  );
}
