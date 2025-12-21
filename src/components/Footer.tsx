export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Kaartikey. All rights reserved.</p>
        <p className="text-sm text-muted-foreground font-mono">
          Built with <span className="text-gold">React.js</span> & <span className="text-gold">Tailwind</span>
        </p>
      </div>
    </footer>
  )
}
