"use client"

import Link from "next/link"

import TextField from "../components/TextField"

export default function Form(){
    // let postData;
    const submitHandler = (e)=>{
        e.preventDefault();
        const hospital = e.target.Hospital_name.value;
        const speciality = e.target.Speciality_choosen.value;
        const patient = e.target.Patient_name.value;
        const date = e.target.Date.value;

        fetch('http://localhost:3001/formPost',{method:'POST',headers:{'Content-Type': 'application/json'},body: JSON.stringify({hospital,speciality,patient,date})}).then(response =>console.log(response)).catch((e)=>console.log(e))


        // postData = {Hspital:hospital,Speciality:speciality,Patient:patient,Date:date}
        // return postData;
    }
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(postData)
    // };
    // fetch('http://localhost:3001/formPost', requestOptions).then(response => response.json())

    return(
        // <section className="flex justify-center items-center w-screen h-screen" >
        // <div className="card card-compact w-2/5 bg-base-100 shadow-xl border-black border-8 h-96">
        //     <form action="#" method="post">
        //     <div className="card-body">
        // <h2 className="card-title">Hospital</h2>
        //         <div className="flex flex-col justify-center">
        //         <TextField label="Hospital name" type="text" />               
        //         <TextField label="Speciality choosen" type="text" />
        //         <TextField label="Name" type="text" />
        //         <TextField label="Appt. Date" type="date" />
        //         <TextField label="Mode of payment" type="radio" radio1="Cash" radio2="UPI" radio3="Card" />
        //         <div className="card-actions justify-end">
        //             <Link href={"/Form"} className="btn btn-primary">Book now</Link>
        //         </div>
        //         </div>
        //         </div>
        //     </form>
        //     </div>
        // </section>   
<section className="flex justify-center items-center w-screen h-screen" >
<form className="w-full max-w-sm" action="#" method="post" onSubmit={submitHandler}>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
          <TextField type="text" label="Hospital_name" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextField type="text" label="Patient_name" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextField type="text" label="Speciality_choosen" />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <TextField type="date" label="Date" />
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
    </section>
  );
}