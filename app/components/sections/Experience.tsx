"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";
import { Calendar, MapPin, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#f9f8f4]">
      <Container>
        <div className="mb-16 border-l-4 border-black pl-6 bg-white py-4 max-w-3xl relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">Professional Experience</h2>
          <div className="absolute -right-2 -top-2 w-4 h-4 bg-primary border-2 border-black" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {resumeData.experience.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white border-2 border-dashed border-black transition-all duration-300 hover:border-solid hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 group"
            >
              {/* Corner Accents - they rotate on hover */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-black transition-transform group-hover:rotate-45" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-black transition-transform group-hover:rotate-45" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-black transition-transform group-hover:rotate-45" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-black transition-transform group-hover:rotate-45" />

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-neutral-900 transition-colors bg-transparent group-hover:bg-black group-hover:!text-white w-fit px-2 -ml-2">
                  {role.role}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-mono text-neutral-600">
                  <span className="flex items-center gap-1 bg-primary/20 px-2 py-0.5 rounded-sm border border-black/10 group-hover:bg-primary group-hover:border-black group-hover:text-black transition-colors">
                    <Building2 className="h-3.5 w-3.5" />
                    {role.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {role.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {role.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {role.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-800">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 bg-primary border border-black group-hover:bg-black transition-colors" />
                    <p className="leading-relaxed text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
