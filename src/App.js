import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect, useCallback } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Popular from "./pages/Popular";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Footbot from "./components/Footbot";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const [query, setQuery] = useState(""); // Controlled by search bar
  const [searchTerm, setSearchTerm] = useState("HD Wallpaper"); // Default search term
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [activeLink, setActiveLink]=useState("/");
  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  const [hasMore, setHasMore] = useState(true);
  const location = useLocation(); // Hook to get the current location (URL)
  const navigate = useNavigate(); // Hook for navigating programmatically


  // Fetch photos using the Pexels API
  const getPhotos = useCallback(async () => {
    if (!hasMore) return; // Prevent fetching if no more photos

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=30`,
        {
          headers: {
            Authorization: process.env.REACT_APP_SECRET_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.photos.length === 0) {
        setHasMore(false); // No more photos
      } else {
        setData((prevData) =>
          page === 1 ? result.photos : [...prevData, ...result.photos]
        );
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, page, hasMore]);

  // Update query and search term from the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryFromURL = params.get("query");

    if (queryFromURL) {
      setQuery(queryFromURL);
      setSearchTerm(queryFromURL);
    } else {
      setQuery(""); // Reset query
      setSearchTerm("HD Wallpaper"); // Use default query
    }

    setPage(1); // Reset page for new query
    setData([]); // Clear data
    setHasMore(true); // Reset "load more" functionality
  }, [location.search]);

  // Fetch photos when `searchTerm` or `page` changes
  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  // Handle dark mode toggle
  useEffect(() => {
    document.body.classList = theme;
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prevTheme) =>
      prevTheme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  // Handle search functionality
  const handleSearch = () => {
    if (query.trim() === "") return;

    if (query !== searchTerm) {
      setSearchTerm(query); // Update search term
      setPage(1); // Reset to first page
      setData([]); // Clear data
      setHasMore(true); // Reset load more
      navigate(`/?query=${query}`); // Update URL
    }
  };
const handleLink =(path) => {
  setActiveLink(path);
}
// Automatically update the active link based on the current URL
useEffect(() => {
  // Update active link on path change
  setActiveLink(location.pathname);
    
  // Navigate with query if query is not empty
  /*if (query !== '') {
    // Properly concatenate pathname and query string
    navigate(`${location.pathname}?query=${query}`);
  }*/
}, [location.pathname]);


  // Handle loading more photos
  const loadMorePhotos = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update the window width state continuously on resize
    };

    // Attach resize listener to window
    window.addEventListener("resize", handleResize);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures effect runs only on mount

  
 
  

  return (
    <div className="App">
      <Navbar
        theme={theme}
        toggleDarkMode={toggleDarkMode}
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch} // Pass onSearchClick here
        activeLink={activeLink} // Derived from location.
        setActiveLink={setActiveLink}
        handleLink={handleLink}
        windowWidth={windowWidth}
        setSearchTerm={setSearchTerm}
      />
      
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={data}
              loading={loading}
              loadMorePhotos={loadMorePhotos}
              hasMore={hasMore}
              handleLink={handleLink}
              searchTerm={searchTerm}
            />
          }
        />
        

        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About handleLink={handleLink}/>}/>
        <Route path="/popular" element={<Popular />} />
      </Routes>
      <Footbot handleLink={handleLink} activeLink={activeLink}/>
    </div>
  );
}

export default App;
