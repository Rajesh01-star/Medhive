import Card from "./Card";
import images from "../utils/images";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



export default function Carousel(){
        const renderCards = () => {
            return images.map((image, index) => (
              <div className="carousel-item" key={index}>
                <Card imgLink={image.link} imgName={image.name} />
              </div>
            ));
          };
          return (
            <div className="animate carousel overflow-hidden">
              <div className="carousel-inner flex gap-x-0">
                {renderCards()}
                {/* <Card imgSrc = {image7} /> */}
              </div>
            </div>
          );    
}