import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/components/portfolio-data";

const stagger = ["0ms", "100ms", "200ms", "300ms", "400ms", "500ms"];

export default function Home() {
  return (
    <main className="pb-10">
      <section className="section-shell pt-24 md:pt-32">
        <p className="animate-fade-in-up text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {portfolioData.location}
        </p>
        <h1
          className="animate-fade-in-up mt-4 text-4xl font-bold tracking-tight md:text-6xl"
          style={{ animationDelay: stagger[1] }}
        >
          {portfolioData.name}
        </h1>
        <p
          className="animate-fade-in-up mt-4 text-lg text-slate-700 md:text-xl"
          style={{ animationDelay: stagger[2] }}
        >
          {portfolioData.tagline}
        </p>
        <div
          className="animate-fade-in-up mt-8 flex flex-wrap gap-3"
          style={{ animationDelay: stagger[3] }}
        >
          <a
            href={portfolioData.linkedin}
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-accent hover:text-accent"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.github}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="section-shell animate-fade-in-up" style={{ animationDelay: stagger[1] }}>
        <h2 className="section-heading">About</h2>
        <p className="section-subheading">{portfolioData.about}</p>
        <ul className="mt-6 grid gap-2 text-sm text-slate-700 md:text-base">
          {portfolioData.education.map((item) => (
            <li key={item} className="card py-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-shell animate-fade-in-up" style={{ animationDelay: stagger[2] }}>
        <h2 className="section-heading">Featured Project</h2>
        <p className="section-subheading">
          High-impact analytics project focused on scalable data processing and predictive insights.
        </p>
        <article className="card mt-8 border-accent/20 bg-accent/5">
          <p className="text-sm font-medium text-accent">{portfolioData.project.org}</p>
          <h3 className="mt-2 text-xl font-semibold">{portfolioData.project.title}</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 md:text-base">
            {portfolioData.project.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell animate-fade-in-up" style={{ animationDelay: stagger[3] }}>
        <h2 className="section-heading">Experience</h2>
        <p className="section-subheading">Professional roles spanning analytics engineering and data systems.</p>
        <div className="mt-10 space-y-8 border-l border-slate-200 pl-6">
          {portfolioData.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-accent" />
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold">
                {job.role} · {job.company}
              </h3>
              <p className="text-sm text-slate-600">{job.location}</p>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
                {job.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell animate-fade-in-up" style={{ animationDelay: stagger[4] }}>
        <h2 className="section-heading">Technical Skills</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(portfolioData.skills).map(([group, items]) => (
            <article key={group} className="card">
              <h3 className="text-base font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell animate-fade-in-up" style={{ animationDelay: stagger[5] }}>
        <h2 className="section-heading">Contact</h2>
        <p className="section-subheading">Open to data science, analytics, and automation opportunities.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <a href={`mailto:${portfolioData.email}`} className="card flex items-center gap-3 transition hover:border-accent">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">{portfolioData.email}</span>
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="card flex items-center gap-3 transition hover:border-accent"
          >
            <Linkedin className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">LinkedIn Profile</span>
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="card flex items-center gap-3 transition hover:border-accent"
          >
            <Github className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">GitHub Projects</span>
          </a>
        </div>
        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
          <MapPin className="h-4 w-4" />
          <span>{portfolioData.location}</span>
        </div>
      </section>
    </main>
  );
}
