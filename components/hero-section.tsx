"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
};

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // ✅ Generate particles ONLY on client → hydration-safe
    const generatedParticles = Array.from({ length: 12 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }));

    setParticles(generatedParticles);
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("chapter-1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/eerie-glowing-ocean-horizon-at-dusk-with-cold-war-.jpg"
          alt="Nuclear waste barrels sinking into ocean"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={particle}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">
            Buried Truths
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-muted-foreground mb-8 text-balance">
            The History of Nuclear Waste
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            From government secrecy in the atomic age to Indigenous and
            community resistance today.
          </p>

          {/* Scroll Button */}
          <button
            onClick={handleScroll}
            className="group relative px-8 py-4 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 rounded-lg transition-all duration-300 cursor-pointer"
          >
            <span className="text-accent font-medium">Begin</span>
            <div className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 animate-glow transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
}
