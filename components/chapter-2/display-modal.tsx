"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DisplayModalProps {
  isOpen: boolean
  onClose: () => void
  displayNumber: number
  title: string
  subtitle: string
  fullText: string
  imageUrl: string
}

export function DisplayModal({
  isOpen,
  onClose,
  displayNumber,
  title,
  subtitle,
  fullText,
  imageUrl,
}: DisplayModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto mx-6 bg-card border border-border rounded-lg shadow-2xl">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="sticky top-4 left-full ml-4 z-10 bg-background/80 hover:bg-background"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Modal Content */}
        <div className="p-8 md:p-12 space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-accent text-sm font-mono tracking-wider">Display {displayNumber}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
            <p className="text-primary text-xl font-medium">{subtitle}</p>
          </div>

          {/* Image */}
          <div className="relative rounded-lg overflow-hidden">
            <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-[400px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Full Text */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{fullText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
