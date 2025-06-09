import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import EZLogo from "../assets/EZ-logo.jpg";

function Projects() {
  const projectRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(entry.target);
          if (index === -1) return;

          setVisible((vis) => {
            if (entry.isIntersecting) {
              if (!vis.includes(index)) {
                return [...vis, index];
              }
              return vis;
            } else {
              if (vis.includes(index)) {
                return vis.filter((i) => i !== index);
              }
              return vis;
            }
          });
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const projects = [
    {
      title: 'EZ Imports',
      link: '#',
      img: EZLogo,
    },
    { title: 'Project Two', link: '#', img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png' },
    { title: 'Project Three', link: '#', img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png' },
    { title: 'Project Four', link: '#', img: 'https://firstbenefits.org/wp-content/uploads/2017/10/placeholder-1024x1024.png' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`project-card ${visible.includes(i) ? 'fade-in' : 'fade-out'}`}
            style={{ transitionDelay: visible.includes(i) ? `${i * 200}ms` : '0ms' }}
            ref={(el) => (projectRefs.current[i] = el)}
          >
            <img src={project.img} alt={`${project.title} Preview`} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
