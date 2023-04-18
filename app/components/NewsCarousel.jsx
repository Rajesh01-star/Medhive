"use client";
// React-Next modules import
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

//the custom modules import
import { newsApiUrl } from "../support/url";
import NewsCard from "./NewsCard";
import TypingText from "./TypingText";

async function newsFetch() {
  return await (await fetch(newsApiUrl)).json();
}

// NewsCarousel to call NewsCard on each instance of the news
export default function NewsCarousel() {
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

  return (
    <section className="mt-[10rem] h-full w-full flex flex-col justify-center items-center">
      <TypingText message="| News section" />
    <div id="newsCarousel" className="flex overflow-x-scroll no-scrollbar rounded-box w-3/4 h-[30rem] overflow-y-hidden">
      {fetchNews.map((news, index) => {
        return (
          <section
            className="carousel-item w-full rounded-box ml-4"
            key={index}
          >
            <NewsCard
              author={news.author}
              title={news.title}
              content={news.content}
              url={news.url}
              imgLink={news.urlToImage}
            />
          </section>
        );
      })}
    </div>
    </section>
  );
}
