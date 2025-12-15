"use client"

import { useEffect, useRef, useState } from "react"

interface Location {
  id: string
  name: string
  state: string
  description: string
  status: "active" | "victory" | "ongoing"
  x: number
  y: number
}

const locations: Location[] = [
  {
    id: "hanford",
    name: "Hanford Site",
    state: "Washington",
    description:
      "Cold War plutonium production facility, one of the most contaminated sites in the Western Hemisphere.",
    status: "ongoing",
    x: 22,
    y: 28,
  },
  {
    id: "oak-ridge",
    name: "Oak Ridge",
    state: "Tennessee",
    description:
      "Manhattan Project enrichment facility with ongoing cleanup and community health concerns.",
    status: "active",
    x: 65,
    y: 55,
  },
  {
    id: "diablo-canyon",
    name: "Diablo Canyon",
    state: "California",
    description:
      "Nuclear power plant with contentious waste storage and seismic safety debates.",
    status: "active",
    x: 18,
    y: 52,
  },
  {
    id: "yucca-mountain",
    name: "Yucca Mountain",
    state: "Nevada",
    description:
      "Proposed but abandoned nuclear waste repository following Indigenous resistance and scientific concerns.",
    status: "victory",
    x: 23,
    y: 48,
  },
  {
    id: "coldwater-creek",
    name: "Coldwater Creek",
    state: "Missouri",
    description:
      "Manhattan Project waste contamination site affecting North St. Louis County communities.",
    status: "victory",
    x: 57,
    y: 50,
  },
];

export function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
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

  const getStatusColor = (status: Location["status"]) => {
    switch (status) {
      case "victory":
        return "bg-accent text-background"
      case "active":
        return "bg-yellow-500 text-background"
      case "ongoing":
        return "bg-red-500/80 text-white"
    }
  }



  return (
    <section ref={sectionRef} className="relative py-32 bg-background">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Sites of <span className="text-accent">Resistance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Across the nation, communities have stood up against nuclear contamination. Click each location to learn
            their story.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div
            className={`relative aspect-[4/3] bg-card rounded-2xl border border-border overflow-hidden transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img src="/us-map-outline.jpg" alt="United States map" className="w-full h-full object-cover opacity-30" />

            {locations.map((location, index) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location)}
                className={`absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-150 group ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
                style={{
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transitionDelay: `${400 + index * 100}ms`,
                }}
              >
                <div
                  className={`w-full h-full rounded-full ${
                    location.status === "victory"
                      ? "bg-accent"
                      : location.status === "active"
                        ? "bg-yellow-500"
                        : "bg-red-500/80"
                  } animate-pulse-slow`}
                />
                <div className="absolute inset-0 rounded-full border-2 border-current animate-ping-slow" />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-background border border-border rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {location.name}
                </div>
              </button>
            ))}
          </div>

          {/* Location Info */}
          <div className={`transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            {selectedLocation ? (
              <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-3xl font-bold mb-2">{selectedLocation.name}</h3>
                    <p className="text-muted-foreground">{selectedLocation.state}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{selectedLocation.description}</p>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">Select a Location</h3>
                <p className="text-muted-foreground">
                  Click on any marker to learn about that community's fight against nuclear contamination.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
