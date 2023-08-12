"use clinet";
// React-Next modules import
import { use, useEffect, useState } from "react";
//the custom modules import 
import { HospitalApi } from "../support/url";
import Card from "./Card";
import styles from "../styles/Carousel.module.css"
import { ErrorAnimation, LoadingAnimation } from "./LoadingAnimations";


export default function Carousel() {
  const [hospitals, setHospitals] = useState(null);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);


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

  return (
    <>
      {error
        ?
        <ErrorAnimation errorMessage={error.message} />
        :
        <div className="w-full h-screen flex items-center overflow-x-hidden sm:h-fit sm:mt-10">
          <div
            className={`h-96 w-full flex justify-center ${hospitals && styles.slideTrack
              } ${isHovered && 'pause-scroll-animation'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {hospitals ?
              hospitals.map((value, index) => {
                return (
                  <section className="rounded-box ml-4 mx-4" key={index} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Card Hospital_Name={value.Hospital_Name.substring(0, 30) + '...'} imgLink={value.Image} id={index} H_No={value.H_No} />
                  </section>
                );
              })
              :
              <LoadingAnimation />
            }
          </div>
        </div>
      }
    </>

  );
}
