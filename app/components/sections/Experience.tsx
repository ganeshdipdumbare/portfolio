"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/app/data/resume";

export function Experience() {
  return (
    <section id="experience" className="relative border-b border-midground/15 max-w-[1600px] mx-auto select-none">
      {/* Brutalist Grid Container */}
      <div className="grid grid-cols-12 w-full text-midground">
        
        {/* Full-Width Grid Header */}
        <div className="col-span-12 border-b border-midground/15 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[9px] tracking-widest text-yellow-hl border border-midground/20 bg-midground/5 px-2 py-0.5 uppercase">
              NODE // 01
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold tracking-wider text-midground">
              PROFESSIONAL EXPERIENCE
            </h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-midground/40">
            [TOTAL_NODES_INDEXED: {resumeData.experience.length}]
          </span>
        </div>

        {/* Grid Cells for Roles */}
        {resumeData.experience.map((role, index) => {
          // Determine grid border configuration based on column index for neat 2-col visual dividers
          const isEven = index % 2 === 0;
          const cellBorderClass = isEven 
            ? "border-b md:border-r border-midground/15" 
            : "border-b border-midground/15";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`col-span-12 md:col-span-6 p-6 md:p-10 relative overflow-hidden group flex flex-col gap-6 ${cellBorderClass}`}
            >
              {/* Subtle hover highlight glow */}
              <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />

              {/* Grid cell corner decorations */}
              <div className="absolute right-3 top-3 font-pixel text-[8px] text-midground/20 group-hover:text-yellow-hl transition-colors">
                [EX_0{index + 1}]
              </div>

              {/* Metadata Panel */}
              <div className="flex flex-col gap-2 relative z-10 font-mono">
                <span className="text-xs font-bold text-yellow-hl tracking-widest uppercase">
                  {role.role}
                </span>

                <div className="grid grid-cols-3 gap-y-1.5 text-[11px] tracking-wider text-midground/60 border-t border-b border-midground/10 py-2.5 mt-2">
                  <div>
                    <span className="text-midground/40 mr-1.5 uppercase font-bold">COMPANY:</span>
                    <span className="text-midground">{role.company}</span>
                  </div>
                  <div>
                    <span className="text-midground/40 mr-1.5 uppercase font-bold">PERIOD:</span>
                    <span className="text-midground">{role.period}</span>
                  </div>
                  <div>
                    <span className="text-midground/40 mr-1.5 uppercase font-bold">LOC:</span>
                    <span className="text-midground">{role.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements details */}
              <ul className="flex flex-col gap-3 relative z-10 font-mono text-[12px] leading-relaxed text-midground/80 normal-case">
                {role.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-yellow-hl select-none mt-0.5">▪</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
