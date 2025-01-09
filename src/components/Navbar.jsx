import React from 'react'
// import { Link } from 'react-router-dom';
import logo from "../assets/CP_white_logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

const Navbar = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        };

  return (
  <nav className="mb-20 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center ">
    <button  onClick={() => scrollToSection('hero')}>
    <img 
    className="mx-2 w-12 transition-transform transform hover:scale-110 duration-500 rounded-full" 
    src={logo} 
    alt="logo" />
    </button>
  </div>
  <div className="flex-grow flex justify-center gap-8 text-lg font-small">
        <button
          onClick={() => scrollToSection('hero')}
          className="hover:text-[#8863C4] transition duration-300"
        >
          Home
        </button>
        {/* <button
          onClick={() => scrollToSection('about')}
          className="hover:text-cyan-300 transition duration-300"
        >
          About
        </button> */}
        <button
          onClick={() => scrollToSection('technologies')}
          className="hover:text-[#9371C9] transition duration-300"
        >
          Technologies
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className="hover:text-[#9E7FCF] transition duration-300"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="hover:text-[#A88ED4] transition duration-300"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="hover:text-[#B39CDA] transition duration-300"
        >
          Hire Me
        </button>
        <a href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hover:text-[#BEAADF] transition duration-300"
        >
          Download Resume
        </a>
        
      </div>
  <div>
   
  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <a 
    href="https://www.linkedin.com/in/chandralekhapolepalle/" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:text-[#A68BAC] transition duration-300"
  >
    <FaLinkedin />
  </a>
  <a 
    href="https://github.com/ChandralekhaPolepalle" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="hover:text-[#A68BAC] transition duration-300"
  >
    <FaGithub />
  </a>
  </div>
</nav>);
};

export default Navbar