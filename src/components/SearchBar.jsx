import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ filteredTodos, searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar flex justify-end sm:justify-normal mt-3 sm:mt-0">
      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="py-1 pl-3 mx-1 rounded-md focus:outline-none"
      />
      <button className="bg-violet-600 p-2 text-sm font-bold text-white rounded-md mx-1">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
