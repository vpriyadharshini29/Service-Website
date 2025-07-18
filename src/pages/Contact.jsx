import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    terms: false,
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(true); // Show modal instead of alert
  };

  const handleReturnHome = () => {
    setShowModal(false);
    navigate("/"); // Redirect to home
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* Header Section */}
        <div className="services-hero d-flex align-items-center"
          style={{
            backgroundImage: 'url("./Images/c.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '350px',
          }}>
          <div className="container text-white">
            <h5 className="breadcrumb-text mb-2">
              <strong>Home</strong> <span className="mx-2">&gt;</span> <strong>Contact</strong>
            </h5>
            <h1 className="tagline">Sparking Innovation, Illuminating Lives</h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="text-center mb-5">
          <h2 className="h3 text-dark mb-2">Get In Touch With Us</h2>
          <h3 className="h4 text-custom-blue mb-4">For More Information About Our Services</h3>
        </div>

        <div className="contact-form bg-white p-4 rounded shadow">
          <h4 className="h4 text-dark mb-3">Booking Your Service Today! <span className="text-warning">⚡</span></h4>
          <p className="text-muted mb-4">
            Whether you're planning a new project or need emergency support, we're available to provide fast and reliable assistance.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="date" className="form-label">Pick the date</label>
                <input type="date" className="form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="time" className="form-label">Choose Your Time</label>
                <input type="time" className="form-control" id="time" name="time" value={formData.time} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="terms" name="terms" checked={formData.terms} onChange={handleChange} />
              <label className="form-check-label text-custom-blue" htmlFor="terms">I have read and accepted terms and Privacy</label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-custom-blue px-4 py-2">
                <i className="bi bi-check-circle"></i> Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box text-center p-4">
            <h4 className="mb-3 text-success"><i className="bi bi-check-circle-fill me-2"></i>Submitted Successfully!</h4>
            <p>We have received your service request.</p>
            <button onClick={handleReturnHome} className="btn btn-primary mt-3">
              Return to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
