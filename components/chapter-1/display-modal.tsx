"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative z-10 bg-card border border-border rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-20" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>

        {/* Image */}
        <div className="relative h-[300px] overflow-hidden rounded-t-lg">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <span className="text-accent text-sm font-mono tracking-wider">Display {displayNumber}</span>
            <h2 className="font-serif text-4xl font-bold text-foreground">{title}</h2>
            <p className="text-primary text-xl font-medium">{subtitle}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">{fullText}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center px-8 pb-8">
          <Button variant="outline" disabled={displayNumber === 1} className="gap-2 bg-transparent">
            <ChevronLeft className="w-4 h-4" />
            Previous Display
          </Button>

          <Button variant="outline" disabled={displayNumber === 3} className="gap-2 bg-transparent">
            Next Display
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
