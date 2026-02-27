import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Abdul Qadeer's Portfolio</h1>
      <p>Web developer Student | Coding Enthusiast</p>
    </header>
  );
}

// About Component
function About() {
  return (
    <section className="section" id="about">
      <h2>About Me</h2>
      <p>
        Hello! I am Abdul Qadeer, an engineering student from Hyderabad, Sindh, Pakistan.
        I love coding, solving problems, and building projects that make learning fun.
      </p>
    </section>
  );
}

// Projects Component with toggle button and map()
function Projects() {
  const [showDetails, setShowDetails] = useState(false);

  const projects = [
    {
      title: "Calculator App",
      description: "A simple calculator built with Python."
    },
    {
      title: "Arduino LED Circuit",
      description: "LED blinking circuit using Arduino."
    },
    {
      title: "React Portfolio",
      description: "Personal portfolio website using React."
    }
  ];

  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Project Details" : "Show Project Details"}
      </button>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>
            <strong>{proj.title}</strong>
            {showDetails && <p>{proj.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

// Contact Component
function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: abdulqadeer@example.com</li>
        <li>Phone: +92 300 1234567</li>
        <li>
          GitHub: <a href="https://github.com/abdulqadeer" target="_blank" rel="noreferrer">github.com/abdulqadeer</a>
        </li>
        <li>
          LinkedIn: <a href="https://linkedin.com/in/abdulqadeer" target="_blank" rel="noreferrer">linkedin.com/in/abdulqadeer</a>
        </li>
      </ul>
    </section>
  );
}

// Footer Component
function Footer() {
  return <footer className="footer">&copy; 2026 Abdul Qadeer. All rights reserved.</footer>;
}

export default App;
