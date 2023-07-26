"use client";
import { useGlobalContext } from "./Context/Context";
import { AnimatePresence } from "framer-motion";
// icons
import Carousel from "./components/Carousel";
import NewsCarousel from "./components/NewsCarousel";
import MobileNav from "./components/MobileNav";

export default function Home() {
  const { menu } = useGlobalContext();
  return (
    <main>
      <AnimatePresence>{menu && <MobileNav />}</AnimatePresence> 
      <Carousel />
      <NewsCarousel />
    </main>
  );
}

// Primary Color (Main Brand Color): #007BFF (Bright Blue)

//     This color signifies trust, reliability, and professionalism. It can be used for primary buttons, headings, and important elements.

// Secondary Color 1: #34C759 (Green)

//     Green represents health, growth, and positivity. It can be used for success messages, icons, and highlights.

// Secondary Color 2: #FF9500 (Orange)

//     Orange is associated with warmth, energy, and enthusiasm. It can be used for call-to-action elements or to draw attention to specific areas.

// Neutral Color 1: #FFFFFF (White)

//     White is clean and represents sterility. It can be used for backgrounds and to provide contrast with other colors.

// Neutral Color 2: #F0F0F0 (Light Gray)

//     Light gray provides subtle contrast and can be used for borders or dividers.

// Error / Warning Color: #FF3B30 (Red)
