"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { DisplayModal } from "./display-modal"

interface DisplaySectionProps {
  displayNumber: number
  title: string
  subtitle: string
  summary: string
  fullText: string
  imageUrl: string
  animationDirection: "up" | "left" | "right"
}

export function DisplaySection({
  displayNumber,
  title,
  subtitle,
  summary,
  fullText,
  imageUrl,
  animationDirection,
}: DisplaySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animationDirection) {
      case "up":
        return "opacity-100 translate-y-0 transition-all duration-1000 ease-out"
      case "left":
        return "opacity-100 translate-x-0 transition-all duration-1000 ease-out"
      case "right":
        return "opacity-100 translate-x-0 transition-all duration-1000 ease-out"
    }
  }

  const getInitialTransform = () => {
    switch (animationDirection) {
      case "up":
        return "translate-y-12"
      case "left":
        return "-translate-x-12"
      case "right":
        return "translate-x-12"
    }
  }

  return (
    <>
      <div ref={sectionRef} className={`max-w-6xl mx-auto px-6 ${getInitialTransform()} ${getAnimationClass()}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-accent text-sm font-mono tracking-wider">Display {displayNumber}</span>
              <h2 className="font-serif text-4xl font-bold text-foreground">{title}</h2>
              <p className="text-primary text-lg font-medium">{subtitle}</p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">{summary}</p>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium px-8"
            >
              View Full Display
            </Button>
          </div>
        </div>
      </div>

      <DisplayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        displayNumber={displayNumber}
        title={title}
        subtitle={subtitle}
        fullText={fullText}
        imageUrl={imageUrl}
      />
    </>
  )
}
