import React from 'react'
import {CONTACT} from "../constants"
import connectCP from "../assets/connect.png";
import {FaGithub} from "react-icons/fa";

const Contact = () => {
    
  return (
    // <div className="border-b border-neutral-900 pb-20">
    //     <h2 className="my-10 text-center text-4xl">Let's Connect </h2>
    //     <div className="text-center tracking-tighter">
    //         <p className="my-4">{CONTACT.address}</p>
    //         <p className="my-4">{CONTACT.phoneNo}</p>
    //         <a href="#" className="my-4 border-b">{CONTACT.email}</a>
    //     </div>

    // </div>
    // <div>
    //     <h1 className="my-20 text-center text-4xl">
    //     {"Hire Me".split('').map((char, index) => (
    //                 <span
    //                 key={index}
    //                 className="hover:text-[#B39CDA] transition duration-300"
    //                 >
    //                 {char}
    //                 </span>
    //             ))}
    //     </h1>
    //     <h3 className="text-5xl md:text-6xl leading-none">
    //         LET'S WORK ON SOMETHING GREAT
    //     </h3>
    //     <a 
    //     href ='mailto:chandralekhapolepalle@gmail.com'
    //     className="text-2xl md:text-3xl font-medium mt-8">
    //         chandralekhapolepalle@gmail.com
    //     </a>

        

    // </div>
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
             className="pb-6 text-6xl font-thin tracking-tight lg:mt-12
            lg:text-6xl">
                
                {"Contact".split('').map((char, index) => (
                    <span
                    key={index}
                    className="hover:text-purple-500 transition duration-300"
                    >
                    {char}
                    </span>
                ))}
            </h1>
            <span 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                Open to New Ideas – Let’s Collaborate
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-lighter">
                {CONTACT.description.split(' ').map((word, index) => (
                    <span
                    key={index}
                    className="hover:text-[#A88ED4] transition duration-300 mx-1 inline-block"
                    >
                    {word}
                    </span>
                ))}
            </p>
            <div className="flex flex-wrap gap-4"> 

            <a href="https://www.linkedin.com/in/chandralekhapolepalle/"
               className="bg-white rounded-sm p-2.5 text-sm text-stone-800 mb-10 transition transform hover:scale-105 hover:bg-[#B39CDA] duration-500">
                LinkedIn
            </a>    

            <a href="https://github.com/ChandralekhaPolepalle"
               className="bg-white rounded-sm p-2.5 text-sm text-stone-800 mb-10 transition transform hover:scale-105 hover:bg-[#B39CDA] duration-500">
                GitHub
            </a>
            <a href="mailto:chandralekhapolepalle@gmail.com"
               className="bg-white rounded-sm p-2.5 text-sm text-stone-800 mb-10 transition transform hover:scale-105 hover:bg-[#B39CDA] duration-500">
                Mail Me
            </a>
            <a href="https://wa.me/16476409969"
               className="bg-white rounded-sm p-2.5 text-sm text-stone-800 mb-10 transition transform hover:scale-105 hover:bg-[#B39CDA] duration-500">
                WhatsApp Me
            </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center transition-transform transform hover:scale-110 duration-500 rounded-full">
                <img
                src={connectCP} 
                alt="connect" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact