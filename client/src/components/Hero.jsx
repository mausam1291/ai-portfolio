import { ArrowRight, Download, Sparkles, Code2, BrainCircuit } from "lucide-react";

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        {/* Background decorations */}
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-container">
          {/* LEFT SIDE */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Full Stack Developer & AI Enthusiast</span>
            </div>

            <h1>
              Hello, I'm{" "}
              <span className="hero-name">Mausam.</span>
            </h1>

            <h2>
              I build{" "}
              <span>intelligent</span>{" "}
              digital experiences.
            </h2>

            <p className="hero-description">
              I'm a Computer Science graduate passionate about building
              full-stack applications, AI-powered solutions, and scalable
              backend systems using modern technologies.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/Mausam-Kumari-Resume.pdf"
                download
                className="secondary-button"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Technologies */}
            <div className="tech-section">
              <p>TECHNOLOGIES I WORK WITH</p>

              <div className="tech-list">
                {[
                  "Java",
                  "Python",
                  "React.js",
                  "Node.js",
                  "Spring Boot",
                  "SQL",
                ].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="ai-card">
              <div className="ai-card-top">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="ai-status">
                  <span className="status-dot"></span>
                  AI ACTIVE
                </span>
              </div>

              <div className="ai-icon">
                <BrainCircuit size={42} />
              </div>

              <div className="ai-title">
                <span>AI</span> PORTFOLIO
              </div>

              <p className="ai-subtitle">
                Intelligent systems.
                <br />
                Modern applications.
              </p>

              <div className="code-lines">
                <div>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> ={" "}
                  <span className="code-green">"Mausam"</span>;
                </div>

                <div>
                  <span className="code-purple">skills</span> ={" "}
                  <span className="code-green">["Java", "AI"]</span>;
                </div>

                <div>
                  <span className="code-purple">status</span> ={" "}
                  <span className="code-green">"building"</span>;
                </div>
              </div>

              <div className="ai-footer">
                <Code2 size={15} />
                Java • React • Spring Boot • AI
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          min-height: 90vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 100px 7%;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(99, 102, 241, 0.16),
              transparent 32%
            ),
            radial-gradient(
              circle at 20% 80%,
              rgba(139, 92, 246, 0.08),
              transparent 30%
            ),
            #ffffff;
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 15px;
          border-radius: 999px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          color: #4f46e5;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 24px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(46px, 6vw, 78px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 850;
          color: #111827;
        }

        .hero-name {
          color: #4f46e5;
        }

        .hero h2 {
          margin: 24px 0 20px;
          font-size: clamp(25px, 3vw, 38px);
          line-height: 1.2;
          color: #374151;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .hero h2 span {
          color: #6366f1;
        }

        .hero-description {
          max-width: 650px;
          margin: 0 0 32px;
          font-size: 17px;
          line-height: 1.8;
          color: #6b7280;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 38px;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 20px;
          border-radius: 11px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .primary-button {
          background: #111827;
          color: white;
          box-shadow: 0 10px 25px rgba(17, 24, 39, 0.15);
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(17, 24, 39, 0.22);
        }

        .secondary-button {
          background: white;
          color: #111827;
          border: 1px solid #d1d5db;
        }

        .secondary-button:hover {
          transform: translateY(-3px);
          border-color: #6366f1;
          color: #4f46e5;
        }

        .tech-section p {
          margin: 0 0 13px;
          color: #9ca3af;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-list span {
          padding: 8px 12px;
          border-radius: 9px;
          background: #f3f4f6;
          color: #374151;
          font-size: 12px;
          font-weight: 700;
          border: 1px solid #e5e7eb;
          transition: all 0.2s ease;
        }

        .tech-list span:hover {
          transform: translateY(-2px);
          background: #eef2ff;
          color: #4f46e5;
          border-color: #c7d2fe;
        }

        .hero-visual {
          min-height: 480px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-orbit {
          position: absolute;
          border: 1px solid rgba(99, 102, 241, 0.14);
          border-radius: 50%;
        }

        .orbit-one {
          width: 420px;
          height: 420px;
        }

        .orbit-two {
          width: 330px;
          height: 330px;
        }

        .ai-card {
          width: 340px;
          min-height: 380px;
          padding: 25px;
          position: relative;
          z-index: 3;
          border-radius: 25px;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(99, 102, 241, 0.3),
              transparent 30%
            ),
            linear-gradient(145deg, #111827, #1f2937);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 35px 80px rgba(17, 24, 39, 0.25),
            0 0 80px rgba(99, 102, 241, 0.12);
          transform: rotate(2deg);
          transition: transform 0.35s ease;
        }

        .ai-card:hover {
          transform: rotate(0deg) translateY(-8px);
        }

        .ai-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 35px;
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .window-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6b7280;
        }

        .ai-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          font-weight: 800;
          color: #a5b4fc;
          letter-spacing: 1px;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px #34d399;
        }

        .ai-icon {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.14);
          border: 1px solid rgba(129, 140, 248, 0.2);
          margin-bottom: 24px;
        }

        .ai-title {
          color: white;
          font-size: 25px;
          font-weight: 850;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .ai-title span {
          color: #818cf8;
        }

        .ai-subtitle {
          color: #9ca3af;
          font-size: 13px;
          line-height: 1.6;
          margin: 0 0 25px;
        }

        .code-lines {
          padding: 15px;
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.22);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #d1d5db;
          font-family: monospace;
          font-size: 10px;
          line-height: 2;
          overflow: hidden;
        }

        .code-purple {
          color: #c084fc;
        }

        .code-blue {
          color: #60a5fa;
        }

        .code-green {
          color: #34d399;
        }

        .ai-footer {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 20px;
          color: #9ca3af;
          font-family: monospace;
          font-size: 10px;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          pointer-events: none;
        }

        .hero-glow-one {
          width: 300px;
          height: 300px;
          right: -120px;
          top: 80px;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }

        .hero-glow-two {
          width: 180px;
          height: 180px;
          left: -90px;
          bottom: 40px;
          background: rgba(139, 92, 246, 0.04);
        }

        @media (max-width: 900px) {
          .hero {
            padding: 100px 6% 70px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-description {
            max-width: 600px;
          }

          .hero-buttons {
            justify-content: center;
          }

          .tech-section {
            width: 100%;
          }

          .tech-list {
            justify-content: center;
          }

          .hero-visual {
            min-height: 420px;
          }
        }

        @media (max-width: 520px) {
          .hero {
            min-height: auto;
            padding: 90px 5% 60px;
          }

          .hero h1 {
            font-size: 46px;
            letter-spacing: -2px;
          }

          .hero h2 {
            font-size: 25px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .hero-visual {
            min-height: 390px;
          }

          .ai-card {
            width: 290px;
            min-height: 350px;
          }

          .orbit-one {
            width: 340px;
            height: 340px;
          }

          .orbit-two {
            width: 270px;
            height: 270px;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;