import { Navigation } from "@/components/navigation";
import { CinematicHero } from "@/components/chapter-3/cinematic-hero";
import { ImmersiveDisplay } from "@/components/chapter-3/immersive-display";
import { FinalReflection } from "@/components/chapter-3/final-reflection";
import { ChapterNavigation } from "@/components/chapter-3/chapter-navigation";

export default function Chapter3Page() {
  const displays = [
    {
      number: 7,
      title: "Tribal Resistance",
      subtitle: "Concerns about the Yucca Mountain Repository (2002)",
      image: "/9469727099_3dec82c9aa_o.png",
      sourceImage: "/Screenshot 2025-12-13 at 19.56.58.png",
      quote:
        "Even if they say it is safe, I do not want it here. It should go elsewhere. We produce not even one percent of [nuclear waste] in Nevada.",
      quoteAttribution: "Moapa Band of Paiutes Respondent",
      overview:
        "Yucca Mountain was intended to be the nation's solution to finally have a deep geological home for high-level nuclear waste. Yet, to indigenous communities who have lived on this land for generations on generations, it was a threat to their way of life.",
      fullText: `This 2002 ethnographic study, Tribal Concerns about the Yucca Mountain Repository, gathered the many concerned voices of the Moapa Band of Paiutes and the Las Vegas Paiute Colony. The report aimed to help federal planners understand how the Yucca Mountain repository would affect Native lands, culture, and spirituality. For these groups, the land was not just property; it was more. 

The study revealed deep anxiety, distrust and frustration toward the federal government's plans. Indigenous voices demanded recognition of their sovereignty and the sacred nature of the land that would be forever altered by nuclear waste storage.`,
      downloadFilename: "/downloadables/display7.pdf",
      additionalImages: ["/yucca3.jpg", "/yucca2.png", "/yucca1.jpg"],
    },
    {
      number: 8,
      title: "Motion to Withdraw",
      subtitle:
        "U.S. Department of Energy's Motion to Withdraw from Yucca Mountain (2010)",
      image: "/chapter-3-display-8.jpg",
      sourceImage: "/Screenshot 2025-12-14 at 11.23.43.png",
      quote: "Yucca Mountain is not a workable option.",
      quoteAttribution: "U.S. Department of Energy, 2010",
      overview:
        "In 2010, after decades of political debate and billions of dollars spent, the Department of Energy decided it would be best to walk away from Yucca Mountain, the nation's only proposed long lasting repository for nuclear waste.",
      fullText: `Under President Barack Obama, the administration filed a motion to withdraw the project's license. Yucca Mountain was proposed over 20 years ago when this motion to withdraw was initiated. Scientific understanding had advanced a great deal since the 80s with evidence suggesting Yucca Mountain is just not a "workable option".

Studies were conducted and they revealed major concerns. First, the site's fractured volcanic rock could allow water to infiltrate waste canisters. Two, seismic activity posed long term safety risks. Then most importantly, the surrounding land held deep cultural and spiritual significance for the Western Shoshone and Paiute peoples. Continuing licensing would just waste public funds the DOE argued. Together, these scientific, geological, and ethical barriers made the repository increasingly untenable.

However this was met with push back by the Nuclear Regulatory Commission which oversees nuclear safety and licensing. They ruled that the government simply could not abandon a project mandated by law. What followed since 2010 would be years of political stalling. High-level nuclear waste continues to pile up across the country at more than 100 sites primarily at nuclear power plants. Most of it sits in steel-lined spent fuel pools or in dry cask storage, intended as temporary solutions but now used indefinitely.

Yucca Mountain did not symbolize progress to the nuclear waste management issue. Instead, this instance demonstrated the federal government's continued struggle to contain the hazards it produced, alongside significant governmental resistance with the aim at protecting the environments and communities who encompassed them. One of the world's largest producers of radioactive material with no permanent home for it.`,
      downloadFilename: "/downloadables/display8.pdf",
      additionalImages: [],
    },
    {
      number: 9,
      title: "A Moral Failure",
      subtitle: "Coldwater Creek and the Cost of Contamination (2024)",
      image: "/coldwater.jpg",
      sourceImage: "/Screenshot 2025-12-14 at 11.28.57.png",
      quote: "This is a moral failure.",
      quoteAttribution: "Congresswoman Cori Bush",
      overview:
        "The pollution has decades long traces back to the Manhattan Project, when waste from World War II bomb production was stored and mishandled at St. Louis Lambert Airport from the 1940s to the 1970s. ",
      fullText: `For decades, radioactive waste from the Manhattan Project sat improperly stored near St. Louis Lambert Airport. Rain, flooding, and storm runoff carried this contamination into Coldwater Creek, where it slowly spread into neighborhoods throughout North St. Louis County. Families like Marie Farr's, whose story is anchored in this 2024 PBS report, spent years in their community. They enjoyed family outings like fishing and playing in the nearby Coldwater Creek. However it was an unknown to them that poison running through the very creeks and soil where they built memories.

Cancers and extremely rare illnesses would spread through their community. Tragedy hit the home of Marie, where she lost both her husband and her nineteen-year-old daughter to cancer linked to the contaminated creek.

In an effort to stand up against the injustice, residents, advocacy groups and elected officials banded together in making an effort to push for serious cleanup in their communities and demand accountability by the U.S. government for their wrongdoings. Just Moms STL was pivotal in this effort who lived by their mission to protect families and the future generations of St. Louis from exposure of radioactive and toxic waste.

These groups are continuing this fight still to this day, advocating for inclusion under the Radiation Exposure Compensation Act of 1990, which would ensure these families would be compensated for the injustices they had endured. Their work illustrates that the dangers of nuclear waste are not sealed in the past, but they persist in the lives of those who still live with its consequences.`,
      downloadFilename:
        "https://www.pbs.org/newshour/health/after-decades-of-nuclear-waste-exposure-this-missouri-community-wants-action",
      additionalImages: [
        "/Feature-05.jpg",
        "/Archive-01-scaled.jpg",
        "/1-gQ2YQz3A7hH7IdO0Gh6dow.jpeg",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CinematicHero />

      {displays.map((display, index) => (
        <ImmersiveDisplay
          key={display.number}
          display={display}
          index={index}
        />
      ))}

      <FinalReflection />

      {/* ✅ Only line changed */}
      <ChapterNavigation prevChapter="/chapter-2" nextChapter="/conclusion" />
    </main>
  );
}
