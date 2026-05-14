import { motion } from "framer-motion"
import { ArrowUpRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Social = {
  label: string
  href: string
  icon: LucideIcon
}

const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/Yekiiii", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kaartikey-nair/", icon: Linkedin },
  { label: "Twitter / X", href: "https://x.com/kaartikeyx", icon: Twitter },
  { label: "Email", href: "mailto:kaartikey20@gmail.com", icon: Mail },
]

export function Contact() {
  return (
    <section id="contact" className="relative pb-16 pt-24 md:pt-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card-strong relative overflow-hidden p-6 md:p-9"
        >
          <div className="pointer-events-none absolute -left-12 -top-16 h-56 w-56 rounded-full bg-foreground/4 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 right-0 h-56 w-56 rounded-full bg-foreground/3 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-end">
            <div>
              <p className="section-title">Contact</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Let&apos;s build something insanely good together.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/72 md:text-base">
                Open to freelance projects, product collaborations, and teams that care about craft. If you have an idea,
                let&apos;s shape it into something users actually love.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="mailto:kaartikey20@gmail.com" className="btn-primary">
                  <Mail className="h-4 w-4" />
                  Send an Email
                </a>
                <a
                  href="/Kaartikey Nair - CV.pdf"
                  download="Kaartikey_Nair_CV.pdf"
                  className="btn-ghost"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 3 }}
                    className="group rounded-2xl border border-border bg-background/60 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="rounded-lg border border-border bg-background/66 p-2 text-foreground/76">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold text-foreground/88">{social.label}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-foreground/54 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
