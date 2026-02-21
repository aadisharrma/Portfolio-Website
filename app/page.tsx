import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/components/portfolio-data";
import { Reveal } from "@/components/reveal";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-[#23232D] bg-[#0B0B10]/95 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <p className="text-sm font-semibold tracking-wide">Aadi Gautam Sharma</p>
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="section-shell pt-20 md:pt-28">
        <Reveal>
          <p className="muted text-sm uppercase tracking-[0.2em]">{portfolioData.location}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-7xl">{portfolioData.name}</h1>
          <p className="mt-5 text-lg md:text-2xl">{portfolioData.tagline}</p>
          <p className="muted mt-4 max-w-3xl text-sm leading-7 md:text-base">{portfolioData.credibility}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="/Aadi_Gautam_Sharma_Resume.pdf" className="btn-secondary" target="_blank" rel="noreferrer">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="section-shell pt-6">
        <Reveal>
          <h2 className="text-2xl font-semibold md:text-3xl">Featured Project</h2>
          <article className="card project-card mt-8 p-7 md:p-9">
            <p className="muted text-sm">{portfolioData.featuredProject.org}</p>
            <h3 className="mt-2 text-2xl font-semibold">{portfolioData.featuredProject.title}</h3>
            <p className="muted mt-4 max-w-3xl text-sm leading-7 md:text-base">{portfolioData.featuredProject.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {portfolioData.featuredProject.metrics.map((metric) => (
                <span key={metric} className="tech-chip">
                  {metric}
                </span>
              ))}
            </div>
            <ul className="muted mt-5 space-y-2 text-sm leading-6">
              {portfolioData.featuredProject.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <a
              href={portfolioData.featuredProject.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center text-sm text-[#F5F5F7] hover:text-[#FF2A2A]"
            >
              View code <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </article>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Projects</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <article key={project.title} className="card project-card p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="muted mt-3 text-sm leading-6">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="tech-chip">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-[#23232D] px-3 py-1 text-xs text-zinc-400">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-[#FF2A2A]">
                    GitHub
                  </a>
                  {project.caseStudy ? (
                    <a href={project.caseStudy} className="hover:text-[#FF2A2A]">
                      Case Study
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="experience" className="section-shell">
        <Reveal>
          <h2 className="text-2xl font-semibold md:text-3xl">Experience</h2>
          <div className="mt-8 space-y-6 border-l border-[#23232D] pl-6">
            {portfolioData.experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-[#E10600]" />
                <p className="muted text-xs uppercase tracking-[0.15em]">{job.period}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  {job.role} · {job.company}
                </h3>
                <ul className="muted mt-3 space-y-1.5 text-sm leading-6">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="skills" className="section-shell">
        <Reveal>
          <h2 className="text-2xl font-semibold md:text-3xl">Skills</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {Object.entries(portfolioData.skills).map(([group, values]) => (
              <article key={group} className="card p-6">
                <h3 className="text-base font-semibold">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {values.map((value) => (
                    <span key={value} className="tech-chip">
                      {value}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section-shell pb-20">
        <Reveal>
          <h2 className="text-2xl font-semibold md:text-3xl">Contact</h2>
          <p className="muted mt-3 text-sm leading-7">Open to data science, machine learning, and data engineering roles.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${portfolioData.email}`} className="btn-secondary">
              <Mail className="mr-2 h-4 w-4" /> {portfolioData.email}
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
            <a href={portfolioData.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </div>
          <footer className="muted mt-14 border-t border-[#23232D] pt-6 text-xs">
            © {new Date().getFullYear()} Aadi Gautam Sharma. Built with Next.js + Tailwind CSS.
          </footer>
        </Reveal>
      </section>
    </main>
  );
}
