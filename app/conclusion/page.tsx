"use client";

import { Navigation } from "@/components/navigation";
import { ConclusionHero } from "@/components/conclusion/conclusion-hero";
import { InteractiveMap } from "@/components/conclusion/interactive-map";
// import { VictoryTimeline } from "@/components/conclusion/victory-timeline"
import { FinalMessage } from "@/components/conclusion/final-message";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ConclusionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ConclusionHero />
      <FinalMessage />
      <InteractiveMap />

      {/* TIMELINE (OUTSIDE FLEX — IMPORTANT) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold mb-10">Timeline</h2>

        <div className="relative pl-8">
          {/* Glowing vertical line */}
          <div className="absolute left-3 top-0 w-1 h-full bg-emerald-500/20 rounded-full" />

          {/* BEGIN */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
            className="relative mb-16"
          >
            <div className="absolute -left-6 top-1 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_rgba(34,255,94,0.6)]" />

            <h3 className="text-2xl font-medium">
              1940s–1960s: Early Waste Disposal
            </h3>
            <p className="text-gray-400 mt-1">
              Early technocratic confidence and ocean dumping, Manhattan Project
              waste, AEC reports, Donaldson research, NRC early geological
              studies.
            </p>
            <p className="text-xs uppercase text-emerald-400 mt-2 tracking-wide">
              BEGIN
            </p>
          </motion.div>

          {/* MIDDLE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mb-16"
          >
            <div className="absolute -left-6 top-1 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_rgba(34,255,94,0.6)]" />

            <h3 className="text-2xl font-medium">
              1970s–1980s: Rise of Environmental Activism and Regulation
            </h3>
            <p className="text-gray-400 mt-1">
              Rise of activism (Abalone Alliance), EPA creation, Nuclear Waste
              Policy Act (1982), repository sitings.
            </p>
            <p className="text-xs uppercase text-emerald-400 mt-2 tracking-wide">
              MIDDLE
            </p>
          </motion.div>

          {/* END */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mb-16"
          >
            <div className="absolute -left-6 top-1 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_10px_2px_rgba(34,255,94,0.6)]" />

            <h3 className="text-2xl font-medium">
              1980s–Present Day: Ongoing Impacts & Community Resistance
            </h3>
            <p className="text-gray-400 mt-1">
              Coldwater Creek activism, Yucca Mountain withdrawal (2010),
              Indigenous opposition (Paiute / Western Shoshone)
            </p>
            <p className="text-xs uppercase text-emerald-400 mt-2 tracking-wide">
              End
            </p>
          </motion.div>
        </div>
      </section>

      {/* TOP BUTTON */}
      <div className="flex justify-center py-8">
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-background text-lg px-8"
        >
          <a href="/">Return to Exhibit</a>
        </Button>
      </div>

      {/* BOTTOM BUTTON */}
      <div className="flex justify-center pb-16">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="text-lg px-8 bg-transparent"
        >
          <a href="/#chapters">Explore Chapters</a>
        </Button>
      </div>

      {/* <VictoryTimeline /> */}
    </main>
  );
}
