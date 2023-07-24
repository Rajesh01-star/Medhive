"use client";
import { useGlobalContext } from "./Context/Context";
// icons
import Carousel from "./components/Carousel";
import NewsCarousel from "./components/NewsCarousel";

export default function Home() {
  const { menu } = useGlobalContext();
  return (
    <main>
      {menu && <div>hello</div>}
      <Carousel />
      <NewsCarousel />
    </main>
  );
}
