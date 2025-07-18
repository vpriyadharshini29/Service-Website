import React from "react";
import './About.css' // Optional: move styles to this file if needed


const About = () => {
  return (
    <div className="about-page text-gray-800">
      
      {/* Hero Section */}
       <div className="services-hero d-flex align-items-center"style={{
    backgroundImage: 'url("./Images/about.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',
  }}>
      <div className="container text-white">
        <h5 className="breadcrumb-text mb-2">
          <strong>Home</strong> <span className="mx-2">&gt;</span> <strong>About</strong>
        </h5>
        <h1 className="tagline">Sparking Innovation, Illuminating Lives</h1>
      </div>
    </div>

      {/* Main About Section */}
      <div className="container py-5">
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
        {/* Who We Are Section */}
       <section className="about-section container py-5">
      <div className="row align-items-center">

        {/* Left Side: Text Content */}
        <div className="col-md-6 mb-4 mb-md-0">
          <h6 className="section-subtitle">
            <i className="bi bi-lightning-fill me-2"></i>WHO WE ARE
          </h6>
          <h2 className="section-title mb-4">Trusted experts in electrical Services</h2>
          <p>
            At ZAHRIX, we're the trusted experts in electrical services. With years of experience
            and a team of skilled professionals, we deliver top-notch electrical solutions for
            homes and businesses. Our expertise spans electrical installations, repairs, and
            maintenance, ensuring your safety and satisfaction.
          </p>
          <p>
            We're committed to providing exceptional service, transparency, and reliability.
            Our goal is to build long-term relationships with our clients, providing them with
            peace of mind and efficient electrical systems. With ZAHRIX, you can trust that your
            electrical needs are in good hands.
          </p>
        </div>

        {/* Right Side: Image Stack */}
        <div className="col-md-6 image-stack">
          <img
            src="./Images/a1.png"
            alt="Technician working"
            className="img-fluid rounded main-image"
          />
          <img
            src="./Images/a2.png"
            alt="Tool belt"
            className="img-fluid rounded overlay-image"
          />
        </div>

      </div>
    </section>
    <section class="approach-section container py-5">
  <div class="row align-items-center">
    
    {/* <!-- Left Image Column --> */}
    <div class="col-md-6 mb-4 mb-md-0">
      <div class="approach-image-wrapper">
        <img src="./Images/Home-3.png" alt="Worker" class="img-fluid rounded"></img>
      </div>
    </div>

    {/* <!-- Right Content Column --> */}
    <div class="col-md-6">
      <h6 class="approach-subtitle"><i class="bi bi-lightning-fill"></i> OUR APPROACH</h6>
      <h2 class="approach-title">Powering Communities With Safe & Reliable Solutions</h2>

      {/* <!-- Mission Card --> */}
      <div class="approach-card">
        <div class="icon-circle">
            <img
      src="./Images/Group 537.png"
      alt="Technician"
    />
        </div>
        <h5 class="fw-bold mb-1">Our Mission</h5>
        <p>
          "To deliver high-quality electrical services that ensure safety, efficiency, and customer satisfaction, while building long-term relationships and contributing to the well-being of our community."
        </p>
      </div>

      {/* <!-- Vision Card --> */}
      <div class="approach-card">
        <div class="icon-circle">
            <img
      src="./Images/Group 537.png"
      alt="Technician"
    />
        </div>
        <h5 class="fw-bold mb-1">Our Vision</h5>
        <p>
          "To be the leading provider of innovative electrical solutions, exceeding customer expectations and setting new standards for excellence in the industry."
        </p>
      </div>
    </div>
  </div>
</section>

        {/* Stats Section */}
        <div className="row text-center bg-light py-4 rounded">
          <div className="col-3">
            <h3 className="text-primary fw-bold">13+</h3>
            <p className="text-muted">Years Experience</p>
          </div>
          <div className="col-3">
            <h3 className="text-primary fw-bold">100+</h3>
            <p className="text-muted">Emergency Repairs</p>
          </div>
          <div className="col-3">
            <h3 className="text-primary fw-bold">99%</h3>
            <p className="text-muted">Customer Satisfaction</p>
          </div>
          <div className="col-3">
            <h3 className="text-primary fw-bold">500+</h3>
            <p className="text-muted">Skilled Professionals</p>
          </div>
        </div>


        
      </div>


      
    </div>
  );
};

export default About;
