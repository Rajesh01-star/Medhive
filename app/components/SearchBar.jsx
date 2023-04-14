// React-Next modules import
import { useState } from "react";

//the custom modules import
import { SearchSvgComponent } from "./SvgComponent";
import { motion } from "framer-motion";

export default function SearchBar() {
  return (
    <div className="ml-20 w-full">
      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchSvgComponent />
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-white text-gray-900 text-sm rounded-lg  block w-3/4 pl-10 p-2.5 hover:w-full transition-all ease-linear active:border-none"
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
}
