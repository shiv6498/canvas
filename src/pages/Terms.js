import React from "react";
import "../App.css";

const Terms = ({ handleLink }) => {
  return (
    <div className='All-Terms'>
      <h1 id="Th">
        Terms of Services
      </h1>
      <p id="Thp">
      Welcome to Canvas! These Terms of Service ("Terms")
       govern your access to and use of our website, services, 
       and features (collectively, the "Services").
        By accessing or using Canvas, you agree to be bound by these Terms.
         If you do not agree, do not use our Services.
      </p>
      <div className="Terms-boxes">
        <div className="Terms-box">
          <h3>Acceptance of Terms</h3>
          <p>
          By accessing and using Canvas,
           you accept and agree to be bound by the terms and provisions of this agreement.
            If you do not agree to these terms, please do not use our service.
          </p>
        </div>
        <div className="Terms-box">
          <h3> License to Use Services</h3>
          <p>
          Canvas grants you a limited, non-exclusive, 
          non-transferable, and revocable license to access 
          and use the Services for personal, non-commercial purposes,
           subject to these Terms.You may not use the Services
            to resell, redistribute, or exploit content for commercial gain 
            without prior written permission.
          </p>
        </div>
        <div className="Terms-box">
          <h3>Feedback and Suggestions</h3>
          <p>
          By submitting feedback or suggestions,
           you grant Canvas the right to use them
            for improvements or developments without compensation.
          </p>
        </div>
        <div className="Terms-box">
          <h3> Termination</h3>
          <p>
          We reserve the right to suspend or terminate
           your access to the Services at our discretion 
           for violations of these Terms or other policies.
          </p>
        </div>
        <div className="Terms-box">
          <h3>Limitation of Liability</h3>
          <p>
          Canvas is not liable for
          Any direct, indirect, incidental,
           or consequential damages arising from your use of the Services.
          </p>
        </div>
        <div className="Terms-box">
        <h3>Changes to Terms</h3>
        <p>
        We may update these Terms from time to time. 
        Continued use of the Services after changes constitutes acceptance of the new Terms.
        </p>
       </div>
      </div>
       
      <p id="update">Last updated:December 27,2024</p>
    </div>
  );
};

export default Terms;
