"use client";

import { complex, useScroll } from "framer-motion";
import { useReducer, useState } from "react";

// import { AnimatePresence } from "framer-motion";
// import { useGlobalContext } from "../Context/Context";
// import MobileNav from "../components/MobileNav";
// import {TbBrandNextjs} from "react-icons/tb";

// export default function About() {
//   const { menu } = useGlobalContext();

//   return (
//     <section>
//       <AnimatePresence>{menu && <MobileNav />}</AnimatePresence>

//       <div className="p-10 px-20 sm:px-8">
//         <h1 className="text-center text-2xl">About Us</h1>
//         <hr />
//         <p>
//           Medhive is a comprehensive web application that serves as a one-stop
//           destination for accessing vital information about local hospitals.
//           Developed using cutting-edge technologies like Next.js, Tailwind CSS,
//           and Framer Motion in the frontend, and powered by Node.js, Express,
//           MongoDB, and Mongoose in the backend, Medhive is designed to
//           revolutionize the way people access healthcare services.
//           <br />
//           <br />
//           Incorporating a user-friendly interface and seamless navigation,
//           Medhive effortlessly connects users to a myriad of essential details
//           about nearby hospitals. Users can easily explore an extensive database
//           of hospitals, gaining insights into bed availability, hospital
//           specifications, ratings, location, and the number of proficient
//           doctors available in each facility. This valuable information empowers
//           users to make informed decisions regarding their healthcare needs.
//           <br />
//           <br />
//           Medhive's unique feature set extends beyond mere information
//           provision. With its powerful functionalities, the web app enables
//           users to book appointments with doctors, ensuring easy access to
//           medical consultations. Additionally, users can conveniently reserve
//           hospital beds, facilitating swift and hassle-free admission in times
//           of urgency. Furthermore, Medhive offers real-time updates on available
//           ambulances, aiding in efficient emergency response coordination.
//           <br />
//           <br />
//           With a vision to streamline healthcare accessibility, Medhive aims to
//           bridge the existing gap in the market by aggregating all pertinent
//           healthcare-related data into a singular, centralized platform. By
//           providing a user-friendly and feature-rich interface, the application
//           ensures that users can access critical healthcare information
//           effortlessly, enhancing the overall experience.
//           <br />
//           <br />
//           Medhive's commitment to excellence extends to its secure integration
//           with MongoDB Cloud (Atlas), safeguarding user data while seamlessly
//           facilitating communication between the frontend and backend
//           components. Hosted on Vercel, the application boasts high performance
//           and reliability, ensuring uninterrupted access to essential healthcare
//           information.
//           <br />
//           <br />
//           In a world where the demand for efficient healthcare services is
//           ever-growing, Medhive stands as a transformative solution, simplifying
//           the process of accessing essential medical information. As users
//           engage with this pioneering web app, they experience a seamless blend
//           of advanced technologies and the compassionate pursuit of enhancing
//           healthcare accessibility for all.
//           <br />
//           <br />
//           Medhive's innovation-driven approach promises to revolutionize the way
//           individuals interact with healthcare information, fostering a
//           healthier and more empowered society. As it continues to evolve and
//           expand, Medhive remains dedicated to creating a harmonious ecosystem
//           where health-related queries are answered, empowering users with the
//           knowledge to make informed healthcare decisions, all within a single,
//           unified platform.
//         </p>
//       </div>
//       {/* <section>
//       <ParallaxText baseVelocity={-5} ><TbBrandNextjs /></ParallaxText>
//       <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
//       </section> */}
//     </section>
//   );
// }

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE: "toggle",
  DELETE: "delete",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE:
      return todos.map((eachTodo) =>
        eachTodo.id === action.payload.id
          ? { ...eachTodo, complete: !eachTodo.complete }
          : eachTodo
      );
    case ACTIONS.DELETE:
      return todos.filter((eachTodo) => action.payload.id !== eachTodo.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function About() {
  const [name, setName] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };

  const handleToggle = (id) => {
    dispatch({ type: ACTIONS.TOGGLE, payload: { id: id } });
  };
  const handleDelete = (id) => {
    dispatch({ type: ACTIONS.DELETE, payload: { id: id } });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          style={{ border: "2px solid black", marginBottom: "10px" }}
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((eachTodo, index) => {
        return (
          <section key={index} style={{ display: "flex", gap: "4px" }}>
            <button
              style={{ border: "2px solid black" }}
              onClick={() => handleToggle(eachTodo.id)}
            >
              toggle
            </button>
            <p style={{ color: eachTodo.complete ? "#AAA" : "#000" }}>
              {eachTodo.name}
            </p>
            <button
              style={{ border: "2px solid black" }}
              onClick={() => handleDelete(eachTodo.id)}
            >
              delete
            </button>
            <br />
          </section>
        );
      })}
    </>
  );
}
