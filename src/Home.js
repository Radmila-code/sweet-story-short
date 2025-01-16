import React, { useState, useRef, useEffect } from 'react';
import './Home.css'; 
import AOS from 'aos'; import 'aos/dist/aos.css'; 


function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => { 
    AOS.init({ duration: 2000 }); 
  }, []);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <video ref={videoRef} autoPlay loop muted={isMuted} className="bg-video">
          <source src={`${process.env.PUBLIC_URL}/videos/video.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-content" data-aos="zoom-in-up">
          <h1 ref={headingRef} className="header">Welcome to Sweet Story Short</h1>
          <p ref={contentRef} className="aboutMe">FRUIT IN CHOCO 🍫NUTS COOKIES</p>
          <button onClick={handleMuteToggle} className="mute-button">
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>

      <div className="info-container">
        <div className="info-item">
            <img src={`${process.env.PUBLIC_URL}/icons/hand-made.png`} alt="Handmade" className="info-icon" />
            <h2>Handmade</h2>
            <p>All products are made exclusively by hand by our confectioners</p>
        </div>
        <div className="info-item">
            <img src={`${process.env.PUBLIC_URL}/icons/organic.png`} alt="Natural products" className="info-icon" />
            <h2>Natural products</h2>
            <p>All ingredients are prepared only from natural products, carefully selected by our experienced confectioners</p>
        </div>
        <div className="info-item">
            <img src={`${process.env.PUBLIC_URL}/icons/individuality.png`} alt="Individual approach" className="info-icon" />
            <h2>Individual approach</h2>
            <p>Each client receives an individual approach, taking into account all his wishes</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
