"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, Maximize2 } from "lucide-react";
import { DisplayModal } from "./display-modal";

/* =======================
   PROPS (FIXED)
======================= */

interface DisplaySectionProps {
  displayNumber: number;
  title: string;
  subtitle: string;
  summary: string;
  fullText: string;
  imageUrl: string;
  sourceImageUrl: string;
  animationDirection: "up" | "left" | "right";

  // ✅ optional download target
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
  downloadTarget, // ✅ FIX: destructured
}: DisplaySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "overview" | "document" | "analysis"
  >("overview");

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* =======================
     DOWNLOAD HANDLER
  ======================= */

  const handleDownload = () => {
    // 🌐 External website → new tab
    if (downloadTarget?.startsWith("http")) {
      window.open(downloadTarget, "_blank", "noopener,noreferrer");
      return;
    }

    // 📄 PDF or public file → open browser viewer
    if (downloadTarget?.endsWith(".pdf")) {
      window.open(downloadTarget, "_blank");
      return;
    }

    // 📝 Fallback → text download
    const element = document.createElement("a");
    const file = new Blob([fullText.replace(/\|\|/g, "\n\n")], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  /* =======================
     ANIMATION HELPERS
  ======================= */

  const getAnimationClass = () =>
    isVisible
      ? "opacity-100 translate-y-0 translate-x-0 transition-all duration-1000 ease-out"
      : "opacity-0";

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
              <span className="text-accent text-sm font-mono font-bold">
                EXHIBIT {displayNumber}
              </span>
            </div>
          </div>

          {/* Main Container */}
          <div className="bg-card/50 border border-border/50 rounded-lg overflow-hidden backdrop-blur-sm">
            {/* Header */}
            <div className="border-b border-border/50 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold">
                    {title}
                  </h2>
                  <p className="text-primary text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    {subtitle}
                  </p>
                </div>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-border/50 p-2 flex gap-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-2 rounded-md ${
                  activeTab === "overview"
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("document")}
                className={`px-6 py-2 rounded-md ${
                  activeTab === "document"
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground"
                }`}
              >
                Source Document
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {activeTab === "overview" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-lg">{summary}</p>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => setActiveTab("document")}
                        variant="outline"
                        className="gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        View Source
                      </Button>
                      <Button
                        onClick={() => setIsModalOpen(true)}
                        className="gap-2"
                      >
                        <Maximize2 className="w-4 h-4" />
                        Expand View
                      </Button>
                    </div>
                  </div>
                  <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-[350px] object-cover rounded-lg"
                  />
                </div>
              )}

              {activeTab === "document" && (
                <div className="space-y-6">
                  <img
                    src={sourceImageUrl || "/placeholder.svg"}
                    alt={`${title} source`}
                    className="w-full max-h-[600px] object-contain"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      <strong>Original Source:</strong> {subtitle}
                    </p>
                    <Button
                      onClick={handleDownload}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Article
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
