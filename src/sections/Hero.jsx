import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import ProfileImage from "../assets/Profile-image.png";

function Hero() {
  const headerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 ref={headerRef} className={animate ? 'animate-letter-spacing' : ''}>
            Hi, I’m Brittney
          </h1>
          <p>UI/UX Designer & Front-end developer crafting digital experiences.</p>
        </div>
        <div className="hero-image">
          <img
            src={ProfileImage} // Update with actual image later
            alt="Portrait of Brittney"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
