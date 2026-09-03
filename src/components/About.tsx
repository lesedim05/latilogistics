import { Briefcase, GraduationCap, Heart, HeartHandshake } from "lucide-react";
import { aboutParagraphs, personal, stats } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const highlights = [
  { icon: HeartHandshake, title: "Customer-Focused", text: "I deliver calm, professional support for every customer interaction." },
  { icon: Briefcase, title: "Reliable & Accurate", text: "I handle cash, records, and administration with care and consistency." },
  { icon: GraduationCap, title: "Always Learning", text: "I recently completed the CAPACITI AI Skills Programme and keep growing." },
  { icon: Heart, title: "Team Player", text: "I collaborate well and support those around me to succeed together." },
];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="A dedicated professional with a service mindset"
          description="Get to know the person behind the experience."
        />

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: paragraphs */}
          <div
            ref={ref}
            className={cn(
              "lg:col-span-7 space-y-5 transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-slate-600 leading-relaxed">
                {p}
              </p>
            ))}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition-colors"
              >
                <GraduationCap size={18} />
                Download Resume
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-700 rounded-lg font-medium text-sm border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={cn(
                  "p-5 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-700 hover:shadow-md hover:bg-white",
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-3">
                  <h.icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{h.title}</h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 transition-all duration-700",
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-sky-600">{s.value}</p>
              <p className="text-sm text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
