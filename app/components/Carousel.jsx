import Card from "./Card";
import images from "../utils/images";

import Slider from "react-slick";


export default function Carousel(){
        const renderCards = () => {
            return images.map((image, index) => (
              <Slider className="carousel-item" key={index}>
                <Card imgLink={image.link} imgName={image.name} />
              </Slider>
            ));
          };
          return (
            <div className="animate carousel overflow-hidden">
              <div className="carousel-inner flex gap-x-0">
                {renderCards()}
              </div>
            </div>
          );    
}





