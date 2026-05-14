import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Product Intelligence Platform",
    description:
      "Event-driven analytics platform with Redis Streams ingestion, real-time PostgreSQL metrics, and Gemini-powered product intelligence.",
    tags: ["Express", "React", "PostgreSQL", "Redis", "AWS EC2", "Docker", "Gemini API"],
    year: "2026",
    link: "https://pip.code-across.com/",
  },
  {
    title: "Careers Page Builder",
    description:
      "No-code builder for careers websites with modular React sections, dynamic MongoDB-backed content, and recruiter-first publishing flow.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Render", "Vercel"],
    year: "2026",
    link: "https://white-carrot-test-57vh.vercel.app/",
  },
  {
    title: "Bhomio",
    description:
      "Travel platform with itinerary planning, tour guide booking, hotel and flight workflows, plus a full CMS for operations.",
    tags: ["React Native", "JavaScript", "Express", "MySQL"],
    year: "2024",
    link: "https://www.bhomio.com/",
  },
  {
    title: "WowIT Labs",
    description: "Marketing website revamp focused on cleaner storytelling and stronger product showcases for the company.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    link: "https://wowitlabs-site.vercel.app/",
  },
  {
    title: "Charminora",
    description: "D2C e-commerce storefront for handmade and artisanal products with conversion-focused merchandising.",
    tags: ["Shopify", "Liquid", "CSS"],
    year: "2025",
    link: "https://www.charminora.com/",
  },
  {
    title: "Code Across",
    description: "Agency collaboration site created with friends to showcase and ship cross-functional freelance work.",
    tags: ["React", "Tailwind CSS"],
    year: "2025",
    link: "https://www.code-across.com/",
  },
]

export function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="section-shell">
        <p className="section-title">Selected Work</p>
        <h2 className="section-heading max-w-3xl">Products I have designed, shipped, and iterated in the wild.</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const visibleTags = project.tags.slice(0, 4)
            const hiddenTagCount = project.tags.length - visibleTags.length

            return (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="group glass-card relative overflow-hidden p-5 md:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-foreground/4 via-transparent to-foreground/3 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="pill text-[11px]">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/52">{project.year}</span>
                </div>

                <h3 className="relative z-10 mt-5 font-display text-2xl font-semibold text-foreground md:text-[1.7rem]">{project.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{project.description}</p>

                <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                  {visibleTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-foreground/72">
                      {tag}
                    </span>
                  ))}
                  {hiddenTagCount > 0 && (
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-foreground/58">
                      +{hiddenTagCount} more
                    </span>
                  )}
                </div>

                <div className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground/85 transition-colors group-hover:text-foreground">
                  View live
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
