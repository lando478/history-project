import { Navigation } from "@/components/navigation";
import { ChapterHero } from "@/components/chapter-1/chapter-hero";
import { DisplaySection } from "@/components/chapter-1/display-section";
import { ChapterReflection } from "@/components/chapter-1/chapter-reflection";
import { ChapterNavigation } from "@/components/chapter-1/chapter-navigation";

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
          summary="In 1954, a classified AEC report quietly named the ocean as America’s primary solution to its growing radioactive waste crisis. The first major plan for America’s radioactive waste wasn’t public, debated, or even ethical. Expand to learn more."
          fullText=" In 1954, less than a decade after the U.S. Atomic Energy Commission (AEC) was created to manage the rapidly expanding nuclear program in the United States, the agency produced a classified report. This report went on to describe ocean dumping as “the most important method for large-scale disposal” of radioactive waste. The waste came from every step of nuclear weapons production: from plutonium processing at Hanford to uranium enrichment at Oak Ridge and of course leftover materials from the Manhattan Project. All of this created an abundant amount of contamination far beyond what existing technologies at the time could safely manage. And so, the secrecy surrounding the document reflected Cold War realities: the sheer volume of waste the United States was producing would have uncovered the scale of its bomb making operations. Many officials feared this would spark public alarm about radioactive contamination.

Furthermore, to the AEC scientists and policymakers, the sea appeared to be limitless in its ability to dilute nuclear waste. Waste was treated as an engineering puzzle, not viewed through the lens of an environment or ethical crisis. The report showed just this: the early nuclear optimism, the belief that nuclear waste and radiation could be contained. This source exposes this assumption of the 1950s that nuclear waste could be hidden or engineered away, long before its environmental and human consequences were acknowledged by the public. 
"
          imageUrl="/aecdump.png"
          sourceImageUrl="/Screenshot 2025-12-12 at 10.46.54.png"
          animationDirection="up"
          downloadTarget="/downloadables/display1.pdf"
        />

        <DisplaySection
          displayNumber={2}
          title="Early Signs of Danger"
          subtitle="Donaldson's Hanford Report, 1949"
          summary="A 1949 investigation detected radiation in fish and river sediment near Hanford, proof of spreading contamination. Instead of warning communities, officials sealed the findings away."
          fullText="Even before the AEC released its 1954 report, many scientists were researching the dangers of nuclear waste.  In 1949, the aquatic biologist Lauren R. Donaldson was brought on by the Manhattan Engineering District to look into how radioactive contamination was affecting aquatic life in the Columbia River which was in close proximity to the Hanford nuclear production site in Washington State. After the bombings of Hiroshima and Nagasaki unveiled the severe biological effects of radiation, the U.S. officials needed to determine whether their own weapon facilities were creating similar risk at home. Donaldson’s research revealed troubling signs. Fish and river sediment contained measurable traces of radiation, a clear indicator that waste discharged from Hanford was already moving through local ecosystems. Yet, much like the later AEC ocean dumping report, his findings by officials were treated as more so a technical challenge. The problem is that a “technical problem” could be handled behind closed doors, allowing the government to keep contamination, and the scale of weapons production hidden from the public. This framing allowed the government to avoid confronting the environmental and health dangers radiation posed to nearby communities.  His classified reports stand among the earliest acknowledgments that nuclear waste disposal into community rivers was contaminating local waterways, key evidence the federal government kept this out of public view to avoid scrutiny during the early cold war effort. "
          imageUrl="/handford.jpeg"
          sourceImageUrl="/Screenshot 2025-12-12 at 10.55.45.png"
          animationDirection="left"
          downloadTarget="/downloadables/display2.pdf"
        />

        <DisplaySection
          displayNumber={3}
          title="Disposal of Radioactive Waste on Land"
          subtitle="National Research Council, 1957"
          summary="By 1957, scientists were no longer looking to the ocean for handling nuclear waste.
The National Research Council proposed radioactive waste to be buried in trenches and rock formations, a plan that promised containment."
          fullText="Three years after the AEC assured the public that the ocean could safely hold radioactive waste, another branch of the U.S. government turned its attention on land. 1957, the National Research Council, who were a body of scientists that advised the government on science, technology, and medicine published The Disposal of Radioactive Waste on Land. Unlike earlier AEC studies that remained classified, the NRC's findings went on to be circulated more openly through scientific conferences and congressional testimony, giving the public its first glimpses that radioactive waste required long-term containment.

The report explored how trenches, rock formations, and the ground soil could isolate nuclear waste from water and humans for hundreds if not thousands of years. The full technical assessments were not widely accessible, however the broader message that geological disposal was being seriously considered, would trickle in to public discussion. This shift occurred at a moment when nuclear waste was becoming a far more urgent issue. Weapons production had expanded rapidly. Debates surrounding a partial test ban raised new awareness of radioactive fallout and its health consequences. Americans were beginning to question not only atmospheric testing but the broader environmental risk of the nuclear industry itself.

Like the AEC before it, the NRC treated nuclear waste as an engineering problem, heavily rooted in geology and engineering, but not one in ethics or environmental justice. This report showed a growing desire to control what could no longer be ignored, yet it still rested on the belief that science alone could bury danger without confronting the communities, landscapes, and future generations who would ultimately deal with the consequences."
          imageUrl="/Screenshot 2025-12-12 at 10.59.14.png"
          sourceImageUrl="/Screenshot 2025-12-12 at 10.59.14.png"
          animationDirection="right"
          downloadTarget="https://www.nationalacademies.org/publications/10294"
        />
      </div>

      <ChapterReflection />
      <ChapterNavigation
        nextChapter="/chapter-2"
        nextLabel="Next Chapter: Public Awakening & Activism"
      />
    </main>
  );
}
