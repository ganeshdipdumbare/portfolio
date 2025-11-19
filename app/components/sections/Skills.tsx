"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { resumeData } from "@/app/data/resume";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t-2 border-black bg-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="mb-16 flex items-end gap-4">
          <h2 className="text-4xl font-black tracking-tight text-black md:text-5xl">Technical Arsenal</h2>
          <div className="h-2 flex-1 bg-black mb-2 hidden md:block" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <SkillCard title="Languages & APIs" skills={resumeData.skills.languages} />
          <SkillCard title="Technologies" skills={resumeData.skills.technologies} />
          <SkillCard title="Practices" skills={resumeData.skills.practices} />
          <SkillCard title="Monitoring" skills={resumeData.skills.monitoring!} />
        </div>
      </Container>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
    </section>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border-2 border-black p-0 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(255,220,88,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 group"
    >
      <div className="border-b-2 border-black p-4 bg-neutral-100 group-hover:bg-primary transition-colors">
        <h3 className="text-xl font-bold text-black group-hover:text-black uppercase tracking-wider flex items-center justify-between">
            {title}
            <div className="w-3 h-3 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
      </div>
      <div className="p-6 flex flex-wrap gap-3 bg-white">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-sm font-bold bg-white border-2 border-black text-black hover:!bg-black hover:!text-white transition-colors cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
