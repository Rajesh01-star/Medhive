// React-Next modules import
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

//the custom modules import
import { SearchSvgComponent } from "./SvgComponent";

export default function SearchBar() {
  let suggestionValues;
  const [suggestPromptArray, setSuggestPropmptArray] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [search, setSearch] = useState({
    searchString:0
  });


  // fetching the suggestions
  async function getRestData(keyword){
    const res = await fetch(`http://localhost:8000/suggestions?keyword=${keyword}`)
    const result = await res.json()
    return result;
  }

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setSearch((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (search.searchString.length === 0) {
        setShowSuggestions(false);
      } else {
        setShowSuggestions(true);
        const suggestionValues = await getRestData(search.searchString);
        const filteredSuggestions = [];
        let counter = 0;
        suggestionValues.forEach((suggestionValue) => {
          if (suggestionValue.Source === 'Hospital' && counter < 3) {
            filteredSuggestions.push(suggestionValue);
            counter++;
          }
          if (suggestionValue.Source === 'Specilaty' && counter < 6) {
            filteredSuggestions.push(suggestionValue);
            counter++;
          }
        });
        setSuggestPropmptArray(filteredSuggestions);
      }
    };

    fetchData();
  }, [search.searchString]);

  // console.log(`needed array: ${suggestPromptArray}`);
// console.log(suggestPromptArray);


  return (
    <div className={`ml-20 w-full`}>
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
            name="searchString"
          />
          <div className={`${showSuggestions ? 'block' : 'hidden'}`}>
          {suggestPromptArray.map((eachPromptElement, index) => {
            let linkToGo
            eachPromptElement.Source == "Hospital"? linkToGo = eachPromptElement.Hospital_Id : linkToGo = eachPromptElement.Specialty_Id
            return (
              <Link href={`/pages/${linkToGo}`} key={index} className="border-8 border-black">{eachPromptElement.Source == "Hospital" ? eachPromptElement.Hospital_Name: eachPromptElement.Specialty}</Link>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
