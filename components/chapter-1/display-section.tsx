"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Maximize2 } from "lucide-react";
import { DisplayModal } from "./display-modal";

interface DisplaySectionProps {
  displayNumber: number;
  title: string;
  subtitle: string;
  summary: string;
  fullText: string;
  imageUrl: string;
  sourceImageUrl: string;
  animationDirection: "up" | "left" | "right";

  // ✅ NEW (optional)
  downloadTarget?: string;
}

export function DisplaySection({
  displayNumber,
  title,
  subtitle,
  summary,
  fullText,
  imageUrl,
  sourceImageUrl,
  animationDirection,
  downloadTarget, // ✅ added
}: DisplaySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "document" | "analysis"
  >("overview");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* =======================
     DOWNLOAD HANDLER (FIXED)
  ======================= */

const handleDownload = () => {
  if (downloadTarget) {
    try {
      // ✅ If it's a valid URL → open in new tab
      const url = new URL(downloadTarget);
      window.open(url.toString(), "_blank", "noopener,noreferrer");
      return;
    } catch {
      // not a URL → continue
    }

    // ✅ Local PDF or file in /public
    if (downloadTarget.endsWith(".pdf")) {
      window.open(downloadTarget, "_blank");
      return;
    }
  }

  // 📝 Fallback → text download (ONLY when no target)
  const element = document.createElement("a");
  const file = new Blob([fullText], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = `${title.replace(/\s+/g, "-")}.txt`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};


  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    return "opacity-100 translate-y-0 translate-x-0 transition-all duration-1000 ease-out";
  };

  const getInitialTransform = () => {
    switch (animationDirection) {
      case "up":
        return "translate-y-12";
      case "left":
        return "-translate-x-12";
      case "right":
        return "translate-x-12";
    }
  };

  return (
    <>
      <div
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-6 ${getInitialTransform()} ${getAnimationClass()}`}
      >
        <div className="relative">
          {/* Display Number Badge */}
          <div className="absolute -top-6 left-0 z-10">
            <div className="bg-accent/20 border border-accent px-6 py-2 rounded-full">
              <span className="text-accent text-sm font-mono tracking-wider font-bold">
                EXHIBIT {displayNumber}
              </span>
            </div>
          </div>

          {/* Main Container */}
          <div className="bg-card/50 border border-border/50 rounded-lg overflow-hidden backdrop-blur-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-b border-border/50 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    {title}
                  </h2>
                  <p className="text-primary text-lg md:text-xl font-medium flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-border/50 bg-background/30">
              <div className="flex gap-1 p-2">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    activeTab === "overview"
                      ? "bg-accent/20 text-accent border border-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("document")}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    activeTab === "document"
                      ? "bg-accent/20 text-accent border border-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  Source Document
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {summary}
                    </p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setActiveTab("document")}
                        variant="outline"
                        className="gap-2 bg-background/50"
                      >
                        <FileText className="w-4 h-4" />
                        View Source
                      </Button>
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        className="gap-2 bg-primary hover:bg-primary/80"
                      >
                        <Maximize2 className="w-4 h-4" />
                        Expand View
                      </Button>
                    </div>
                  </div>
                  <div className="relative group overflow-hidden rounded-lg border border-border/50">
                    <img
                      src={imageUrl || "/placeholder.svg"}
                      alt={title}
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              )}

              {/* Document Tab */}
              {activeTab === "document" && (
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-lg border border-border/50 bg-background/30 p-4">
                    <img
                      src={sourceImageUrl || "/placeholder.svg"}
                      alt={`${title} - Source Document`}
                      className="w-full max-h-[600px] object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Original Source:
                      </span>{" "}
                      {subtitle}
                    </p>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-transparent"
                    >
                      <Download className="w-4 h-4" />
                      Download Article
                    </Button>
                  </div>
                </div>
              )}

              {/* Analysis Tab */}
              {activeTab === "analysis" && (
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                    {fullText}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      className="gap-2 bg-transparent"
                    >
                      <Download className="w-4 h-4" />
                      Download Full Text
                    </Button>
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      variant="outline"
                      className="gap-2 bg-background/50 hover:bg-accent/20"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Full Screen
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <DisplayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        displayNumber={displayNumber}
        title={title}
        subtitle={subtitle}
        fullText={fullText}
        imageUrl={imageUrl}
        sourceImageUrl={sourceImageUrl}
        onDownload={handleDownload}
      />
    </>
  );
}
