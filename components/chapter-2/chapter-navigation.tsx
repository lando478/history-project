"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export interface ChapterNavigationProps {
  prevChapter?: string;
  prevLabel?: string;
  nextChapter?: string;
  nextLabel?: string;
}

export function ChapterNavigation({
  prevChapter,
  prevLabel,
  nextChapter,
  nextLabel,
}: ChapterNavigationProps) {
  const router = useRouter();

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-between">
        {/* Previous button (chapter or overview) */}
        <Button
          variant="outline"
          size="lg"
          className="gap-2 group bg-transparent"
          onClick={() => router.push(prevChapter ?? "/")}
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          {prevLabel ?? "Back to Exhibit Overview"}
        </Button>
        {/* Next chapter button */}
        {nextChapter && (
          <Button
            size="lg"
            className="gap-2 bg-accent hover:bg-accent/80 text-accent-foreground group"
            onClick={() => router.push(nextChapter)}
          >
            {nextLabel ?? "Next Chapter"}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </div>
    </section>
  );
}
