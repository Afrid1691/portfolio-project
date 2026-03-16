import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/profile.jpg"
          alt="Afrid Mohammed"
          className="profile-pic"
        />

        <p className="hero-badge">
          Full Stack Developer • Java • Spring Boot • React
        </p>

        <h1>
          Hi, I'm <span>Afrid Mohammed</span>
        </h1>

        <h2 className="hero-subtitle typing-text">
          Building scalable backend systems and modern web apps.
        </h2>

        <p className="hero-description">
          Software developer focused on backend engineering, APIs, database
          systems, and clean modern user interfaces.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="/resume.pdf" className="btn btn-outline" download>
            <FaDownload /> Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mohammedafrid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>
          <div className="stat-card">
            <h3>Full Stack</h3>
            <p>Frontend + Backend</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;