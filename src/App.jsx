import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ToolsMarquee from './components/ToolsMarquee.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import WhatIBring from './components/WhatIBring.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Certification from './components/Certification.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ToolsMarquee />
        <About />
        <Skills />
        <WhatIBring />
        <Experience />
        <Projects />
        <Education />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
