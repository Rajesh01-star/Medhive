"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HospitalApi } from "../../../support/url";
import {
  LoadingAnimation,
  ErrorAnimation,
} from "../../../components/LoadingAnimations";

export default function HosPage() {
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {singleHospital ? (
        <div className="w-full max-w-xl bg-white shadow-lg rounded-lg overflow-hidden sm:w-4/5">
          <div className="relative h-56">
            <Image
              src={singleHospital.Image}
              alt="Hospital Image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {singleHospital.Hospital_Name}
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p>
                  <span className="font-semibold">Place:</span>{" "}
                  {singleHospital.Place}
                </p>
                <p>
                  <span className="font-semibold">Bed count:</span>{" "}
                  {singleHospital.Total_Beds}
                </p>
                <p>
                  <span className="font-semibold">Total doctors:</span>{" "}
                  {singleHospital.Total_Doctors}
                </p>
                <p>
                  <span className="font-semibold">Speciality:</span>{" "}
                  {singleHospital.Total_Specialties}
                </p>
                <p>
                  <span className="font-semibold">Stars:</span>{" "}
                  {singleHospital.Stars}
                </p>
              </div>
              <div className="col-span-1 flex justify-end items-end">
                <Link
                  href={{
                    pathname: "/Form",
                    query: {
                      hospital_name: singleHospital.Hospital_Name,
                      H_No: singleHospital.H_No,
                    },
                  }}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
}
