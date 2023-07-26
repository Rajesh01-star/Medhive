import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NavLinks({ screen }) {
    const [rotationValues, setRotationValues] = useState(new Array(4).fill(0));

    function handleScroll() {
        const newsCarousel = document.getElementById("second-section");
        if (newsCarousel) {
            newsCarousel.scrollIntoView({ behavior: "smooth" });
        }
    }

    const menuItems = [
        {
            text: "about",
            href: "/About",
            index: 0,
        },
        {
            text: "news",
            href: "/#second-section",
            as: "/#news-section",
            onClick: handleScroll,
            index: 1,
        },
        {
            text: "blog",
            href: "/blog",
            index: 2,
        },
        {
            text: "say hello",
            href: "#",
            index: 3,
        },
    ];

    const handleMouseEnter = (index) => {
        setRotationValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = 45;
            return newValues;
        });
    };

    const handleMouseLeave = (index) => {
        setRotationValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = 0;
            return newValues;
        });
    };

    return (
        <>
            <section className={`flex justify-end gap-20 sm:gap-10 ${screen === "mobile" && "flex-col"}`}>
                {menuItems.map((item) => (
                    <Link
                        key={item.index}
                        onMouseEnter={() => handleMouseEnter(item.index)}
                        onMouseLeave={() => handleMouseLeave(item.index)}
                        href={item.href}
                        as={item.as}
                        onClick={item.onClick}
                        className="flex items-center hover:scale-105 transition-all ease-in-out"
                    >
                        {item.text}
                        <motion.svg animate={{ rotateZ: rotationValues[item.index], transition: { duration: 0.2 } }} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                        </motion.svg>
                    </Link>
                ))}
            </section>
        </>
    );
}
