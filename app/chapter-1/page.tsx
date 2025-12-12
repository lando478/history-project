import { Navigation } from "@/components/navigation"
import { ChapterHero } from "@/components/chapter-1/chapter-hero"
import { DisplaySection } from "@/components/chapter-1/display-section"
import { ChapterReflection } from "@/components/chapter-1/chapter-reflection"
import { ChapterNavigation } from "@/components/chapter-1/chapter-navigation"

export default function Chapter1Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ChapterHero />

      <div className="py-24 space-y-32">
        <DisplaySection
          displayNumber={1}
          title="Buried Beneath the Waves"
          subtitle="AEC Report, 1954"
          summary="Less than a decade after its creation, the U.S. Atomic Energy Commission declared ocean dumping the most important method for radioactive waste disposal. This classified report revealed Cold War secrecy: waste from weapons production was overwhelming existing technologies, and officials feared public alarm. To AEC scientists, the sea appeared limitless in its ability to dilute contamination—treating waste as an engineering puzzle rather than an environmental crisis."
          fullText="In 1954, less than a decade after the U.S. Atomic Energy Commission (AEC) was created to manage the rapidly expanding nuclear program in the United States, the agency produced a classified report. This report went on to describe ocean dumping as 'the most important method for large-scale disposal' of radioactive waste. The waste came from every step of nuclear weapons production: from plutonium processing at Hanford to uranium enrichment at Oak Ridge and of course leftover materials from the Manhattan Project. All of this created an abundant amount contamination far beyond what existing technologies at the time could safely manage. And so, the secrecy surrounding the document reflected Cold War realities: the sheer volume of waste the United States was producing would have uncovered the scale of its bomb making operations. Many officials feared this would spark public alarm about radioactive contamination. Furthermore, to the AEC scientists and policymakers, the sea appeared to be limitless in its ability to dilute nuclear waste. Waste was treated as an engineering puzzle, not viewed through the lens of an environment or ethical crisis. The report showed just this: the early nuclear optimism, the belief that nuclear waste and radiation could be contained. This source exposes this assumption of the 1950s that nuclear waste could be hidden or engineered away, long before its environmental and human consequences were acknowledged by the public."
          imageUrl="/chapter-1-display-1.jpg"
          animationDirection="up"
        />

        <DisplaySection
          displayNumber={2}
          title="Early Signs of Danger"
          subtitle="Hanford, 1949"
          summary="In 1949, aquatic biologist Lauren R. Donaldson investigated radioactive contamination in the Columbia River near Hanford. His research revealed troubling signs: fish and sediment contained measurable radiation traces, proving that waste was moving through local ecosystems. Yet officials treated his findings as a technical challenge to be handled behind closed doors, keeping contamination hidden from nearby communities during the early Cold War effort."
          fullText="Even before the AEC released its 1954 report, many scientists were researching the dangers of nuclear waste. In 1949, the aquatic biologist Lauren R. Donaldson was brought on by the Manhattan Engineering District to look into how radioactive contamination was affecting aquatic life in the Columbia River which was in close proximity to the Hanford nuclear production site in Washington State. His assignment revealed a growing federal unease at the time: after the bombings of Hiroshima and Nagasaki unveiled the severe biological effects of radiation, the U.S. officials needed to determine whether their own weapon facilities were creating similar risk at home. Donaldson's research revealed troubling signs. Fish and river sediment contained measurable traces of radiation, a clear indicator that waste discharged from Hanford was already moving through local ecosystems. Yet, much like the later AEC ocean dumping report, his findings by officials were treated as more so a technical challenge. The problem is that a 'technical problem' could be handled behind closed doors, allowing the government to keep contamination, and the scale of weapons production hidden from the public. This framing allowed the government to avoid confronting the environmental and health dangers radiation posed to nearby communities. His classified reports stand among the earliest acknowledgments that nuclear waste disposal into community rivers was contaminating local waterways, key evidence the federal government kept this out of public view to avoid scrutiny during the early cold war effort."
          imageUrl="/chapter-1-display-2.jpg"
          animationDirection="left"
        />

        <DisplaySection
          displayNumber={3}
          title="The Push Toward Land Burial"
          subtitle="NRC, 1957"
          summary="Three years after the AEC's ocean dumping assurance, the National Research Council explored geological disposal on land. Their 1957 report examined how trenches and rock formations could isolate nuclear waste for thousands of years. While more openly circulated than earlier classified studies, it still treated waste as an engineering problem rooted in geology—not ethics or environmental justice—burying danger without confronting the communities and future generations who would bear the consequences."
          fullText="Three years after the AEC assured the public that the ocean could safely hold radioactive waste, another branch of the U.S. government turned its attention on land. 1957, the National Research Council, who were a body of scientists that advised the government on science, technology, and medicine published The Disposal of Radioactive Waste on Land. Unlike earlier AEC studies that remained classified, the NRC's findings went on to be circulated more openly through scientific conferences and congressional testimony, giving the public its first glimpses that radioactive waste required long-term containment. The report explored how trenches, rock formations, and the ground soil could isolate nuclear waste from water and humans for hundreds if not thousands of years. The full technical assessments were not widely accessible, however the broader message that geological disposal was being seriously considered, would trickle in to public discussion. This shift occurred at a moment when nuclear waste was becoming a far more urgent issue. Weapons production had expanded rapidly. Debates surrounding a partial test ban raised new awareness of radioactive fallout and its health consequences. Americans were beginning to question not only atmospheric testing but the broader environmental risks of the nuclear industry itself. Like the AEC before it, The NRC treated nuclear waste as an engineering problem, heavily rooted in geology and engineering, but not one in ethics or environmental justice. This report showed a growing desire to control what could no longer be ignored this report showed, yet it still rested on the belief that science alone could bury danger without confronting the communities, landscapes, and future generations who would ultimately deal with the consequences."
          imageUrl="/chapter-1-display-3.jpg"
          animationDirection="right"
        />
      </div>

      <ChapterReflection />
      <ChapterNavigation />
    </main>
  )
}
