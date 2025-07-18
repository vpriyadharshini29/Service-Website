// src/pages/Careers.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './Careers.css'
const Careers = () => {
  return (
    <div className="careers-page">
       <div className="services-hero d-flex align-items-center"style={{
    backgroundImage: 'url("./Images/B.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',
  }}>
      <div className="container text-white">
        <h5 className="breadcrumb-text mb-2">
          <strong>Home</strong> <span className="mx-2">&gt;</span> <strong>Carrers</strong>
        </h5>
        <h1 className="tagline">Sparking Innovation, Illuminating Lives</h1>
      </div>
    </div>

<section className="careers-section py-5">
  <div className="container">
    <h1 className="fw-bold">WE ARE HIRING !</h1>
    <p className="lead mb-4">
      We appreciate your interest in joining Zahrix Electromechanical Services.<br />
      Currently, we do not have any open positions.
    </p>

    <h3 className="mb-4">CAREER OPPORTUNITY</h3>

    <form>
      <div className="row">
        {/* Left Form Fields */}
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Full Name<span className="text-danger">*</span></label>
            <input type="text" className="form-control form-control-lg" placeholder="Entre Name" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address<span className="text-danger">*</span></label>
            <input type="email" className="form-control form-control-lg" placeholder="Entre Email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number<span className="text-danger">*</span></label>
            <input type="tel" className="form-control form-control-lg" placeholder="Entre Phone No" required />
          </div>

          <p className="text-primary mt-3 fw-semibold">
            Thank You For Considering Zahrix As Your Future Workplace!
          </p>
        </div>

        {/* Right Form Fields */}
        <div className="col-lg-6">
          {/* Resume Upload */}
          <div className="mb-3">
            <label className="form-label">Resume<span className="text-danger">*</span></label>
            <div className="resume-upload-box border rounded p-4 text-center">
              <img src="./Images/pdf.png" alt="PDF Icon" width="40" className="mb-2" />
              <p className="mb-2 text-muted small">Attach your resume in PDF format to ensure Compatibility</p>
              <button type="button" className="btn btn-primary">Upload Resume</button>
              <div className="small text-muted mt-2">Maximum Size : 10 MB</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mb-3">
            <label className="form-label">Additional Information</label>
            <input type="text" className="form-control form-control-lg" placeholder="Entre Address Line 1" />
          </div>

          {/* Share Job */}
          <div className="mb-4">
            <label className="form-label">Share Job:</label>
            <div className="d-flex gap-3 fs-4">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
           <button
  type="button"
  className="btn btn-primary px-4"
  data-bs-toggle="modal"
  data-bs-target="#applicationModal"
>
  Submit Application
</button>

            <button type="button" className="btn btn-secondary px-4">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
{/* Application Submitted Modal */}
<div className="modal fade" id="applicationModal" tabIndex="-1" aria-labelledby="applicationModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content text-center p-4">
      <div className="modal-body">
        {/* <img src="/tick.png" alt="Success Tick" style={{ width: '80px' }} className="mb-3" /> */}
        <h4 className="fw-bold text-success">Application Submitted!</h4>
        <p className="text-muted">We’ll get back to you soon.</p>
        <button type="button" className="btn btn-primary mt-3 px-4" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Careers;