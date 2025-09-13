import React from 'react';
import './Media.css';

const Media = () => {
    return (
        <div className="media-container">
            <section className="hero">
  <div className="hero-overlay"></div> {/* طبقة تغميق/تعتيم */}
 
   {/* أيقونة لابتوب متحركة */}
  <div className="floating-icon">
    <i className="fas fa-laptop-code"></i>
  </div>
</section>
            <header>
                <h1>وسائل الإعلام</h1>
                <h2>ناديم بركات</h2>
            </header>

            <div className="video-gallery">
                <div className="video-item">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id-1"
                        title="Video 1"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-item">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id-2"
                        title="Video 2"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-item">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id-3"
                        title="Video 3"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-item">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/your-video-id-4"
                        title="Video 4"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <footer>
                <h3>تابعني على وسائل التواصل الاجتماعي</h3>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">فيسبوك</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">إنستغرام</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">تويتر</a>
                </div>
            </footer>
        </div>
    );
};

export default Media;