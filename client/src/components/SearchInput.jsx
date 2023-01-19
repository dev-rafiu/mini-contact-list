import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../App";

function SearchInput() {
  const { query, setQuery } = useGlobalContext();

  return (
    <div className="search-section container">
      <input
        type="search"
        placeholder="search for contacts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaSearch />
    </div>
  );
}

export default SearchInput;
