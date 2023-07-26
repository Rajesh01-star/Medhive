"use clinet";
// React-Next modules import
import { use, useEffect, useState } from "react";
//the custom modules import 
import { carouselFetchUrl,HospitalApi } from "../support/url";
import Card from "./Card";
import styles from "../styles/Carousel.module.css"
import { ErrorAnimation, LoadingAnimation } from "./LoadingAnimations";


export default function Carousel() {
  const [hospitals, setHospitals] = useState(null);
  const [error, setError] = useState(null);

  async function fetchHospitals() {
    try {
      const data = await HospitalApi.fetchHospitals();
      setHospitals(data);
    } catch (error) {
      setError(error);
    }
  }
  useEffect(() => {
    fetchHospitals();
  }, []);


  if (error) {
    return <ErrorAnimation errorMessage={error.message} />;
  }

  return (
    <div className="w-full h-screen flex items-center overflow-x-hidden sm:h-fit sm:mt-10">
    <div className={`h-96 w-full flex justify-center ${hospitals && styles.slideTrack}`}>
      {hospitals ?
         hospitals.map((value, index) => {
          return (
            <section className="rounded-box ml-4 mx-4" key={index}>
              <Card Hospital_Name={value.Hospital_Name.substring(0, 30) + '...'} imgLink={value.Image} id={index} H_No={value.H_No} />
            </section>
          );
        })
        :
        <LoadingAnimation />
      }
    </div>
    </div>
  );
}
