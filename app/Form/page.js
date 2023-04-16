"use client";
import submitHandler from "../utils/postFetch";
import { use, useEffect, useState } from "react";



export default function Form({searchParams}) {
const hospitalName = searchParams.hospital_name;
const h_No = searchParams.H_No;

const [formData, setFormData] = useState({
  hospitalName: hospitalName,
  hospitalId: h_No,
  patientName: "",
  roomType:"",
  roomId:"",
  data:"",
  paymentMode:"",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};
console.log(formData);

// fetching the rest details to show in the form
async function getRestData(){
  const res = await fetch(`http://localhost:8000/form_details?ID=${h_No}`)
  const result = await res.json()
  return result;
}

const [values, setValues] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFromDetails() {
      try {
        const data = await getRestData();
        setValues(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchFromDetails();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!values) {
    return <div>Loading...</div>;
  }

  // console.log(values);



 async function submitForm(e){
   e.preventDefault()
  const res = await fetch("http://localhost:8000/fetch-data",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  const result = await res.json()
  return result;
  // We don't want the page to refresh
  // console.log("am here");
  // const res = await fetch("http://localhost:8000/fetch-data")
}


  return (
    <section className="flex justify-center items-center w-screen h-screen ">
      {/* onSubmit function needs to be called to post the formData */}
      <form method="POST" className="w-full max-w-sm h-80" onSubmit={submitForm}>
      {/* <form method="POST" className="w-full max-w-sm h-80" > */}
        <div className="flex flex-wrap -mx-3 mb-4 border-8 border-black h-full p-4">
          {/* hospital name */}
          <div className="w-full">
            <input
              type="text"
              id="hosName"
              name="hosName"
              value={hospitalName}
              readOnly
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            />
          </div>
          {/* Patient Name */}
          <div className="w-full md:w-1/2 px-3">
            <input
              type="text"
              id="patName"
              name="patName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Patient name"
              onChange={handleChange}
            />
          </div>
          {/* Speciality choosen */}
          <div className="w-full md:w-1/2 px-3">
            <input
              type="text"
              id="speChoosen"
              name="speChoosen"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Speciality"
              onChange={handleChange}
            />
          </div>
          {/* Date */}
          <div className="w-full md:w-1/2 px-3">
            <input
              type="date"
              id="date"
              name="date"
              placeholder="date"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            />
          </div>
          {/* Radio 1 Payement */}
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mode of Payment
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="Cash"
                name="Cash"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
              <label htmlFor="Cash" className="mx-2">
                Cash
              </label>
              <input
                type="radio"
                id="Card"
                name="Card"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
              <label htmlFor="Card" className="mx-2">
                Card
              </label>
              <input
                type="radio"
                id="UPI"
                name="Cash"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
              <label htmlFor="male" className="mx-2">
                UPI
              </label>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3">
          <p>{values[0].Room_Type}</p>
          <p>{values[0].Available_rooms}</p>
          <p>{values[0].Room_Cost}</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
          <p>{values[1].Room_Type}</p>
          <p>{values[1].Available_rooms}</p>
          <p>{values[1].Room_Cost}</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
          <p>{values[2].Room_Type}</p>
          <p>{values[2].Available_rooms}</p>
          <p>{values[2].Room_Cost}</p>
          </div>

        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            // onClick={handleFormSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Book now
          </button>
        </div>
      </form>
    </section>
  );
}
