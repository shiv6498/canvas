import React from "react";
import { Link } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Bottom = ({ handleLink, activeLink }) => {
  const red = "red";

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="bottom-footer">
      <div className="bottom-contents">
        <div className="bottom-item">
          <h3 id="Bh">About</h3>
          <p id="Bhp">
            Canvas is a creative wallpaper website
            <br />
            designed to provide users with stunning
            <br />
             visuals for personal use. Explore, 
            <br />
             download, and personalize your digital 
            <br />
            spaces with high-quality wallpapers crafted to inspire.
            <br />
          </p>
        </div>

        <div className="bottom-item">
          <h3 id="Bh">Quick Links</h3>
          <nav>
            <Link
              to="/About"
              onClick={() => {
                handleLink("/About");
                scrollToTop();
              }}
            >
              <button
                className="Bottom-btn-link"
                style={{ color: activeLink === "/About" ? red : "" }}
              >
                About
              </button>
            </Link>
          </nav>
          <nav>
            <Link
              to="/Contact"
              onClick={() => {
                handleLink("/Contact");
                scrollToTop();
              }}
            >
              <button
                className="Bottom-btn-link1"
                style={{ color: activeLink === "/Contact" ? red : "" }}
              >
                Contact
              </button>
            </Link>
          </nav>
        </div>

        <div className="bottom-item">
          <h3 id="Bh">Contact</h3>

          <div className="contact-row">
            <button className="Bottom-btn-e">
              <a
                href={`mailto:gshivshankar356@gmail.com?subject=${encodeURIComponent(
                  "Inquiry from Canvas"
                )}&body=${encodeURIComponent(
                  "Hi, I have a question about your wallpapers..."
                )}`}
                className="email-link"
              >
                <MailOutlined />
              </a>
            </button>
            <a
              href={`mailto:gshivshankar356@gmail.com?subject=${encodeURIComponent(
                "Inquiry from Canvas"
              )}&body=${encodeURIComponent(
                "Hi, I have a question about your wallpapers..."
              )}`}
              className="e-link"
            >
              Email Me
            </a>
          </div>

          <div className="contact-row">
            <button className="Bottom-btn-insta">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
              >
                <FaInstagram />
              </a>
            </button>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-link"
            >
              Instagram
            </a>
          </div>

          <div className="contact-row">
            <button className="Bottom-btn-fb">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-link"
              >
                <FaFacebookSquare />
              </a>
            </button>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fb-link"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="bottom-item">
          <h3 id="Bh">Legal</h3>
          <nav>
            <Link
              to="/Privacy"
              onClick={() => {
                handleLink("/Privacy");
                scrollToTop();
              }}
            >
              <button
                className="bottom-btn-privacy"
                style={{ color: activeLink === "/Privacy" ? red : "" }}
              >
                Privacy Policy
              </button>
            </Link>
          </nav>
          <nav>
            <Link
              to="/Terms"
              onClick={() => {
                handleLink("/Terms");
                scrollToTop();
              }}
            >
              <button
                className="bottom-btn-terms"
                style={{ color: activeLink === "/Terms" ? red : "" }}
              >
                Terms of Services
              </button>
            </Link>
          </nav>
        </div>
      </div>
      <br />
      <p id="foot">© 2024 Canvas. All rights reserved.</p>
    </div>
  );
};

export default Bottom;
