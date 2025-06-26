import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { personalInfo } from '../data/data';
import { Brain, Code, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="relative group flex justify-center">
                {/* Responsive Round Profile Photo */}
                <div className="relative">
                  {/* Gradient Border Ring */}
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-cyan-500/30 to-gold-500/30 p-1 group-hover:from-cyan-400/50 group-hover:to-gold-400/50 transition-all duration-500">
                    {/* Inner Container */}
                    <div className="w-full h-full rounded-full bg-slate-900 p-2">
                      {/* Profile Image */}
                      <img
                        src={personalInfo.profileImage}
                        alt="Professional headshot"
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500 shadow-2xl"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-gold-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-cyan-400 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ 
                    background: 'linear-gradient(135deg, #06b6d4, #f59e0b)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px'
                  }} />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Hello! I'm Rithvik </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {personalInfo.bio}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">What I Do</h3>
                <div className="space-y-4">
                  <div className={`group p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-right' : 'opacity-0'
                  }`} style={{ animationDelay: '100ms' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-cyan-400 font-semibold">Frontend Development</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Creating responsive and interactive user interfaces with modern frameworks</p>
                  </div>
                  
                  <div className={`group p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-right' : 'opacity-0'
                  }`} style={{ animationDelay: '200ms' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <h4 className="text-purple-400 font-semibold">AI-Powered Solutions</h4>
                    </div>
                    <p className="text-gray-300 text-sm">Building websites with AI-powered solutions and intelligent automation</p>
                  </div>
                  
                  <div className={`group p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-gold-400/50 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-right' : 'opacity-0'
                  }`} style={{ animationDelay: '300ms' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-gold-400" />
                      <h4 className="text-gold-400 font-semibold">Full Stack Solutions</h4>
                    </div>
                    <p className="text-gray-300 text-sm">End-to-end development from concept to deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;