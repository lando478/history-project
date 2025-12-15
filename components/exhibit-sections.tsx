"use client";

import { useEffect, useRef, useState } from "react";

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}

function Section({
  title,
  description,
  imageSrc,
  imageAlt,
  index,
}: SectionProps & { imageSrc2?: string; imageAlt2?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <div
      ref={sectionRef}
      className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* IMAGE(S) */}
      <div className={isReversed ? "md:order-2" : ""}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image 1 */}
          <div className="relative group aspect-[4/3] rounded-xl overflow-hidden border border-border/40 shadow-lg">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-transparent"></div>
          </div>

          {/* Image 2 (optional) */}
          {arguments[0].imageSrc2 && (
            <div className="relative group aspect-[4/3] rounded-xl overflow-hidden border border-border/40 shadow-lg">
              <img
                src={arguments[0].imageSrc2}
                alt={arguments[0].imageAlt2}
                className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/40 to-transparent"></div>
            </div>
          )}
        </div>
      </div>

      {/* TEXT */}
      <div className={isReversed ? "md:order-1" : ""}>
        <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide whitespace-pre-line">
          {description}
        </p>
        <div className="mt-6 h-px w-24 bg-accent/40"></div>
      </div>
    </div>
  );
}


export function ExhibitSections() {
  const sections = [
    // SECTION 1 — CASTLE BRAVO
    {
      title: "The Illusion of Control",
      description:
        "1954. The Cold War is in full motion, and America is building bombs faster than ever. Out in the Pacific, the Castle Bravo test is a success, turning the sky white—an explosion so powerful its fallout drifts for hundreds of miles. Back home, the U.S. Atomic Energy Commission releases a quiet report calling the ocean 'the most important method for large-scale disposal' of radioactive waste. To scientists at the time, the sea seems endless.",
      imageSrc: "/castlebravo.jpg",
      imageAlt: "Castle Bravo nuclear explosion",
    },

    // SECTION 2 — EARLY DISPOSAL PRACTICES
    {
      title: "Dumping Grounds of the Atomic Age",
      description:
        "Barrels of radioactive waste rolled into the ocean, thousands and thousands of them, from California to the open Pacific. During the Manhattan Project era, there were no safety standards, no long-term plans. At Oak Ridge, waste flows straight into the Clinch River. In New Mexico, the canyons near Los Alamos become dumping grounds. The government reassured the public that radioactive waste was being handled safely, but this was far from the truth.",
      imageSrc: "/manhattan-project-dumping.jpg",
      imageAlt: "Early nuclear waste dumping near production sites",
    },

    // SECTION 3 — DONALDSON’S RESEARCH
    {
      title: "Early Warnings Beneath the Surface",
      description:
        "Researchers in the 1950s such as aquatic biologist Lauren R. Donaldson at the Hanford Site quietly documented radioactive traces in fish and river sediment near nuclear reactors. Their findings? Radiation was spreading through local ecosystems. But rather than alert the public, officials classified these reports and framed the issue as a technical problem—something to be solved inside laboratories, not as a threat to neighboring communities’ health.",
      imageSrc:
        "/Dr_Lauren_R_Donaldson_and_Dr_Frederick_Hase_Rodenbaugh,_Sr_dissecting_fish,_probably_in_the_mobile_laboratory,_Bikini_Island_(DONALDSON_59).jpeg",
      imageAlt: "Contaminated river ecosystem",
    },

    // SECTION 5 — RISE OF ACTIVISM
    {
      title: "The Rise of Activism",
      description:
        "As contamination spread and secrecy persisted, public trust eroded. In the 1960s and 70s, groups like the Abalone Alliance began challenging the narrative of nuclear containment. Activists organized marches, blockades, and educational campaigns to expose the environmental and human risks of nuclear energy and weapons production. Their work pushed nuclear safety into the national conversation.",
      imageSrc: "/AA.jpg",
      imageAlt: "Environmental protest movement",
    },

    // SECTION 6 — INDIGENOUS RESISTANCE 
    {
      title: "A Future Written in Resistance",
      description:
        "In the decades that followed, the government’s confidence would collide with grassroots groups like the Abalone Alliance that filled the streets, while Native communities near Yucca Mountain fought to protect their land from becoming a burial site for radioactive waste. Each new voice chipped away at the belief that nuclear technology could ever be fully contained. \n\nWhat began as a technical problem became a question of responsibility, a question of what kind of future the country was willing to leave behind. This exhibit follows that journey: from the era of secrets and deception, to the rise of environmental activism throughout the 1970s and 1980s, when citizens demanded to know what was really being buried in America’s soil and water, to the continuing struggles of Indigenous and local communities in the 2000s.",
      imageSrc: "/corbin_yucca_protest.jpg",
      imageAlt: "Indigenous protest against Yucca Mountain repository",
      imageSrc2: "/coldwater.jpg",
      imageAlt2: "Families and activists at Coldwater Creek site",
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-40">
          {sections.map((section, index) => (
            <Section key={index} {...section} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
