import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import { PiFigmaLogoThin } from "react-icons/pi";
import { IoLogoVue } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <AiOutlinePython className="text-7xl text-[#3773A3]"/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-neutral" />
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoVue className="text-7xl text-[#67AC7E]"/>
            </motion.div>
            
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-[#00718B]"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-[#31648C]"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className="text-7xl text-[#F79400]"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <VscAzure className="text-7xl text-[#33ACE5]"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-neutral"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <PiFigmaLogoThin className="text-7xl text-neutral"/>
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies