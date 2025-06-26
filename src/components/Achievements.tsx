import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { achievements } from '../data/data';
import { Award, Trophy, Star, Shield, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const getIcon = (iconName: string) => {
    const icons = {
      award: Award,
      trophy: Trophy,
      star: Star,
      shield: Shield
    };
    return icons[iconName as keyof typeof icons] || Award;
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'award':
        return 'from-gold-400 to-yellow-500';
      case 'certification':
        return 'from-cyan-400 to-blue-500';
      case 'competition':
        return 'from-purple-400 to-pink-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'border-gold-400/30 hover:border-gold-400/60';
      case 'certification':
        return 'border-cyan-400/30 hover:border-cyan-400/60';
      case 'competition':
        return 'border-purple-400/30 hover:border-purple-400/60';
      default:
        return 'border-gray-400/30 hover:border-gray-400/60';
    }
  };

  // Create extended array for seamless marquee - ensure we have enough items for smooth scrolling
  const marqueeItems = [...achievements, ...achievements, ...achievements, ...achievements];

  return (
    <section id="achievements" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>

          {/* Horizontal Marquee Section */}
          <div className="mb-16 overflow-hidden">
            <div className="relative">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none" />
              
              {/* Marquee Container */}
              <div className="flex animate-marquee hover:pause-marquee" style={{ width: 'max-content' }}>
                {marqueeItems.map((achievement, index) => (
                  <div
                    key={`marquee-${achievement.id}-${index}`}
                    className="flex-shrink-0 w-80 mx-4 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      {/* Certificate Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={achievement.certificateImage}
                          alt={`${achievement.title} certificate`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                        
                        {/* Floating Icon */}
                        

                        {/* Type Badge */}
                        <div className="absolute top-3 left-3">
                         
                        </div>

                        {/* Date Badge */}
                        <div className="absolute bottom-3 right-3">
                          
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-gold-400 group-hover:bg-clip-text transition-all duration-300 mb-2">
                          {achievement.title}
                        </h3>
                        

                        {/* View Certificate Button */}
                        
                      </div>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${getGradient(achievement.type)} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl pointer-events-none`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Achievement Cards Grid */}
         
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;