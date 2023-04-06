import Card from "./Card";
import images from "../utils/images";



export default function Carousel(){
        const renderCards = () => {
            return images.map((image, index) => (
              <section className="rounded-box ml-4" key={index}>
                <Card imgLink={image.link} imgName={image.name} />
              </section>
            ));
          };
          return (
            <div className="carousel overflow-x-auto shadow-inner shadow-white rounded-3xl">
              <div className="flex gap-x-0 carousel-item">
                {renderCards()}
              </div>
            </div>
          );    
}





