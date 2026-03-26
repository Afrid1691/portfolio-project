import TechBackground from "./components/TechBackground";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <div className="app">
      <TechBackground />

      <div className="cursor-glow"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;