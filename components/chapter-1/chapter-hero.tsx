"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function ChapterHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          height: "120%",
          top: "-10%",
        }}
      >
        <img
          src="/chapter-1-hero.jpg"
          alt="Cold War archive aesthetic"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* TEXT */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8"
        style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
      >
        <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
          Chapter 1 — Early Nuclear Assumptions
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          In the early Cold War, U.S. officials believed nuclear waste could be
          hidden, diluted, or engineered away.
        </p>

      </div>
    </section>
  );
}
