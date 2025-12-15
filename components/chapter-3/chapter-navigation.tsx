import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ChapterNavigationProps {
  prevChapter?: string;
  nextChapter?: string; // ✅ Added
}

export function ChapterNavigation({
  prevChapter,
  nextChapter,
}: ChapterNavigationProps) {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Previous Chapter Button */}
          {prevChapter ? (
            <Link href={prevChapter}>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Previous Chapter
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {/* Return to Overview */}
          <Link href="/">
            <Button
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-foreground"
            >
              Return to Overview
            </Button>
          </Link>

          {/* Next Chapter / Conclusion Button */}
          {nextChapter ? (
            <Link href={nextChapter}>
              <Button
                size="lg"
                className="gap-2 bg-accent hover:bg-accent/90 text-background group"
              >
                Conclusion
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
