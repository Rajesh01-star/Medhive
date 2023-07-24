import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import { useGlobalContext } from "../Context/Context";

export default function NavLinks() {
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [valueC, setValueC] = useState(0);
    const [valueD, setValueD] = useState(0);
    // useGlobalContext();

    const { setMenu } = useGlobalContext();
    function handleScroll() {
        const newsCarousel = document.getElementById('second-section');
        if (newsCarousel) {
            newsCarousel.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <>
            <HiOutlineMenu className="hidden sm:block sm:w-1/5 cursor-pointer" onClick={()=>setMenu(prevMenu=>!prevMenu)} />
            <div className="w-1/2 block sm:hidden">
                <ul className="flex justify-end gap-20 text-2xl">
                    <li>
                        <Link
                            onMouseEnter={() => setValueA(45)}
                            onMouseLeave={() => setValueA(0)}
                            href={"/About"}
                            className="flex items-center hover:scale-105 transition-all ease-in-out"
                        >
                            about
                            <motion.svg animate={{ rotateZ: valueA, transition: { duration: 0.2 } }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                            </motion.svg>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={() => setValueB(45)}
                            onMouseLeave={() => setValueB(0)}
                            href="/#second-section"
                            as="/#news-section"
                            onClick={handleScroll}
                            className="flex items-center hover:scale-105 transition-all ease-in-out"
                        >
                            news
                            <motion.svg animate={{ rotateZ: valueB, transition: { duration: 0.2 } }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                            </motion.svg>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={() => setValueC(45)}
                            onMouseLeave={() => setValueC(0)}
                            href={"/blog"}
                            className="flex items-center hover:scale-105 transition-all ease-in-out"
                        >
                            blog
                            <motion.svg animate={{ rotateZ: valueC, transition: { duration: 0.2 } }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                            </motion.svg>
                        </Link>
                    </li>
                    <li>
                        <Link
                            onMouseEnter={() => setValueD(45)}
                            onMouseLeave={() => setValueD(0)}
                            href={"#"}
                            className="flex items-center hover:scale-105 rounded-xl transition-all ease-in-out"
                        >
                            say hello
                            <motion.svg animate={{ rotateZ: valueD, transition: { duration: 0.2 } }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                            </motion.svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}