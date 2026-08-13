function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-content">

          <div className="contact-text">
            <h3>Have a project or opportunity?</h3>

            <p>
              I'm always interested in learning, building new projects,
              and exploring opportunities in software development and AI.
            </p>

            <p>
              Feel free to reach out if you'd like to discuss a project,
              internship, or job opportunity.
            </p>
          </div>

          <div className="contact-links">

            <a href="mailto:your-email@example.com">
              <strong>Email</strong>
              <span>your-email@example.com</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>LinkedIn</strong>
              <span>Connect with me</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <strong>GitHub</strong>
              <span>View my repositories</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;