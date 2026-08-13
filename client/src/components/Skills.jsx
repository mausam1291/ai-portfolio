function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MySQL", "MongoDB", "JPA", "Hibernate"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Maven", "Docker", "Jenkins", "CI/CD"]
    },
    {
      title: "Core Concepts",
      skills: ["DSA", "OOP", "SOLID", "Microservices", "OS"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Work With</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;