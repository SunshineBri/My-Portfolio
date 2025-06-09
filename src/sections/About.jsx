import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import AboutImage from '../assets/About-image.jpg';

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? 'fade-in' : 'hidden'}`}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <img src={AboutImage} alt="Brittney painting or drawing" />
        <p>
          I’m Brittney, a passionate web developer dedicated to crafting clean, expressive, and user-friendly digital experiences. With a strong eye for design and detail, I blend creativity with technical skills to build websites that not only look beautiful but also function seamlessly. I thrive on problem-solving and continuously learning new technologies to stay ahead in this ever-evolving field. When I step away from the keyboard, you’ll often find me bringing ideas to life through painting and drawing.
        </p>
      </div>
    </section>
  );
}

export default About;
