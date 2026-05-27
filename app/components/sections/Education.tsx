"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/app/data/resume";

export function Education() {
  return (
    <section id="education" className="relative border-b border-midground/15 max-w-[1600px] mx-auto select-none">
      {/* Grid Container */}
      <div className="grid grid-cols-12 w-full text-midground">
        
        {/* Full-width Section Header */}
        <div className="col-span-12 border-b border-midground/15 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[9px] tracking-widest text-yellow-hl border border-midground/20 bg-midground/5 px-2 py-0.5 uppercase">
              NODE // 04
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold tracking-wider text-midground">
              ACADEMICS & INTERESTS
            </h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-midground/40">
            [INDEXING_FORMAL_STUDIES: OK]
          </span>
        </div>

        {/* Education Item Cells */}
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-midground/15 p-6 md:p-10 relative overflow-hidden group flex flex-col justify-between gap-8"
          >
            {/* Subtle hover background glow */}
            <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />

            {/* Corner Code Tag */}
            <div className="absolute right-3 top-3 font-pixel text-[8px] text-midground/20 group-hover:text-yellow-hl transition-colors">
              [EDU_0{index + 1}]
            </div>

            {/* Details */}
            <div className="flex flex-col gap-3 relative z-10 font-mono">
              <span className="text-xs font-bold text-yellow-hl tracking-widest uppercase">
                {edu.degree}
              </span>
              <span className="h-px bg-midground/15 w-full mt-1" />

              <div className="flex flex-col gap-1 text-[11px] text-midground/70 mt-2">
                <div>
                  <span className="text-midground/40 mr-1.5 uppercase font-bold">INSTITUTION:</span>
                  <span className="text-midground">{edu.institution}</span>
                </div>
                <div>
                  <span className="text-midground/40 mr-1.5 uppercase font-bold">LOCATION:</span>
                  <span className="text-midground">{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Completion Year */}
            <div className="flex justify-start relative z-10 font-mono">
              <span className="font-pixel text-[9px] tracking-widest text-yellow-hl border border-midground/20 bg-midground/5 px-2.5 py-1 uppercase">
                GRADUATED // {edu.year}
              </span>
            </div>

          </motion.div>
        ))}

        {/* Interests Card Column */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-12 md:col-span-4 p-6 md:p-10 relative overflow-hidden group flex flex-col justify-between gap-8 border-b md:border-b-0 border-midground/15"
        >
          {/* Subtle hover background glow */}
          <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />

          {/* Corner Code Tag */}
          <div className="absolute right-3 top-3 font-pixel text-[8px] text-midground/20 group-hover:text-yellow-hl transition-colors">
            [PERS_01]
          </div>

          {/* Details */}
          <div className="flex flex-col gap-3 relative z-10 font-mono">
            <span className="text-xs font-bold text-yellow-hl tracking-widest uppercase">
              OUT-OF-OFFICE // INTERESTS
            </span>
            <span className="h-px bg-midground/15 w-full mt-1" />

            <div className="flex flex-wrap gap-2.5 mt-4">
              {resumeData.interests.map((interest, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] font-semibold text-midground/90 bg-midground/5 border border-midground/15 px-3 py-1.5 hover:border-yellow-hl hover:text-yellow-hl hover:bg-midground/10 transition-all cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-start relative z-10 font-mono">
            <span className="font-pixel text-[9px] tracking-widest text-midground/40 uppercase">
              ACTIVELY BALANCED
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
