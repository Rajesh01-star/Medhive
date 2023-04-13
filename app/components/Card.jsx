// React-Next modules import
import Image from "next/image";
import Link from "next/link";

// this card component will be called by the carousel component each time for the top hospitals
export default function Card(props){
// props.HospitalName,props.imgLink,props.id
  // console.log(`props: ${props}`);
   return(
    <div>
    <div className="card">
      <div>
      <Link href={`/pages/${props.id}`}>
      <Image src={props.imgLink} alt="image" className="w-40 h-40 rounded-xl hover:scale-110 transition-all ease-in-out object-fill overflow-x-hidden" width={0} height={0}  />
    </Link>
  <div className="flex justify-center text-base mt-4">
    <p>{props.Hospital_Name}</p>
  </div>
  </div>
</div>
</div>
  )
}