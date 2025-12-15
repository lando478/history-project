"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Display {
  number: number;
  title: string;
  subtitle: string;
  image: string;
  sourceImage: string;
  quote: string;
  quoteAttribution: string;
  overview: string;
  fullText: string;
  downloadFilename: string;
  additionalImages: string[];
}

interface ImmersiveDisplayProps {
  display: Display;
  index: number;
}

export function ImmersiveDisplay({ display, index }: ImmersiveDisplayProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const handleDownload = () => {
  const filename = display.downloadFilename;

  // ✅ External link → new tab
  if (filename.startsWith("http")) {
    window.open(filename, "_blank", "noopener,noreferrer");
    return;
  }

  // ✅ PDF in /public → open normally (browser handles it)
  if (filename.endsWith(".pdf")) {
    window.open(filename, "_blank");
    return;
  }

  // ⬇️ ONLY fallback for text content
  const element = document.createElement("a");
  const file = new Blob([display.fullText], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

  const allImages = [display.image, ...display.additionalImages];

  return (
    <>
      {/* Main Display Section */}
      <div
        ref={sectionRef}
        className={`min-h-screen w-full relative flex items-center transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Split Screen Layout - Image on one side, content on the other */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen">
          {/* Image Side with Parallax */}
          <div
            className={`relative overflow-hidden transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0"
                : index % 2 === 0
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{ order: index % 2 === 0 ? 1 : 2 }}
          >
            <div className="sticky top-0 h-screen w-full">
              <Image
                src={display.image || "/placeholder.svg"}
                alt={display.title}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"
                style={{
                  backgroundImage:
                    index % 2 === 0
                      ? "linear-gradient(to right, rgba(var(--background), 0.8), rgba(var(--background), 0.4), transparent)"
                      : "linear-gradient(to left, rgba(var(--background), 0.8), rgba(var(--background), 0.4), transparent)",
                }}
              />

              {/* Floating Quote Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div
                  className={`max-w-xl transform transition-all duration-1000 delay-500 ${
                    isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                >
                  <div className="backdrop-blur-md bg-background/60 p-8 rounded-lg border border-accent/20 shadow-2xl">
                    <svg
                      className="w-12 h-12 text-accent mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="font-serif text-2xl text-foreground leading-relaxed mb-4">
                      {display.quote}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      — {display.quoteAttribution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`relative flex items-center justify-center p-8 md:p-16 bg-background transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : index % 2 === 0
                ? "translate-x-full opacity-0"
                : "-translate-x-full opacity-0"
            }`}
            style={{ order: index % 2 === 0 ? 2 : 1 }}
          >
            <div className="max-w-xl space-y-8">
              {/* Display Number */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-bold text-2xl">
                    {display.number}
                  </span>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h2 className="font-serif text-5xl font-bold text-foreground leading-tight">
                  {display.title}
                </h2>
                <p className="text-muted-foreground text-lg italic">
                  {display.subtitle}
                </p>
              </div>

              {/* Overview */}
              <p className="text-foreground/90 text-lg leading-relaxed">
                {display.overview}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={() => setIsExpanded(true)}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
                >
                  Explore Full Story
                </Button>
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="lg"
                  className="border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Modal */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md overflow-y-auto">
          <div className="min-h-screen p-6 md:p-12">
            {/* Close Button */}
            <Button
              onClick={() => setIsExpanded(false)}
              variant="ghost"
              size="icon"
              className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Modal Content */}
            <div className="max-w-6xl mx-auto space-y-12 pt-20">
              {/* Header */}
              <div className="space-y-4 text-center">
                <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                  <span className="text-accent text-sm font-medium">
                    Display {display.number}
                  </span>
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
                  {display.title}
                </h2>
                <p className="text-muted-foreground text-xl italic">
                  {display.subtitle}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="space-y-6">
                <div className="relative h-[60vh] rounded-lg overflow-hidden border border-border">
                  <Image
                    src={allImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`${display.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <Button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === 0 ? allImages.length - 1 : prev - 1
                          )
                        }
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        onClick={() =>
                          setCurrentImageIndex((prev) =>
                            prev === allImages.length - 1 ? 0 : prev + 1
                          )
                        }
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                        <span className="text-sm text-muted-foreground">
                          {currentImageIndex + 1} / {allImages.length}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {allImages.length > 1 && (
                  <div className="flex gap-4 justify-center flex-wrap">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx
                            ? "border-accent scale-110"
                            : "border-border opacity-50 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Full Text Content - Nicely Sectioned */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="font-serif text-3xl font-bold text-foreground border-b border-accent/30 pb-4">
                    The Story
                  </h3>
                  <div className="prose prose-invert prose-lg max-w-none space-y-4">
                    {display.fullText
                      .split("\n\n")
                      .slice(
                        0,
                        Math.ceil(display.fullText.split("\n\n").length / 2)
                      )
                      .map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-foreground/90 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="font-serif text-3xl font-bold text-foreground border-b border-accent/30 pb-4">
                    The Impact
                  </h3>
                  <div className="prose prose-invert prose-lg max-w-none space-y-4">
                    {display.fullText
                      .split("\n\n")
                      .slice(
                        Math.ceil(display.fullText.split("\n\n").length / 2)
                      )
                      .map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-foreground/90 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              {/* Source Document Section */}
              <div className="space-y-6 pt-8 border-t border-border">
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  Source Document
                </h3>
                <div className="relative h-96 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={display.sourceImage || "/placeholder.svg"}
                    alt={`${display.title} - Source Document`}
                    fill
                    className="object-contain bg-muted/20"
                  />
                </div>
              </div>

              {/* Download CTA */}
              <div className="flex justify-center pt-8">
                <Button
                  onClick={handleDownload}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Complete Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
