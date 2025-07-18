import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Priya Patel',
    role: 'Homeowner',
    image: './Images/priya.png',
    rating: 5,
    text: "The electrical panel upgrade done by ZAHRIX was seamless. Their electricians were courteous, knowledgeable, and provided excellent customer service. I'm thrilled with the results!"
  },
  {
    name: 'Rahul Sharma',
    role: 'Facility Manager',
    image: './Images/ragul.png',
    rating: 5,
    text: "ZAHRIX Electrical Services delivered exceptional work on our office electrical upgrade. Their team was professional, efficient, and completed the project on time. Highly recommended!"
  }
];


const Home = () => {
  return (
    <div className="homepage">
      {/* Hero section */}
   
    <section className="hero-section">
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 hero-text">
            <h1>Transforming Safety and Security With <br /> Cutting-Edge Technology</h1>
            <h4 className="text-primary-custom mt-3">Empowering Your Space with Innovative Solutions</h4>
            <p className="mt-3 text-muted">
              <strong>Zahrix</strong> provides cutting-edge electrical, CCTV, and BMS services to enhance your building's efficiency, safety, and security.
              Trust us to illuminate your world. Our expertise ensures a safer, more secure, and efficient environment. We design, install,
              and maintain systems that protect people, property, and assets.
            </p>
           <Link to="/electrical">
  <button className="btn btn-primary-custom mt-4">Discover Our Services</button>
</Link>
            <div className="row stats mt-5">
              <div className="col-sm-4 stat-box text-center">
                <h3>500+</h3>
                <p>Locations In the Country</p>
              </div>
              <div className="col-sm-4 stat-box text-center">
                <h3>25+</h3>
                <p>Years Of Experience</p>
              </div>
              <div className="col-sm-4 stat-box text-center">
                <h3>200+</h3>
                <p>Specialized Workers</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center position-relative">
            <img
              src="./Images/Home-man.png"
              alt="Hero Placeholder"
              className="img-fluid hero-img"
            />

          
          </div>
        </div>
      </div>
    </section>

      {/* About Us */}
        <section className="about-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side (Images + Years of Experience) */}
          <div className="col-lg-6 position-relative about-image-col">
            <div className="experience-badge">
              <h2>25</h2>
              <p>Years Experience<br />Electro Mechanical</p>
            </div>
            <div className="main-image">
              <img src="/Images/Home-1.png" alt="Worker"className="img-fluid rounded" />
            </div>
            <div className="bottom-image">
              <img src="/Images/Home-2.png" alt="Rooftop Worker"className="img-fluid rounded" />
            </div>
          </div>

          {/* Right Side (Text Content) */}
          <div className="col-lg-6">
            <div className="about-content">
              <h5 className="section-title">ABOUT US <span>⚡</span></h5>
              <h6>Welcome To ZAHRIX !</h6>
              <h2 className="headline">
                Empowering Your Space, <br /> Enhancing Your Life
              </h2>
              <p>
                At AH RIX, we're dedicated to delivering innovative electrical, CCTV, and Building Management System (BMS) solutions.
                Our expertise ensures a safer, more secure, and efficient environment for homes, businesses, and communities.
              </p>
              <p>
                With cutting-edge technology and exceptional service, we empower your space to reach its full potential. Our team of
                experts is committed to providing tailored solutions that meet your unique needs. Trust us to illuminate your world
                with innovative solutions.
              </p>

              <div className="d-flex align-items-center gap-4 mt-4">
                <a href="/about" className="btn btn-learn">
                  <i className="fas fa-arrow-right"></i> Learn More
                </a>

                {/* Team members preview */}
                <div className="text-center">
                  <p className="mb-1 fw-bold">Meet Our Expert Team !</p>
                  <div className="team-avatars d-flex">
                    <img src="/Images/expert-1.png" alt="Team 1" />
                    <img src="/Images/expert-2.png" alt="Team 2" />
                    <img src="/Images/expert-3.png" alt="Team 3" />
                    <img src="/Images/expert-4.png" alt="Team 4" />
                    <img src="/Images/expert-5.png" alt="Team 5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/*Our Services section*/}
    
     <section className="services-offer-section py-5">
      <div className="container">
        <h3 className="text-center fw-bold mb-4">
          Services We Offer <span className="text-primary">⚡</span>
        </h3>

        <div className="row g-4">
          {/* Left Image Card */}
          <div className="col-md-6 w-25">
  <div className="services-image-box">
    <img
      src="./Images/Service.png"
      alt="Technician"
    />
    {/* <div className="overlay-text">
      “Experience the best in electrical, CCTV, BMS Solutions“
    </div> */}
  </div>
</div>

          {/* Electrical Installation */}
          <div className="col-md-6">
            <div className="card h-100 bg-light border-0 shadow-sm rounded">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-circle me-3">
                   <img
      src="./Images/Group 537.png"
      alt="Technician"
    />
                  </div>
                  <h5 className="card-title fw-bold text-primary mb-0">
                  CCTV
                  </h5>
                </div>
                <p className="card-text text-muted">
                Advanved CCTV for enhanced security and survellaince,providing peace of mind and protection
                </p>
              </div>
            </div>
          </div>

          {/* Energy Efficiency Solutions */}
          <div className="col-md-6 ">
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
                  BMS
                  </h5>
                </div>
                <p className="card-text text-muted">
                 Intelligent building systems for optimized energy sufficeny and security
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
      src="./Images/elect.png"
      alt="Technician"
    />
                  </div>
                  <h5 className="card-title fw-bold text-primary mb-0">
                    Electrical 
                  </h5>
                </div>
                <p className="card-text text-muted">
                  Expert electrical repair services to fix faults, prevent
                  downtime, and ensure safety. Our licensed electricians
                  diagnose and rectify issues quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



      {/* Projects */}
      
    <section className="projects py-5">
      <div className="container">
        <h2 className="text-center mb-5">Electric Solutions for a Brighter Tomorrow</h2>
        <div className="row g-4 justify-content-center align-items-stretch">

          {/* Left Image */}
          <div className="col-md-4">
            <div className="card project-card h-100">
              <img src="./Images/project1.png" className="img-fluid rounded" alt="Project 1" />
            </div>
          </div>

          {/* Center Highlighted Card with Overlay */}
          <div className="col-md-4">
            <div className="card project-card project-featured text-white">
              <img src="./Images/project2.png" className="img-fluid rounded" alt="LED Lighting Retrofit" />
              {/* <div className="overlay-content">
                <h5>LED Lighting Retrofit</h5>
                <p>Illuminating spaces with energy-efficient LED lighting solutions, reducing energy consumption and maintenance costs.</p>
                <a href="#" className="arrow-btn">
                  <i className="fas fa-arrow-up-right"></i>
                </a> 
              </div>*/}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-md-4">
            <div className="card project-card h-100">
              <img src="./Images/project3.png" className="img-fluid rounded" alt="Project 3" />
            </div>
          </div>

        </div>
      </div>
    </section>
 
<section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center heading">OUR TESTIMONIALS ⚡</h2>
        <p className="text-center subheading">Real People, Real Results</p>

        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <div className="name-role-pill">
                    <strong>{testimonial.name}</strong><br />
                    <span>{testimonial.role}</span>
                  </div>
                </div>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
              </div>

              <p className="testimonial-text">“{testimonial.text}”</p>
              <div className="quote-icon"><FaQuoteRight /></div>
            </div>
          ))}
        </div>

        <div className="testimonial-nav">
          <button><FaChevronLeft /></button>
          <button><FaChevronRight /></button>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section className="contact-section">
      <div className="contact-content">
        <div className="contact-left">
          <h2>Let’s Connect ⚡</h2>
          <h3>
            We’re here to answer your <br />
            <span className="highlight">questions and help</span>
          </h3>
          <p>
            Whether you’re planning a new project or need emergency support, we’re
            available to provide fast and reliable assistance.
          </p>
          <a href="/contact" className="contact-btn">📞 Contact Us</a>
        </div>
        <div className="contact-right">
          <img src="./Images/contact.png" alt="Electrician" />
        </div>
      </div>
    </section>

    </div>
  );
};

export default Home;
