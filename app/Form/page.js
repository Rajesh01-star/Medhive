"use client";
import submitHandler from "../support/postFetch";
import { useEffect, useState } from "react";

import {
  ErrorAnimation,
  LoadingAnimation,
} from "../components/LoadingAnimations";

export default function Form({ searchParams }) {
  const [values, setValues] = useState(null);
  const [error, setError] = useState(null);

  const hospitalName = searchParams.hospital_name;
  const h_No = searchParams.H_No;
  let todayDate = new Date().toJSON().slice(0, 10);
  const [roomCost, setRoomCost] = useState(6100);
  const [formData, setFormData] = useState({
    hospitalName: hospitalName,
    hospitalId: h_No,
    roomId: "R1",
    patName: "kekda",
    date: "5/5/2023",
    MOP: "Cash",
    roomType: "General",
  });

  const handleRoomChange = (e) => {
    switch (e.target.value) {
      case "General":
        {
          setRoomCost(values[0].Room_Cost);
          formData.roomId = values[0].Room_ID;
        }
        break;
      // case "General" : console.log(values[0].Room_Cost);
      case "Semi-Private":
        {
          setRoomCost(values[1].Room_Cost);
          formData.roomId = values[1].Room_ID;
        }
        break;
      case "Private":
        {
          setRoomCost(values[2].Room_Cost);
          formData.roomId = values[2].Room_ID;
        }
        break;
    }
    handleChange(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function getRestData() {
    try {
      const res = await fetch(`http://localhost:4000/form_details?ID=${h_No}`);
      console.log(res);
      const result = await res.json();
      // setValues(result)
      console.log(result);
    } catch (error) {
      setError(error);
    }
  }


  async function submitForm(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/fetch-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    alert(result.message);
    return result;
  }

  useEffect(() => {
    getRestData();
  }, []);

  if (error) {
    return <ErrorAnimation errorMessage={error.message} />;
  }

  if (!values) {
    return <LoadingAnimation />;
  }


  return (
    <section className="flex justify-center items-center w-screen h-screen  ">
      {/* onSubmit function needs to be called to post the formData */}
      <form
        method="POST"
        className="w-full max-w-sm h-80"
        onSubmit={submitForm}
      >
        {/* <form method="POST" className="w-full max-w-sm h-80" > */}
        <div className="flex flex-wrap -mx-3 mb-4 h-full p-4">
          {/* hospital name */}
          <div className="w-full">
            <input
              type="text"
              id="hosName"
              name="hosName"
              value={hospitalName}
              readOnly
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 "
            />
          </div>
          {/* Patient Name */}
          <div className="w-full">
            <input
              type="text"
              id="patName"
              name="patName"
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 "
              placeholder="Patient name"
              onChange={handleChange}
            />
          </div>
          {/* Date */}
          <div className="w-full">
            <input
              type="date"
              id="date"
              name="date"
              min={todayDate}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 "
              onChange={handleChange}
            />
          </div>
          {/* Radio 1 Payement */}
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mode of Payment
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="Cash"
                name="MOP"
                value="Cash"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
              <label htmlFor="Cash" className="mx-2">
                Cash
              </label>
              <input
                type="radio"
                id="Card"
                name="MOP"
                value="Card"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
              <label htmlFor="Card" className="mx-2">
                Card
              </label>
              <input
                type="radio"
                id="UPI"
                name="MOP"
                value="UPI"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
              <label htmlFor="male" className="mx-2">
                UPI
              </label>
            </div>
          </div>

          <div className="w-full">
            <>
              <label htmlFor="roomType" className="mr-2">
                Choose a room:
              </label>
              <select
                className="focus:outline-none"
                id="roomType"
                name="roomType"
                onChange={handleRoomChange}
              >
                <option value={values[0].Room_Type}>
                  {values[0].Room_Type}
                </option>
                <option value={values[1].Room_Type}>
                  {values[1].Room_Type}
                </option>
                <option value={values[2].Room_Type}>
                  {values[2].Room_Type}
                </option>
              </select>
            </>
            <>
              <label htmlFor="roomCost" className="mx-2">
                Cost:
              </label>
              <span>{roomCost}</span>
            </>
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
