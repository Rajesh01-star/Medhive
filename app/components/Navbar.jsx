// needs 
"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import SearchBar from "./SearchBar";
import SvgComponent from "./SvgComponent";



export default function Navbar() {
  return (
    <motion.nav initial={{y:-100}} animate={{y:0}} className="sticky top-0">
    <section className="w-full h-24 backdrop-blur-md flex justify-between items-center p-4 px-10 text-xl">
      <div className="flex w-1/2 items-center">
      <Link href={"/"}>
        <Image src="/logo.svg" width={100} height={100} alt="logo" />
      </Link>
      <SearchBar />
      </div>
      <div className="w-[30rem]">
        <ul className="flex justify-around">
          <li>
            <Link href={"/About"} className="flex items-center hover:scale-110 transition-all ease-in-out">
              about
              <SvgComponent />
            </Link>
          </li>
          <li>
            <Link href={"/News"} className="flex items-center hover:scale-110 transition-all ease-in-out">
              news
              <SvgComponent />
              </Link>
          </li>
          <li>
            <Link href={"/blog"} className="flex items-center hover:scale-110 transition-all ease-in-out">
              blog
              <SvgComponent />
              </Link>
          </li>
          <li>
            <Link href={"#"} className="flex items-center hover:scale-110 transition-all ease-in-out">
              say hello
              <SvgComponent />
            </Link>
          </li>
        </ul>
      </div>
    </section>
    </motion.nav>
  );
}
