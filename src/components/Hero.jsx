import {HERO_CONTENT,NAME} from "../constants";
import profilePic from "../assets/Polepalle.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1
             className="pb-6 text-6xl font-thin tracking-tight lg:mt-12
            lg:text-6xl">
                
                {NAME.split('').map((char, index) => (
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
                Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-lighter">
                {HERO_CONTENT.split(' ').map((word, index) => (
                    <span
                    key={index}
                    className="hover:text-[#A88ED4] transition duration-300 mx-1 inline-block"
                    >
                    {word}
                    </span>
                ))}
            </p>
            <a href="Resume Chandralekha Polepalle.pdf"
               target="_blank"
               rel="noopener noreferrer"
               download
               className="bg-white rounded-sm p-2.5 text-sm text-stone-800 mb-10 transition transform hover:scale-105 hover:bg-[#B39CDA] duration-500">
                Download Resume
               </a>
               

          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center transition-transform transform hover:scale-110 duration-500 rounded-full">
                <img
                src={profilePic} 
                alt="CP" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero