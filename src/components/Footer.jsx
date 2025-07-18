import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container py-5">
        <div className="row">
          {/* Left: Logo + Contact Info */}
          <div className="col-md-6 mb-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="./Images/logo.png"
                alt="Zahrix Logo"
                className="me-3"
              />
              <h5 className="fw-bold mb-0">ZAHRIX</h5>
            </div>
            <p>“At ZAHRIX Delivering Electrical Solutions With Precision and Care”</p>
            <div className="contact-info mt-4">
              <p><i className="bi bi-envelope-fill me-2"></i>Zahrix@gmail.com</p>
              <p><i className="bi bi-geo-alt-fill me-2"></i>23/9, Main Road Chennai.</p>
              <p><i className="bi bi-telephone-fill me-2"></i>+91 86456780987</p>
            </div>
          </div>

          {/* Center: Subscribe Section */}
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Subscribe</h5>
            <div className="d-flex mt-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control me-2"
              />
              <button className="btn btn-dark">SIGN UP</button>
            </div>

            <div className="row">
              {/* Quick Links */}
              <div className="col-md-4 col-12 mb-3">
                <h6 className="fw-bold">Quick Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Our Services</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="col-md-4 col-12 mb-3">
                <h6 className="fw-bold">Useful Links</h6>
                <ul className="list-unstyled">
                  <li><a href="/terms">Team of use</a></li>
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/careers">Careers</a></li>
                </ul>
              </div>

              {/* Social Media Icons */}
              <div className="col-md-4 col-12 mb-3 d-flex flex-column align-items-start">
                <h6 className="fw-bold">Follow Us</h6>
                <div className="social-icons-vertical">
                  <a href="#"><img src="./Images/linked.png" alt="LinkedIn" /></a>
                  <a href="#"><img src="./Images/insta.png" alt="Instagram" /></a>
                  <a href="#"><img src="./Images/fb.png" alt="Facebook" /></a>
                  <a href="#"><img src="./Images/twitter.png" alt="Twitter" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-light mt-4" />
        <p className="text-center small mb-0">
          © 2025 Developed & Maintained by ZAHRIX – All rights reserved.
        </p>
      </div>
    </footer>
  );
}
