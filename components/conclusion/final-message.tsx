"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function FinalMessage() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  const quote =
    '"We did it! RECA has passed and was signed into law. We will now be downwinders—dedicated to protecting our families, community, and environment."'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    const interval = setInterval(() => {
      if (index <= quote.length) {
        setDisplayedText(quote.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, quote])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Final Call to Action */}
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            What began as secrets in places like Hanford and Oak Ridge grew into
            public outrage. From Diablo Canyon in California to Yucca Mountain
            and Coldwater Creek, each group work to expose the same truth: that
            what was buried never stayed buried.
          </p>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed text-pretty">
            Communities and tribes continue to fight till this day for cleanup,
            accountability, and recognition by the government. In 2024, after
            years of lots of advocacy, members of Just Moms STL celebrated a
            historic victory as Congress expanded the Radiation Exposure
            Compensation Act to include Missouri, proclaiming on their website
            banner, “We did it! RECA has passed and was signed into law. We will
            now be downwinders—dedicated to protecting our families, community,
            and environment.” Their victory had shown to the world that the
            story of nuclear waste is not over, but it can still be rewritten
            through persistence and collective action.
          </p>

 
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
