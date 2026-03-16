import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaAws
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiMysql,
  SiGithubactions
} from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "React", icon: <FaReact /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "CI/CD", icon: <SiGithubactions /> }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-line"></div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;