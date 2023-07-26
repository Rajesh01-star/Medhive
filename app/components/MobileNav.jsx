import React from "react";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
export default function MobileNav() {
    return (
        <motion.section
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            exit={{ y: -400 }}
            className="h-fit w-[100%] absolute z-10 flex justify-center bg-[#ebebebe6] items-center py-10">
            <NavLinks screen={"mobile"} />
        </motion.section>
    )
}