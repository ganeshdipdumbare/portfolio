"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/app/data/resume";

export function Skills() {
  const skillCategories = [
    {
      title: "LANGUAGES & APIS",
      skills: resumeData.skills.languages,
      code: "L_01"
    },
    {
      title: "TECHNOLOGIES",
      skills: resumeData.skills.technologies,
      code: "T_02"
    },
    {
      title: "ARCHITECTURAL PRACTICES",
      skills: resumeData.skills.practices,
      code: "P_03"
    },
    {
      title: "MONITORING & CLOUD",
      skills: resumeData.skills.monitoring!,
      code: "M_04"
    }
  ];

  return (
    <section id="skills" className="relative border-b border-midground/15 max-w-[1600px] mx-auto select-none">
      {/* Grid Layout Container */}
      <div className="grid grid-cols-12 w-full text-midground">
        
        {/* Full-width Section Header */}
        <div className="col-span-12 border-b border-midground/15 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[9px] tracking-widest text-yellow-hl border border-midground/20 bg-midground/5 px-2 py-0.5 uppercase">
              NODE // 02
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold tracking-wider text-midground">
              TECHNICAL ARSENAL
            </h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-midground/40">
            [SKILLS_INDEX_ACTIVE: TRUE]
          </span>
        </div>

        {/* Responsive Skill Category Cells */}
        {skillCategories.map((category, index) => {
          // Adjust borders for clean vertical lines on large grids
          const borderClass = index === skillCategories.length - 1
            ? "border-b lg:border-b-0 border-midground/15"
            : "border-b lg:border-b-0 lg:border-r border-midground/15";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`col-span-12 sm:col-span-6 lg:col-span-3 p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group ${borderClass}`}
            >
              {/* Subtle hover background glow */}
              <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />

              {/* Grid cell corner decorations */}
              <div className="absolute right-3 top-3 font-pixel text-[8px] text-midground/20 group-hover:text-yellow-hl transition-colors">
                [{category.code}]
              </div>

              {/* Category Header */}
              <div className="flex flex-col gap-1.5 relative z-10 font-mono">
                <h3 className="text-xs font-bold tracking-widest text-yellow-hl uppercase">
                  {category.title}
                </h3>
                <span className="h-px bg-midground/15 w-full mt-1.5" />
              </div>

              {/* Skill Badges List */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] font-semibold text-midground/90 bg-midground/5 border border-midground/15 px-2.5 py-1.5 hover:border-yellow-hl hover:text-yellow-hl hover:bg-midground/10 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
