import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const { ref, visible } = useReveal();

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Work history"
          description="Roles where I've delivered reliable service, supported customers, and grown as a professional."
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          {experience.map((job, i) => (
            <div
              key={job.role + job.company}
              className={cn(
                "relative pl-8 sm:pl-10 pb-10 last:pb-0 transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Vertical line */}
              {i < experience.length - 1 && (
                <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-px bg-slate-200" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center">
                <Briefcase size={14} className="text-sky-500" />
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-slate-900">{job.role}</h3>
                  <span className="text-sm font-medium text-sky-600">{job.period}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 mb-3">
                  <span className="font-medium text-slate-700">{job.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {job.location}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {job.description}
                </p>
                <ul className="space-y-2">
                  {job.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 size={16} className="text-sky-500 shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
