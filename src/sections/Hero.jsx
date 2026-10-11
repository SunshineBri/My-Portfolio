
import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import ProfileImage from "../assets/Profile-image.png";

function Hero() {
  const headerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const heading = headerRef.current;

    if (!heading || !("IntersectionObserver" in window)) {
      setAnimate(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-kicker">
            <span className="hero-status-dot" />
            UI/UX DESIGN · FRONT-END DEVELOPMENT
          </span>

          <h1
            ref={headerRef}
            className={animate ? "animate-letter-spacing" : ""}
          >
            Hi, I’m <span className="hero-name">Brittney.</span>
          </h1>

          <p className="hero-description">
            I design thoughtful digital experiences and bring them to life
            through clean, responsive front-end development.
          </p>

          <p className="hero-supporting-text">
            Combining creative design with functional code to build websites
            that look great and feel intuitive to use.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              View My Work
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              Let’s Connect
            </a>
          </div>

          <div className="hero-specialties">
            <span>UI/UX</span>
            <span className="hero-specialty-divider" />
            <span>React</span>
            <span className="hero-specialty-divider" />
            <span>Responsive Design</span>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-glow" />
          <div className="hero-image-frame">
            <img
              src={ProfileImage}
              alt="Illustrated portrait featured in Brittney’s portfolio"
              className="profile-pic"
            />
          </div>
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-star hero-star-one">✦</span>
          <span className="hero-star hero-star-two">✧</span>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span className="hero-scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}

export default Hero;
