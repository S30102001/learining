import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [meetZeinabOpen, setMeetZeinabOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCourses = (e) => {
    e.stopPropagation();
    setCoursesOpen(!coursesOpen);
    setMeetZeinabOpen(false);
  };
  const toggleMeetZeinab = (e) => {
    e.stopPropagation();
    setMeetZeinabOpen(!meetZeinabOpen);
    setCoursesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setCoursesOpen(false);
        setMeetZeinabOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className="navbar-logo" >
          <h1 className="brand-name">Zeinab_Ahmead  </h1>
        </a>

        {/* Menu Links */}
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">
              <i className="fas fa-home"></i>
              <span className="link-text">Home</span>
            </a>
          </li>

          {/* Meet Zeinab Dropdown */}
          <li className="navbar-item dropdown">
            <div className="navbar-link dropdown-toggle" onClick={toggleMeetZeinab}>
              <i className="fas fa-user"></i>
              <span className="link-text">Meet Zeinab</span>
              <i className={`fas fa-chevron-${meetZeinabOpen ? 'up' : 'down'} dropdown-arrow`}></i>
            </div>
            <ul className={`dropdown-menu ${meetZeinabOpen ? 'active' : ''}`}>
              <li><a href="/MeetNadeem">About Zeinab</a></li>
              <li><a href="/Testimonials">Testimonials</a></li>
              <li><a href="/Conect">Contact</a></li>
            </ul>
          </li>

          {/* Training Courses Dropdown */}
          <li className="navbar-item dropdown">
            <div className="navbar-link dropdown-toggle" onClick={toggleCourses}>
              <i className="fas fa-chalkboard-teacher"></i>
              <span className="link-text">Training Courses</span>
              <i className={`fas fa-chevron-${coursesOpen ? 'up' : 'down'} dropdown-arrow`}></i>
            </div>
            <ul className={`dropdown-menu ${coursesOpen ? 'active' : ''}`}>
              <li><a href="/Life-Courses">LIFE Courses</a></li>
              <li><a href="/CoursesSectionv">Online Courses</a></li>
            </ul>
          </li>

          <li className="navbar-item">
            <a href="/igcse" className="navbar-link">
              <i className="fas fa-book"></i>
              <span className="link-text">IGCSE</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="/CoursesSectionv" className="navbar-link">
              <i className="fas fa-calendar-alt"></i>
              <span className="link-text">Upcoming Events</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="/Media" className="navbar-link">
              <i className="fas fa-photo-video"></i>
              <span className="link-text">Media</span>
            </a>
          </li>

          {/* Register & Login Buttons */}
          <li className="navbar-item">
            <a href="/register" className="navbar-link nav-btn">
              <i className="fas fa-user-plus"></i>
              <span className="link-text">Register</span>
            </a>
          </li>
           
        </ul>

        {/* Hamburger Icon */}
        <div className="navbar-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}