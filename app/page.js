"use client";
// components
import Details from "./components/Details";
// icons
import Carousel from "./components/Carousel";
import NewsCarousel from "./components/NewsCarousel";

import { useRef } from "react";
import { useInView } from "framer-motion";



function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Section>
      {/* first section */}
        <div className="w-full flex justify-center px-20 h-screen">
          <Details />
        <div className=" w-1/2 flex items-center">
          <Carousel />
        </div>
        </div>
      </Section>
      <Section>
         {/* second section */}
      <div id="second-section" className="flex justify-center w-full h-screen items-center ">
          <NewsCarousel />
      </div>
      </Section>
    </main>
  );
}
