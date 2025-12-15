import { HeroSection } from "@/components/hero-section"
import { ExhibitSections } from "@/components/exhibit-sections"
import { ChapterCards } from "@/components/chapter-cards"
import { FinalCallout } from "@/components/final-callout"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <section id="chapter-1">{
      <ExhibitSections />
        }</section>

      <ChapterCards />
      <FinalCallout />
    </main>
  );
}
