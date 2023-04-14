"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { searchHospitalUrl } from "@/app/utils/url";

// export default async function hosPage({params}){
    export default function hosPage(){
        const Id = usePathname()
        // /pages/Id so slice 7 will eliminate the non-required elements
        console.log(Id.slice(7));

        // async function newsFetch() {
        //     return await (await fetch(`searchHospitalUrl${Id}`)).json();
        //   }
    // custom data without fetching
    const data = {name:"Appolo",imgLink:"https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg", bed:40, avgCost:4000,specialityChoosen:"cold" }



    return(
        <section className="flex justify-center items-center w-screen h-screen" >
        <div className="card card-compact w-2/5 bg-base-100 shadow-xl">
        <figure>
            <Image src={data.imgLink} alt="image" width={400} height={400} className="w-full" />
        </figure>
        <div className="card-body">
        <h2 className="card-title">Hospital</h2>
        <div className="flex flex-col">
        <p>Hospital Name: {data.name}</p>
        <p>Bed count: {data.bed}</p>
        <p>Bed cost: {data.avgCost}</p>
        <p>Speciality: {data.specialityChoosen}</p>
        <p>Appointment date: date drop-down</p>
        <p>Mode of payment: option drop-down</p>
        <p>Room type: room drop-down</p>
        </div>
        <div className="card-actions justify-end">
        <Link href={"/Form"} className="btn btn-primary">Book now</Link>
        </div>
        </div>
    </div>
    </section>
    )
}