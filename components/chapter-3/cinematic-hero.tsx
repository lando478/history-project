"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function CinematicHero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setScrollY(window.scrollY)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 800)
  const scale = 1 + scrollY / 2000

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        <Image src="/chapter-3-hero.jpg" alt="Chapter 3: The Ongoing Struggle" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <div
          className="space-y-8"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: opacity,
          }}
        >
          <div className="space-y-4">
            <p className="text-accent text-sm tracking-[0.3em] uppercase font-medium">Chapter Three</p>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground">
              The Ongoing
              <br />
              <span className="text-accent">Struggle</span>
            </h1>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Today, the legacy of nuclear waste persists in communities across America.
            <br />
            {/* From resistance to revelation, the fight continues. */}
          </p>

          <div className="pt-8">
            <div className="inline-block px-6 py-3 border border-accent/30 rounded-full backdrop-blur-sm">
              <p className="text-accent text-sm">Scroll to explore the final chapter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
