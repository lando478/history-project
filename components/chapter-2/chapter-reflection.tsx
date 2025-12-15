"use client";

import { useEffect, useState, useRef } from "react";

export function ChapterReflection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background to-background/80"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div
          className={`w-24 h-1 bg-accent mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />
        <h2
          className={`font-serif text-4xl md:text-5xl font-bold text-foreground transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Chapter Reflection
        </h2>
        <div className="space-y-6">
          <p
            className={`text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            From a burning river to grassroots resistance, this chapter reveals
            how environmental disasters and public awakening transformed nuclear
            waste from a hidden government problem into a national crisis
            demanding accountability and justice.
          </p>
        </div>
      </div>
    </section>
  );
}
