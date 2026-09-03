import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { personal } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const contactCards = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
].filter((c) => c.href);

export function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-sky-400 mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's build something together
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            I'm currently open to new opportunities. Feel free to
            reach out through any channel below.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div
            className={cn(
              "lg:col-span-2 space-y-4 transition-all duration-700",
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            )}
          >
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:bg-slate-800 hover:border-sky-500/30 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <c.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{c.label}</p>
                  <p className="text-sm font-medium text-slate-200">{c.value}</p>
                </div>
              </a>
            ))}
            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium text-slate-200">{personal.location}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={cn(
              "lg:col-span-3 transition-all duration-700 delay-150",
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            )}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-xl border border-slate-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors placeholder:text-slate-600"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-xl border border-slate-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors placeholder:text-slate-600"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900/50 text-white rounded-xl border border-slate-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition-colors placeholder:text-slate-600 resize-none"
                  placeholder="Hi Molatelo, I'd love to talk about..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-xl font-medium hover:bg-sky-400 transition-all hover:shadow-lg hover:shadow-sky-500/20"
              >
                {sent ? "Opening your email app..." : "Send Message"}
                <Send size={18} />
              </button>
              {sent && (
                <p className="text-sm text-sky-400 text-center">
                  Your email client should now be open. Thanks for reaching out!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {personal.name}. Built with React &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Mail, href: `mailto:${personal.email}` },
            ]
              .map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-sky-400 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
