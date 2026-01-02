import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Resume from "../components/sections/Resume";
import Projects from "../components/sections/Projects";
import SkillsScroll from "../components/sections/SkillsScroll";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="resume">
        <Resume />
      </section>
      
      <section id="skills">
        <SkillsScroll />
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>

    </main>
  );
}