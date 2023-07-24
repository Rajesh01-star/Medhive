// React-Next modules import
import Image from "next/image";
import Link from "next/link";

// this card component will be called by the carousel component each time for the top hospitals
export default function Card(props){
   return(
    <div className="card w-[28rem] h-[20rem] ">
      <div>
      <Link href={`/pages/Hospitals/${props.H_No}`}>
      <Image src= {props.imgLink} alt="image" className="w-full h-[16rem] rounded-xl hover:scale-110 transition-all ease-in-out object-fill overflow-x-hidden " width={400} height={400}   />
    </Link>
  <div className="flex justify-center text-base mt-4">
    <p className="text-black">{props.Hospital_Name}</p>
  </div>
  </div>
</div>
  )
}