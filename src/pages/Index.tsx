import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import WaitlistForm from "@/components/WaitlistForm";
import LiveTicker from "@/components/LiveTicker";
import FloatingParticles from "@/components/FloatingParticles";
import SuccessState from "@/components/SuccessState";
import WheelTeaser from "@/components/WheelTeaser";
import supportersWinLogo from "@/assets/supporters-win-logo.png";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [progress, setProgress] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 0.5;
        const newProgress = prev + increment;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
              className="relative w-32 sm:w-40 md:w-48 lg:w-56 h-auto mx-auto"
            />
          </div>
        </div>

        {/* Hero section */}
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16 animate-bounce-in max-w-5xl mx-auto" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-gold via-neon-cyan to-neon-magenta leading-tight px-4 tracking-tight">
            SPIN. WIN. CLIMB. REPEAT.
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed font-medium">
            Over <span className="text-neon-gold font-bold">$27,430</span> in community prizes — and growing hourly.
          </p>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto my-8" />
        </div>

        {/* Animated Wheel Teaser */}
        <WheelTeaser />

        {/* Community Prize Pool Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4 animate-bounce-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative overflow-hidden rounded-3xl border-2 border-neon-gold/30 bg-gradient-to-br from-card via-card/80 to-card p-8 md:p-12 backdrop-blur-sm">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-gold/5 via-neon-cyan/5 to-neon-magenta/5 animate-pulse" />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-block">
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-red animate-glow-pulse">
                  $27,430
                </div>
                <div className="text-sm sm:text-base text-muted-foreground uppercase tracking-wider mt-2">
                  Community Prize Pool
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-neon-green font-semibold text-lg sm:text-xl">
                <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                Growing every hour
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
                  🔥 <span className="font-bold text-neon-cyan">Join now</span> to help grow the pool — and claim your{" "}
                  <span className="text-neon-gold font-bold">bonus spin</span> before it resets!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4 mb-10 md:mb-12 animate-bounce-in max-w-3xl mx-auto px-4" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon-cyan">
            Be First to Play & Win Big
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Get early access to the Spin Wheel before public launch — earn bonuses, prizes, and exclusive creator tools.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
            Enter your details to get your{" "}
            <span className="text-neon-gold font-bold">FREE SPIN CODE</span> the moment we launch.
          </p>
        </div>

        {/* Countdown timer */}
        <CountdownTimer />

        {/* Waitlist form */}
        <div className="mb-6 md:mb-8 animate-bounce-in" style={{ animationDelay: "0.5s" }}>
          <WaitlistForm onSuccess={handleSuccess} />
        </div>

        {/* Trust badge */}
        <div className="text-center mb-10 md:mb-12 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-2 px-4">
            <span className="text-neon-green text-lg">🔒</span>
            <span>100% secure. We'll text your spin code the moment we go live.</span>
          </p>
        </div>

        {/* Live ticker */}
        <LiveTicker />

        {/* Social proof badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10 md:mt-14 animate-bounce-in px-2" style={{ animationDelay: "0.7s" }}>
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
            <span className="text-sm font-bold text-neon-gold">{Math.floor(progress)}% FULL</span>
          </div>
          <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-neon-gold to-neon-red relative transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 md:mt-20 pt-8 border-t border-border/30">
          <div className="text-center space-y-4 px-4">
            <div className="text-sm text-muted-foreground">
              Powered by <span className="font-semibold text-foreground">Supporters Win™️</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-neon-cyan transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-neon-cyan transition-colors">Terms of Service</a>
            </div>
            <div className="text-xs text-muted-foreground">
              © 2025 Supporters Win. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
