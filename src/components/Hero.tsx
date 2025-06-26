import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { personalInfo, typingTexts } from '../data/data';

const Hero: React.FC = () => {
  const typingText = useTypingAnimation(typingTexts);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-gold-200 bg-clip-text text-transparent mb-4 animate-fade-in">
            {personalInfo.name}
          </h1>
          <div className="text-2xl md:text-4xl text-gray-300 min-h-[3rem] flex items-center justify-center">
            <span className="border-r-2 border-cyan-400 pr-2 animate-blink">
              {typingText}
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
          I build websites and AI-powered solutions that solve real-world problems. 
          Always excited to work on something new and impactful.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <a
            href="https://drive.google.com/file/d/1your-resume-file-id/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Resume
          </a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="group border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold-400/25 flex items-center gap-2"
          >
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            Contact Me
          </button>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;