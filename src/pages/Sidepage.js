import React, { useState, useEffect, useRef } from 'react';
import "../App.css";
import { HiOutlineViewList } from "react-icons/hi";
import { Switch } from "antd";
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';

const SidePage = ({ theme, toggleDarkMode, activeLink,handleLink}) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidePageRef = useRef(null);
  const red = 'red';

  // Function to toggle the side page
  const SidePagetoggle = () => {
    setIsOpen(!isOpen);
  };

  // Close the side page when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidePageRef.current && !sidePageRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Button to toggle side page */}
      <button onClick={SidePagetoggle} className="sidepagebutton">
        <HiOutlineViewList />
      </button>

      <div ref={sidePageRef} className={isOpen ? 'SidePage open' : 'SidePage'}>
        {/* SidePage content */}
        <div className="sidepage-header">
          <button onClick={SidePagetoggle} className="sidepagebutton-inner">
            <VscChromeClose />
          </button>
        </div>

        <nav>
          <Link to="/" onClick={() => { handleLink("/"); SidePagetoggle(); }}>
            <div
              className="HomeSidepage"
              style={{ color: activeLink === '/' ? red : '' }}
            >
              Home
            </div>
          </Link></nav>
          <nav>
          <Link to="/popular" onClick={() => { handleLink("/popular"); SidePagetoggle(); }}>
            <div
              className="PopularSidepage"
              style={{ color: activeLink === '/popular' ? red : '' }}
            >
              Latest Wallpaper
            </div>
          </Link>
        </nav>
        <nav>
          <Link to="/About" onClick={() => { handleLink("/About"); SidePagetoggle(); }}>
            <div
              className="about-side-page"
              style={{ color: activeLink === '/About' ? red : '' }}
            >
              About
            </div>
          </Link>
        </nav>
        <nav>
          <Link to="/Contact" onClick={() => { handleLink("/Contact"); SidePagetoggle(); }}>
            <div
              className="contact-side-page"
              style={{ color: activeLink === '/Contact' ? red : '' }}
            >
              Contact
            </div>
          </Link>
        </nav>
        <nav>
          <Link to="/Privacy" onClick={() => { handleLink("/Privacy"); SidePagetoggle(); }}>
            <div
              className="privacy-side-page"
              style={{ color: activeLink === '/Privacy' ? red : '' }}
            >
              Privacy Policy
            </div>
          </Link>
        </nav>
        <nav>
          <Link to="/Terms" onClick={() => { handleLink("/Terms"); SidePagetoggle(); }}>
            <div
              className="terms-side-page"
              style={{ color: activeLink === '/Terms' ? red : '' }}
            >
              Terms of Service
            </div>
          </Link>
        </nav>
        {/* Dark/Light mode toggle */}
        <div className="Toggle-button">
          <div
            id="toggle"
            title="Toggle dark and light mode"
            onClick={() => {
              toggleDarkMode();
              SidePagetoggle();
            }}
          >
            <Switch
              checked={theme === 'dark-theme'}
              unCheckedChildren="Dark"
              checkedChildren="Light"
              className='switch'
              style={{ backgroundColor: theme === 'dark-theme' ? red : '' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePage;
