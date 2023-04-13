// needs to be on the client side to use
"use client";
// React-Next modules import
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

//the custom modules import
import SearchBar from "./SearchBar";
import { ArrowComponent } from "./SvgComponent";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0"
    >
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
              <Link
                href={"/About"}
                className="flex items-center hover:scale-110 transition-all ease-in-out"
              >
                about
                <ArrowComponent />
              </Link>
            </li>
            <li>
              <Link
                href={"/News"}
                className="flex items-center hover:scale-110 transition-all ease-in-out"
              >
                news
                <ArrowComponent />
              </Link>
            </li>
            <li>
              <Link
                href={"/blog"}
                className="flex items-center hover:scale-110 transition-all ease-in-out"
              >
                blog
                <ArrowComponent />
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="flex items-center hover:scale-110 transition-all ease-in-out"
              >
                say hello
                <ArrowComponent />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </motion.nav>
  );
}
