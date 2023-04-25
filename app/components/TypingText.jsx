"use client";
import { motion,Variants } from "framer-motion";

export default function TypingText (props) {
  return (
    <motion.h3 initial="hidden" animate="visible" className="flex mb-10 text-xl">
      {Array.from(props.message).map((eachLetter,index)=>{
        return <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.5*index}}} key={index}> {eachLetter === " " ? "\u00A0" : eachLetter}</motion.div>
      })}
    </motion.h3>

  );
}
