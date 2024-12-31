import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

function Searchicon({ query, setQuery, handleSearch}) {
  const [searchpage, setSearchpage] = useState(false);
  const navigate = useNavigate();
  const popularSearches = ["Mountains", "Animals", "Bikes", "Cars", "Educations"];

  // Function to toggle the search page
  const SearchPagetoggle = () => {
    setSearchpage(!searchpage);
  };

  return (
    <div>
      {/* Button to toggle side page */}
      <button onClick={SearchPagetoggle} className="search-btn-outer">
        <CiSearch />
      </button>
      <div className={searchpage ? "SearchPage open" : "SearchPage"}>
        <div className="search-close-header">
          {/* Close button aligned at the top right */}
          <button onClick={SearchPagetoggle} className="close-btn">
            <VscChromeClose />
          </button>
        </div>
        {/* Search bar section on the next line */}
        <div className="search-bar-header">
          <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} setSearchpage={setSearchpage} searchpage={searchpage} />
        </div>
        <div className="popular-search">
          <h3>Popular Searches</h3>
          {popularSearches.map((query) => (
            <button
              key={query}
              onClick={() => {
              navigate(`/?query=${query}`); handleSearch();
              setSearchpage(false);
              }}
            >
              {query}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Searchicon;
