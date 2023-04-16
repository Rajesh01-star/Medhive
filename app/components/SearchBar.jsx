// // React-Next modules import
// import { useState, useEffect } from "react";

// import styles from "../styles/SearchBar.module.css"

// //the custom modules import
// import { SearchSvgComponent } from "./SvgComponent";
// import { motion } from "framer-motion";

// export default function SearchBar() {
//   const [values, setValues] = useState(null);
//   const [search, setSearch] = useState([]);
//   const [notices, setNotices] = useState([])
  


 

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
//             // className="bg-cyan-200 text-white text-sm rounded-lg  block w-3/4 pl-10 p-2.5 hover:w-full transition-all ease-linear active:border-none"
//             placeholder="Search"
//             required
//             onChange={(e) => setSearch(e.target.value) }
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

// import Head from 'next/head'
// import Link from 'next/link'
// import styles from '../styles/SearchBar.module.css'
// console.log(styles);
// // import Footer from '@/components/Footer'
// import { useEffect, useState } from 'react'

// export default function Home() {

//   const [data, setData] = useState([])
//   const [search, setSearch] = useState()

//   useEffect(() => {

//     async function fetchData() {

//       const data = await fetch(`http://localhost:8000/suggestions?keyword=${search}`)
//         .then((res) => res.json());
//       setData(data.Source);
//     }


//     fetchData();
//   }, [search]);
// console.log(data);
//   return (

//     <main className={styles.autocomplete}>
//       <input type="search"
//         placeholder='Search'
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {data.map((data) => {
//         return (
//           <div
//            key={Hospital_id} className={styles.autocompleteItems}>
//             <div>
//              <p>{data.Hospital_Name}</p>
//             </div>
//           </div>
//         );
//       })}
//     </main>
//   );

// }

import { useRef, useCallback, useState } from "react";


export default function SearchBar(){
    const searchRef = useRef(null)
    const [search,setSearch]=useState('');
    const [results,setResults] = useState([]);
    const [active,setActive] = useState(false);

    const searching = async (event) =>{
        setSearch(event.target.value)
        if(event.target.value.length > 2)
        {
        const response = await fetch(`http://localhost:8000/suggestions?keyword=${search}`)
        const data = await response.json()
        //console.log(data)
        setResults(data)
        }
    console.log(search)
    }

    const focusing = () => {
        setActive(true)
        window.addEventListener('click',onclick);
        //console.log('Its on Foucus ')
    }

    const onclick = (event) =>{
        if (!searchRef.current.contains(event.target)) {
            setActive(false)
            setSearch('')
            setResults([])
            window.removeEventListener('click', onclick)
          }

          //console.log(searchRef.current.contains(event.target))
    }


    return(
    <div className="border-4 flex flex-col" ref={searchRef}>
            <input
              type="text"
              placeholder="type"
              value={search}
              onChange={searching}
              onFocus={focusing}
              className="fixed"
            />

            {/* <button onClick={callApi}>Press me</button>  */}

            <ul className="">

            {search.length > 2 && active && results.length >1 &&
              results.map((result) => {
                return(
                        <li className="" key={result.Hospital_Name}>
                            {result.Hospital_Name}
                        </li>
                )
            })}

            
            </ul>
        </div>

    )
}
