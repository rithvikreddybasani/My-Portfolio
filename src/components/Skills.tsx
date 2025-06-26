import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { skills, skillCategories, skillLogos } from '../data/data';
import { Code, Server, Smartphone, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap = {
    Code,
    Server,
    Smartphone,
    Tool
  };

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLogo = (skillName: string) => {
    return skillLogos[skillName] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent">
            Programming Languages & Skills
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/20 p-6 text-center ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Logo */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={getSkillLogo(skill.name)}
                    alt={`${skill.name} logo`}
                    className="w-12 h-12 object-contain group-hover:scale-125 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to a default icon if image fails to load
                      e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                    }}
                  />
                </div>

                {/* Skill Name */}
                <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Category Badge */}
                <div className="mt-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    skill.category === 'frontend' ? 'bg-cyan-500/20 text-cyan-400' :
                    skill.category === 'backend' ? 'bg-green-500/20 text-green-400' :
                    skill.category === 'ml' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gold-500/20 text-gold-400'
                  }`}>
                    {skill.category === 'ml' ? 'ML' : skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-gold-400/20 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;