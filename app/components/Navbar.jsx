"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenu } from "react-icons/hi";
import { GiCrossedSabres } from "react-icons/gi";
import { useGlobalContext } from "../Context/Context";

import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { menu, setMenu } = useGlobalContext();
  const [windowSize, setWindowSize] = useState(0);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    const resizeListener = () => {
      handleResize();
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-20"
    >
      <section className="w-full h-24 backdrop-blur-2xl bg-[#007BFF]/40 flex justify-between items-center p-4 px-10 text-xl text-black sm:justify-center sm:gap-10 sm:p-2">
        <div className="w-1/2 flex items-center justify-between sm:w-4/5">
          <Link href={"/"}>
            <Image src="/logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <SearchBar />
        </div>
        {windowSize && windowSize >= 650 ? (
          <NavLinks />
        ) : (
          <motion.div
            className="block cursor-pointer"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {menu ? (
              <GiCrossedSabres size={24} />
            ) : (
              <HiOutlineMenu size={24} />
            )}
          </motion.div>
        )}
      </section>
    </motion.nav>
  );
}
