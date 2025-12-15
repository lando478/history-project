import { Navigation } from "@/components/navigation"
import { ConclusionHero } from "@/components/conclusion/conclusion-hero"
import { InteractiveMap } from "@/components/conclusion/interactive-map"
// import { VictoryTimeline } from "@/components/conclusion/victory-timeline"
import { FinalMessage } from "@/components/conclusion/final-message"
import { Button } from "@/components/ui/button"
export default function ConclusionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ConclusionHero />
      <FinalMessage />
      <InteractiveMap />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-background text-lg px-8"
        >
          <a href="/">Return to Exhibit</a>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="text-lg px-8 bg-transparent"
        >
          <a href="#chapters">Explore Chapters</a>
        </Button>
      </div>
      {/* <VictoryTimeline /> */}
    </main>
  );
}
