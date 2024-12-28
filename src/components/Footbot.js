import React from "react";
import Bottom from "./Bottom";
const Footbot = ({
  handleLink,activeLink
}) => {
  return (
    <div className="Footer-header">
      <footer>
        <Bottom handleLink={handleLink} activeLink={activeLink}/>
      </footer>
        
    </div>
  );
};

export default Footbot;
