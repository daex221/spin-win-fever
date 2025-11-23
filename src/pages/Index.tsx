import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import WaitlistForm from "@/components/WaitlistForm";
import LiveTicker from "@/components/LiveTicker";
import FloatingParticles from "@/components/FloatingParticles";
import SuccessState from "@/components/SuccessState";
import WheelTeaser from "@/components/WheelTeaser";
import supportersWinLogo from "@/assets/supporters-win-small-logo.jpg";

const Index = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [progress, setProgress] = useState(40);

  useEffect(() => {
    // Increment by ~12% per day to reach 100% in 5 days (0.0014% per 5 seconds on average)
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 0.0014;
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
    <div className="min-h-screen relative overflow-hidden bg-background font-rajdhani">
      {/* Aurora gradient background */}
      <div
        className="fixed inset-0 opacity-30 animate-aurora"
        style={{
          background: "linear-gradient(135deg, #8B5CF6, #3B82F6, #EC4899, #10B981)",
          backgroundSize: "400% 400%",
        }}
      />
      
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-transparent" />
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--neon-cyan)) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(var(--neon-cyan)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 lg:py-16">

        {/* Hero section */}
        <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16 animate-bounce-in max-w-5xl mx-auto" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-gold via-neon-cyan to-neon-magenta leading-tight px-4 tracking-tighter drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            SPIN. WIN. CLIMB. REPEAT.
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 max-w-3xl mx-auto px-4 leading-relaxed font-semibold">
            Over <span className="text-neon-gold font-bold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">$27,430</span> in community prizes — and growing hourly.
          </p>
          
          <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto my-8 shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
        </div>

        {/* Animated Wheel Teaser */}
        <WheelTeaser />

        {/* Community Prize Pool Section */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4 animate-bounce-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative overflow-hidden rounded-3xl border-2 border-neon-gold/40 bg-gradient-to-br from-card via-card/90 to-card/80 p-8 md:p-12 backdrop-blur-xl shadow-[0_8px_32px_rgba(255,215,0,0.15),0_0_80px_rgba(0,255,255,0.1)]">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-gold/10 via-neon-cyan/10 to-neon-magenta/10 animate-pulse" />
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neon-cyan/40 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neon-gold/40 rounded-br-3xl" />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="inline-block">
                <div className="text-5xl sm:text-6xl md:text-8xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-gold via-neon-cyan to-neon-red animate-glow-pulse drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                  $27,430
                </div>
                <div className="text-sm sm:text-base text-muted-foreground uppercase tracking-widest mt-3 font-rajdhani font-semibold">
                  Community Prize Pool
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-neon-green font-bold text-lg sm:text-xl">
                <span className="inline-block w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.6)]" />
                Growing every hour
              </div>
              
              <div className="pt-6 border-t border-neon-cyan/20">
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
                  🔥 <span className="font-bold text-neon-cyan drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">Join now</span> to help grow the pool — and claim your{" "}
                  <span className="text-neon-gold font-bold drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]">bonus spin</span> before it resets!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-5 mb-10 md:mb-12 animate-bounce-in max-w-3xl mx-auto px-4" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black font-orbitron text-neon-cyan drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
            Be First to Play & Win Big
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            Get early access to the Spin Wheel before public launch — earn bonuses, prizes, and exclusive creator tools.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed font-semibold">
            Enter your details to get your{" "}
            <span className="text-neon-gold font-bold drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">FREE SPIN CODE</span> the moment we launch.
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
          <div className="px-6 md:px-8 py-3 md:py-4 bg-neon-green/10 border-2 border-neon-green/40 rounded-full text-neon-green font-bold text-sm md:text-base backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:scale-105 transition-transform">
            🎁 100% FREE
          </div>
          <div className="px-6 md:px-8 py-3 md:py-4 bg-neon-cyan/10 border-2 border-neon-cyan/40 rounded-full text-neon-cyan font-bold text-sm md:text-base backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:scale-105 transition-transform">
            ⚡ INSTANT ACCESS
          </div>
          <div className="px-6 md:px-8 py-3 md:py-4 bg-neon-magenta/10 border-2 border-neon-magenta/40 rounded-full text-neon-magenta font-bold text-sm md:text-base backdrop-blur-sm shadow-[0_0_20px_rgba(231,70,148,0.2)] hover:scale-105 transition-transform">
            🎯 LIMITED SPOTS
          </div>
        </div>

        {/* Urgency message */}
        <div className="text-center mt-10 md:mt-14 px-4">
          <p className="text-lg sm:text-xl md:text-3xl text-neon-red font-black font-orbitron drop-shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-pulse">
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
            <div className="flex justify-center mb-4">
              <img 
                src={supportersWinLogo} 
                alt="Supporters Win Logo" 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </div>
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
