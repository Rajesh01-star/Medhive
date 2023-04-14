import { newsApiKey } from "@/app/utils/url"
import { use, useEffect, useState } from "react";
import Link from "next/link"
import NewsCard from "./NewsCard";

const url = `https://newsapi.org/v2/top-headlines?country=in&source=bbc=news&category=health&language=en&sortBy=top&apiKey=${newsApiKey}`;

async function newsFetch(){
  return await (await fetch(url)).json();
}



export default function NewsCarousel(){
  const [values, setValues] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsFunc(){
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



    return(
      <section className="carousel rounded-box w-3/4 h-3/4 overflow-y-hidden">
      {fetchNews.map((news,index)=>{
        return <section className="carousel-item w-full rounded-box ml-4" key={index}>
          <NewsCard author={news.author} title={news.title} content={news.content} url={news.url} imgLink={news.urlToImage} />
        </section>
      })}
      </section>
    ) 
}