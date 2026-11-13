import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, Lightbulb, Award, ShieldCheck, Scale, RefreshCw } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Blocks";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About OMXE Technologies — Software & AI Engineering, Uganda" }, { name: "description", content: "Learn about OMXE Technologies: our mission, vision and values as a Ugandan software engineering and artificial intelligence company." }, { property: "og:title", content: "About OMXE Technologies — Software & AI Engineering, Uganda" }, { property: "og:description", content: "Learn about OMXE Technologies: our mission, vision and values as a Ugandan software engineering and artificial intelligence company." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/about" }], links: [{ rel: "canonical", href: "/about" }] }),
  component: About,
});

const VALUES = [
  { icon: Lightbulb, t: "Innovation", d: "We explore new approaches when they genuinely improve outcomes." },
  { icon: Award, t: "Excellence", d: "We hold our engineering work to a high, consistent standard." },
  { icon: ShieldCheck, t: "Reliability", d: "We build systems people can depend on every day." },
  { icon: Scale, t: "Integrity", d: "We are honest about what we can deliver and how." },
  { icon: RefreshCw, t: "Continuous improvement", d: "We keep learning and refining what we build." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>Technology with a <span className="text-gradient">clear purpose.</span></>}>
        OMXE Technologies is a technology company based in Uganda, specialising in software development, artificial intelligence engineering and intelligent systems.
      </PageHero>
      <section className="container-x grid gap-10 py-20 md:grid-cols-2">
        <div className="space-y-4 text-muted-foreground">
          <SectionHeading eyebrow="Our approach" title="Understand the problem first." />
          <p>Good technology starts with a clear understanding of the problem. Before we write code, we take time to learn how your business works, where the friction is, and what success looks like.</p>
          <p>Only then do we design the solution — choosing between conventional software, AI or a combination of both based on what will deliver real value, remain maintainable and grow with you.</p>
        </div>
        <div className="grid gap-5">
          <article className="card-surface p-6"><Compass className="h-6 w-6 text-accent" aria-hidden /><h3 className="mt-3 text-xl font-semibold">Mission</h3><p className="mt-2 text-muted-foreground">To develop practical, intelligent, and reliable technology solutions that help businesses solve problems and operate more effectively.</p></article>
          <article className="card-surface p-6"><Eye className="h-6 w-6 text-accent" aria-hidden /><h3 className="mt-3 text-xl font-semibold">Vision</h3><p className="mt-2 text-muted-foreground">To become a recognized technology company building impactful software and AI solutions for businesses in Africa and beyond.</p></article>
        </div>
      </section>
      <section className="border-y border-border bg-surface py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Core values" title="What guides our work." center />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map(({ icon: I, t, d }) => (
              <li key={t} className="card-surface p-5"><I className="h-5 w-5 text-accent" aria-hidden /><h3 className="mt-3 font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
