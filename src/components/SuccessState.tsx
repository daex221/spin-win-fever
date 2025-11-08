import { useEffect } from "react";
import { CheckCircle, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./CountdownTimer";
import supportersWinLogo from "@/assets/supporters-win-logo.jpg";

interface SuccessStateProps {
  name: string;
  email: string;
  phone: string;
}

const SuccessState = ({ name, email, phone }: SuccessStateProps) => {
  useEffect(() => {
    // Create confetti effect
    const confettiColors = ["#FFD700", "#00FFFF", "#EC4899", "#8B5CF6", "#3B82F6"];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "absolute animate-confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = "50%";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.animationDelay = `${Math.random() * 0.5}s`;
      confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 4000);
    }
  }, []);

  const shareText = encodeURIComponent("I just joined SPIN WEEK by Supporters Win! 🎰 Join me for free spins and big wins!");
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 py-8">
      <div className="w-full max-w-2xl mx-auto text-center space-y-6 md:space-y-8 animate-bounce-in">
        {/* Large Brand Logo */}
        <div className="mb-6 md:mb-8">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-gold via-neon-cyan to-neon-magenta opacity-60 blur-3xl transition-all duration-500 animate-glow-pulse" />
            <img 
              src={supportersWinLogo} 
              alt="Supporters Win Logo" 
              className="relative w-72 sm:w-96 md:w-[450px] lg:w-[550px] h-auto mx-auto"
            />
          </div>
        </div>

        <div className="relative">
          <CheckCircle className="w-24 h-24 md:w-32 md:h-32 mx-auto text-neon-green animate-glow-pulse" />
          <div className="absolute inset-0 bg-neon-green/20 rounded-full blur-3xl" />
        </div>

        <div className="space-y-3 md:space-y-4 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground animate-glow-pulse leading-tight">
            ✅ YOU'RE IN, {name.toUpperCase()}!
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-neon-cyan font-bold">
            Welcome to Supporters Win.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-neon-gold font-semibold italic">
            Every spin. Every drop. Every win.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neon-cyan font-bold">
            Your FREE SPIN CODE will be sent to your email and phone the moment SPIN WEEK launches!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Check <span className="text-neon-cyan font-bold">{email}</span> and <span className="text-neon-magenta font-bold">{phone}</span> when the countdown hits zero! 📲
          </p>
        </div>

        <div className="py-6 md:py-8">
          <CountdownTimer />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-2">
          <Button
            asChild
            className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(236,72,153,0.5)]"
          >
            <a
              href={`https://www.instagram.com/stories/create/?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Share on Instagram
            </a>
          </Button>
          <Button
            asChild
            className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Share on Twitter
            </a>
          </Button>
        </div>

        <div className="pt-6 md:pt-8 space-y-2 md:space-y-3">
          <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-neon-green/20 border-2 border-neon-green rounded-full text-neon-green font-bold text-xs md:text-sm animate-glow-pulse">
            EXCLUSIVE LAUNCH EVENT
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            Get ready to spin and win big! 🎰✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessState;
