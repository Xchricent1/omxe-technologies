import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, ProductCard, ProjectCard, SectionHeading, WhyGrid } from "@/components/site/Blocks";
import { DIVISIONS, PRODUCTS, PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "OMXE Technologies — Software & AI Development Company in Uganda" }, { name: "description", content: "Custom software development, AI-powered business solutions and intelligent systems engineered in Uganda. Request a quote from OMXE Technologies." }, { property: "og:title", content: "OMXE Technologies — Software & AI Development Company in Uganda" }, { property: "og:description", content: "Custom software development, AI-powered business solutions and intelligent systems engineered in Uganda. Request a quote from OMXE Technologies." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/" }], links: [{ rel: "canonical", href: "/" }] }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-glow absolute inset-0" aria-hidden />
        <div className="bg-grid absolute inset-0" aria-hidden />
        <HeroCircuit />
        <div className="container-x relative py-20 md:py-32">
          <p className="eyebrow animate-rise">Engineering Intelligence. Building Solutions.</p>
          <h1 className="animate-rise mt-5 max-w-4xl text-4xl font-bold uppercase leading-[1.05] sm:text-5xl md:text-6xl">
            We engineer software that <span className="text-gradient">moves businesses forward.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-muted-foreground">
            From custom software applications to AI-powered solutions, OMXE Technologies helps businesses solve problems, improve operations, and embrace digital transformation.
          </p>
          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-primary">Request a Quote <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/services" className="btn btn-ghost">Explore Our Services</Link>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-8 py-20 md:grid-cols-2 md:items-center">
        <SectionHeading eyebrow="Who we are" title="A technology company built to solve real problems." />
        <div className="space-y-4 text-muted-foreground">
          <p>OMXE Technologies is a Ugandan software and artificial intelligence engineering company. We combine software engineering, AI and systems thinking to turn business challenges into practical technology solutions.</p>
          <Link to="/about" className="inline-flex items-center gap-1.5 font-semibold text-accent">More about OMXE <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="container-x pb-20">
        <SectionHeading eyebrow="What we do" title="Three divisions. One engineering standard." text="Pick the area closest to your challenge — or talk to us and we'll help you find the right fit." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {DIVISIONS.map((d) => {
            const Icon = d.icon;
            return (
              <article key={d.id} className="card-surface flex flex-col p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-accent"><Icon className="h-6 w-6" aria-hidden /></span>
                <h3 className="mt-5 text-xl font-semibold">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.tagline}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {d.services.slice(0, 4).map((s) => <li key={s.title} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{s.title}</li>)}
                </ul>
                <Link to="/services" hash={d.id} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">View all services <ArrowRight className="h-4 w-4" /></Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why choose OMXE" title="How we approach every engagement." />
          <div className="mt-10"><WhyGrid /></div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured work" title="Projects" />
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">All projects <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PROJECTS.slice(0, 2).map((p) => <ProjectCard key={p.slug} p={p} />)}
          <div className="card-surface flex flex-col justify-center border-dashed p-6 text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground">Your project could be next</h3>
            <p className="mt-2 text-sm">We're growing our portfolio. Tell us about your challenge and let's build something worth showcasing.</p>
            <Link to="/contact" className="btn btn-ghost mt-5 self-start text-sm">Start a conversation</Link>
          </div>
        </div>
      </section>

      <section className="container-x pb-4">
        <SectionHeading eyebrow="Featured product" title="SmartBiz by OMXE" />
        <div className="mt-10">{PRODUCTS.map((p) => <ProductCard key={p.name} p={p} />)}</div>
      </section>

      <CtaBand />
    </>
  );
}

function HeroCircuit() {
  return (
    <svg aria-hidden className="pointer-events-none absolute -right-24 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 opacity-60 md:block" viewBox="0 0 400 400" fill="none">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stopColor="var(--primary)" /><stop offset="1" stopColor="var(--accent)" /></linearGradient></defs>
      <circle cx="200" cy="200" r="150" stroke="url(#g)" strokeOpacity=".35" />
      <circle cx="200" cy="200" r="100" stroke="url(#g)" strokeOpacity=".25" strokeDasharray="4 8" />
      {[[200,50,200,120],[350,200,280,200],[200,350,200,280],[50,200,120,200],[94,94,145,145],[306,94,255,145],[306,306,255,255],[94,306,145,255]].map(([a,b,c,d],i)=>(
        <g key={i}><path d={`M${a} ${b} L${c} ${d}`} stroke="url(#g)" strokeOpacity=".6" /><circle cx={a} cy={b} r="4" fill="var(--accent)" /></g>
      ))}
      <rect x="150" y="150" width="100" height="100" rx="18" stroke="url(#g)" strokeWidth="1.5" />
      <text x="200" y="210" textAnchor="middle" fill="var(--accent)" fontFamily="Sora" fontWeight="700" fontSize="26">AI</text>
    </svg>
  );
}
