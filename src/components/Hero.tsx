import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { personal, stats } from "@/data/portfolio";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              Available for opportunities
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Hi, I'm {personal.name.split(" ")[0]}.
              <br />
              <span className="text-sky-600">{personal.role}.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed">
              {personal.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                View My Highlights
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </button>
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Github, href: personal.github, label: "GitHub" },
                { Icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
              ]
                .filter((s) => s.href)
                .map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-600 hover:text-sky-600 hover:border-sky-200 hover:shadow-sm transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
            </div>
          </div>

          {/* Avatar card */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-cyan-300 rounded-3xl rotate-6 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200/60 p-8">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {personal.avatarInitials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{personal.name}</p>
                    <p className="text-sm text-slate-500">{personal.location}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                  {personal.summary}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold text-slate-900">{s.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
