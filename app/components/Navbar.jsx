// needs to be on the client side to use
"use client";
// React-Next modules import
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

//the custom modules import
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

export default function Navbar() {

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-10"
    >
      <section className="w-full h-24 backdrop-blur-2xl bg-[#007BFF]/40 flex justify-between items-center p-4 px-10 text-xl text-black sm:justify-between sm:p-2 ">
        <div className="w-1/2 flex items-center sm:w-4/5">
          <Link href={"/"}>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <SearchBar />
        </div>
        <NavLinks />
      </section>
    </motion.nav>
  );
}
