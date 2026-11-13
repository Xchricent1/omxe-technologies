import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleDot } from "lucide-react";
import type { ReactNode } from "react";
import type { Product, Project, Service } from "@/lib/site";
import { WHY } from "@/lib/site";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="bg-glow absolute inset-0" aria-hidden />
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div className="container-x relative py-16 md:py-24">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="animate-rise mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {children && <div className="animate-rise mt-5 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

export function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <article className="card-surface flex flex-col p-6">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-accent"><Icon className="h-5 w-5" aria-hidden /></span>
      <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
      <p className="mt-4 flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden /><span><span className="font-semibold">Business value:</span> <span className="text-muted-foreground">{s.value}</span></span></p>
      <Link to="/contact" search={{ service: s.title }} className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent hover:gap-2.5 transition-all">
        Discuss this service <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

export function StatusBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
      <CircleDot className="h-3.5 w-3.5" aria-hidden />{children}
    </span>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card-surface relative overflow-hidden p-6 md:p-10">
      <div className="bg-glow absolute inset-0 opacity-70" aria-hidden />
      <div className="relative grid gap-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <StatusBadge>{p.status}</StatusBadge>
          <h3 className="mt-5 text-3xl font-bold md:text-4xl">{p.name}</h3>
          <p className="mt-1 font-display text-accent">{p.label}</p>
          <p className="mt-4 text-muted-foreground">{p.description}</p>
          <p className="mt-4 text-sm text-muted-foreground">SmartBiz is an OMXE product currently under development and not yet commercially available.</p>
          <Link to="/contact" search={{ service: "SmartBiz (early interest)" }} className="btn btn-primary mt-6">Register early interest <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Planned capabilities</h4>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {p.capabilities.map((c) => (
              <li key={c} className="flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2.5 text-sm"><Check className="h-4 w-4 shrink-0 text-accent" aria-hidden />{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card-surface flex flex-col p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.category}</span>
        <StatusBadge>{p.status}</StatusBadge>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{p.name}</h3>
      <dl className="mt-3 space-y-3 text-sm">
        <div><dt className="font-semibold">Problem</dt><dd className="text-muted-foreground">{p.problem}</dd></div>
        <div><dt className="font-semibold">Solution</dt><dd className="text-muted-foreground">{p.solution}</dd></div>
      </dl>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {p.tech.map((t) => <li key={t} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-muted-foreground">{t}</li>)}
      </ul>
      <Link to={p.slug === "smartbiz" ? "/products" : "/contact"} className="btn btn-ghost mt-6 self-start text-sm">View details <ArrowRight className="h-4 w-4" /></Link>
    </article>
  );
}

export function WhyGrid() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {WHY.map((w, i) => (
        <li key={w.title} className="card-surface p-5">
          <span className="font-display text-sm font-bold text-gradient">0{i + 1}</span>
          <h3 className="mt-3 font-semibold">{w.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-20">
      <div className="card-surface relative overflow-hidden px-6 py-14 text-center md:px-16">
        <div className="bg-glow absolute inset-0" aria-hidden />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">Have a challenge that technology can solve? <span className="text-gradient">Let's build the solution.</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Tell us about your project and we'll get back to you to discuss your requirements.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-primary">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="btn btn-ghost">Explore Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
