import { motion } from "framer-motion"
import { ArrowDownRight } from "lucide-react"
import { NameAnimation } from "./name-animation"

const quickStats = [
  { value: "12+", label: "Projects shipped" },
  { value: "2+ yrs", label: "Hands-on experience" },
  { value: "100%", label: "Locked In" },
]

const nowBuilding = [
  "Production MERN + mobile products",
  "Delightful interfaces with Framer Motion",
  "Scalable CMS and analytics workflows",
]

export function Hero() {
  return (
    
    <section className="relative flex min-h-screen items-center pb-20 pt-32 md:pt-36">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.16fr_0.84fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <NameAnimation />

              <p className="mt-6 max-w-2xl text-balance text-base text-foreground/74 md:text-lg">
                Ideas in. Products out.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#work" className="btn-primary group">
                  Explore Work
                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
                <a href="#contact" className="btn-ghost">
                  Let&apos;s Talk
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="glass-card-strong relative overflow-hidden p-6 md:p-7 lg:self-center"
            >
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-foreground/4 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-14 h-44 w-44 rounded-full bg-foreground/3 blur-3xl" />

            <p className="section-title">Current Focus</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-foreground md:text-3xl">
              Building products users remember.
            </h2>

            <ul className="mt-7 space-y-3">
              {nowBuilding.map((item) => (
                <li key={item} className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground/76">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background/58 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/55">Stack</p>
                <p className="mt-1 text-sm font-semibold text-foreground/88">React · Node · AWS</p>
              </div>
              <div className="rounded-xl border border-border bg-background/58 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/55">Superpower</p>
                <p className="mt-1 text-sm font-semibold text-foreground/88">Speed + Polish</p>
              </div>
            </div>
          </motion.aside>
          </div>

          <div className="mt-11 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {quickStats.map((stat) => (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                key={stat.label}
                className="glass-card rounded-2xl px-4 py-4"
              >
                <p className="font-display text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-foreground/62">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  )
}
