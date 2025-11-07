import { useEffect, useState } from "react";

const LiveTicker = () => {
  const [count, setCount] = useState(7204);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, Math.random() * 5000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 overflow-hidden">
      <div className="animate-glow-pulse">
        <p className="text-lg md:text-xl text-neon-gold font-bold text-center">
          🔥 <span className="text-2xl md:text-3xl">{count.toLocaleString()}</span> supporters already joined the waitlist
        </p>
      </div>
    </div>
  );
};

export default LiveTicker;
