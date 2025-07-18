// src/pages/Privacy.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './Privacy.css'

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="container py-5">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 text-dark mb-2">Privacy Policy - ZAHRIX Electromechanical Services</h1>
          <p className="text-muted">Effective Date: 12/07/25</p>
        </div>

        {/* Privacy Content */}
        <div className="privacy-content bg-white p-4 rounded shadow">
          <p className="text-muted mb-4">
            Welcome to Zahrix Electromechanical Services' website. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services. By accessing or using our site, you agree to the practices described in this policy.
          </p>
          <p className="text-dark mb-4">
            We may collect personal information such as your name, email address, phone number, and other details you provide when you use our website, contact us, or request services. We also collect non-personal information, such as browser type or IP address, through cookies and similar technologies to enhance your experience and analyze website usage. Your personal data is used to provide and improve our services, respond to your inquiries, send updates or promotional materials (with your consent), and ensure the security and functionality of our website. We may also use aggregated, anonymized data for analytical purposes. We implement industry-standard security measures, including encryption and access controls, to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no online transmission is fully secure, and we cannot guarantee absolute security. We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your data with service providers or partners to deliver our services, or as required by law, such as in response to a subpoena or court order. We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated version will be posted here with a revised effective date. Continued use of the website after changes constitutes acceptance of the new policy. If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@zahrix.com" className="text-custom-blue">privacy@zahrix.com</a>.
          </p>

          {/* Buttons */}
          <div className="text-center mt-5">
            <button type="button" className="btn btn-custom-blue me-3">Contact us</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;