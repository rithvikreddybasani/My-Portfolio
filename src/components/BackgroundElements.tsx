import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold-400/10 rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-cyan-400/10 rounded-full animate-bounce" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-gold-400/5 to-cyan-400/5 rotate-12 animate-spin-slow" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gold-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" />
    </div>
  );
};

export default BackgroundElements;