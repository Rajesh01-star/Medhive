"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { searchHospitalUrl } from "@/app/utils/url";

export default function hosPage() {
    // const [values, setValues] = useState(null);
    // const [error, setError] = useState(null);

    // // Get the Id from the URL using usePathname hook
    // const Id = usePathname().slice(7); // Assuming the Id is after "/pages/"

    // async function searchHospitalFetch() {
    //     return await (await fetch(`${searchHospitalUrl}ID=${Id}`)).json();
    // }

    // useEffect(() => {
    //     async function fetchSearchHospitalFunc() {
    //         try {
    //             const data = await searchHospitalFetch();
    //             setValues(data);
    //         } catch (error) {
    //             setError(error);
    //         }
    //     }
    //     fetchSearchHospitalFunc();
    // }, []);

    // if (error) {
    //     return <div className="card h-[20rem]">
    //         <iframe src="https://embed.lottiefiles.com/animation/98642" className="pointer-events-none"></iframe>
    //         <span className="text-center">Error: {error.message}</span>
    //         </div>;
    // }

    // if (!values) {
    //     return <div className="card h-[20rem]">
    //         <iframe src="https://embed.lottiefiles.com/animation/9844" className="pointer-events-none"></iframe>
    //         <span className="text-center">Loading...</span>
    //     </div>;
    // }

    // console.log(values[0].H_No);

    // custom data without fetching
    const customValue = [{Hospital_Name:"Apollo",Place:"Bhubaneswar",Total_Beds:14,Total_Doctors:40,Total_Specialties:10,Stars:3}]
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
                        <p>Hospital Name: {customValue[0].Hospital_Name}</p>
                        <p>Place: {customValue[0].Place}</p>
                        <p>Bed count: {customValue[0].Total_Beds}</p>
                        <p>Total doctors: {customValue[0].Total_Doctors}</p>
                        <p>Speciality: {customValue[0].Total_Specialties}</p>
                        <p>Stars: {customValue[0].Stars}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link href={{ pathname: '/Form', query: { keyword: customValue[0].Hospital_Name } }} className="btn btn-primary">Book now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
