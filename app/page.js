"use client";
// components
import Details from "./components/Details";
import { motion } from "framer-motion";
// icons
import { BsSearch } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Carousel from "./components/Carousel";
import NewsCard from "./components/NewsCard";

export default function Home() {
  return (
    <main>
      <motion.section initial={{ x: -100 }} animate={{ x: 0 }}>
        <div className="mx-40 pt-10 flex justify-between ">
          <section className="w-full flex items-center">
            <BsSearch className="absolute ml-4" />
            <input
              type="text"
              placeholder="Type the keyword for your search.."
              className="flex border bg-white shadow-lg shadow-white-500/50 rounded-full p-4 transition-all ease-in-out focus:outline-none w-5/6 px-12 hover:shadow-xl"
            />
          </section>
          <section className=" flex w-1/6 justify-around items-center">
            <div className="bg-white border-2 shadow-md p-2 rounded-md cursor-pointer">
              <BsInstagram />
            </div>
            <div className="bg-white border-2 shadow-md p-2 rounded-md cursor-pointer">
              <IoMdNotificationsOutline />
            </div>
          </section>
        </div>
      </motion.section>
      {/* second section */}
      <section className="w-full flex justify-center px-20">
        <div className="w-1/2 flex mt-20 justify-center">
          <Details />
        </div>
        <div className="mt-20 w-1/2 flex flex-col">
          <Carousel />
          <NewsCard />
        </div>
      </section>
    </main>
  );
}
