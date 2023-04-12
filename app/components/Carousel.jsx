import { use, useEffect, useState } from "react";
import Card from "./Card";
import { carouselFetchUrl } from "../utils/url";

async function getData(){
  return await (await fetch(carouselFetchUrl)).json();
}

export default function Carousel(){
  const [values, setValues] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(){
      try {
        const data = await getData();
        setValues(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!values) {
    return <div>Loading...</div>;
  }

  const fetchedHospitals = Object.values(values)[0].data;
  // {1:{Hospital_Name:....}}

  return (
    <div className="carousel overflow-x-auto shadow-inner shadow-white rounded-3xl">
      <div className="flex gap-x-0 carousel-item">
        {
          Object.values(fetchedHospitals).map((value,index)=>{
            return (
              <section className="rounded-box ml-4" key={index}>
                <Card Hospital_Name={value.Hospital_Name.substring(0, 10) + '...'} imgLink={value.imgLink} />
            </section>
            )
          })
        }
      </div>
    </div>
  );
}
