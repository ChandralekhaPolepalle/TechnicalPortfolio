import React from 'react'
import {PROJECTS} from "../constants"
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <div>
            { PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <img 
                        src={project.image}
                        alt={project.title}
                        width={150}
                        height={150}
                        className="mb-6 rounded hover:scale-110 duration-500 transition-transform" />
                    </a>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400 text-justify text-sm">{project.description}</p>
                        {project.technologies.map((tech, index)=>(
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300 ">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects