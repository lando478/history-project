"use client"

import { useEffect, useRef, useState } from "react"

export function FinalCallout() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  const fullText = "History was hidden. This exhibit digs it back up."

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [isVisible, displayedText, fullText])

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full animate-glow" />

          <div className="relative">
            <blockquote className="font-serif text-3xl md:text-5xl font-bold mb-8 text-balance">
              <span className="text-foreground">{displayedText}</span>
              <span className="inline-block w-1 h-12 bg-accent ml-1 animate-pulse" />
            </blockquote>

            <p className="text-xl text-muted-foreground mb-12 text-pretty">
              Follow the buried story—chapter by chapter.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 mt-24 pt-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2025 Buried Truths Digital Museum</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Sources
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Credits
            </a>
          </div>
        </div>
      </footer>
    </section>
  )
}
