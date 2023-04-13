// "use client"
import Image from "next/image";
import Link from "next/link";
import { Modal } from "./modal";
import { useRouter } from "next/router";


export default function Card(props){

  console.log(`props: ${props}`);
  let router = useRouter();
  
  return(
    <div>
      
    <Modal>
      <Image src={props.imgLink} width={100} height={100} />
      </Modal>
    <div className="card">
      <div>
      <Link href={`/pages/${props.imgName}`}>
      {/* <Image src={props.imgLink} alt="image" className="w-40 h-40 rounded-xl hover:scale-110 transition-all ease-in-out object-fit overflow-x-hidden"  /> */}
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