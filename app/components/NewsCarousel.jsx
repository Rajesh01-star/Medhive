"use client";
// React-Next modules import
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

//the custom modules import
import { newsApiUrl } from "../support/url";

import styles from "../styles/NewsCarousel.module.css"

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
        <div className={`flex justify-center items-center absolute bg-[#41056695] w-full h-full top-0 left-0 opacity-0 hover:opacity-90 transition-opacity duration-300 p-10`}>
          <h3 className="text-white text-lg">{fetchNews[counter].title}</h3>
        </div>
      </Link>

    );
  }



  return (
    <section id="second-section" className="flex justify-center w-full h-screen items-center">
    <div id="news-carousel" className="w-[80%] h-[100vh] grid grid-cols-3 grid-rows-6 gap-4 p-10 my-[20rem]">
      <div className="bg-white rounded-2xl row-span-4 overflow-hidden">
        {imgLinkUpdater()}
      </div>
      <div className=" bg-white rounded-2xl row-span-2 col-span-2 overflow-hidden">
        {imgLinkUpdater()}
      </div>
      <div className=" bg-white rounded-2xl row-span-2 col-span-1 overflow-hidden">
        {imgLinkUpdater()}
      </div>
      <div className=" bg-white rounded-2xl row-span-2 col-span-1 overflow-hidden">
        {imgLinkUpdater()}
      </div>
      <div className=" bg-white rounded-2xl row-span-2 overflow-hidden">
        {imgLinkUpdater()}

      </div>
      <div className=" bg-white rounded-2xl row-span-2 col-span-2 overflow-hidden">
        {imgLinkUpdater()}

      </div>

    </div>
    </section>
  );
}
