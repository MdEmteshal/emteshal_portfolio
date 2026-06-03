import Navbar from "../components/nav";
import Hero from "../components/hero";
import About from "./about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Education from "../components/education";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
