// needs to be on the client side to use
"use client";
// React-Next modules import
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

//the custom modules import
import SearchBar from "./SearchBar";

export default function Navbar() {
// let valueA = 0,valueB = 0,valueC = 0,valueD = 0;
const [valueA,setValueA] = useState(0)
const [valueB,setValueB] = useState(0)
const [valueC,setValueC] = useState(0)
const [valueD,setValueD] = useState(0)

const handleScroll = () => {
  const newsCarousel = document.getElementById('second-section');
  if (newsCarousel) {
    newsCarousel.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-10"
    >
      <section className="w-full h-24 backdrop-blur-2xl bg-[#c376ff]/40 flex justify-between items-center p-4 px-10 text-xl">
        <div className="flex w-1/2 items-center">
          <Link href={"/"}>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <SearchBar />
        </div>
        <div className="w-[30rem]">
          <ul className="flex justify-around">
            <li>
              <Link
                onMouseEnter={()=>setValueA(45)}
                onMouseLeave={()=>setValueA(0)}
                href={"/About"}
                className="flex items-center hover:scale-105 transition-all ease-in-out"
              >
                about
                  <motion.svg animate={{rotateZ:valueA,transition:{duration:0.2}}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </motion.svg>
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={()=>setValueB(45)}
                onMouseLeave={()=>setValueB(0)}
                href="/#second-section"
                as="/#news-section"
                onClick={handleScroll}
                className="flex items-center hover:scale-105 transition-all ease-in-out"
              >
                news
                <motion.svg animate={{rotateZ:valueB,transition:{duration:0.2}}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </motion.svg>
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={()=>setValueC(45)}
                onMouseLeave={()=>setValueC(0)}
                href={"/blog"}
                className="flex items-center hover:scale-105 transition-all ease-in-out"
              >
                blog
                <motion.svg animate={{rotateZ:valueC,transition:{duration:0.2}}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </motion.svg>
              </Link>
            </li>
            <li>
              <Link
                onMouseEnter={()=>setValueD(45)}
                onMouseLeave={()=>setValueD(0)}
                href={"#"}
                className="flex items-center hover:scale-105 rounded-xl transition-all ease-in-out"
              >
                say hello
                <motion.svg animate={{rotateZ:valueD,transition:{duration:0.2}}}  xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </motion.svg>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </motion.nav>
  );
}
