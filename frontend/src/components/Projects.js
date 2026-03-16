function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern developer portfolio with a dark UI, responsive layout, project showcase, and polished frontend interactions.",
      tech: "React • CSS • Responsive Design"
    },
    {
      title: "Utility Tracker",
      description:
        "A structured application for managing utility-related information with organized workflows and better data handling.",
      tech: "Java • Spring Boot • PostgreSQL"
    },
    {
      title: "Day Care Information Panel",
      description:
        "A dashboard-style application for presenting and managing day care information in a simpler and more accessible way.",
      tech: "React • Spring Boot • PostgreSQL"
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="section-line"></div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-top-glow"></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">{project.tech}</div>

            <div className="project-actions">
              <a href="#" className="mini-btn">GitHub</a>
              <a href="#" className="mini-btn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;