import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Resume from "../components/sections/Resume";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Resume/>
      <Projects />
    </main>
  );
}