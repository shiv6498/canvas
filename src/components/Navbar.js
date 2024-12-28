import { Link } from "react-router-dom";
import SidePage from "../pages/Sidepage";
import Toggle from "../pages/Toggle";
import SearchBar from "../pages/SearchBar";
import Sermob from "../pages/Sermob";
import { HomeOutlined } from "@ant-design/icons";

const Navbar = ({
  theme,
  toggleDarkMode,
  query,
  setQuery,
  onSearchClick,
  activeLink,
  handleLink,
  windowWidth,
  setSearchTerm
}) => {
  
  
  return (
    <div className="navbar-header">
      <header className="headerlink">
        <nav>
          {/* Home Button */}
          <Link to="/" onClick={() => handleLink("/")}>
            <button className="Home">
              <HomeOutlined />
            </button>
          </Link>
        </nav>
      </header>

      {/* Canvas Project Name */}
      <h3 className="project-name">
        <i>Canvas</i>
      </h3>

      {/* Conditionally render content based on window width */}
      {windowWidth < 600 ?
       (<Sermob 
       query={query}
       setQuery={setQuery}
       onSearchClick={onSearchClick}
       setSearchTerm={setSearchTerm}/>)
           :
           (<SearchBar
            query={query}
            setQuery={setQuery}
            onSearchClick={onSearchClick} // The search button click handler
            />)}

      {/* Search Bar Component */}
      

      {/* Dark Mode Toggle */}
      <Toggle theme={theme} toggleDarkMode={toggleDarkMode} />

      {/* SidePage Component */}
      <SidePage
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        activeLink={activeLink}
        handleLink={handleLink}
      />
    </div>
  );
};

export default Navbar;
