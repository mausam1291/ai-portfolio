function Projects() {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description:
        "An AI-powered chatbot that allows users to interact with an intelligent assistant through a modern web interface.",
      technologies: ["React", "Node.js", "Express", "OpenAI API"],
      github: "#"
    },
    {
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce application with product management, API integration, database connectivity and a responsive frontend.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#"
    },
    {
      title: "Blog Management System",
      description:
        "A MERN-based blog platform where users can create, manage and display blog content through a content management system.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#"
    },
    {
      title: "Crypto Tracking App",
      description:
        "A React application that displays cryptocurrency information and provides users with an easy-to-use tracking interface.",
      technologies: ["React", "JavaScript", "REST API"],
      github: "#"
    },
    {
      title: "Application Monitoring Dashboard",
      description:
        "A monitoring and analytics dashboard designed to visualize application performance data and provide useful insights.",
      technologies: ["Java", "JavaScript", "MySQL", "Selenium", "Power BI"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-container">

        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              <div className="project-number">
                PROJECT
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project →
              </a>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;