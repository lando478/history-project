"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

interface ChapterCardProps {
  number: number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  delay: number
}

function ChapterCard({ number, title, description, imageSrc, imageAlt, delay }: ChapterCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card
        className="group relative overflow-hidden border-border/50 bg-card hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(85,195,155,0.15)] hover:-translate-y-2 cursor-pointer"
        onClick={() => router.push(`/chapter-${number}`)}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
            <span className="font-serif font-bold text-xl text-accent">{number}</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-serif font-bold text-2xl mb-3 text-balance">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
          <button className="group/btn inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors">
            <span className="font-medium">Enter Chapter {number}</span>
            <svg
              className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Card>
    </div>
  )
}

export function ChapterCards() {
  const chapters = [
    {
      number: 1,
      title: "Early Nuclear Assumptions",
      description: "The Cold War era of nuclear optimism and the birth of radioactive waste disposal practices.",
      imageSrc: "/1950s-atomic-energy-commission-laboratory-with-sci.jpg",
      imageAlt: "Early nuclear research",
    },
    {
      number: 2,
      title: "Public Awakening & Activism",
      description: "How grassroots movements and environmental activists challenged the official narrative.",
      imageSrc: "/1970s-environmental-activists-with-megaphones-at-n.jpg",
      imageAlt: "Environmental activism",
    },
    {
      number: 3,
      title: "Indigenous Resistance & Modern Fallout",
      description: "The ongoing fight for justice and the contemporary consequences of nuclear waste.",
      imageSrc: "/indigenous-land-with-sacred-sites-and-modern-nucle.jpg",
      imageAlt: "Indigenous resistance",
    },
  ]

  return (
    <section id="chapters" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-balance">Explore the Chapters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each chapter unveils another layer of this buried history
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.number} {...chapter} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
