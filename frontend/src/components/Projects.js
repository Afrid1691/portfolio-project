import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio with responsive design, clean UI, and polished interactions.",
      tech: "React • CSS • Responsive Design",
      github: "https://github.com/",
      live: "https://github.com/"
    },
    {
      title: "Utility Tracker",
      description:
        "A structured application for managing utility-related information with better workflows and cleaner organization.",
      tech: "Java • Spring Boot • PostgreSQL",
      github: "https://github.com/",
      live: "https://github.com/"
    },
    {
      title: "Day Care Information Panel",
      description:
        "A dashboard-style application to organize and display day care information in a simple, accessible way.",
      tech: "React • Spring Boot • PostgreSQL",
      github: "https://github.com/",
      live: "https://github.com/"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-line"></div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="project-top-glow"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.tech}</div>

            <div className="project-actions">
              <a
                href={project.github}
                className="mini-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.live}
                className="mini-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;