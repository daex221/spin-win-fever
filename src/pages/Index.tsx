import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import WaitlistForm from "@/components/WaitlistForm";
import LiveTicker from "@/components/LiveTicker";
import FloatingParticles from "@/components/FloatingParticles";
import SuccessState from "@/components/SuccessState";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });

  const handleSuccess = (data: { name: string; email: string; phone: string }) => {
    setUserData(data);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessState name={userData.name} email={userData.email} phone={userData.phone} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Aurora gradient background */}
      <div
        className="fixed inset-0 opacity-20 animate-aurora"
        style={{
          background: "linear-gradient(135deg, #8B5CF6, #3B82F6, #EC4899)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 lg:py-16">
        {/* Hero section */}
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12 animate-bounce-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-cyan animate-glow-pulse leading-tight">
            SPIN WEEK IS COMING 🔥
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neon-cyan animate-glow-pulse" style={{ animationDelay: "0.2s" }}>
            Be First to Play & Win Big
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-2" style={{ animationDelay: "0.4s" }}>
            Enter your name, email, and phone number to get your{" "}
            <span className="text-neon-gold font-bold">FREE SPIN CODE</span> the moment we launch.
          </p>
        </div>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Waitlist form */}
        <div className="mb-8 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
          <WaitlistForm onSuccess={handleSuccess} />
        </div>

        {/* Live ticker */}
        <LiveTicker />

        {/* Social proof badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-12 animate-bounce-in px-2" style={{ animationDelay: "0.8s" }}>
          <div className="px-4 md:px-6 py-2 md:py-3 bg-neon-green/20 border-2 border-neon-green rounded-full text-neon-green font-bold text-xs sm:text-sm md:text-base animate-glow-pulse">
            🎁 100% FREE
          </div>
          <div className="px-4 md:px-6 py-2 md:py-3 bg-neon-cyan/20 border-2 border-neon-cyan rounded-full text-neon-cyan font-bold text-xs sm:text-sm md:text-base animate-glow-pulse">
            ⚡ INSTANT ACCESS
          </div>
          <div className="px-4 md:px-6 py-2 md:py-3 bg-neon-magenta/20 border-2 border-neon-magenta rounded-full text-neon-magenta font-bold text-xs sm:text-sm md:text-base animate-glow-pulse">
            🎯 LIMITED SPOTS
          </div>
        </div>

        {/* Urgency message */}
        <div className="text-center mt-8 md:mt-12 px-4">
          <p className="text-lg sm:text-xl md:text-2xl text-neon-red font-bold animate-glow-pulse">
            ⏰ Early access closes when the countdown hits zero
          </p>
        </div>

        {/* Fake progress bar */}
        <div className="max-w-2xl mx-auto mt-6 md:mt-8 px-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm font-bold text-gray-400">Waitlist Progress:</span>
            <span className="text-xs sm:text-sm font-bold text-neon-gold">78% FULL</span>
          </div>
          <div className="h-2 md:h-3 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[78%] bg-gradient-to-r from-neon-gold to-neon-red animate-glow-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
