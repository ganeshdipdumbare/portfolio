import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Certifications } from "./components/sections/Certifications";
import { Education } from "./components/sections/Education";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Footer />
    </div>
  );
}


