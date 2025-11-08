import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevTime, setPrevTime] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date is 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };

        setTimeLeft((prev) => {
          setPrevTime(prev);
          return newTimeLeft;
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeSegment = ({ value, label, shouldFlip }: { value: number; label: string; shouldFlip: boolean }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="relative overflow-hidden">
        <div
          className={`relative bg-gradient-to-br from-neon-gold via-neon-red to-neon-magenta rounded-xl p-4 md:p-6 lg:p-8 shadow-[0_0_40px_rgba(255,215,0,0.5)] border border-neon-gold/30 ${
            shouldFlip ? "animate-flip" : ""
          }`}
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-background tracking-tight">
            {value.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
      <div className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-foreground/70 font-bold">
        {label}
      </div>
    </div>
  );

  return (
    <div className="mb-8 md:mb-12 animate-bounce-in">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-6 md:mb-8 bg-gradient-to-r from-neon-cyan via-neon-gold to-neon-magenta bg-clip-text text-transparent animate-glow-pulse">
        The Wheel Goes Live In:
      </h3>
      <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-8">
        <TimeSegment value={timeLeft.days} label="DAYS" shouldFlip={prevTime.days !== timeLeft.days} />
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neon-gold/50 font-black mb-8">:</div>
        <TimeSegment value={timeLeft.hours} label="HOURS" shouldFlip={prevTime.hours !== timeLeft.hours} />
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neon-gold/50 font-black mb-8">:</div>
        <TimeSegment value={timeLeft.minutes} label="MINUTES" shouldFlip={prevTime.minutes !== timeLeft.minutes} />
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neon-gold/50 font-black mb-8">:</div>
        <TimeSegment value={timeLeft.seconds} label="SECONDS" shouldFlip={prevTime.seconds !== timeLeft.seconds} />
      </div>
    </div>
  );
};

export default CountdownTimer;
