"use client";
// React-Next modules import
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

//the custom modules import
import { newsApiUrl } from "../support/url";
import NewsCard from "./NewsCard";
import TypingText from "./TypingText";

import styles from "../styles/NewsCard.module.css"

async function newsFetch() {
  return await (await fetch(newsApiUrl)).json();
}

// NewsCarousel to call NewsCard on each instance of the news
export default function NewsCarousel() {
  let counter = -1;
  const [values, setValues] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsFunc() {
      try {
        const data = await newsFetch();
        setValues(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchNewsFunc();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!values) {
    return <div>Loading...</div>;
  }

  const fetchNews = values.articles;
  // fetchNews.map((news)=>console.log(news))
  function imgLinkUpdater() {
  counter++;

  return (
    <Link href={fetchNews[counter].url} className={`h-full w-full relative ${styles.linkContainer}`}>
  <img
    src={fetchNews[counter].urlToImage}
    className={`rounded-2xl h-full w-full object-cover transition-transform duration-500 ${styles.img}`}
  />
  <div className={`flex justify-center items-center absolute bg-[#252525b7] w-full h-full top-0 left-0 opacity-0 hover:opacity-90 transition-opacity duration-300 p-10`}>
    <h3 className="text-white text-lg">{fetchNews[counter].title}</h3>
  </div>
</Link>

  );
}



  return (
    // <section id="newsCarousel" className="carousel rounded-box w-3/4 h-3/4 overflow-y-hidden">
    //   {fetchNews.map((news, index) => {
    //     return (
    //       <section
    //         className="carousel-item w-full rounded-box ml-4"
    //         key={index}
    //       >
    //         <NewsCard
    //           author={news.author}
    //           title={news.title}
    //           content={news.content}
    //           url={news.url}
    //           imgLink={news.urlToImage}
    //         />
    //       </section>
    //     );
    //   })}
    // </section>
    <section className="w-[80%] h-[100vh] grid grid-cols-3 grid-rows-6 gap-4 p-10 mb-[10rem]">
    <div className="bg-white rounded-2xl row-span-4 overflow-hidden">
      {imgLinkUpdater()}
    </div>
    <div className=" bg-white rounded-2xl row-span-2 col-span-2 overflow-hidden">
      {/* <img src={fetchNews[1].urlToImage} className="rounded-2xl h-full w-full object-cover hover:scale-110 transition-transform duration-500" /> */}
      {imgLinkUpdater()}
    </div>
    <div className=" bg-white rounded-2xl row-span-2 col-span-1 overflow-hidden">
      {/* <img src={fetchNews[2].urlToImage} className="rounded-2xl h-full w-full object-cover hover:scale-110 transition-transform duration-500" /> */}
      {imgLinkUpdater()}
    </div>
    <div className=" bg-white rounded-2xl row-span-2 col-span-1 overflow-hidden">
      {/* <img src={fetchNews[3].urlToImage} className="rounded-2xl h-full w-full object-cover hover:scale-110 transition-transform duration-500" /> */}
      {imgLinkUpdater()}
    </div>
    <div className=" bg-white rounded-2xl row-span-2 overflow-hidden">
    {/* <img src={fetchNews[4].urlToImage} className="rounded-2xl h-full w-full object-cover hover:scale-110 transition-transform duration-500" /> */}
    {imgLinkUpdater()}

    </div>
    <div className=" bg-white rounded-2xl row-span-2 col-span-2 overflow-hidden">
    {/* <img src={fetchNews[5].urlToImage} className="rounded-2xl h-full w-full object-cover hover:scale-110 transition-transform duration-500" /> */}
    {imgLinkUpdater()}

    </div>

    </section>
  );
}
