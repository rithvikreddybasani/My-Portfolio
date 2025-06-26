import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { education } from '../data/data';
import { GraduationCap, Calendar, Award, BookOpen, Star } from 'lucide-react';

const Education: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent">
            Education & Learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`group relative overflow-hidden ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Main Education Card */}
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 group-hover:border-slate-600 transition-all duration-500 transform group-hover:scale-105 hover:shadow-2xl h-full">
                  
                  {/* Institution Header with Icon */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-gold-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 mb-4">
                      <GraduationCap className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-gold-400 group-hover:bg-clip-text transition-all duration-300 mb-2">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  </div>

                  {/* Degree Information */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <BookOpen className="w-5 h-5 text-gold-400" />
                      <span className="text-lg font-semibold text-gold-400">{edu.degree}</span>
                    </div>
                    <p className="text-base text-gray-300 font-medium">{edu.field}</p>
                  </div>

                  {/* GPA Badge */}
                  {edu.gpa && (
                    <div className="flex justify-center mb-6">
                      <div className="bg-gradient-to-r from-gold-500/20 to-gold-400/20 border border-gold-400/30 px-4 py-2 rounded-full">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-gold-400" />
                          <span className="text-white font-semibold text-sm">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                 

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-gold-500/10 rounded-full blur-xl group-hover:scale-150 group-hover:opacity-75 transition-all duration-700" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-gold-500/10 to-cyan-500/10 rounded-full blur-lg group-hover:scale-125 transition-all duration-500" />

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-gold-500/20 to-cyan-500/20 animate-pulse" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shine rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Summary Stats */}
          
          
        </div>
      </div>
    </section>
  );
};

export default Education;