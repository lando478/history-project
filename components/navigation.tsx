export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-accent animate-glow" />
          </div>
          <span className="font-serif font-bold text-lg">Buried Truths</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a
            href="/works-cited"
            className="hover:text-foreground transition-colors"
          >
            Works Cited
          </a>
          <a
            href="/conclusion"
            className="hover:text-foreground transition-colors"
          >
            Conclusion
          </a>
        </div>
      </div>
    </nav>
  );
}
