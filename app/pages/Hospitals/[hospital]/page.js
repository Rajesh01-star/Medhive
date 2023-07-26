"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {  HospitalApi } from "../../../support/url";
import {
  LoadingAnimation,
  ErrorAnimation,
} from "../../../components/LoadingAnimations";

export default function hosPage() {
  const [singleHospital, setSingleHospital] = useState(null);
  const [error, setError] = useState(null);
  const Id = usePathname().slice(17);

  async function fetchSearchHospitalFunc(Id) {
    try {
      const response = await HospitalApi.fetchIndividualHospital(Id);
      setSingleHospital(response);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchSearchHospitalFunc(Id);
  }, []);

  if (error) {
    return <ErrorAnimation errorMessage={error.message} />;
  }

  return (
    <>
      {singleHospital ? (
        <section className="flex justify-center items-center w-full h-screen">
          <div className="card cardd-compact bg-white/40 w-1/3 shadow-xl backdrop-blur-xl rounded-2xl">
            <div className="flex justify-center w-full">
              <Image
                width={300}
                height={300}
                src={singleHospital.Image}
                alt="image"
                className="w-full h-56 rounded-t-xl"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">Hospital</h2>
              <div className="flex flex-col">
                <p>Hospital Name: {singleHospital.Hospital_Name}</p>
                <p>Place: {singleHospital.Place}</p>
                <p>Bed count: {singleHospital.Total_Beds}</p>
                <p>Total doctors: {singleHospital.Total_Doctors}</p>
                <p>Speciality: {singleHospital.Total_Specialties}</p>
                <p>Stars: {singleHospital.Stars}</p>
              </div>
              <div className="card-actions justify-end">
                <Link
                  href={{
                    pathname: "/Form",
                    query: {
                      hospital_name: singleHospital.Hospital_Name,
                      H_No: singleHospital.H_No,
                    },
                  }}
                  className="btn btn-primary"
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <LoadingAnimation />
      )}
    </>
    // <div>hospital section</div>
  );
}
