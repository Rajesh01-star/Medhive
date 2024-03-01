"use client";
import React from 'react'
import { RiTwitterLine, RiLinkedinLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link'

import styles from "../styles/Footer.module.css"


export default function Footer() {
    return (
        <footer className={`h-[24rem] overflow-hidden backdrop-blur-md ${styles.gradientWithFade}`}>
            <div className={styles.overlay}></div>
            <div className={`${styles.content}`}>
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
                            <span className="ml-3 text-xl">MedHive</span>
                        </a>
                        <p className="mt-2 text-sm text-black">A platform where one can easily book bed, go for an appointment in hospital</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-black tracking-widest text-sm mb-3">Team Members</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-black hover:text-gray-800" href='https://www.linkedin.com/in/shambhav-shandilya-a201431ba/'> linkedin</a>
                                </li>
                                <li>
                                    <a className="text-black hover:text-gray-800" href='https://www.linkedin.com/in/shambhav-shandilya-a201431ba/'> linkedin</a>
                                </li>
                                <li>
                                    <a className="text-black hover:text-gray-800" href='https://www.linkedin.com/in/shambhav-shandilya-a201431ba/'> linkedin</a>
                                </li>
                            </nav>
                        </div>
                        <div className="bg-gray-100">
                            <div className="container mx-auto py-4 px-5 flex flex-wrap items-center justify-center">
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    © 2023 MedHive —
                                    <a
                                        href="https://twitter.com/knyttneve"
                                        rel="noopener noreferrer"
                                        className="text-black ml-1"
                                        target="_blank"
                                    >
                                        @KIIT
                                    </a>
                                </p>
                                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                    <a className="text-gray-500" href="#">
                                        <RiTwitterLine />
                                    </a>
                                    <a className="ml-3 text-gray-500" href="#">
                                        <RiInstagramLine />
                                    </a>
                                    <a className="ml-3 text-gray-500" href="#">
                                        <RiFacebookLine />
                                    </a>
                                    <a className="ml-3 text-gray-500" href="#">
                                        <AiOutlineMail />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}







