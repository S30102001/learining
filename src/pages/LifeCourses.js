import React from 'react';
import './LifeCourses.css';
import { FaWordpress, FaFileExcel, FaFilePowerpoint, FaEnvelopeOpenText, FaChartPie, FaCalculator, FaMedal, FaChalkboardTeacher } from "react-icons/fa";

const LifeCourses = () => {
  const freeCourses = [
    { name: "Word", icon: <FaWordpress color="#2b579a" /> },
    { name: "Excel", icon: <FaFileExcel color="#217346" /> },
    { name: "PowerPoint", icon: <FaFilePowerpoint color="#d24726" /> },
    { name: "Outlook", icon: <FaEnvelopeOpenText color="#0072c6" /> },
  ];

  const liveCourses = [
    { name: "Power BI", icon: <FaChartPie color="#f2c811" /> },
    { name: "Financial Excel", icon: <FaCalculator color="#217346" /> },
    { name: "MOS", icon: <FaMedal color="#ff9800" /> },
    { name: "FDTC", icon: <FaChalkboardTeacher color="#6c63ff" /> },
  ];

  return (
    <section className="life-courses-section">
      <div className="life-courses-header">
        <h1 className="section-title">Looking to boost your skills and career?</h1>
        <p className="section-subtitle">
          Zeinab Abdel-Rehim, with 16+ years of teaching and training experience, 
          provides <b>Free Recorded</b> and <b>Live Training</b> programs to fit your learning style and career goals.
        </p>
      </div>

      <div className="courses-container">
        {/* Free Recorded */}
        <div className="course-category">
          <h2 className="category-title">Free Recorded</h2>
          <div className="course-grid">
            {freeCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="icon">{course.icon}</div>
                <p>{course.name}</p>
              </div>
            ))}
          </div>
          <button className="category-btn"><a href="/CoursesSection">  Start Free </a></button>
        </div>

        {/* Live */}
        <div className="course-category">
          <h2 className="category-title live">Live</h2>
          <div className="course-grid">
            {liveCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="icon">{course.icon}</div>
                <p>{course.name}</p>
              </div>
            ))}
          </div>
          <button className="category-btn" ><a href="/CoursesSection"> Join Live </a></button>
        </div>
      </div>
    </section>
  );
};

export default LifeCourses;
