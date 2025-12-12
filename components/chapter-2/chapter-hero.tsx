"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function ChapterHero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src="/chapter-2-hero.jpg"
          alt="Environmental activism and protests"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance animate-fade-in-up">
          Chapter 2 — Public Awakening & Activism: From Rivers on Fire to Nuclear Resistance
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-4xl mx-auto animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          As environmental disasters exposed government failures, grassroots movements rose to challenge the nuclear
          industry and demand accountability for communities bearing the burden of radioactive waste.
        </p>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <span className="text-sm text-muted-foreground tracking-wide">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6 text-accent animate-bounce" />
        </div>
      </div>
    </section>
  )
}
