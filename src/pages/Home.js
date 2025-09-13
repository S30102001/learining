import React from "react";
import "./Home.css";


export default function Home() {
  return (
    <div className="home">
     

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h3>ONE OF YOUR RIGHTS IS TO LEARN RIGHT</h3>
          <h1>
            A HIGHEST SCORE WITH <br />
            <span>Zeinab Abdel-Rehim</span>
          </h1>
          <div className="hero-buttons">
            <button className="btn btn-primary">IGCSE</button>
            <button className="btn btn-outline-light">TRAINING</button>
          </div>
        </div>
        <div className="floating-icon">
          <i className="fas fa-laptop-code"></i>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-img">
          <img src="/z.jpg" alt="Zeinab" />
        </div>
        <div className="about-text">
          <h2>
            MEET <span>Zeinab</span>
          </h2>
          <p>
            Zeinab is an Accomplished Educator and Trainer with 15 years of
            experience teaching IGCSE Accounting and ICT, specializing in
            pedagogy and professional development...
          </p>
          <button className="btns">Know More About Zeinab</button>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients">
        <h2 className="section-title">MEET ZEINAB STUDENTS AND TRAINEES</h2>
        <p>
          Whether it’s a startup business that wants to go to market, or an
          up-and-running business that struggled for getting to the next level...
        </p>
        <div className="clients-logos">
          <img src="/k.jpg" alt="client" />
          <img src="/k.jpg" alt="client" />
          <img src="/k.jpg" alt="client" />
          <img src="/k.jpg" alt="client" />
        </div>
      </section>

      {/* Courses Section */}
      <section className="course">
        <div className="course-text">
          <h2>HOW TO GET STAR?</h2>
          <p>
            This is a golden question every student wants to answer. LEARN WITH
            MS. ZEINAB IS YOUR STARTING POINT...
          </p>
          <button className="btns">Register Now</button>
        </div>
        <div className="course-img">
          <img src="/k.jpg" alt="Course" />
            <img src="/k.jpg" alt="Course" />
        </div>
      </section>

      {/* Business Consultation */}
      <section className="consultation">
        <div className="consultation-img">
          <img src="/k.jpg" alt="Consultation" />
        </div>
        <div className="consultation-text">
          <h2>BUSINESS CONSULTATION</h2>
          <p>
            With +12 years of experience in business development, Zeinab helps
            startups and professionals grow and achieve their goals.
          </p>
          <button className="btns">Book Your Consultation</button>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="journey">
        <h2 className="section-title">PROFESSIONAL JOURNEY</h2>
        <div className="journey-grid">
          {[
            { img: "/1.jpg", title: "British Council" },
            { img: "/5.jpg", title: "Pharos University" },
            { img: "/51.jpg", title: "Alexandria University" },
            { img: "/525.jpg", title: "CSI" },
            { img: "/525.jpg", title: "New Horizon" },
            { img: "/525.jpg", title: "Leadership Center" },
          ].map((item, index) => (
            <div className="journey-card" key={index}>
              <img style={{width:"100%" ,height:"30%"}} src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <button className="course-btn">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe">
        <h2>STAY UP-TO-DATE</h2>
        <p>Get the latest updates, free resources, and learning materials.</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button className="btn btn-warning">Subscribe</button>
        </div>
      </section>
    </div>
  );
}
