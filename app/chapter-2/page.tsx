import { Navigation } from "@/components/navigation"
import { ChapterHero } from "@/components/chapter-2/chapter-hero"
import { DisplaySection } from "@/components/chapter-2/display-section"
import { ChapterReflection } from "@/components/chapter-2/chapter-reflection"
import { ChapterNavigation } from "@/components/chapter-2/chapter-navigation"

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
          summary="The Cuyahoga River in Cleveland caught fire in 1969, exposing decades of industrial waste dumping. This disaster forced Americans to confront environmental realities, leading to the creation of the EPA in 1970."
          fullText="It was the summer of 1969 when the unthinkable happened: the Cuyahoga River in Cleveland caught fire– again. For decades, Americans had been told that waste could be contained, diluted, or forgotten, whether in the rivers of their communities or in the sea. However, factories had dumped so much oil and industrial waste directly into the water for so long that it created a slick extremely thick and flammable that even a stray spark could set the river ablaze. Watching a river ignite repeatedly crumbled the belief that pollution was truly handled. The disaster was of great shock to the public and an embarrassment to lawmakers. The Cuyahoga was a turning point. It forced Americans to face the environmental realities that no longer can toxic waste, whether chemical or radioactive, be ignored. This moment lead to a broader shift in public consciousness, revealing that environmental degradation was inseparable from public health in ways many have never recognized before. The government had no option but to face the decades of environmental neglect. One year later after the fire, responding to this national reckoning, President Richard Nixon announced Reorganization Plan No. 3. This plan created the Environmental Protection Agency, also known as the EPA. With this agency, for the first time, the United States brought pollution, public health and environmental protection all under a single umbrella. It was a victory that was small, a vow that the government would no longer look away to environmental destruction it had allowed to accumulate in America's rivers, air, and soil."
          imageUrl="/chapter-2-display-4.jpg"
          animationDirection="up"
        />

        <DisplaySection
          displayNumber={5}
          title="Rise of Resistance"
          subtitle="Abalone Alliance Declaration (1978)"
          summary="The Abalone Alliance formed in 1977 to stop California's Diablo Canyon nuclear plant. Through activism and their Declaration of Nuclear Resistance, they reframed nuclear energy as a community safety and environmental justice issue."
          fullText="The creation of the EPA was a step forward, but for many Americans, it just was not enough to address the dangers of nuclear weapons production and the growing crisis of nuclear waste. Public concern grew in the 70s, especially how nuclear waste would be stored long-term. It was in this time that the Abalone Alliance formed in California in 1977. They had a clear goal, to completely stop the Pacific Gas and Electric Company's (PG&E) Diablo Canyon nuclear power plant near San Luis Obispo. The Abalone Alliance was not protesting waste dumping directly. However, their activism was powerful because it amplified a broader awareness of the nuclear industry environmental footprint. Thousands and thousands of Californians feared that a plant built along earthquake prone fault lines would put their communities and ecosystem in danger to radioactive contamination. Through taking part in Marches, sit-ins, and blockades, these activist transformed fear into action. Their 'Declaration of Nuclear Resistance' had called not only for an end to nuclear power, but also demanded investment into other safer, renewable energy sources. By reframing nuclear energy as a matter of community safety and environmental justice, the Abalone Alliance helped shift the nuclear debate out of government laboratories. It now made its way into family living rooms, into classrooms and streets across the country. Their work made it clear that nuclear power was not just a technical issue because their message showed it touched so many lives and affected peoples health. Change was desperately needed so the futures of people living near reactors and waste sites are safe. In doing so, the Alliance became a catalyst for a new era of public engagement with nuclear policy."
          imageUrl="/chapter-2-display-5.jpg"
          animationDirection="left"
        />

        <DisplaySection
          displayNumber={6}
          title="Catalyst for Uprise"
          subtitle="Nuclear Waste Policy Act of 1982"
          summary="By the early 1980s, nuclear waste from power plants and weapons programs demanded federal action. Congress passed the Nuclear Waste Policy Act of 1982, but it sparked decades of conflict with Indigenous communities."
          fullText="By the early 1980s, the issue of nuclear waste could no longer be swept under the rug. Nuclear waste comes from primarily two major sources: commercial nuclear power plants, which produce spent fuel, and the federal government's nuclear weapons program, which generates highly radioactive byproducts from plutonium and uranium production. Together, these industries created enormous volumes of waste with no permanent place to go. As the scale of the problem grew clearer, public anxiety continued to intensify. Protest led by the Abalone Alliance and various other groups of the time had pushed concerns about nuclear safety and radioactive contamination into the national spotlight. Communities were demanding answers and accountability, and by 1983 the government responded. Congress would go on to pass the Nuclear Waste Policy Act of 1982, which was a federal law that set out to create a long term plan for storing high level radioactive waste and spent nuclear fuel. The Department of Energy (DOE), local state governments, and Native nations would all need to work together to select permanent repository sites. On one end, this law would promised accountability and to ensure safety for future generations of Americans to come. Yet, this would go on to set the stage for conflict with the Native American groups of Yucca Mountain which sparked decades of debate and push back."
          imageUrl="/chapter-2-display-6.jpg"
          animationDirection="right"
        />

        <DisplaySection
          displayNumber={7}
          title="Tribal Resistance"
          subtitle="Concerns about the Yucca Mountain Repository (2002)"
          summary="Yucca Mountain was proposed as the nation's nuclear waste solution, but to Indigenous communities, it was a threat. This 2002 study captured the voices of the Moapa Band of Paiutes and Las Vegas Paiute Colony expressing deep distrust and cultural concerns."
          fullText="Yucca Mountain was intended to be the nation's solution to finally have a deep geological home for high-level nuclear waste. Yet, to indigenous communities who have lived on this land for generations on generations, it was a threat to their way of life. This 2002 ethnographic study, Tribal Concerns about the Yucca Mountain Repository, gathered the many concerned voices of the Moapa Band of Paiutes and the Las Vegas Paiute Colony. The report aimed to help federal planners understand how the Yucca mountain repository would affect Native lands, culture, and spirituality. For these groups, the land was not just property, it was more. One respondent described their fear of the proposed solution plainly: 'Even if they say it is safe, I do not want it here. It should go elsewhere. We produce not even one percent of [nuclear waste] in Nevada.' The study revealed deep anxiety, distrust and frustration toward the federal government's plans."
          imageUrl="/chapter-2-display-7.jpg"
          animationDirection="up"
        />

        <DisplaySection
          displayNumber={8}
          title="Walking Away"
          subtitle="U.S. Department of Energy's Motion to Withdraw from Yucca Mountain (2010)"
          summary="In 2010, after decades and billions of dollars, the DOE abandoned Yucca Mountain. Scientific, geological, and ethical concerns made it untenable, but nuclear waste continues to pile up nationwide with no permanent solution."
          fullText="In 2010, after decades of political debate and billions of dollars spent, the Department of Energy (DOE) decided it would be best walk away from Yucca Mountain, the nation's only proposed long lasting repository for nuclear waste. Under President Barack Obama, the administration filed a motion to withdraw the project's license. Yucca Mountain was proposed over 20 years ago when this motion to withdrawal was initiated. Scientific understanding had advanced a great ordeal since the 80s with evidence suggesting Yucca Mountain is just not a 'workable option'. Studies were conducted and they revealed major concerns. First, the site's fractured volcanic rock could allow water to infiltrate waste canisters. Two, seismic activity posed long term safety risks. Then most importantly, the surrounding land held deep cultural and spiritual significance for the Western Shoshone and Paiute peoples. Continuing Licensing would just waste public funds the DOE argued. Together, these scientific, geological, and ethical barriers made the repository increasingly untenable. However this was met with push back by the Nuclear Regulatory Commission which oversees nuclear safety and licensing. They ruled that the government simply could not abandon a project mandated by law. What followed since 2010 would be years of political stalling. High-level nuclear waste continues to pile up across the country at more than 70 sites primarily at nuclear power plants. Most of it sits in steel-lined spent fuel pools or in dry cask storage, intended as temporary solutions but now used indefinitely. Yucca Mountain did not symbolize progress to the nuclear waste management issue. Instead, this instance demonstrated the federal government's continued struggle to contain the hazards it produced, alongside significant governmental resistance with the aim at protecting the environments and communities who encompassed them. One of the world's largest producers of radioactive material with no permanent solution."
          imageUrl="/chapter-2-display-8.jpg"
          animationDirection="left"
        />

        <DisplaySection
          displayNumber={9}
          title="A Moral Failure"
          subtitle="Coldwater Creek and the Cost of Contamination (2024)"
          summary="Coldwater Creek in St. Louis was contaminated with Manhattan Project waste from the 1940s-70s. Families like Marie Farr's unknowingly played in poisoned waters. Today, advocacy groups like Just Moms STL fight for justice and compensation."
          fullText="'This is a moral failure,' said Congresswoman Cori Bush, responding to the decades of long contamination of Coldwater Creek in North St. Louis County. The pollution has traces back to the Manhattan Project, when waste from World War II bomb production was stored and mishandled near St. Louis Lambert Airport from the 1940s to the 1970s. Flooding and storm runoff carried radioactive material downstream into nearby neighborhoods, where it would come in contact with the everyday lives of local families. Families like Marie Farr's, whose story is anchored in this 2024 PBS report, spent years in their community. They enjoyed family outings like fishing and playing in the nearby Coldwater creek. However, it was unknown to them of the poison running through the very creeks and soil where they built memories. Cancers and extremely rare illnesses would spread through their community. Tragedy hit the home of Maries, where she lost both her husband and her nineteen-year-old daughter to cancer linked to the contaminated creek. In an effort to stand up against the injustice, residents, advocacy groups, and elected officials banded together in making a serious effort to push for cleanup in their communities and demand accountability by the U.S. government for their wrongdoings. Just Moms STL was pivotal in this effort who lived by their mission to protect families and the future generations of St. Louis from exposure to radioactive and toxic waste. These groups are continuing this fight still to this day, advocating for inclusion under the Radiation Exposure Compensation Act of 1990, which would ensure these families would be compensated for the injustices they had endured. Their work illustrates that the dangers of nuclear waste are not sealed in the past, but they persist in the lives of those who still live with its consequences."
          imageUrl="/chapter-2-display-9.jpg"
          animationDirection="right"
        />
      </div>

      <ChapterReflection />
      <ChapterNavigation prevChapter="/chapter-1" nextChapter="/chapter-3" />
    </main>
  )
}
