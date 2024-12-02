import React from "react";
import { Link } from "react-scroll"; // Import react-scroll's Link component
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      {/* Navbar/Header Section */}
      <header className="bg-blue-600 text-white py-4 shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-semibold">
            <h1>Sujit Khojare</h1>
            <p className="text-sm">Software Engineer | Java Full Stack Developer</p>
          </div>
          <nav className="hidden md:flex space-x-6 text-lg">
            {/* React-scroll Link for smooth scrolling with offset */}
            <Link to="profile" smooth={true} duration={500} offset={-90} className="hover:text-blue-300">
              Profile
            </Link>
            <Link to="experience" smooth={true} duration={500} offset={-64} className="hover:text-blue-300">
              Experience
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-64} className="hover:text-blue-300">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-64} className="hover:text-blue-300">
              Projects
            </Link>
            <Link to="education" smooth={true} duration={500} offset={-110} className="hover:text-blue-300">
              Education
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-64} className="hover:text-blue-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-8 py-6">
        <section id="profile">
          <Profile />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
