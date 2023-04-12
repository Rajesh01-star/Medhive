"use client";
// components
import Details from "./components/Details";
import SearchBar from "./components/SearchBar";
// icons
import Carousel from "./components/Carousel";
import NewsCarousel from "./components/NewsCarousel";

export default function Home() {
  return (
    <main>
      <SearchBar />
      {/* first section */}
      <section className="w-full flex justify-center px-20 h-screen">
          <Details />
        <div className=" w-1/2 flex items-center">
          <Carousel />
        </div>
      </section>
      {/* second section */}
      <section className="flex justify-center w-full h-screen items-center ">
          <NewsCarousel />
      </section>
    </main>
  );
}
