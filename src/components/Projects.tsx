import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Highlights"
          title="Career highlights"
          description="Key areas where I've made an impact across customer service, retail, and digital skills training."
        />

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={cn(
                "group relative bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Accent bar */}
              <div className={cn("h-1.5 bg-gradient-to-r", project.accent)} />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Learn more"
                      className="p-2 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
