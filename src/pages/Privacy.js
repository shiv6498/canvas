import React from 'react';
import '../App.css'

const Privacy = () => {
  return (
    <div className='privacy-all'>
      <h1 id='Ph'>Privacy Policy</h1>
      < p id='Php'>
      Welcome to Canvas! We value your privacy and are committed 
      to protecting your personal information. This Privacy Policy
       explains how we collect, use, and safeguard your information
        when you use our website and services.
      </p>
      <div className="privacy-contents">
        <div className="privacy-content">
          <h3>Information We Collect</h3>
          <p>
           We may collect the following types of information like
         Personal Information Such as your name, email address,
          or other details you voluntarily provide.
         Usage Data Information about how you interact with our website, 
         including your IP address, browser type, and operating system.
         Cookies: Small files stored on your device to improve your browsing experience.

          </p>
        </div>
        <div className="privacy-content">
          <h3>How We Use Your Information</h3>
          <p>
          We use your information to
          Provide, maintain, and improve our website and services.
          Respond to your inquiries and provide customer support.
          Send updates, newsletters, or promotional materials (only with your consent).
          Monitor and analyze website usage to enhance functionality.
          </p>
        </div>
        <div className="privacy-content">
          <h3>Sharing Your Information</h3>
          <p>
          We do not sell, trade, or rent your personal information to third parties. 
          However, we may share your information with
          Service providers that help us operate our website.
          Legal authorities, if required by law.

          </p>
        </div>
        <div className="privacy-content">
          <h3>Cookies and Tracking Technologies</h3>
          <p>
          We use cookies to 
          Personalize your experience on our site.
          Analyze site traffic and user behavior.
        You can disable cookies through your browser settings,
         but doing so may affect site functionality.
          </p>
        </div>
        <div className="privacy-content">
          <h3>Data Security</h3>
          <p>
          We implement industry-standard measures to protect 
          your information from unauthorized access, alteration, or disclosure.
           However, no method of transmission over the internet is 100% secure.
        </p>
        </div>
        <div className="privacy-content">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a
                    href={`mailto:gshivshankar356@gmail.com?subject=${encodeURIComponent(
                      "Inquiry from Canvas"
                    )}&body=${encodeURIComponent(
                      "Hi, I have a question about your wallpapers..."
                    )}`}
                    className="email-link"
                  >
                    gshivshankar356@gmail.com
                  </a>
        </p>
       </div>
      </div>
      <p id="update">Last updated:December 27,2024</p>
      </div>
  );
};

export default Privacy;
