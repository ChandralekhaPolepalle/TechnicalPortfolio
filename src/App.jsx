import React from 'react'
import Nav from './components/Nav'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return  (
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection bg-syan-300 selection:text-[#A88ED4]">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      </div>
      
      <div className="container mx-auto px-8">
        <Nav />
        <section id="hero">
          <Hero />
        </section>
        {/* <section id="about">
          <About />
        </section> */}
        <section id="technologies">
          <Technologies />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        
      </div>
      
    </div>

  );
};

export default App 