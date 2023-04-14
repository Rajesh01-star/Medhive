"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { searchHospitalUrl } from "@/app/utils/url";

export default function hosPage() {
    const [values, setValues] = useState(null);
    const [error, setError] = useState(null);

    // Get the Id from the URL using usePathname hook
    const Id = usePathname().slice(7); // Assuming the Id is after "/pages/"

    async function searchHospitalFetch() {
        return await (await fetch(`${searchHospitalUrl}ID=${Id}`)).json();
    }

    useEffect(() => {
        async function fetchSearchHospitalFunc() {
            try {
                const data = await searchHospitalFetch();
                setValues(data);
            } catch (error) {
                setError(error);
            }
        }
        fetchSearchHospitalFunc();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!values) {
        return <div>Loading...</div>;
    }

    // console.log(values[0].H_No);

    // custom data without fetching
    const data = {name:"Appolo",imgLink:"https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg", bed:40, avgCost:4000,specialityChoosen:"cold" }

    return (
        <section className="flex justify-center items-center w-screen h-screen">
            <div className="card card-compact w-2/5 bg-base-100 shadow-xl">
                <figure>
                    <Image src={data.imgLink} alt="image" width={400} height={400} className="w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hospital</h2>
                    <div className="flex flex-col">
                        <p>Hospital Name: {values[0].Hospital_Name}</p>
                        <p>Place: {values[0].Place}</p>
                        <p>Bed count: {values[0].Total_Beds}</p>
                        <p>Total doctors: {values[0].Total_Doctors}</p>
                        <p>Speciality: {values[0].Total_Specialties}</p>
                        <p>Stars: {values[0].Stars}</p>


                    </div>
                    <div className="card-actions justify-end">
                        <Link href={"/Form"} className="btn btn-primary">Book now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
