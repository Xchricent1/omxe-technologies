import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServiceCard, WhyGrid, SectionHeading } from "@/components/site/Blocks";
import { DIVISIONS } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — Custom Software, AI & Systems Engineering | OMXE Technologies" }, { name: "description", content: "Custom software and web application development, machine learning, RAG and AI-powered business solutions, and system architecture from OMXE Technologies, Uganda." }, { property: "og:title", content: "Services — Custom Software, AI & Systems Engineering | OMXE Technologies" }, { property: "og:description", content: "Custom software and web application development, machine learning, RAG and AI-powered business solutions, and system architecture from OMXE Technologies, Uganda." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/services" }], links: [{ rel: "canonical", href: "/services" }] }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Solutions across <span className="text-gradient">software, AI and systems.</span></>}>
        Our work is organised into three divisions. Each service is scoped around a business outcome — find the one that matches your challenge.
      </PageHero>
      <nav aria-label="Divisions" className="container-x flex flex-wrap gap-2 pt-10">
        {DIVISIONS.map((d) => <a key={d.id} href={`#${d.id}`} className="btn btn-ghost py-2 text-sm">{d.name}</a>)}
      </nav>
      {DIVISIONS.map((d) => (
        <section key={d.id} id={d.id} className="container-x scroll-mt-24 py-14">
          <SectionHeading eyebrow={d.name} title={d.tagline} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.services.map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
        </section>
      ))}
      <section className="border-y border-border bg-surface py-20">
        <div className="container-x"><SectionHeading eyebrow="Why choose OMXE" title="Engineering that starts with your business." /><div className="mt-10"><WhyGrid /></div></div>
      </section>
      <CtaBand />
    </>
  );
}
