import React from 'react';

const MeetNadeem = () => {
  const handleContactClick = () => {
    // In a real application, this would scroll to a contact form or open a modal
    alert("Let's connect! This would open a contact form in a real application.");
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section  style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.floatingIcon}>
          <i className="fas fa-laptop-code" style={styles.icon}></i>
        </div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.titleLine}>M E E T</span>
            <span style={styles.titleName}>ZEINAB</span>
          </h1>
          <h2 style={styles.heroSubtitle}>EDUCATOR & ICT SPECIALIST</h2>
        </div>
      </section>
     

      {/* Intro Section */}
      <section style={styles.introSection}>
        <div style={styles.introContent}>
          <div style={styles.heroDescription}>
            <p style={styles.paragraph}>
              Zeinab is a passionate educator and ICT specialist with over 15 years
              of diverse teaching and training experience. She has taught IGCSE
              Accounting and ICT, and delivered more than 1700 hours of ICT training
              at leading institutions including Pharos University and New Horizons.
            </p>
            <p style={styles.paragraph}>
              Zeinab is also a certified Microsoft Technology Specialist since 2009
              and a researcher in media and information literacy. She authored a
              UNESCO-participated training course and spoke at the UNESCO MIL
              conference in Jordan in 2023 as part of "Agents of Change."
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>How Zeinab Can Help You</h2>
        <h3 style={styles.sectionSubtitle}>PROFESSIONAL SERVICES</h3>

        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <i className="fas fa-comments" style={styles.cardIcon}></i>
            </div>
            <h4 style={styles.serviceTitle}>Teaching IGCSE</h4>
            <p style={styles.serviceDescription}>
              Give your teen the edge they need in IGCSE with our one-on-one
              tutoring. We offer flexible face-to-face or online sessions for
              the following subjects: 1. Accounting 2. ICT We provide everything
              your student needs to master the material: 1. Handout notes for
              easy review 2. Detailed PowerPoint presentations to simplify
              complex topics 3. Comprehensive classified past papers to prepare
              for exams
            </p>
          </div>

          <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <i className="fas fa-hands-helping" style={styles.cardIcon}></i>
            </div>
            <h4 style={styles.serviceTitle}>Digital Training</h4>
            <p style={styles.serviceDescription}>
 Courses with a focus on practical strategies. and real-world
              scenarios, these courses provide the tools and knowledge you need
              to grow your business and achieve your goals. our bundle include:
              Data Analysis using Power BI Data Analysis using Excel MOS FDTC
            </p>
          </div>

          {/* <div style={styles.serviceCard}>
            <div style={styles.serviceIcon}>
              <i className="fas fa-chalkboard-teacher" style={styles.cardIcon}></i>
            </div>
            <h4 style={styles.serviceTitle}>TRAINING & COURSES</h4>
            <p style={styles.serviceDescription}>
             
            </p>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What They Say About Zeinab</h2>
        <h3 style={styles.sectionSubtitle}>TESTIMONIALS</h3>

        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <div style={styles.quoteIcon}>"</div>
            <p style={styles.testimonialText}>
             I want to sincerely thank you for your support and dedication throughout the IGCSE Accounting (0985) course at Victoria College. The June 2024 session was challenging, but your teaching made a real difference. Your ability to explain complex accounting concepts in a clear and structured way helped me grasp the subject much better. I truly appreciate the effort you put into making lessons engaging and ensuring we understood both the methods and reasoning behind them. Thank you!
            </p>
            <div style={styles.testimonialAuthor}>
              <p style={styles.authorName}>Fares Elsyed</p>
              <p style={styles.authorTitle}>Student</p>
            </div>
          </div>

          <div style={styles.testimonialCard}>
            <div style={styles.quoteIcon}>"</div>
            <p style={styles.testimonialText}>
           Thank you so much for your great efforts throughout the course. I really learned a lot from you, and I appreciate how much you cared about making us practice and apply everything in a practical way. I truly miss you so much!
            </p>
            <div style={styles.testimonialAuthor}>
              <p style={styles.authorName}>Asmaa Mohamed</p>
              <p style={styles.authorTitle}>Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <p style={styles.contactDescription}>
          Zeinab is looking forward to connecting with you. Let's talk about your next step!
        </p>
        <button 
          style={styles.contactButton}
          onClick={handleContactClick}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Contact Zeinab
        </button>
      </section>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0',
    overflowX: 'hidden',
  },
  heroSection: {
    position: 'relative',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg, rgb(75, 109, 143) 0%, rgb(75, 109, 143) 100%)',
    color: 'white',
    overflow: 'hidden',

   
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  floatingIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '10rem',
    opacity: '0.1',
    zIndex: 1,
  },
  icon: {
    color: 'white',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    padding: '0 20px',
  },
  heroTitle: {
    fontSize: '4rem',
    marginBottom: '10px',
    letterSpacing: '8px',
    fontWeight: '300',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  titleLine: { 
    display: 'block',
    fontSize: '1.8rem',
    letterSpacing: '10px',
    marginBottom: '10px',
  },
  titleName: { 
    display: 'block', 
    fontWeight: 'bold', 
    color: '#fff',
    fontSize: '5rem',
    letterSpacing: '5px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    letterSpacing: '3px',
    fontWeight: '300',
  },
  introSection: {
    padding: '80px 20px',
    backgroundColor: '#fff',
  },
  introContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroDescription: {
    lineHeight: '1.8',
    fontSize: '1.1rem',
  },
  paragraph: {
    marginBottom: '25px',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '15px',
    fontWeight: '300',
    letterSpacing: '2px',
  },
  sectionSubtitle: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: '60px',
    color: 'rgb(75, 109, 143)',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    fontWeight: '500',
  },
  servicesSection: { 
    padding: '80px 20px', 
    backgroundColor: '#f9f9f9' 
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  serviceIcon: {
    marginBottom: '20px',
    color: 'rgb(75, 109, 143)',
  },
  cardIcon: {
    fontSize: '3rem',
  },
  serviceTitle: { 
    fontSize: '1.5rem', 
    marginBottom: '20px', 
    color: 'rgb(75, 109, 143)',
    letterSpacing: '2px',
  },
  serviceDescription: { 
    lineHeight: '1.7',
    color: '#555',
  },
  testimonialsSection: { 
    padding: '80px 20px',
    backgroundColor: '#fff',
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  testimonialCard: {
    backgroundColor: '#f9f9f9',
    padding: '40px 30px',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    position: 'relative',
  },
  quoteIcon: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '4rem',
    color: 'rgb(75, 109, 143)',
    opacity: '0.2',
    fontFamily: 'Georgia, serif',
  },
  testimonialText: { 
    lineHeight: '1.7', 
    marginBottom: '25px',
    fontStyle: 'italic',
    color: '#444',
    fontSize: '1.1rem',
    paddingTop: '20px',
  },
  testimonialAuthor: { 
    textAlign: 'right' 
  },
  authorName: { 
    fontWeight: 'bold', 
    marginBottom: '5px',
    color: 'rgb(75, 109, 143)',
  },
  authorTitle: { 
    color: '#666', 
    fontSize: '0.9rem' 
  },
  contactSection: {
    padding: '80px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  contactDescription: { 
    marginBottom: '40px', 
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.6',
    color: '#555',
  },
  contactButton: {
    backgroundColor: 'rgb(75, 109, 143)',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s',
    fontWeight: '500',
    letterSpacing: '1px',
  },
};

// Add hover effects for service cards
const serviceCardHover = {
  transform: 'translateY(-10px)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
};

// Apply hover effects
Object.assign(styles.serviceCard, {
  ':hover': serviceCardHover
});

export default MeetNadeem;