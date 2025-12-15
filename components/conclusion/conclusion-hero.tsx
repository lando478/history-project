"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
};

export function ConclusionHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // ✅ generate randomness ONLY on client
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${5 + Math.random() * 10}s`,
    }));

    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/conclusion-hero.jpg"
          alt="Victory celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Floating Particles (hydration-safe) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-float"
            style={particle}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-8 text-balance">
            What Was Buried
            <br />
            <span className="text-accent">Never Stayed Buried</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
