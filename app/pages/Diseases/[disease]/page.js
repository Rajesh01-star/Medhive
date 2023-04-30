"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { searchHospitalUrl } from "../../../support/url";
import { LoadingAnimation,ErrorAnimation } from "../../../components/LoadingAnimations";
import { FaBed } from "react-icons/fa";
import {RiMapPin2Fill} from "react-icons/ri"
import {GiLifeBar} from "react-icons/gi"
import {MdCleanHands} from "react-icons/md"
import {AiFillStar} from "react-icons/ai"


import specialities from "./specialities";
import styles from "../../../styles/specialities.module.css"

export default function hosPage() {
    
    // const [values, setValues] = useState(null);
    // const [error, setError] = useState(null);

    // // Get the Id from the URL using usePathname hook
    // const Id = usePathname().slice(16); // Assuming the Id is after "/pages/"
    // console.log(Id);

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
    //     return <ErrorAnimation errorMessage={error.message} />;
    // }

    // if (!values) {
    //     return <LoadingAnimation />;
    // }

    return (
        <div className="flex justify-center bg-[#fbf5ff]">
            <section className="grid grid-cols-3 gap-10 p-10" >
            {specialities.map((eachSpeciality) => {
            const stars = Array.from({ length: parseInt(eachSpeciality.Stars) }, (_, i) => (
                    <AiFillStar key={i} className="inline-block" />
            ));

            const specialityBadge = eachSpeciality.Specialties_Present.split(',').slice(0, 10);
            const badges = specialityBadge.map((badge, j) => (
                <div className="badge bg-[#b351fb] text-white border-none mx-1" key={j}>
                    {badge}
                </div>
            ));
                return (
                    <article className={`${styles.card} backdrop:blur-2xl bg-gradient-to-t from-[#ecd4ff] t0-[#f4e7ff]`}>
	            <Image height={300} width={500} src={"https://picsum.photos/400"} className="h-[10rem]" />
	            <h2 className="mb-5 text-center">{eachSpeciality.Hospital_Name.substring(0, 30) + '...'}</h2>
                <p >Total Beds  <FaBed className="inline-block mx-2" /> : {eachSpeciality.Total_Beds} </p>
                <p >Mortality Rate  <GiLifeBar className="inline-block mx-2" /> : {eachSpeciality.MortalityRate} </p>
                <p >Cleanliness Score  <MdCleanHands className="inline-block mx-2" /> : {eachSpeciality.CleanlinessScore} </p>
                <p>State <RiMapPin2Fill className="inline-block mx-2" />: {eachSpeciality.Place}</p>
                {stars}
                <div className="divider"></div> 
                {badges}
                <Link href={{ pathname: '/Form', query: { hospital_name: eachSpeciality.Hospital_Name,H_No:eachSpeciality.H_No } }}>
                <input type="submit" value="Book now" className="btn bg-[#b351fb] border-none block ml-auto mt-4" />
                </Link>
                </article>
                )
                })}
        </section>
        </div>
        // <div>Disease section</div>
    )
}
