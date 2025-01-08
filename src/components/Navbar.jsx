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
  <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-12" src={logo} alt="logo" />
  </div>
  
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
  <a 
    href="https://www.linkedin.com/in/chandralekhapolepalle/" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a 
    href="https://github.com/ChandralekhaPolepalle" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
  </div>
</nav>);
};

export default Navbar