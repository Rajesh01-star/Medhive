"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { searchHospitalUrl } from "@/app/utils/url";
import { LoadingAnimation,ErrorAnimation } from "@/app/components/LoadingAnimations";

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
        return <ErrorAnimation errorMessage={error.message} />;
    }

    if (!values) {
        return <LoadingAnimation />;
    }

    // console.log(values[0].H_No);

    // custom data without fetching
    // const customValue = [{Hospital_Name:"Apollo",Place:"Bhubaneswar",Total_Beds:14,Total_Doctors:40,Total_Specialties:10,Stars:3}]
    // customValue will be values when api is fetching
    return (
        <section className="flex justify-center items-center w-full h-screen">
            <div className="card cardd-compact bg-white/40 w-1/3 shadow-xl backdrop-blur-xl rounded-2xl">
                <div className="flex justify-center w-full" >
                    <Image width={100} height={100} src={"https://picsum.photos/200"} alt="image" className="w-full h-48" />
                </div>
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
                        <Link href={{ pathname: '/Form', query: { hospital_name: values[0].Hospital_Name,H_No:values[0].H_No } }} className="btn btn-primary">Book now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
