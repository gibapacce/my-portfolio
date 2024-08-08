import React from 'react';
import './App.css';
import PortfolioNavbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
