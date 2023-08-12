"use client";
// React-Next modules import
import { useEffect, useState } from "react";
//the custom modules import
import { NewsApi } from "../support/url";
import NewsCard from "./NewsCard";

// NewsCarousel to call NewsCard on each instance of the news
export default function NewsCarousel() {
  let counter = -1;
  const [fetchedNews, setFetchedNews] = useState(null);
  const [error, setError] = useState(null);

  async function fetchNewsFunc() {
    try {
      const data = await NewsApi.fetchNews();
      console.log(data);
      setFetchedNews(data.articles);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchNewsFunc();
  }, []);

  const NewsCardFunction = () => {
    counter++;
    return (
      <NewsCard title={fetchedNews[counter].title} url={fetchedNews[counter].url} urlToImage={fetchedNews[counter].urlToImage} />
    )
  }

  return (
    <section id="second-section" className="flex justify-center w-full h-screen items-center">
      {fetchedNews ?
        <div id="news-carousel" className="w-[80%] h-full grid grid-cols-3 grid-rows-6 gap-4 p-10 my-[20rem] sm:px-0 sm:py-10 sm:grid-cols-1">
          <div className="bg-white rounded-2xl row-span-4 sm:row-auto sm:col-auto h-full w-full overflow-hidden">
            {NewsCardFunction()}
          </div>
          <div className=" bg-white rounded-2xl row-span-2 col-span-2 sm:col-auto sm:row-auto overflow-hidden h-full w-full">
            {NewsCardFunction()}
          </div>
          <div className=" bg-white rounded-2xl row-span-2 col-span-1 sm:col-auto sm:row-auto overflow-hidden h-full w-full">
            {NewsCardFunction()}
          </div>
          <div className=" bg-white rounded-2xl row-span-2 col-span-1 sm:col-auto sm:row-auto overflow-hidden h-full w-full">
            {NewsCardFunction()}
          </div>
          <div className=" bg-white rounded-2xl row-span-2 overflow-hidden sm:col-auto sm:row-auto h-full w-full">
            {NewsCardFunction()}
          </div>
          <div className=" bg-white rounded-2xl row-span-2 col-span-2 sm:col-auto sm:row-auto overflow-hidden h-full w-full">
            {NewsCardFunction()}
          </div>
        </div>
      :
      "Loading..."
      }
    </section>
  );
}
