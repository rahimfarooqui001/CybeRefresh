import React, { useState, useEffect } from 'react';
import '../components/Parallax.css';
import backgroundImage from '../assets/images/standard-quality-control-concept-m.jpg'; // Replace with your background image

const Parallax = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div >
      {/* Parallax Section */}
      <div
        className="parallax-background"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }} // Adjusts the background position based on scroll
      >
        <div className="content">
          <h1>Dynamic Parallax in React</h1>
          <p>Scroll down to see the dynamic background movement!</p>
        </div>
      </div>

      {/* Normal Content Below */}
      <div className="normal-section">
        <h2>Normal Section</h2>
        <p>This section behaves normally with no parallax effect.</p>
      </div>
    </div>
  );
};

export default Parallax;
