// React-Next modules import
import Link from "next/link";
import { useEffect, useState } from "react";

//the custom modules import
import { fallBackImageUrl } from "../support/url";

// custom module styles import
import styles from "../styles/NewsCard.module.css";

export default function NewsCard(props) {
  const [imgSrc, set_imgSrc] = useState(props.imgLink);

  useEffect(() => {
    set_imgSrc(props.imgLink);
  }, [props.imgLink]);

  return (
    <div className="w-full h-[25rem] p-4 bg-gradient-to-b from-white to-cyan-100 rounded-2xl">
      {/* <div className={styles.overlay}>{props.content}</div> */}
      <section className="h-[15rem] overflow-hidden m-4 ">
        <Link href={props.url} className="w-full h-full flex justify-center ">
          <img
            src={imgSrc}
            className="rounded-3xl h-[15rem]"
            onError={() => {
              set_imgSrc(fallBackImageUrl);
            }}
          />
        </Link>
      </section>
      <section className="h-[5rem] text-center backdrop-blur">
        <h2 className="text-lg">{props.title}</h2>
      </section>
    </div>
  );
}
