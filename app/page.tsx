import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-primary selection:text-black overflow-x-hidden">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </div>
  );
}
