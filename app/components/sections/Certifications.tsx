"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/app/data/resume";

export function Certifications() {
  // Safe cast since we just added the field
  const certs = (resumeData as any).certifications || [];

  return (
    <section id="certifications" className="relative border-b border-midground/15 max-w-[1600px] mx-auto select-none">
      {/* Grid Container */}
      <div className="grid grid-cols-12 w-full text-midground">

        {/* Full-width Section Header */}
        <div className="col-span-12 border-b border-midground/15 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[9px] tracking-widest text-yellow-hl border border-midground/20 bg-midground/5 px-2 py-0.5 uppercase">
              NODE // 03
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold tracking-wider text-midground">
              LICENSES & CERTIFICATIONS
            </h2>
          </div>
          <span className="font-mono text-xs tracking-wider text-midground/40">
            [VERIFIED_QUALIFICATIONS_SYNCED: {certs.length}]
          </span>
        </div>

        {/* Certification Cells */}
        {certs.map((cert: any, index: number) => {
          // Adjust borders dynamically for 3-column rows to prevent edge-border overflow
          const isThird = (index + 1) % 3 === 0;
          const borderClass = `border-b border-midground/15 ${isThird ? 'md:border-r-0' : 'md:border-r'}`;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`col-span-12 md:col-span-4 p-6 md:p-10 relative overflow-hidden group flex flex-col justify-between gap-8 ${borderClass}`}
            >
              {/* Subtle hover background glow */}
              <span className="absolute inset-0 bg-midground pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-[0.03]" />

              {/* Corner Code Tag */}
              <div className="absolute right-3 top-3 font-pixel text-[8px] text-midground/20 group-hover:text-yellow-hl transition-colors">
                [CERT_0{index + 1}]
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3 relative z-10 font-mono">
                <span className="text-xs font-bold text-yellow-hl tracking-widest uppercase">
                  {cert.name}
                </span>
                <span className="h-px bg-midground/15 w-full mt-1" />

                <div className="flex flex-col gap-1.5 text-[11px] text-midground/70 mt-2">
                  <div>
                    <span className="text-midground/40 mr-1.5 uppercase font-bold">ISSUER:</span>
                    <span className="text-midground">{cert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-midground/40 mr-1.5 uppercase font-bold">DATE:</span>
                    <span className="text-midground">{cert.date}</span>
                  </div>
                  {cert.id && (
                    <div>
                      <span className="text-midground/40 mr-1.5 uppercase font-bold">VERIFY_ID:</span>
                      <span className="text-midground">{cert.id}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-start relative z-10 font-mono">
                <span className="font-pixel text-[9px] tracking-widest text-midground/45 uppercase">
                  VERIFIED // SYSTEM_SECURE
                </span>
              </div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
