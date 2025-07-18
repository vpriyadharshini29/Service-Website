// src/pages/Terms.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './Terms.css'
const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 text-dark mb-2">Terms of Use - ZAHRIX Electromechanical Services</h1>
          <p className="text-muted">Effective Date: 12/07/25</p>
        </div>

        {/* Terms Content */}
        <div className="terms-content bg-white p-4 rounded shadow">
          <p className="text-muted mb-4">
            Welcome to Zahrix Electromechanical Services' website. By accessing or using our website, you agree to be bound by the following Terms of Use. Please read them carefully.
          </p>

          <h2 className="h4 text-custom-blue mt-4 mb-2">Acceptance of Terms of Use</h2>
          <p className="text-dark mb-4">
            By accessing and using the Zahrix Electromechanical Services website, you agree to follow our Terms of Use. Zahrix provides information related to services including CCTV installation, Building Management Systems (BMS), and electrical works. All content on this website—such as service details, logos, and images—is the property of Zahrix and may not be copied or used without permission. Users must not misuse the website by uploading harmful content, attempting unauthorized access, or disrupting website functionality. Zahrix is not responsible for third-party websites linked here. The information provided is for general purposes and may be updated without prior notice. Zahrix is not liable for any direct or indirect losses from using the website. By continuing to use our site, you accept these terms under the governing laws of [Your Country/State]. For questions, please contact Zahrix Electromechanical Services. Zahrix Electromechanical Services does its best to ensure the accuracy and reliability of the information on this website. However, we do not guarantee that all content is always complete, correct, or up to date. Zahrix shall not be held responsible for any direct, indirect, accidental, or consequential damages caused by using or being unable to use this website. This includes any losses related to service details, pricing, or third-party website links included for reference. Visitors use the Zahrix website at their own risk. Zahrix reserves the right to change, update, or remove content without prior notice. By accessing, browsing, or using the Zahrix Electromechanical Services website, you acknowledge that you have read, understood, and agreed to be bound by these Terms of Use. These terms apply to all visitors, users, and others who access the website, whether for information, service inquiries, or any other purpose. If you do not agree with any part of these terms, you must not use this website. Zahrix reserves the right to update or change these terms at any time, and it is the user’s responsibility to review them periodically. Continued use of the website after changes are posted will mean that you accept and agree to the changes.
          </p>

          {/* Buttons */}
          <div className="text-center mt-5">
            <button type="button" className="btn btn-custom-blue me-3">Accept</button>
            <button type="button" className="btn btn-outline-secondary">Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;