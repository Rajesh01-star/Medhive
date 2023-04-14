"use clinet";
// React-Next modules import
import { use, useEffect, useState } from "react";
import Card from "./Card";
//the custom modules import 
import { carouselFetchUrl } from "../utils/url";

// async function to call the top-hospitals api
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

  // to get the desired values destructuring
  const fetchedHospitals = Object.values(values.data)
  // {1:{Hospital_Name:....}}
  console.log(fetchedHospitals);

  return (
    <div className="carousel overflow-x-auto shadow-inner shadow-white rounded-3xl">
      <div className="flex gap-x-0 carousel-item">
        {
          // mapping the Object by converting into an array of objects
          Object.values(fetchedHospitals).map((value,index)=>{
            return (
              <section className="rounded-box ml-4" key={index}>
                {/* calling the Card object with props */}
                <Card Hospital_Name={value.Hospital_Name.substring(0, 10) + '...'} imgLink={value.Image} id={index} H_No={value.H_No} />
            </section>
            )
          })
        }
      </div>
    </div>
  );
}
