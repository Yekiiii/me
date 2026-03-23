import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Product Intelligence Platform",
    description: "Event-driven analytics platform with Redis Streams ingestion, PostgreSQL real-time metrics, and Gemini-powered product insights dashboard.",
    tags: ["Express", "React", "PostgreSQL", "Redis", "AWS EC2", "Docker", "Gemini API"],
    year: "Jan 2026",
    link: "https://pip.code-across.com/"
  },
  {
    title: "Careers Page Builder",
    description: "Full-stack no-code careers page builder with modular React rendering, dynamic MongoDB-backed sections, and real-time recruiter editing/publishing.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Render", "Vercel"],
    year: "Feb 2026",
    link: "https://white-carrot-test-57vh.vercel.app/"
  },
  {
    title: "Bhomio",
    description: "React Native app for Itinerary Planning and Management + tour guide booking + Hotel and flight booking along with entire CMS panel.",
    tags: ["React Native", "Javascript", "Express", "MySQL"],
    year: "2024",
    link:"https://www.bhomio.com/"
  },
  {
    title: "WowIT Labs",
    description: "Website for WowIT Labs, worked on the apps displayed in the projects section.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    link: "https://wowitlabs-site.vercel.app/"
  },
  {
    title: "Charminora",
    description: "E-commerce platform for handmade crafts and artisanal products",
    tags: ["Shopify", "Liquid", "CSS"],
    year: "2025",
    link:"https://www.charminora.com/"
  },
  {
    title: "Code Across",
    description: "Collaborative freelancing agency made with friends",
    tags: ["React", "Tailwind CSS"],
    year: "2025",
    link: "https://www.code-across.com/"
  },
  
]

export function Projects() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute left-0 top-1/3 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,var(--gold-muted),transparent_70%)] opacity-10 blur-[80px]"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-sm font-mono text-gold mb-16 tracking-widest uppercase">Selected Work</h2>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className="group block py-8 border-t border-border hover:bg-secondary/30 transition-colors -mx-6 px-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-gold">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl md:text-2xl font-light text-foreground group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base ml-8">{project.description}</p>
                </div>

                <div className="flex items-center gap-6 ml-8 md:ml-0">
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground px-2 py-1 bg-secondary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
