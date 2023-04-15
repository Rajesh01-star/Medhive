"use clinet";
// React-Next modules import
import { use, useEffect, useState } from "react";
//the custom modules import 
import { carouselFetchUrl } from "../utils/url";
import Card from "./Card";
import styles from "../styles/Carousel.module.css"
import { ErrorAnimation,LoadingAnimation } from "./LoadingAnimations";

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
    return <ErrorAnimation errorMessage={error.message} />;
  }

  if (!values) {
    return <LoadingAnimation />;
  }

  // to get the desired values destructuring
  const fetchedHospitals = Object.values(values.data)
  // {1:{Hospital_Name:....}}
  // console.log(fetchedHospitals);


  // const customValue={
  //   Hospital_Name:"Apollo",
  //   Image:"https://picsum.photos/200/300",
  //   H_No:23
  // }
  // const customValues=[customValue,customValue,customValue,customValue,customValue,customValue,customValue,customValue,customValue]

  return (
    <div className={`flex overflow-x-auto no-scrollbar w-full h-96 py-10`}>
      {/* <div className="flex gap-x-0 carousel-item border-8 border-black"> */}
        {
          // mapping the Object by converting into an array of objects
          Object.values(fetchedHospitals).map((value,index)=>{
            return (
              <section className={`rounded-box ml-4 mx-4 ${styles.slideTrack}`} key={index}>
                {/* calling the Card object with props */}
                <Card Hospital_Name={value.Hospital_Name.substring(0, 30) + '...'} imgLink={value.Image} id={index} H_No={value.H_No} />
            </section>
            )
          })
        }
      {/* </div> */}
    </div>
  );
}
