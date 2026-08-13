import Chatbot from "./components/Chatbot";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
          <Chatbot />

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Mausam Kumari. Built with React.
        </p>
      </footer>

      {/* AI Chatbot */}
      <Chatbot />
    </>
  );
}

export default App;