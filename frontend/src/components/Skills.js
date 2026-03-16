import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaAws
} from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiJavascript, SiMysql, SiGithubactions } from "react-icons/si";

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
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;