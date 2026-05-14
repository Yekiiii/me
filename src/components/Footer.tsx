export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-shell pb-8 pt-2 md:pt-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-border pt-6 md:flex-row">
        <p className="text-sm text-foreground/58">
          © {year} Kaartikey Nair
        </p>
        <p className="text-sm text-foreground/58 font-mono">
          Built with <span className="text-foreground/80">React</span> + <span className="text-foreground/80">Tailwind</span> +{" "}
          <span className="text-foreground/80">Framer Motion</span>
        </p>
      </div>
    </footer>
  )
}
