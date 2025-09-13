import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./StudentBooking.css";

const StudentBooking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    course: "",
    level: "",
    notes: "",
  });

  const courses = ["Power BI", "Financial Excel", "MOS", "FDTC"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // نسخة للطالب
    emailjs
      .send(
        "service_aaksi0q", // Service ID
        "template_student", // Template ID خاص بالطالب
        formData,
        "oXktLgMt6q10i2Ur-" // Public Key
      )
      .then(
        () => console.log("✅ Email sent to student"),
        (err) => console.error("❌ Error student email:", err)
      );

    // نسخة للأدمن
    const adminData = {
      ...formData,
      admin_email: "sabryntallh@gmail.com", // هنا إيميل الأدمن
    };

    emailjs
      .send(
        "service_aaksi0q",
        "template_btn9nl", // Template ID خاص بالأدمن
        adminData,
        "oXktLgMt6q10i2Ur-"
      )
      .then(
        () => {
          alert("✅ Booking submitted & emails sent successfully!");
        },
        (error) => {
          alert("❌ Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="booking-container">
      <h1 className="form-title">Student Course Booking</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="Male">Male ♂️</option>
              <option value="Female">Female ♀️</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Choose Course</label>
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">-- Select Course --</option>
            {courses.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Course Level</label>
          <select name="level" value={formData.level} onChange={handleChange}>
            <option value="">-- Select Level --</option>
            <option value="Beginner">Beginner ⭐</option>
            <option value="Intermediate">Intermediate ⭐⭐</option>
            <option value="Advanced">Advanced ⭐⭐⭐</option>
          </select>
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default StudentBooking;
