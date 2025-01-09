import React from 'react'
import {EXPERIENCES} from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl font-thin tracking-widest">
        {"EXPERIENCE".split('').map((char, index) => (
                    <span
                    key={index}
                    className="hover:text-[#B39CDA] transition duration-300"
                    >
                    {char}
                    </span>
                ))}
        </h1>
        <div>
            {EXPERIENCES.map((experience, index) =>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </div>
                     <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 tracking-wide">
                            {experience.role} - <span className="text-sm text-purple-200">{experience.company}</span>
                        </h6>
                        <p className="mb-4 text-neutral-400 flex flex-wrap text-justify text-sm">
                            {experience.description.split(' ').map((word, index) => (
                                <span
                                key={index}
                                className="hover:text-[#A88ED4] transition duration-500 mx-1 inline-block">
                                {word}
                                </span>
                            ))}
                        </p>
                        {experience.technologies.map((tech, index)=>(
                            <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300 ">{tech}</span>
                        ))}
                     </div>
                </div>
            )

            )}
        </div>
    </div>
  )
}

export default Experience