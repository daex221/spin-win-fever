import { useEffect, useState } from "react";

const WheelTeaser = () => {
  const [rotation, setRotation] = useState(0);
  const [hasSpun, setHasSpun] = useState(false);

  useEffect(() => {
    // Auto-spin once on mount
    const timer = setTimeout(() => {
      if (!hasSpun) {
        setRotation(360 * 3 + Math.floor(Math.random() * 360)); // 3 full rotations + random position
        setHasSpun(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [hasSpun]);

  const segments = [
    { color: "hsl(45, 100%, 51%)", label: "$100" },
    { color: "hsl(348, 100%, 50%)", label: "$50" },
    { color: "hsl(180, 100%, 50%)", label: "$200" },
    { color: "hsl(328, 100%, 54%)", label: "$25" },
    { color: "hsl(217, 91%, 60%)", label: "$500" },
    { color: "hsl(134, 100%, 50%)", label: "$75" },
    { color: "hsl(280, 87%, 65%)", label: "$150" },
    { color: "hsl(330, 81%, 60%)", label: "$10" },
  ];

  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-8 animate-bounce-in" style={{ animationDelay: "0.2s" }}>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-gold via-neon-cyan to-neon-magenta opacity-30 blur-3xl animate-pulse" />
      
      {/* Wheel container */}
      <div className="relative w-full h-full">
        {/* Wheel */}
        <div
          className="relative w-full h-full rounded-full shadow-2xl transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            boxShadow: "0 0 60px rgba(255, 215, 0, 0.4)",
          }}
        >
          {/* Wheel segments */}
          {segments.map((segment, index) => {
            const angle = (360 / segments.length) * index;
            return (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left"
                  style={{
                    background: segment.color,
                    clipPath: `polygon(0 0, 100% 0, 0 100%)`,
                    transform: `skewY(${90 - 360 / segments.length}deg)`,
                  }}
                >
                  <span
                    className="absolute top-8 left-12 text-white font-bold text-sm sm:text-base drop-shadow-lg"
                    style={{
                      transform: `rotate(${22.5}deg)`,
                    }}
                  >
                    {segment.label}
                  </span>
                </div>
              </div>
            );
          })}
          
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-neon-gold to-neon-red border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white font-black text-xs sm:text-sm">SPIN</span>
          </div>
        </div>
        
        {/* Pointer */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-neon-red drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default WheelTeaser;
