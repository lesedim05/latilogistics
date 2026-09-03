import { ClipboardList, HeartHandshake, Layout, ShoppingBasket, Users } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Layout> = {
  HeartHandshake,
  ClipboardList,
  ShoppingBasket,
  Users,
};

export function Skills() {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Professional & soft skills"
          description="A well-rounded skill set built across customer service, retail, administration, and education."
        />

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Layout;
            return (
              <div
                key={cat.title}
                className={cn(
                  "bg-white rounded-2xl p-6 border border-slate-100 transition-all duration-700 hover:shadow-lg hover:-translate-y-1",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-sm">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-slate-900">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: visible ? `${skill.level}%` : "0%",
                            transitionDelay: `${i * 100 + 300}ms`,
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
