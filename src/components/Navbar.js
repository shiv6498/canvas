import { Link } from "react-router-dom";
import SidePage from "../pages/Sidepage";
import Toggle from "../pages/Toggle";
import SearchBar from "../pages/SearchBar";
import Searchicon from "../pages/Searchicon";
import { HomeOutlined } from "@ant-design/icons";

const Navbar = ({
  theme,
  toggleDarkMode,
  query,
  setQuery,
  handleSearch,
  activeLink,
  handleLink,
  windowWidth,
  setSearchTerm
}) => {
  
  
  return (
    <div className="navbar-header">
      <div className="headerlinks">
        <div className="header-link">
        <nav>
          {/* Home Button */}
          <Link to="/" onClick={() => handleLink("/")}>
            <button className="Home">
              <HomeOutlined />
            </button>
          </Link>
        </nav>
        </div>
        <div className="header-link">
      {/* Canvas Project Name */}
      <h3 className="project-name">
        <i>Canvas</i>
      </h3>
      </div>
      <div className="header-link">
      {/* Conditionally render content based on window width */}
      {windowWidth < 600 ?
       (<Searchicon
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch} 
        setSearchTerm={setSearchTerm} />)
           :
           (<SearchBar
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch} // The search button click handler
            />)}

      {/* Search Bar Component */}
      </div>
       <div className="header-link">
      {/* Dark Mode Toggle */}
      <Toggle theme={theme} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="header-link">
      {/* SidePage Component */}
      <SidePage
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        activeLink={activeLink}
        handleLink={handleLink}
      />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
