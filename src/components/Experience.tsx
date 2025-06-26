import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { experiences } from '../data/data';
import { Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null);

  const toggleExpanded = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-gold-400 to-cyan-400 opacity-30 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-gold-400 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300 z-10 hidden md:block" />

                  {/* Experience Card - Alternating Left/Right */}
                  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="w-full md:w-5/12">
                      <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 group-hover:border-slate-600 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}>
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {experience.position}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-300 mt-1">
                            <Building2 className="w-4 h-4 text-gold-400" />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 mt-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{experience.duration}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2 mb-4">
                          {experience.description.map((desc, descIndex) => (
                            <p key={descIndex} className="text-gray-300 flex items-start gap-2 text-sm">
                              <span className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                              {desc}
                            </p>
                          ))}
                        </div>

                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleExpanded(experience.id)}
                          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors duration-300 font-medium text-sm mb-4"
                        >
                          {expandedExperience === experience.id ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Hide Achievements
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              Show Key Achievements
                            </>
                          )}
                        </button>

                        {/* Achievements (Expandable) */}
                        <div className={`overflow-hidden transition-all duration-500 ${
                          expandedExperience === experience.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-4 border-t border-slate-700/50">
                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                              <span className="w-2 h-2 bg-gold-400 rounded-full" />
                              Key Achievements
                            </h4>
                            <div className="space-y-2">
                              {experience.achievements.map((achievement, achIndex) => (
                                <p key={achIndex} className="text-gray-300 flex items-start gap-2 pl-4 text-sm">
                                  <span className="w-1 h-1 bg-gold-400 rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                      </div>
                    </div>

                    {/* Spacer for timeline */}
                    <div className="hidden md:block w-2/12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;