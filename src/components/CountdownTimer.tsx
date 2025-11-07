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

        setPrevTime(timeLeft);
        setTimeLeft(newTimeLeft);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeSegment = ({ value, label, shouldFlip }: { value: number; label: string; shouldFlip: boolean }) => (
    <div className="flex flex-col items-center">
      <div
        className={`relative bg-gradient-to-br from-neon-gold to-neon-red rounded-xl p-6 shadow-[0_0_30px_rgba(255,215,0,0.4)] ${
          shouldFlip ? "animate-flip" : ""
        }`}
      >
        <div className="text-5xl md:text-6xl font-black text-background">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-bold">
        {label}
      </div>
    </div>
  );

  return (
    <div className="mb-12 animate-bounce-in">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-neon-cyan animate-glow-pulse">
        The Wheel Goes Live In:
      </h3>
      <div className="flex justify-center items-center gap-3 md:gap-6">
        <TimeSegment value={timeLeft.days} label="DAYS" shouldFlip={prevTime.days !== timeLeft.days} />
        <div className="text-4xl md:text-5xl text-neon-gold font-black animate-glow-pulse">:</div>
        <TimeSegment value={timeLeft.hours} label="HOURS" shouldFlip={prevTime.hours !== timeLeft.hours} />
        <div className="text-4xl md:text-5xl text-neon-gold font-black animate-glow-pulse">:</div>
        <TimeSegment value={timeLeft.minutes} label="MINUTES" shouldFlip={prevTime.minutes !== timeLeft.minutes} />
        <div className="text-4xl md:text-5xl text-neon-gold font-black animate-glow-pulse">:</div>
        <TimeSegment value={timeLeft.seconds} label="SECONDS" shouldFlip={prevTime.seconds !== timeLeft.seconds} />
      </div>
    </div>
  );
};

export default CountdownTimer;
