import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const About = ({ handleLink }) => {
  return (
    <div className="footer">
      <h1 id="Ah1">
        About Canvas
      </h1>
      <p id="Ahp1">
        Welcome to Canvas, your ultimate destination for stunning wallpapers
        that transform your screens into works of art. We believe that your
        devices deserve to look as good as they perform, and that's why we
        curate a wide range of high-quality wallpapers designed to inspire and
        elevate your digital experience. Whether you're into serene landscapes,
        bold abstracts, or minimalist designs, we have something for everyone.
      </p>

      <h1 id="Ah2">Why Choose Canvas Wallpapers?</h1>
      <div className="about-boxes">
        <div className="about-box">
          <h3>Exceptional Quality</h3>
          <p>
            Every wallpaper on Canvas is crafted or curated with the highest
            standards in mind. From vibrant 4K resolutions to crisp details,
            our wallpapers are designed to look stunning on any screen,
            ensuring a premium visual experience.
          </p>
        </div>
        <div className="about-box">
          <h3>Diverse Collection</h3>
          <p>
            No matter your taste, we’ve got you covered! Explore a vast range of
            categories including serene nature scenes, bold abstracts,
            minimalist patterns, dynamic cityscapes, and more. Whether you’re
            looking for something calming or something energizing, you’ll find
            it here.
          </p>
        </div>
        <div className="about-box">
          <h3>Tailored For Every Screen</h3>
          <p>
            Our wallpapers are optimized for all devices, from desktops and
            laptops to smartphones and tablets. Choose from various resolutions
            to get the perfect fit for your screen.
          </p>
        </div>
        <div className="about-box">
          <h3>Constantly Updated</h3>
          <p>
            Stay ahead of the trends with our regularly updated collections.
            We’re always adding fresh, inspiring designs to keep your screens
            looking current and unique.
          </p>
        </div>
        <div className="about-box">
          <h3>User-Friendly Experience</h3>
          <p>
            Finding the perfect wallpaper has never been easier! With an
            intuitive search bar, detailed filters, and categorized galleries,
            you can quickly discover what you’re looking for.
          </p>
        </div>
        <div className="about-box">
        <h3>Easy Search & Navigation</h3>
        <p>
        "Find the perfect wallpaper effortlessly with our user-friendly search tools, 
        intuitive filters, and categorized galleries."
        </p>
       </div>
      </div>
       
      <h3 id="Ah3">Ready to Get Started?</h3>
      <nav>
        <Link to="/popular" onClick={() => handleLink("/popular")}>
          <button className="Popular">Latest Wallpaper</button>
        </Link>
      </nav>
      <p id="update">Last updated:December 27,2024</p>
    </div>
  );
};

export default About;
