"use client";
// components
import Details from "./components/Details";
import SearchBar from "./components/SearchBar";
// icons
import Carousel from "./components/Carousel";
import NewsCard from "./components/NewsCard";

export default function Home() {
  return (
    <main>
      <SearchBar />
      {/* second section */}
      <section className="w-full flex justify-center px-20">
          <Details />
        <div className="mt-20 w-1/2 flex flex-col">
          <Carousel />
          <NewsCard />
        </div>
      </section>
    </main>
  );
}
