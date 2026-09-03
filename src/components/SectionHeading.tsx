import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={cn(
        "max-w-2xl mb-14",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <div
        className={cn(
          "transition-all duration-700",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-sky-600 mb-3">
          {eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
