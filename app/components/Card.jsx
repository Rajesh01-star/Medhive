import Image from "next/image";


export default function Card(props){
  console.log(props.imgLink);
  return(
    <section className="ml-10 p-4">
      <div className="img w-40">
        <Image src={props.imgLink} alt="image" className="w-40 h-40 rounded-xl" />
      </div>
      <div className="flex justify-center">
        {props.imgName}
      </div>
    </section>
  )
}