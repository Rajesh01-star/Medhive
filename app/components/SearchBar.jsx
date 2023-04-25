// // React-Next modules import
// import { useState, useEffect } from "react";

// import styles from "../styles/SearchBar.module.css"

// //the custom modules import
// import { SearchSvgComponent } from "./SvgComponent";
// import { motion } from "framer-motion";

// export default function SearchBar() {
//   const [values, setValues] = useState(null);
//   const [search, setSearch] = useState([]);

//   const handleChange = async (event) => {
//     const { value } = event.target;
//     if (value.length >= 3) { // Only fetch if search query has 3 or more characters
//       try {
//         const data = await suggestionFetch(value);
//         setSearch(data);
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       setSearch([]); // Reset search results if search query has less than 3 characters
//     }
//   }

//   const suggestionFetch = async (value) => {
//     return await (await fetch(`http://localhost:8000/suggestions?keyword=${value}`)).json();
//   }



//   return (
//     <div className="ml-20 w-full">
//       <div className="flex items-center">
//         <label htmlFor="simple-search" className="sr-only">
//           Searched
//         </label>
//         < div className="relative w-full">
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <SearchSvgComponent />
//           </div>
//           <input
//             type="text"
//             id="simple-search"
//             className="bg-cyan-200 text-black text-sm rounded-lg  block w-3/4 pl-10 p-2.5 hover:w-full transition-all ease-linear active:border-none"
//             placeholder="Search"
//             required
//             onChange={handleChange}
//           />
//          {search?.length > 0 &&
//           <div className={styles.autocomplete}>
//             {search?.map((ele, i) =>
//               <div key={i} className={styles.autocompleteItems}>
//                 <span>{ele.name}</span>
//               </div>
//             )}
//           </div>
//         }
//         </div>
//       </div>
//     </div>
//   );
// }

import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/SearchBar.module.css'
// import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {

  const [notices, setNotices] = useState([])
  const [search, setSearch] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showBox,setShowBox] = useState(false)

  useEffect(() => {

    async function fetchData() {
      setLoading(true)
      const data = await fetch(`https://ws-public.interpol.int/notices/v1/red?forename=${search}&resultPerPage=200`)
        .then((res) => res.json());
      setNotices(data._embedded.notices);
      console.log(notices);
      setLoading(false)

    }


    fetchData();
  }, [search]);


  function eventHandler(e) {
    if (e.target.value.length !== 0) {
      setShowBox(false);
    } else {
      setShowBox(true);
    }
  }
  return (
    <div >
    <main className={styles.main}>
      <input type="search"
        placeholder='Search'
        onChange={eventHandler}
      />
      {/* <div className={showBox? 'display: block' : 'display: hidden'}>something</div> */}
      <div className={`display ${showBox ? "block" : "hidden"}`}>something</div>

      {search && notices.map((notices) => {
        return (
          <div key={notices.entity_id[10]} className={styles.myselect}>

            <div>
              <p>
                {notices.forename}
              </p>
              <p>{notices.date_of_birth}</p>
            </div>
          </div>
        );
      })
      }
    </main>
    </div>
  );

}

