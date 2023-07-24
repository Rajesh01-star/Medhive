"use clinet";
// React-Next modules import
import { use, useEffect, useState } from "react";
//the custom modules import 
import { carouselFetchUrl } from "../support/url";
import Card from "./Card";
import styles from "../styles/Carousel.module.css"
import { ErrorAnimation, LoadingAnimation } from "./LoadingAnimations";

// async function to call the top-hospitals api
async function getData() {
  return await (await fetch(carouselFetchUrl)).json();
}

export default function Carousel() {
  const [values, setValues] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const data = await getData();
      console.log(data);
      setValues(data);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);


  if (error) {
    return <ErrorAnimation errorMessage={error.message} />;
  }
  // console.log(values);
  // const fetchedHospitals = Object.values(values.data)

  return (
    <div className="w-full h-screen flex items-center overflow-x-hidden">
    <div className={`flex w-max h-96 py-10 ${styles.slideTrack}`}>
      {values
        ? values.map((value, index) => {
          return (
            <section className={`rounded-box ml-4 mx-4`} key={index}>
              <Card Hospital_Name={value.Hospital_Name.substring(0, 30) + '...'} imgLink={value.Image} id={index} H_No={value.H_No} />
            </section>
          );
        })
        :
        <LoadingAnimation />
      }
    </div>
    </div>

    // <div>hello</div>
  );
}
