"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// icons
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { BiStats } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      {/* navbar */}
      <motion.nav
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        className="bg-white w-24 fixed h-full rounded-r-[40px] p-4 flex flex-col justify-between shadow-lg shadow-white-500/50"
      >
        <section>
          <Link href="/">
            <Image src="/logo.png" width={500} height={500} alt="logo" />
          </Link>
        </section>
        <section>
          <div>
            <ul className="flex flex-col justify-between">
              <li className="my-5 px-4 text-2xl transition-all hover:scale-150 duration-200">
                <Link href="./Map">
                  <FiMapPin />
                </Link>
              </li>
              <li className="my-5 px-4 text-2xl transition-all hover:scale-150 duration-200">
                <Link href="./Statistics">
                  <BiStats />
                </Link>
              </li>
              <li className="my-5 px-4 text-2xl transition-all hover:scale-150 duration-200">
                <Link href="./About">
                  <AiOutlineInfoCircle />
                </Link>
              </li>
              <li className="my-5 px-4 text-2xl transition-all hover:scale-150 duration-200">
                <Link href="https://github.com/Rajesh01-star/Medhive">
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="text-3xl p-4 transition-all hover:scale-150 duration-200">
            <Link href="./Profile">
              <CgProfile />
            </Link>
          </div>
        </section>
      </motion.nav>
    </div>
  );
}
