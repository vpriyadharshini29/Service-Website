// src/pages/Projects.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './Project.css'

const Projects = () => {
  return (
    <div className="projects-page">  
    {/* Hero Section */}
         <div className="services-hero d-flex align-items-center"style={{
    backgroundImage: 'url("./Images/projecth.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '350px',
  }}>
      <div className="container text-white">
        <h5 className="breadcrumb-text mb-2">
          <strong>Home</strong> <span className="mx-2">&gt;</span> <strong>Projects</strong>
        </h5>
        <h1 className="tagline">Sparking Innovation, Illuminating Lives</h1>
      </div>
    </div>




  <section className="project-showcase py-5 text-center">
      <h2 className="section-number">01</h2>
      <h3 className="section-title mb-5">Electrical Upgrade at ZAHRIX Office Complex</h3>

      <section className="projects py-5">
           <div className="container">
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
    
    </section>



    
  <section className="project-showcase py-5 text-center">
      <h2 className="section-number">02</h2>
      <h3 className="section-title mb-5">CCTV Installation at abc retail shop</h3>

      <section className="projects py-5">
           <div className="container">
               <div className="row g-4 justify-content-center align-items-stretch">
     
               {/* Left Image */}
               <div className="col-md-4">
                 <div className="card project-card h-100">
                   <img src="./Images/project4.png" className="img-fluid rounded" alt="Project 1" />
                 </div>
               </div>
     
               {/* Center Highlighted Card with Overlay */}
               <div className="col-md-4">
                 <div className="card project-card project-featured text-white">
                   <img src="./Images/project5.png" className="img-fluid rounded" alt="LED Lighting Retrofit" />
                 
                 </div>
               </div>
     
               {/* Right Image */}
               <div className="col-md-4">
                 <div className="card project-card h-100">
                   <img src="./Images/project6.png" className="img-fluid rounded" alt="Project 3" />
                 </div>
               </div>
     
             </div>
           </div>
         </section>
    
    </section>


    
  <section className="project-showcase py-5 text-center">
      <h2 className="section-number">03</h2>
      <h3 className="section-title mb-5">BMS Integration at DEF hospital</h3>

      <section className="projects py-5">
           <div className="container">
               <div className="row g-4 justify-content-center align-items-stretch">
     
               {/* Left Image */}
               <div className="col-md-4">
                 <div className="card project-card h-100">
                   <img src="./Images/project7.png" className="img-fluid rounded" alt="Project 1" />
                 </div>
               </div>
     
               {/* Center Highlighted Card with Overlay */}
               <div className="col-md-4">
                 <div className="card project-card project-featured text-white">
                   <img src="./Images/project8.png" className="img-fluid rounded" alt="LED Lighting Retrofit" />
                 
                 </div>
               </div>
     
               {/* Right Image */}
               <div className="col-md-4">
                 <div className="card project-card h-100">
                   <img src="./Images/project9.png" className="img-fluid rounded" alt="Project 3" />
                 </div>
               </div>
     
             </div>
           </div>
         </section>
    
    </section>
<div className="container my-5">
  <div className="row text-center justify-content-center align-items-center">
    <div className="col-3 d-flex flex-column align-items-center">
      <div className="icon-circle mb-2">
        <img
      src="./Images/p1.png"
      alt="Technician"
    />
      </div>
      <strong>Expertise</strong>
    </div>

    <div className="col-1 d-none d-md-block">
      <div className="vr mx-auto" style={{ height: '60px' }}></div>
    </div>

    <div className="col-3 d-flex flex-column align-items-center">
      <div className="icon-circle mb-2">
        <img
      src="./Images/p2.png"
      alt="Technician"
    />
      </div>
      <strong>Electrical Installation</strong>
    </div>

    <div className="col-1 d-none d-md-block">
      <div className="vr mx-auto" style={{ height: '60px' }}></div>
    </div>

    <div className="col-3 d-flex flex-column align-items-center">
      <div className="icon-circle mb-2">
         <img
      src="./Images/p3.png"
      alt="Technician"
    />
      </div>
      <strong>Safety Maintainance</strong>
    </div>
  </div>
</div>

    </div>
  );
};

export default Projects;