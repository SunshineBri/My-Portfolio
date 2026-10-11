
import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import AboutImage from "../assets/About-image.jpg";

function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section ${visible ? "fade-in" : "hidden"}`}
    >
      <div className="about-heading">
        <span className="about-eyebrow">
          <span className="about-eyebrow-line" />
          GET TO KNOW ME
        </span>

        <h2>
          A little about <span>me.</span>
        </h2>

        <p className="about-subtitle">
          The person behind the pixels.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image-wrap">
          <img
            src={AboutImage}
            alt="Brittney exploring her creative side through painting and drawing"
            className="about-image"
          />

          <div className="about-image-caption">
            <span className="about-caption-star">✦</span>
            Creativity in every detail
          </div>
        </div>

        <div className="about-text">
          <p className="about-intro">
            I’m Brittney, a web developer with a passion for
            <span> thoughtful design</span> and meaningful digital experiences.
          </p>

          <p>
            With an eye for design and detail, I combine creativity with
            front-end development to build websites that are visually engaging,
            intuitive to navigate, and functional across devices. I enjoy
            solving problems, exploring new ideas, and continuously learning
            ways to improve my work.
          </p>

          <p>
            Outside of coding, I love painting and drawing. Art gives me another
            way to explore ideas, experiment with creativity, and bring
            imagination to life.
          </p>

          <div className="about-strengths">
            <div className="about-strength">
              <span className="about-strength-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3.5"
                    y="4"
                    width="17"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.5 9H20.5M8 4V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <span>UI/UX Design</span>
            </div>

            <div className="about-strength">
              <span className="about-strength-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 5L2.5 12L8 19M16 5L21.5 12L16 19M14 3L10 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Front-end Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
