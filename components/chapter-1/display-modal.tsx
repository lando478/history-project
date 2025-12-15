"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DisplayModalProps {
  isOpen: boolean;
  onClose: () => void;
  displayNumber: number;
  title: string;
  subtitle: string;
  fullText: string;
  imageUrl: string;
  sourceImageUrl: string;
  onDownload: () => void;
}

export function DisplayModal({
  isOpen,
  onClose,
  displayNumber,
  title,
  subtitle,
  fullText,
  imageUrl,
  sourceImageUrl,
  onDownload,
}: DisplayModalProps) {
  const [activeView, setActiveView] = useState<"text" | "source">("text");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setActiveView("text");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative z-10 bg-card border border-border rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20 bg-background/50 hover:bg-background"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header */}
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border p-6">
          <div className="space-y-2">
            <span className="text-accent text-sm font-mono tracking-wider">
              EXHIBIT {displayNumber}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground pr-12">
              {title}
            </h2>
            <p className="text-primary text-lg md:text-xl font-medium flex items-center gap-2">
              <FileText className="w-5 h-5" />
              {subtitle}
            </p>
          </div>

          {/* View Toggle */}
          {/* <div className="flex gap-2 mt-4">
            <button
              onClick={() => setActiveView("text")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeView === "text"
                  ? "bg-accent/20 text-accent border border-accent/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Full Analysis
            </button>
            <button
              onClick={() => setActiveView("source")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeView === "source"
                  ? "bg-accent/20 text-accent border border-accent/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              Source Document
            </button>
          </div> */}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {activeView === "text" && (
            <div className="space-y-6">
              {/* Context Image */}
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg border border-border/50">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Full Text */}
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                  {fullText}
                </p>
              </div>
            </div>
          )}

          {activeView === "source" && (
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg border border-border/50 bg-background/30 p-4">
                <img
                  src={sourceImageUrl || "/placeholder.svg"}
                  alt={`${title} - Source Document`}
                  className="w-full max-h-[700px] object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                <span className="font-semibold text-foreground">
                  Original Source:
                </span>{" "}
                {subtitle}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-card/95 backdrop-blur-sm border-t border-border p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button
              onClick={onDownload}
              className="gap-2 bg-primary hover:bg-primary/80"
            >
              <Download className="w-4 h-4" />
              Download Article
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
