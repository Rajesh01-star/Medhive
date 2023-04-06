import Image from "next/image"
import images from "../utils/images"

export default function NewsCard(){
    return(
        <section className="border-black border-8 w-full h-40 mt-10 flex items-center justify-center bg-white rounded-lg">
            <div className="carousel rounded-box">
  <div className="carousel-item">
    <Image src={images[0].link} width={0} height={100} alt="Burger" className="h-20 w-40" />
  </div> 
  <div className="carousel-item">
  <Image src={images[0].link} width={400} height={100} alt="Burger" className="h-20 w-40" />
  </div> 
  <div className="carousel-item">
  <Image src={images[1].link} width={400} height={100} alt="Burger" className="h-20 w-40" />
  </div> 
  <div className="carousel-item">
  <Image src={images[2].link} width={400} height={100} alt="Burger" className="h-20 w-40" />
  </div> 
  <div className="carousel-item">
  <Image src={images[3].link} width={400} height={100} alt="Burger" className="h-20 w-40" />
  </div> 
  <div className="carousel-item">
  <Image src={images[4].link} width={400} height={100} alt="Burger" className="h-20 w-40" />
  </div> 
  <div className="carousel-item">
  <Image src={images[5].link} width={400} height={100} alt="Burger" className="h-20 w-40" />
  </div>
</div>
        </section>
    )
}