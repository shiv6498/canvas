import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SearchBar from "./SearchBar";
import { VscChromeClose } from "react-icons/vsc";

function Sermob({ query, setQuery, onSearchClick, setSearchTerm }) {
  const [isserMobOpen, setIsserMobOpen] = useState(false);

  // Function to toggle the side page
  const SerMobPagetoggle = () => {
    setIsserMobOpen(!isserMobOpen);
  };

  const searchOptions = ['Mountains', 'Cars', 'Animals', 'Education', 'Highways'];

  return (
    <div>
      {/* Button to toggle Sermob page */}
      <button onClick={SerMobPagetoggle} className="sermobpagebutton" aria-label="Toggle Search">
        <CiSearch />
      </button>
      <div className={isserMobOpen ? "Sermob open" : "Sermob"}>
        {/* SermobPage content */}
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearchClick={onSearchClick} // The search button click handler
          isserMobOpen={isserMobOpen}
          setIsserMobOpen={setIsserMobOpen}
        />
        <button onClick={SerMobPagetoggle} className="sermobpagebutton-inner" aria-label="Close Search">
          <VscChromeClose />
        </button>
        <div className="search-option-heading">
          <h3>Latest Search Options</h3>
          <div className="search-option">
            {searchOptions.map(option => (
              <button key={option} onClick={() => {setSearchTerm(option); setQuery(option); SerMobPagetoggle();}}>
                {option}
              </button>
            ))}
          </div>
        </div>
        {/* Add any content here for the Sermob page */}
      </div>
    </div>
  );
}

export default Sermob;
