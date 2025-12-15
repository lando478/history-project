// "use client"

// import { useEffect, useRef, useState } from "react"

// interface TimelineEvent {
//   year: string
//   title: string
//   description: string
//   type: "struggle" | "progress" | "victory"
// }

// const events: TimelineEvent[] = [
//   {
//     year: "1940s-1970s",
//     title: "The Secret Years",
//     description:
//       "Nuclear waste from Manhattan Project stored near St. Louis Airport. Contamination spreads to Coldwater Creek.",
//     type: "struggle",
//   },
//   {
//     year: "1980s-1990s",
//     title: "Communities Awaken",
//     description: "Residents begin noticing unusual cancer clusters. Questions about contamination emerge.",
//     type: "progress",
//   },
//   {
//     year: "2000s",
//     title: "Grassroots Organization",
//     description: "Local advocacy groups form, including Just Moms STL, demanding answers and accountability.",
//     type: "progress",
//   },
//   {
//     year: "2010s",
//     title: "National Attention",
//     description: "Media coverage grows. Congressional hearings held. Federal investigations launched.",
//     type: "progress",
//   },
//   {
//     year: "2024",
//     title: "Historic Victory",
//     description: "RECA expansion passes Congress and is signed into law, recognizing Missouri downwinders.",
//     type: "victory",
//   },
// ]

// export function VictoryTimeline() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeIndex, setActiveIndex] = useState<number | null>(null)
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.2 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const getTypeColor = (type: TimelineEvent["type"]) => {
//     switch (type) {
//       case "victory":
//         return "border-accent bg-accent/10"
//       case "progress":
//         return "border-yellow-500 bg-yellow-500/10"
//       case "struggle":
//         return "border-red-500/50 bg-red-500/10"
//     }
//   }

//   const getIconColor = (type: TimelineEvent["type"]) => {
//     switch (type) {
//       case "victory":
//         return "bg-accent text-background"
//       case "progress":
//         return "bg-yellow-500 text-background"
//       case "struggle":
//         return "bg-red-500/80 text-white"
//     }
//   }

//   return (
//     <section ref={sectionRef} className="relative py-32 bg-card/30">
//       <div className="container mx-auto px-6">
//         <div
//           className={`text-center mb-20 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
//           }`}
//         >
//           <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
//             The Path to <span className="text-accent">Justice</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
//             Decades of advocacy, persistence, and collective action led to a historic victory.
//           </p>
//         </div>

//         <div className="relative max-w-5xl mx-auto">
//           {/* Timeline Line */}
//           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-500/50 via-yellow-500/50 to-accent" />

//           {/* Events */}
//           <div className="space-y-16">
//             {events.map((event, index) => (
//               <div
//                 key={index}
//                 className={`relative transition-all duration-700 ${
//                   isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               >
//                 <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
//                   {/* Left side (Desktop) */}
//                   <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-12">
//                     {index % 2 === 0 && (
//                       <div className="text-right">
//                         <div className="font-bold text-2xl mb-2 text-accent">{event.year}</div>
//                         <h3 className="font-serif text-2xl font-bold mb-2">{event.title}</h3>
//                         <p className="text-muted-foreground leading-relaxed">{event.description}</p>
//                       </div>
//                     )}
//                   </div>

//                   {/* Center Icon */}
//                   <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
//                     <div
//                       className={`w-16 h-16 rounded-full ${getIconColor(event.type)} flex items-center justify-center transition-transform ${
//                         activeIndex === index ? "scale-125" : "scale-100"
//                       }`}
//                     >
//                       {event.type === "victory" && (
//                         <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       )}
//                       {event.type === "progress" && (
//                         <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       )}
//                       {event.type === "struggle" && (
//                         <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right side (Desktop) / All content (Mobile) */}
//                   <div className="md:w-1/2 md:pl-12 ml-24 md:ml-0">
//                     {(index % 2 !== 0 || window.innerWidth < 768) && (
//                       <div className={index % 2 === 0 ? "md:hidden" : ""}>
//                         <div className="font-bold text-2xl mb-2 text-accent">{event.year}</div>
//                         <h3 className="font-serif text-2xl font-bold mb-2">{event.title}</h3>
//                         <p className="text-muted-foreground leading-relaxed">{event.description}</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
