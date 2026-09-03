import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function Education() {
  const { ref, visible } = useReveal();

  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education & Certifications"
          title="Qualifications and credentials"
          description="Formal education, professional development, and the CAPACITI AI Skills Programme."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12">
          {/* Education timeline */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={cn(
                    "relative pl-6 border-l-2 border-slate-200 transition-all duration-700",
                    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-slate-50" />
                  <div className="bg-white rounded-xl p-5 border border-slate-100">
                    <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">
                      {edu.period}
                    </span>
                    <h4 className="mt-3 font-semibold text-slate-900">{edu.degree}</h4>
                    <p className="text-sm text-slate-500 mt-0.5">{edu.institution}</p>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications grid */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.title}
                  className={cn(
                    "bg-white rounded-xl p-5 border border-slate-100 transition-all duration-700 hover:shadow-md hover:-translate-y-0.5",
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Award size={18} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-400">{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-400 mt-2 font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
