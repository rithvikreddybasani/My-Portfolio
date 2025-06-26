import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import BackgroundElements from './components/BackgroundElements';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen overflow-x-hidden">
      <BackgroundElements />
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      
    </div>
  );
}

export default App;