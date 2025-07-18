// src/pages/BMS.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './BMS.css'
import { Link } from "react-router-dom";

const BMS = () => {
  return (
    <div className="electrical-page bg-light text-dark ">

       <div className="services-hero d-flex align-items-center"style={{
    backgroundImage: 'url("./Images/B.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',
  }}>
      <div className="container text-white">
        <h5 className="breadcrumb-text mb-2">
          <strong>Home</strong> <span className="mx-2">&gt;</span> <strong>Services</strong>
        </h5>
        <h1 className="tagline">Sparking Innovation, Illuminating Lives</h1>
      </div>
    </div>

     <section className="our-services-section py-5">
      <div className="container text-center">
        <h5 className="fw-bold text-uppercase text-dark mb-2">
          OUR SERVICES <span className="text-primary">⚡</span>
        </h5>
        <h2 className="fw-bold text-primary mb-4">
          Expert Services for a Safer, Smarter World
        </h2>
        <p className="text-muted mx-auto w-75 mb-5">
          At ZAHRIX, we offer a comprehensive range of electrical services designed to meet the needs of homes and businesses. Our team of experts is dedicated to providing safe, efficient, and reliable electrical solutions.
        </p>

        <div className="service-box mx-auto shadow rounded overflow-hidden">
          <img src="./Images/BMS1.png" alt="Electrical Service" className="w-100 service-img" />
          
        </div>
      </div>
    </section>

     <section className="services-offer-section py-5">
      <div className="container">
        <h3 className="text-center fw-bold mb-4">
          Services We Offer <span className="text-primary">⚡</span>
        </h3>

        <div className="row g-4">
          {/* Left Image Card */}
          <div className="col-md-6 w-25">
            <div className="image-box position-relative rounded overflow-hidden shadow-sm">
              <img
                src="./Images/Service.png"
                className="img-fluid w-100"
                alt="Technician"
              />
             
            </div>
          </div>

          {/* Electrical Installation */}
          <div className="col-md-6">
            <div className="card h-100 bg-light border-0 shadow-sm rounded">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">
                     <img
      src="./Images/BMS.png"
      alt="Technician"
    />
                  </div>
                  <h5 className="card-title fw-bold text-primary mb-0">
                    BMS Installation
                  </h5>
                </div>
                <p className="card-text text-muted">
                  Expert BMS installation services for new builds,
                  renovations, and upgrades. Our licensed professionals ensure
                  safe, efficient, and reliable electrical systems. From
                  lighting to power distribution, we handle it all. Trust us to
                  get the job done right.
                </p>
              </div>
            </div>
          </div>

          {/* Energy Efficiency Solutions */}
          <div className="col-md-6">
            <div className="card h-100 bg-light border-0 shadow-sm rounded">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">
                    <img
      src="./Images/b1.png"
      alt="Technician"
    />
                  </div>
                  <h5 className="card-title fw-bold text-primary mb-0">
                    BMS Upgrades
                  </h5>
                </div>
                <p className="card-text text-muted">
                 BMS upgrades efficiency solutions to reduce energy
                  consumption and lower costs. Our team implements
                  energy-saving technologies like LED lighting and solar panels.
                  Go green and save money with our sustainable solutions."
                </p>
              </div>
            </div>
          </div>

          {/* Electrical Repairs */}
          <div className="col-md-6">
            <div className="card h-100 bg-light border-0 shadow-sm rounded">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">
                     <img
      src="./Images/e3.png"
      alt="Technician"
    />
                  </div>
                  <h5 className="card-title fw-bold text-primary mb-0">
                   BMS maintenance
                  </h5>
                </div>
                <p className="card-text text-muted">
                 BMS maintenance services to fix faults, prevent
                  downtime, and ensure safety. Our licensed electricians
                  diagnose and rectify issues quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="connect-section">
      {/* Book Now button */}
      <div className="text-center my-4">
        <button className="btn btn-primary px-4 py-2">
          <i className="bi bi-box-arrow-up-right me-2"></i>
          Book Now
        </button>
      </div>

      {/* Connect Section */}
      <div className="bg-light-subtle py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Column */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold text-primary">Let’s Connect</h2>
              <h3 className="fw-semibold text-dark mb-4">
                We’re here to answer your <br /> questions and help
              </h3>
              <Link to="/contact">
  <button className="btn btn-primary px-4 py-2">
    <i className="bi bi-box-arrow-up-right me-2"></i>
    Contact Us
  </button>
</Link>
            </div>

            {/* Image Column */}
            <div className="col-md-6 text-center">
              <img
                src="./Images/connect2.png"
                alt="Technician"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default BMS;