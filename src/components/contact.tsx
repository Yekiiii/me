import { ArrowUpRight, Download } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/Yekiiii" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaartikey-nair/" },
  { label: "Twitter", href: "https://x.com/kaartikeyx" },
  { label: "Email", href: "mailto:kaartikey20@gmail.com" },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-[500px] w-[1000px] rounded-full bg-[radial-gradient(circle,var(--gold),transparent_70%)] opacity-15 blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-gold mb-16 tracking-widest uppercase">Contact</h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Let's Connect
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
                  No pressure — if you’d like to simply have a chat or explore an idea together, I’m here.
            </p>
            <a
              href="/CV2.pdf"
              download="Kaartikey_Nair_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors rounded-md text-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 border-b border-border hover:border-gold transition-colors"
                  >
                    <span className="text-foreground group-hover:text-gold transition-colors">{social.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
