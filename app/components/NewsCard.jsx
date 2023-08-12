import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fallBackImageUrl } from "../support/url";


export default function NewsCard({ title, url, urlToImage }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="h-full w-full relative overflow-hidden">
            <Link href={url} className="h-full w-full">
                <img
                    src={urlToImage || fallBackImageUrl}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`rounded-2xl h-full w-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : ""
                        }`}
                />
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute bg-[#ebebebc1] w-full h-full p-10 left-0 text-black bottom-0 pointer-events-none flex justify-center items-center"
                    >
                       <h3 className="w-3/5 text-center text-lg">{title}</h3>
                    </motion.div>
                )}
            </Link >
        </div >
    )
}