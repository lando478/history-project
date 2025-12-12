"use client"

import { useEffect, useRef, useState } from "react"

interface SectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  index: number
}

function Section({ title, description, imageSrc, imageAlt, index }: SectionProps) {
  const [isVisible, setIsVisible] = useState(false)
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

  const isReversed = index % 2 === 1

  return (
    <div
      ref={sectionRef}
      className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={isReversed ? "md:order-2" : ""}>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-border/50">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay" />
        </div>
      </div>
      <div className={isReversed ? "md:order-1" : ""}>
        <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4 text-balance">{title}</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function ExhibitSections() {
  const sections = [
    {
      title: "The Illusion of Control",
      description:
        "The Castle Bravo test turns the sky white. Fallout drifts for hundreds of miles. Back home, officials praise the ocean as the perfect dumping ground—vast, diluting, invisible.",
      imageSrc: "/1950s-nuclear-test-mushroom-cloud-over-pacific-oce.jpg",
      imageAlt: "Nuclear test mushroom cloud",
    },
    {
      title: "Early Warnings Beneath the Surface",
      description:
        "Scientists discover radiation seeping into rivers and sediment near nuclear plants. Fish carry the evidence in their bones. But these warnings remain classified—written off as technical issues.",
      imageSrc: "/underwater-scene-showing-radioactive-contamination.jpg",
      imageAlt: "Radioactive contamination underwater",
    },
    {
      title: "The Story the Government Hid",
      description:
        'Declassified documents reveal decades of deliberate concealment. What the public was told about "safe disposal" bore little resemblance to what scientists were finding.',
      imageSrc: "/vintage-classified-government-documents-with-redac.jpg",
      imageAlt: "Classified government documents",
    },
    {
      title: "The Rise of Activism",
      description:
        "In the 1960s and 70s, grassroots movements begin connecting the dots. Environmentalists demand transparency. Communities near disposal sites organize, refuse to be silenced.",
      imageSrc: "/1970s-environmental-protest-with-people-holding-si.jpg",
      imageAlt: "Environmental activists protesting",
    },
    {
      title: "A Future Written in Resistance",
      description:
        "Indigenous nations confront the federal narrative head-on. Their lands have borne the brunt of nuclear testing and waste storage. Their resistance writes a new chapter in this history.",
      imageSrc: "/indigenous-protesters-at-nuclear-waste-site-with-t.jpg",
      imageAlt: "Indigenous resistance",
    },
  ]

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-32">
          {sections.map((section, index) => (
            <Section key={index} {...section} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
