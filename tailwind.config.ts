import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "neon-gold": "hsl(var(--neon-gold))",
        "neon-cyan": "hsl(var(--neon-cyan))",
        "neon-magenta": "hsl(var(--neon-magenta))",
        "neon-purple": "hsl(var(--neon-purple))",
        "neon-blue": "hsl(var(--neon-blue))",
        "neon-pink": "hsl(var(--neon-pink))",
        "neon-green": "hsl(var(--neon-green))",
        "neon-red": "hsl(var(--neon-red))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 8px currentColor) brightness(1)",
          },
          "50%": {
            filter: "drop-shadow(0 0 20px currentColor) brightness(1.2)",
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.3) translateY(-50px)",
          },
          "50%": {
            transform: "scale(1.05) translateY(0)",
          },
          "70%": {
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "shake": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(-4px)",
          },
          "75%": {
            transform: "translateX(4px)",
          },
        },
        "float-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-100vh)",
          },
        },
        "rainbow-border": {
          "0%, 100%": {
            borderColor: "hsl(45, 100%, 51%)",
          },
          "33%": {
            borderColor: "hsl(180, 100%, 50%)",
          },
          "66%": {
            borderColor: "hsl(328, 100%, 54%)",
          },
        },
        "ticker-scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
        "confetti": {
          "0%": {
            transform: "translateY(0) rotate(0deg)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100vh) rotate(720deg)",
            opacity: "0",
          },
        },
        "flip": {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "50%": {
            transform: "rotateX(90deg)",
          },
          "100%": {
            transform: "rotateX(0deg)",
          },
        },
        "aurora": {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "bounce-in": "bounce-in 1s ease-out",
        "shake": "shake 0.5s ease-in-out",
        "float-up": "float-up 6s linear infinite",
        "rainbow-border": "rainbow-border 4s linear infinite",
        "ticker-scroll": "ticker-scroll 30s linear infinite",
        "confetti": "confetti 3s ease-out forwards",
        "flip": "flip 0.6s ease-in-out",
        "aurora": "aurora 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
