import Link from "next/link"
export default function NewsCard(props){
    return(
            <section className="w-full border-black border-8 h-full">
            <Link href={props.url} className="w-full">
                <img src={props.imgLink} className="w-full" />
            </Link>
            <div className="border-8 border-black w-full z-10 flex items-end">
                writing asldkfjalsjdf aslkdjfa jsdfaslddfj 
            </div>
            </section> 

    )
}