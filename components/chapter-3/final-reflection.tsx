"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function FinalReflection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chapter-3-reflection.jpg"
          alt="Final Reflection"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/50" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--accent), 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(var(--accent), 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-12">
        <div
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Chapter Summary */}
          <div className="space-y-6">
            <div className="inline-block px-6 py-3 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <p className="text-accent text-sm font-medium tracking-wider">
                Chapter Reflection
              </p>
            </div>

            <p className="font-serif text-2xl md:text-3xl text-foreground/90 leading-relaxed italic max-w-3xl mx-auto">
              From indigenous resistance at Yucca Mountain to the ongoing
              tragedy of Coldwater Creek, this chapter reveals how nuclear waste
              policy failures continue to devastate communities—demanding that
              we confront this moral crisis with accountability and action.
            </p>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="p-8 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">
                Sites storing nuclear waste across America
              </div>
            </div>
            <div className="p-8 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-5xl font-bold text-accent mb-2">0</div>
              <div className="text-muted-foreground">
                Permanent disposal solutions operational
              </div>
            </div>
            <div className="p-8 rounded-lg bg-card/50 border border-border backdrop-blur-sm">
              <div className="text-5xl font-bold text-accent mb-2">70+</div>
              <div className="text-muted-foreground">
                Years communities fighting for justice
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
