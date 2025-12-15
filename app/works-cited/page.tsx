"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function WorksCitedPage() {
  const references = [
    {
      citation:
        'Abalone Alliance. 1978. "Declaration of Nuclear Resistance." Energy History at Yale.',
      url: "https://energyhistory.yale.edu/abalone-alliance-declaration-of-nuclear-resistance-1978/",
      type: "Primary Source",
    },
    {
      citation:
        'Atomic Energy Commission (United States). 1954. "Research program trends on the following: radiation on biological systems; weapons test fallout monitoring; radioactive waste disposal." Declassified U.S. government report detailing research on radiation effects, fallout monitoring, and radioactive waste disposal. Originally classified "Secret." In U.S. Declassified Documents Online (Gale), 3. 1 vols. Washington, D.C.: Atomic Energy Commission (United States). Print and digital (declassified PDF).',
      url: "https://go.gale.com/ps/i.do?p=GDCS&u=uclosangeles&id=GALE%7CTQWAGF909129853&v=2.1&it=r&sid=bookmark-GDCS&sPage=2.%20Accessed%2029%20Oct.%202025.&asid=9217e9b9",
      type: "Primary Source",
    },
    {
      citation:
        'Daubert, Victoria L., and Sue E. Moran. 1985. "Origins, Goals, and Tactics of the U.S. Anti-Nuclear Protest Movement." RAND.',
      url: "https://www.rand.org/content/dam/rand/pubs/notes/2005/N2192.pdf",
      type: "Secondary Source",
    },
    {
      citation:
        'Donaldson, Lauren R., and General Electric, Hanford Atomic Products Operation. 1949. "Problems of Liquid Waste Disposal." U.S. Department of Energy OpenNet. Declassified government report (digital PDF).',
      url: "https://www.osti.gov/opennet/detail?osti-id=16416606",
      type: "Primary Source",
    },
    {
      citation:
        "Hays, Gabrielle. 2024. \"'This is a moral failure.' A Missouri community says leftover radioactive waste is making them sick.\" PBS, December 20, 2024.",
      url: "https://www.pbs.org/newshour/health/after-decades-of-nuclear-waste-exposure-this-missouri-community-wants-action",
      type: "Secondary Source",
    },
    {
      citation:
        "National Research Council. 1957. The Disposal of Radioactive Waste on Land. The National Academies Press. DOI: 10.17226/10294.",
      url: "https://doi.org/10.17226/10294",
      type: "Primary Source",
    },
    {
      citation:
        'U.S. Department of Energy. 1983. "Nuclear Waste Policy Act of 1982." U.S. Department of Energy.',
      url: "https://www.congress.gov/97/statute/STATUTE-96/STATUTE-96-Pg2201.pdf",
      type: "Primary Source",
    },
    {
      citation:
        'U.S. Department of Energy. 2010. "U.S. Department of Energy\'s Motion to Withdraw (High-Level Waste Repository)." Yucca Mountain.org – PDF Collection.',
      url: "https://www.yuccamountain.org/pdf/doe_motion_to_withdraw-2010_nrc_app.pdf",
      type: "Primary Source",
    },
    {
      citation:
        'U.S. Department of Energy, Office of Civilian Radioactive Waste Management. 2004. "Nuclear Waste Policy Act, as Amended: With Appropriations Acts Appended Description: Compilation of the Nuclear Waste Policy Act with subsequent amendments and appropriations acts."',
      url: "https://www.energy.gov/articles/nuclear-waste-policy-act",
      type: "Primary Source",
    },
    {
      citation:
        'U.S. Department of Energy, Office of History and Heritage Resources. n.d. "Radioactive Waste." Manhattan Project: An Interactive History.',
      url: "https://www.osti.gov/opennet/manhattan-project-history/Science/Radioactivity/rad-waste.html",
      type: "Secondary Source",
    },
    {
      citation:
        'U.S. Environmental Protection Agency. 2016. "Reorganization Plan No. 3 of 1970." About EPA.',
      url: "https://www.epa.gov/archive/epa/aboutepa/reorganization-plan-no-3-1970.html",
      type: "Primary Source",
    },
    {
      citation:
        'Zabarte, Ian, and Clark County Department of Comprehensive Planning, Nuclear Waste Division. 2002. "Tribal Concerns about the Yucca Mountain Repository: An Ethnographic Investigation of the Moapa Band of Paiutes and the Las Vegas Paiute Colony." Final ed. Nuclear Information and Resource Service (NIRS).',
      url: "https://www.nirs.org/wp-content/uploads/ejustice/nativelands/tribalconcerns1102.pdf",
      type: "Primary Source",
    },
  ];

  /* ✅ UPDATED BEHAVIOR
     Opens Google Doc instead of downloading text
  */
  const downloadBibliography = () => {
    window.open(
      "https://docs.google.com/document/d/1Bihexse7J75SSkuv2eR-0jb4Bh4Lv4ojVBtjZncV5tM/edit?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card/80 to-background" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
            Works Cited
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl text-balance mb-8">
            Research sources documenting the history of nuclear waste activism
            in the United States
          </p>

          <button
            onClick={downloadBibliography}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download Bibliography
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Exhibit
        </Link>

        {/* Citation Format Info */}
        <div className="mb-12 p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-1 h-full bg-accent rounded-full" />
            <div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                Citation Format
              </h3>
              <p className="text-muted-foreground">
                All citations follow the Chicago Manual of Style (17th edition)
                format. Sources are listed alphabetically by author or
                organization name.
              </p>
            </div>
          </div>
        </div>

        {/* Source Type Legend */}
        <div className="mb-12 flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm">Primary Source</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm">Secondary Source</span>
          </div>
        </div>

        {/* References List */}
        <div className="space-y-8">
          {references.map((ref, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-8 border-l-2 border-border hover:border-accent/50 transition-all duration-300"
            >
              <div
                className={`absolute left-[-5px] top-2 w-3 h-3 rounded-full ${
                  ref.type === "Primary Source" ? "bg-accent" : "bg-primary"
                } group-hover:scale-150 transition-transform duration-300`}
              />

              <div className="inline-block mb-3">
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    ref.type === "Primary Source"
                      ? "bg-accent/10 text-accent border border-accent/30"
                      : "bg-primary/10 text-primary border border-primary/30"
                  }`}
                >
                  {ref.type}
                </span>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-3 text-pretty">
                {ref.citation}
              </p>

              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors group/link"
                >
                  <span className="underline decoration-accent/30 group-hover/link:decoration-accent/60">
                    View Source
                  </span>
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground text-balance">
            This bibliography represents a curated selection of primary and
            secondary sources used throughout the <em>Buried Truths</em> digital
            exhibit. For questions about specific sources or additional research
            materials, please contact the exhibit curator.
          </p>
        </div>
      </div>
    </div>
  );
}
