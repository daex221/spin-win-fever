import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import WaitlistForm from "@/components/WaitlistForm";
import LiveTicker from "@/components/LiveTicker";
import FloatingParticles from "@/components/FloatingParticles";
import SuccessState from "@/components/SuccessState";
import supportersWinLogo from "@/assets/supporters-win-logo.jpg";

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
        {/* Brand Logo */}
        <div className="text-center mb-8 md:mb-10 animate-bounce-in">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-gold via-neon-cyan to-neon-magenta opacity-30 blur-2xl group-hover:opacity-40 transition-all duration-500" />
            <img 
              src={supportersWinLogo} 
              alt="Supporters Win Logo" 
              className="relative w-48 sm:w-56 md:w-64 lg:w-72 h-auto mx-auto"
            />
          </div>
        </div>

        {/* Hero section */}
        <div className="text-center space-y-5 md:space-y-7 mb-10 md:mb-14 animate-bounce-in max-w-5xl mx-auto" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-cyan leading-tight px-4">
            SPIN WEEK IS COMING 🔥
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight px-4">
            Win Cash, Prizes & Exclusive Creator Perks!
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto my-6" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neon-cyan" style={{ animationDelay: "0.2s" }}>
            Be First to Play & Win Big
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Get early access to the Spin Wheel before public launch — earn bonuses, prizes, and exclusive creator tools.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl mx-auto px-4 leading-relaxed" style={{ animationDelay: "0.4s" }}>
            Enter your details to get your{" "}
            <span className="text-neon-gold font-bold">FREE SPIN CODE</span> the moment we launch.
          </p>
        </div>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Waitlist form */}
        <div className="mb-6 md:mb-8 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
          <WaitlistForm onSuccess={handleSuccess} />
        </div>

        {/* Trust badge */}
        <div className="text-center mb-10 md:mb-12 animate-bounce-in" style={{ animationDelay: "0.7s" }}>
          <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-2 px-4">
            <span className="text-neon-green text-lg">🔒</span>
            <span>100% secure. We'll text your spin code the moment we go live.</span>
          </p>
        </div>

        {/* Live ticker */}
        <LiveTicker />

        {/* Social proof badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 md:mt-14 animate-bounce-in px-2" style={{ animationDelay: "0.8s" }}>
          <div className="px-5 md:px-7 py-3 md:py-4 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green font-semibold text-sm md:text-base backdrop-blur-sm">
            🎁 100% FREE
          </div>
          <div className="px-5 md:px-7 py-3 md:py-4 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan font-semibold text-sm md:text-base backdrop-blur-sm">
            ⚡ INSTANT ACCESS
          </div>
          <div className="px-5 md:px-7 py-3 md:py-4 bg-neon-magenta/10 border border-neon-magenta/30 rounded-full text-neon-magenta font-semibold text-sm md:text-base backdrop-blur-sm">
            🎯 LIMITED SPOTS
          </div>
        </div>

        {/* Urgency message */}
        <div className="text-center mt-10 md:mt-14 px-4">
          <p className="text-lg sm:text-xl md:text-2xl text-neon-red font-bold">
            ⏰ Early access closes when the countdown hits zero
          </p>
        </div>

        {/* Fake progress bar */}
        <div className="max-w-2xl mx-auto mt-8 md:mt-10 px-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-muted-foreground">Waitlist Progress:</span>
            <span className="text-sm font-bold text-neon-gold">78% FULL</span>
          </div>
          <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full w-[78%] bg-gradient-to-r from-neon-gold to-neon-red relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
