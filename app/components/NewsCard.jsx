import Link from "next/link"
export default function NewsCard(props){
    return(
            <div className="w-full h-ful p-4 bg-gradient-to-b from-white to-cyan-100 rounde-2xl">
                <section className="h-5/6 overflow-hidden m-4 ">
                    <Link href={props.url} className="w-full h-full flex justify-center " >
                        <img src={props.imgLink} className="rounded-3xl" />
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