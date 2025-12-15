import { Navigation } from "@/components/navigation";
import { ChapterHero } from "@/components/chapter-2/chapter-hero";
import { DisplaySection } from "@/components/chapter-2/display-section";
import { ChapterReflection } from "@/components/chapter-2/chapter-reflection";
import { ChapterNavigation } from "@/components/chapter-2/chapter-navigation";

export default function Chapter2Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ChapterHero />

      {/* Display Sections */}
      <div className="py-24 space-y-32">
        <DisplaySection
          displayNumber={4}
          title="A River on Fire"
          subtitle="Creation of the EPA (1970)"
          summary="When the Cuyahoga River erupted into flames in 1969, it shattered America’s belief that pollution was really under control, forcing the nation to confront decades of environmental neglect."
          fullText="It was the summer of 1969 when the unthinkable happened: the Cuyahoga River in Cleveland caught fire– again. For decades, Americans had been told that waste could be contained, diluted, or forgotten, whether in the rivers of their communities or in the sea.  However, factories had dumped so much oil and industrial waste directly into the water for so long that it created a slick extremely thick and flammable that even a stray spark could set the river ablaze. Watching a river ignite repeatedly crumbled the belief that pollution was truly handled. The disaster was of great shock to the public and an embarrassment to lawmakers. The Cuyahoga was a turning point. It forced Americans to face the environmental realities that no longer can toxic waste, whether chemical or radioactive, be ignored. This moment led to a broader shift in public consciousness, revealing that environmental degradation was inseparable from public health in ways many have never recognized before. 
The government had no option but to face the decades of environmental neglect.  One year later after the fire, responding to this national reckoning, President Richard Nixon announced Reorganization Plan No. 3. This plan created the Environmental Protection Agency, also known as the EPA.  With this agency, for the first time, the United States brought pollution, public health and environmental protection all under a single umbrella. It was a victory that was small, a vow that the government would no longer look away from environmental destruction it had allowed to accumulate in America’s rivers, air, and soil."
          imageUrl="/fire.png"
          sourceImageUrl="/epa.png"
          animationDirection="up"
          downloadTarget="/downloadables/display4.pdf"
        />

        <DisplaySection
          displayNumber={5}
          title="Rise of Resistance"
          subtitle="Abalone Alliance Declaration (1978)"
          summary="The Abalone Alliance ignited a statewide movement, transforming nuclear power from a technical debate into a fight for community safety and environmental justice."
          fullText="The creation of the EPA was a step forward, but for many Americans, it just was not enough to address the dangers of nuclear weapons production and the growing crisis of nuclear waste. Public concern grew in the 70s, especially how nuclear waste would be stored long-term. It was in this time that the Abalone Alliance formed in California in 1977. They had a clear goal, to completely stop the Pacific Gas and Electric Company’s (PG&E) Diablo Canyon nuclear power plant near San Luis Obispo. 
The Abalone Alliance was not protesting waste dumping directly. However, their activism was powerful because it amplified a broader awareness of the nuclear industry environmental footprint. Thousands and thousands of Californians feared that a plant built along earthquake prone fault lines would put their communities and ecosystem in danger of radioactive contamination. Through taking part in marches, sit-ins, and blockades, these activists transformed fear into action. Their “Declaration of Nuclear Resistance” had called not only for an end to nuclear power, but also demanded investment into other safer, renewable energy sources.
By reframing nuclear energy as a matter of community safety and environmental justice, the Abalone Alliance helped shift the nuclear debate out of government laboratories. It now made its way into family living rooms, into classrooms and streets across the country. Their work made  it clear that nuclear power was not just a technical issue  because their message showed it touched  so many lives and  affected peoples health. Change was desperately needed so the futures of people living near reactors and waste sites are safe. In doing so, the Alliance became a catalyst for a new era of public engagement with nuclear policy."
          imageUrl="/Diablo-big-rally-by-Jessica-Collett-june-30-1979.jpg"
          sourceImageUrl="/AASource.png"
          animationDirection="left"
          downloadTarget="/downloadables/display5.pdf"
        />

        <DisplaySection
          displayNumber={6}
          title="Catalyst for Uprise"
          subtitle="Nuclear Waste Policy Act of 1982"
          summary="Congress finally created a national plan for nuclear waste in 1982, but the law sparked battles with Indigenous communities that still shape the debate today."
          fullText="By the early 1980s, the issue of nuclear waste could no longer be swept under the rug. Nuclear waste comes primarily from two major sources: commercial nuclear power plants, which produce spent fuel, and the federal government’s nuclear weapons program, which generates highly radioactive byproducts from plutonium and uranium production. Together, these industries created enormous volumes of waste with no permanent place to go.||As the scale of the problem grew clearer, public anxiety continued to intensify. Protests led by the Abalone Alliance and various other groups of the time had pushed concerns about nuclear safety and radioactive contamination into the national spotlight. Communities were demanding answers and accountability, and by 1983 the government responded. Congress would go on to pass the Nuclear Waste Policy Act of 1982, which was a federal law that set out to create a long term plan for storing high level radioactive waste and spent nuclear fuel. The Department of Energy (DOE), local state governments, and Native nations would all need to work together to select permanent repository sites.||On one end, this law would promise accountability and to ensure safety for future generations of Americans to come. Yet, this would go on to set the stage for conflict with the Native American groups of Yucca Mountain which sparked decades of debate and push back."
          imageUrl="/nuclearwasteact.png"
          sourceImageUrl="/nuclearwasteact.png"
          animationDirection="right"
          downloadTarget="/downloadables/display6.pdf"
        />
      </div>

      <ChapterReflection />

      <ChapterNavigation
        prevChapter="/chapter-1"
        prevLabel="Previous Chapter: Secrecy & the Nuclear Foundations"
        nextChapter="/chapter-3"
        nextLabel="Next Chapter: Indigenous Resistance & Environmental Justice"
      />
    </main>
  );
}
