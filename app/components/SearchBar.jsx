// React-Next modules import
import { useState, useEffect } from "react";

import styles from "../styles/SearchBar.module.css"

//the custom modules import
import { SearchSvgComponent } from "./SvgComponent";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [values, setValues] = useState(null);
  const [search, setSearch] = useState([]);

  const handleChange = async (event) => {
    const { value } = event.target;
    if (value.length >= 3) { // Only fetch if search query has 3 or more characters
      try {
        const data = await suggestionFetch(value);
        setSearch(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSearch([]); // Reset search results if search query has less than 3 characters
    }
  }

  const suggestionFetch = async (value) => {
    return await (await fetch(`http://localhost:8000/suggestions?keyword=${value}`)).json();
  }



  return (
    <div className="ml-20 w-full">
      <div className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Searched
        </label>
        < div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchSvgComponent />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-cyan-200 text-white text-sm rounded-lg  block w-3/4 pl-10 p-2.5 hover:w-full transition-all ease-linear focus:outline-none"
            placeholder="Search"
            required
            onChange={handleChange}
          />
         {search?.length > 0 &&
          <div className={styles.autocomplete}>
            {search?.map((ele, i) =>
              <div key={i} className={styles.autocompleteItems}>
                <span>{ele.name}</span>
              </div>
            )}
          </div>
        }
        </div>
      </div>
    </div>
  );
}
