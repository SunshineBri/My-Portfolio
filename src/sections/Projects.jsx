
import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

import EZLogo from '../assets/EZ-logo.jpg';
import TFTLogo from '../assets/Tee-for-today-logo.png';

const projects = [
  {
    title: 'EZ Imports',
    category: 'ECOMMERCE · UI/UX · FRONT-END',
    description:
      'A digital storefront concept focused on presenting products through a clear and accessible shopping experience.',
    image: EZLogo,
    alt: 'EZ Imports project logo',
    technologies: ['React', 'Vite', 'CSS'],
    liveUrl: null,
    repoUrl: 'https://github.com/SunshineBri/EZ-Imports',
  },
  {
    title: 'Tee for Today',
    category: 'WEB DESIGN · FRONT-END',
    description:
      'A charity-focused T-shirt website concept showcasing a daily design and a mission-driven shopping experience.',
    image: TFTLogo,
    alt: 'Tee for Today project logo',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    liveUrl: 'https://sunshinebri.github.io/tee-for-today/',
    repoUrl: null,
  },
];

function Projects() {
  const projectRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const cards = projectRefs.current.filter(Boolean);

    if (!('IntersectionObserver' in window)) {
      setVisible(projects.map((_, index) => index));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const newlyVisible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => projectRefs.current.indexOf(entry.target))
          .filter((index) => index !== -1);

        if (newlyVisible.length > 0) {
          setVisible((current) => [
            ...new Set([...current, ...newlyVisible]),
          ]);

          newlyVisible.forEach((index) => {
            const card = projectRefs.current[index];

            if (card) {
              observer.unobserve(card);
            }
          });
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px 40px 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-intro">
        <p className="projects-kicker">A SELECTION OF MY WORK</p>

        <h2 className="projects-heading">
          Selected Projects<span>.</span>
        </h2>

        <p className="projects-subtitle">
          A collection of ideas brought to life through design and code.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            ref={(element) => {
              projectRefs.current[index] = element;
            }}
            className={`project-card ${
              visible.includes(index) ? 'fade-in' : 'fade-out'
            }`}
            style={{
              '--reveal-delay': `${index * 150}ms`,
            }}
          >
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.alt}
                className="project-image"
                loading="lazy"
              />

              <span className="project-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="project-details">
              <p className="project-category">{project.category}</p>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <ul
                className="project-technologies"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Source Code <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
