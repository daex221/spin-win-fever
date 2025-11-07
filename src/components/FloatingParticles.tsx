const FloatingParticles = () => {
  // Reduce particles on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 10 : 20;
  
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 6}s`,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-up"
          style={{
            left: particle.left,
            animationDelay: particle.animationDelay,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        >
          <div className="w-full h-full rounded-full bg-neon-cyan shadow-[0_0_10px_currentColor]" />
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;
