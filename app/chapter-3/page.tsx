import { Navigation } from "@/components/navigation"
import { ChapterHero } from "@/components/chapter-3/chapter-hero"
import { ChapterReflection } from "@/components/chapter-3/chapter-reflection"
import { ChapterNavigation } from "@/components/chapter-3/chapter-navigation"

export default function Chapter3Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ChapterHero />

      <div className="py-24 max-w-4xl mx-auto px-6">
        <div className="prose prose-invert prose-lg max-w-none space-y-12">
          <section className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground">The Ongoing Struggle</h2>
            <p className="text-muted-foreground leading-relaxed">
              Today, the legacy of nuclear waste persists in communities across America. From the Western Shoshone lands
              surrounding the Nevada Test Site to the neighborhoods along Coldwater Creek in St. Louis, the consequences
              of decades of mismanagement continue to unfold.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Indigenous nations remain on the frontlines, protecting sacred lands from becoming permanent dumping
              grounds while demanding recognition of their sovereignty and the health impacts on their communities.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground">Modern Fallout</h2>
            <p className="text-muted-foreground leading-relaxed">
              The United States produces more than 2,000 metric tons of high-level radioactive waste annually, yet still
              has no permanent disposal solution. Spent nuclear fuel sits in temporary storage at over 70 sites
              nationwide—a testament to policy failure and political gridlock.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Meanwhile, communities continue to bear the health and environmental costs. Cancer clusters, contaminated
              water supplies, and generations of families seeking compensation paint a stark picture of nuclear
              waste&apos;s human toll.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground">Voices of Resistance</h2>
            <p className="text-muted-foreground leading-relaxed">
              Organizations like Just Moms STL, the Western Shoshone Defense Project, and countless other advocacy
              groups continue the fight for environmental justice. They demand accountability, cleanup, and compensation
              for affected communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Their resistance echoes the Abalone Alliance&apos;s declaration decades earlier: nuclear policy cannot be
              divorced from questions of public health, environmental protection, and human rights.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-foreground">Looking Forward</h2>
            <p className="text-muted-foreground leading-relaxed">
              The history of nuclear waste in America reveals a pattern of secrecy, negligence, and the disproportionate
              burdening of marginalized communities. As we move forward, the question remains: will we learn from these
              buried truths, or continue to repeat the mistakes of the past?
            </p>
            <p className="text-accent font-medium text-xl pt-4">
              The waste remains. The struggle continues. The truth demands to be told.
            </p>
          </section>
        </div>
      </div>

      <ChapterReflection />
      <ChapterNavigation prevChapter="/chapter-2" />
    </main>
  )
}
