import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ChapterNavigationProps {
  prevChapter?: string
  nextChapter?: string
}

export function ChapterNavigation({ prevChapter, nextChapter }: ChapterNavigationProps) {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {prevChapter ? (
            <Link href={prevChapter}>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent group">
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                Previous Chapter
              </Button>
            </Link>
          ) : (
            <div />
          )}

          <Link href="/">
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground">
              Return to Overview
            </Button>
          </Link>

          {nextChapter ? (
            <Link href={nextChapter}>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent group">
                Next Chapter
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  )
}
