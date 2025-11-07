import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Sparkles, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  onSuccess: (data: { name: string; email: string; phone: string }) => void;
}

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Please enter a valid phone number (min 10 digits)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const form = e.target as HTMLFormElement;
      form.classList.add("animate-shake");
      setTimeout(() => form.classList.remove("animate-shake"), 500);
      return;
    }

    setIsSubmitting(true);

    const data = {
      name,
      email,
      phone,
      campaign: "spin_week_launch",
      source: "waitlist_page",
      timestamp: new Date().toISOString(),
    };

    try {
      const credentials = btoa("daevo:12345678");
      const response = await fetch(
        "https://daex2212.app.n8n.cloud/webhook/67fc32b0-261b-4633-9687-f03177ba1f5d",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${credentials}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      onSuccess({ name, email, phone });
    } catch (error) {
      toast({
        title: "⚠️ Oops! Something went wrong",
        description: "Try again or use the other option",
        variant: "destructive",
      });
      const form = e.target as HTMLFormElement;
      form.classList.add("animate-shake");
      setTimeout(() => form.classList.remove("animate-shake"), 500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto p-8 rounded-2xl bg-card/90 backdrop-blur-xl border-4 animate-rainbow-border shadow-[0_0_50px_rgba(139,92,246,0.3)]"
    >
      <div className="space-y-6">
        <div>
          <div className="relative">
            <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neon-gold" />
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: undefined });
              }}
              className={`pl-12 h-14 text-lg bg-background !text-black border-2 focus:border-neon-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.4)] ${
                errors.name ? "border-destructive" : ""
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm text-destructive animate-shake">{errors.name}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neon-cyan" />
            <Input
              type="email"
              placeholder="creator@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: undefined });
              }}
              className={`pl-12 h-14 text-lg bg-background !text-black border-2 focus:border-neon-cyan focus:shadow-[0_0_20px_rgba(0,255,255,0.4)] ${
                errors.email ? "border-destructive" : ""
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-destructive animate-shake">{errors.email}</p>
          )}
        </div>

        <div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neon-magenta" />
            <Input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrors({ ...errors, phone: undefined });
              }}
              className={`pl-12 h-14 text-lg bg-background !text-black border-2 focus:border-neon-magenta focus:shadow-[0_0_20px_rgba(236,72,153,0.4)] ${
                errors.phone ? "border-destructive" : ""
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-sm text-destructive animate-shake">{errors.phone}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-16 text-xl font-black bg-gradient-to-r from-neon-gold to-neon-red hover:scale-105 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(255,215,0,0.6)] animate-glow-pulse disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-6 w-6 animate-spin" />
              JOINING...
            </>
          ) : (
            "CLAIM MY FREE SPIN 🎰"
          )}
        </Button>
      </div>
    </form>
  );
};

export default WaitlistForm;
