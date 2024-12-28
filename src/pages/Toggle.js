//import React, { useState, useEffect } from "react";
import "../App.css";
//import { IoCloudyNight } from "react-icons/io5";
//import { IoSunnyOutline } from "react-icons/io5";
import { MoonOutlined } from "@ant-design/icons";
import {SunOutlined} from "@ant-design/icons";
const Toggle = ({theme,toggleDarkMode}) => {
  

  return (
    <div className="container">
      {theme==='dark-theme' ? (
        <button
          className="Toggle-button"
          id="toggle"
          title="Toggle dark and light mode"
          onClick={toggleDarkMode} // Change handler to toggle dark mode
        >
          <SunOutlined  className="light-icon"/>
        </button>
      ) : (
        <button
          className="Toggle-button"
          id="toggle"
          title="Toggle dark and light mode"
          onClick={toggleDarkMode}
        >
         <MoonOutlined />
        </button>
      )}
      
    </div>
  );
};

export default Toggle;
