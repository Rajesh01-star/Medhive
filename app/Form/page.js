"use client";
import submitHandler from "../utils/postFetch";

export default function Form() {


  const handleFormSubmit = (event) => {
    submitHandler(event);
  };

  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          {/* hospital name */}
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              htmlFor="hosName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Hospital name :{" "}
            </label>
            <input
              type="text"
              id="hosName"
              name="hosName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Patient Name */}
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="patName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Patient Name :
            </label>
            <input
              type="text"
              id="patName"
              name="patName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Doe"
            />
          </div>
          {/* Speciality choosen */}
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="speChoosen"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Speciality_choosen :
            </label>
            <input
              type="text"
              id="speChoosen"
              name="speChoosen"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Doe"
            />
          </div>
          {/* Date */}
          <div className="w-full md:w-1/2 px-3">
            <label
              htmlFor="date"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date :
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                name="MOP"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
              />
              <label htmlFor="Cash" className="mx-2">
                Cash
              </label>
              <input
                type="radio"
                id="Card"
                name="MOP"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
              />
              <label htmlFor="Card" className="mx-2">
                Card
              </label>
              <input
                type="radio"
                id="UPI"
                name="MOP"
                className="form-radio h-4 w-4 text-blue-500 focus:outline-none focus:shadow-outline"
              />
              <label htmlFor="male" className="mx-2">
                UPI
              </label>
            </div>
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
