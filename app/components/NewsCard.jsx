// React-Next modules import
import Link from "next/link"
import { useEffect, useState } from "react";

//the custom modules import 
import { fallBackImageUrl } from "../utils/url";

export default function NewsCard(props){
    const [imgSrc, set_imgSrc] = useState(props.imgLink);

    useEffect(() => {
      set_imgSrc(props.imgLink);
    }, [props.imgLink]);

    return(
            <div className="w-full h-ful p-4 bg-gradient-to-b from-white to-cyan-100 rounde-2xl">
                <section className="h-5/6 overflow-hidden m-4 ">
                    <Link href={props.url} className="w-full h-full flex justify-center " >
                        <img src={imgSrc} className="rounded-3xl"
                        // if any image fails to load this default image will be shown
                         onLoadingComplete={(result) =>{
                            if (result.naturalWidth === 0)
                             {set_imgSrc(fallBackImageUrl);
                             }
                            }}onError={() =>{
                                set_imgSrc(fallBackImageUrl);
                            }} />
                    </Link>
                </section>
                <section className="h-1/6 text-center backdrop-blur">
                    <h2 className="text-lg">
                        {props.title}
                    </h2>
                </section>
            </div>

    )
}