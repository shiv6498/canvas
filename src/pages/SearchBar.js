import React from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { VscChromeClose } from "react-icons/vsc";

const SearchBar = ({ query, setQuery, onSearchClick, setIsserMobOpen,isserMobOpen}) => {
  const navigate = useNavigate();

  // Function to capitalize the first letter of each word
  const capitalizeWords = (text) => {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // This function will handle the search button click
  const handleSearchClick = () => {
    if (query.trim() !== '') {
      navigate(`/?query=${query}`); // Navigate to home with queryz
      onSearchClick(); // Trigger the search functionality
      if(isserMobOpen===true){
      setIsserMobOpen(false); // Close the search bar
      }
    }
  };

  // This function will handle key down (Enter key)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent Enter key from causing unwanted behavior
      if (query.trim() !== '') {
        navigate(`/?query=${query}`); // Navigate to home with query
        onSearchClick(); // Trigger the search functionality
        if(isserMobOpen===true){
          setIsserMobOpen(false); // Close the search bar
          }
      }
    }
  };

  // Function to clear the query
  const handleClearQuery = () => {
    setQuery(''); // Clear the input field
  };

  return (
    <div className="search-bar-container">
      <input
        className="inputSearch"
        onKeyDown={handleKeyDown} // Trigger search on Enter and prevent default
        placeholder="HD Wallpaper"
        onChange={(e) => setQuery(capitalizeWords(e.target.value))} // Update query with capitalized words
        value={query}
      />
      {query && (
        <button className="clear-button" onClick={handleClearQuery} aria-label="Clear">
          <VscChromeClose className="clear-icon" />
        </button>
      )}
      <button className="search-button" onClick={handleSearchClick} aria-label="Search">
        <CiSearch className="search-icon" />
      </button>
    </div>
  );
};

export default SearchBar;
