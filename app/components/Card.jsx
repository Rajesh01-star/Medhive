import Image from "next/image";
import Link from "next/link";


export default function Card(props){

  // console.log(props);
  return(
    <section className="ml-10 p-4">
      <div className="img w-40 border-black border-8">
      <Link href={`/pages/post/${props.imgName}`}>
      <Image src={props.imgLink} alt="image" className="w-40 h-40 rounded-xl" />
    </Link>
      </div>
      <div className="flex justify-center">
        {props.imgName}
      </div>
    </section>
  )
}