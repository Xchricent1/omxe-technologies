import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand, PageHero, ProjectCard } from "@/components/site/Blocks";
import { PROJECT_CATEGORIES, PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Software & AI Work | OMXE Technologies" }, { name: "description", content: "Explore OMXE Technologies projects across AI and machine learning, software applications, intelligent systems and business solutions." }, { property: "og:title", content: "Projects — Software & AI Work | OMXE Technologies" }, { property: "og:description", content: "Explore OMXE Technologies projects across AI and machine learning, software applications, intelligent systems and business solutions." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/projects" }], links: [{ rel: "canonical", href: "/projects" }] }),
  component: Projects,
});

function Projects() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Projects" title={<>Our <span className="text-gradient">work.</span></>}>
        We only show projects with accurate descriptions. Our portfolio is growing — new work will be added here as it is completed.
      </PageHero>
      <section className="container-x py-16">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {["All", ...PROJECT_CATEGORIES].map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`btn py-2 text-sm ${cat === c ? "btn-primary" : "btn-ghost"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.slug} p={p} />)}
          {list.length === 0 && <p className="card-surface col-span-full p-8 text-center text-muted-foreground">No published projects in this category yet. Have one in mind? Let's talk.</p>}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
