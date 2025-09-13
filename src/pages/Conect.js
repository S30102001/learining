import React from 'react';
import './Conect.css';

const Conect = () => {
    return (
        <div className="modern-contact-container">
        
<section className="hero">
  <div className="hero-overlay"></div> {/* طبقة تغميق/تعتيم *

   {/* أيقونة لابتوب متحركة */}
  <div className="floating-icon">
    <i className="fas fa-laptop-code"></i>
  </div>
</section>
            <div className="modern-content">
                {/* قسم العنوان الرئيسي */}
                <header className="modern-header">
                    <h1 className="modern-main-title">Contact Nadeem Barakat</h1>
                    <h2 className="modern-subtitle">Get in Touch for Business Opportunities</h2>
                </header>

                {/* بطاقات المعلومات */}
                <div className="cards-container">
                    <div className="info-card">
                        <div className="card-icon">📞</div>
                        <h3>Call Us</h3>
                        <p className="highlight-info">+2010 097 4032</p>
                        <p>Available during working hours</p>
                    </div>

                    <div className="info-card">
                        <div className="card-icon">✉️</div>
                        <h3>Email Us</h3>
                        <p className="highlight-info">contact@nadeembarakat.com</p>
                        <p>We respond within 24 hours</p>
                    </div>

                   
                </div>

                {/* نموذج الاتصال */}
                <section className="contact-form-section">
                    <h2>Send a Message</h2>
                    <form className="modern-form">
                        <div className="form-row">
                            <div className="input-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" placeholder="What is this regarding?" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows="5" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>

                {/* زر الواتساب */}
                <footer className="modern-footer">
                    <h3>Connect via WhatsApp</h3>
                    <p>For quick responses and direct communication</p>
                    <button className="whatsapp-btn">
                        <span className="whatsapp-icon">💬</span>
                        Chat on WhatsApp
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Conect;