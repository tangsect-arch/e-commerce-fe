import React from "react";

export const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get Exclusive Offers In Your Email</h2>
      </div>
      <div className="sub-heading">
        <p>Subscribe to our newsletter and stay updated.</p>
      </div>
      <div className="input-section">
        <input className="input" type="email" placeholder="Your email ID" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};
