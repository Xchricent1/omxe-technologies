import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Linkedin, Github, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/Blocks";
import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string } => (typeof s.service === "string" ? { service: s.service.slice(0, 100) } : {}),
  head: () => ({ meta: [{ title: "Contact & Request a Quote | OMXE Technologies Uganda" }, { name: "description", content: "Contact OMXE Technologies to discuss custom software, AI solutions or systems engineering for your business. Request a quote today." }, { property: "og:title", content: "Contact & Request a Quote | OMXE Technologies Uganda" }, { property: "og:description", content: "Contact OMXE Technologies to discuss custom software, AI solutions or systems engineering for your business. Request a quote today." }, { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" }], links: [{ rel: "canonical", href: "/contact" }] }),
  component: Contact,
});

function Contact() {
  const { service } = Route.useSearch();
  const items = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: CONTACT.phoneDisplay, href: CONTACT.whatsappHref },
    { icon: Linkedin, label: "LinkedIn", value: CONTACT.linkedin || "Coming soon", href: CONTACT.linkedin },
    { icon: Github, label: "GitHub", value: CONTACT.github || "Coming soon", href: CONTACT.github },
    { icon: MapPin, label: "Location", value: CONTACT.location, href: "" },
  ];
  return (
    <>
      <PageHero eyebrow="Contact us" title={<>Have a challenge that technology can solve? <span className="text-gradient">Let's build the solution.</span></>}>
        Share a few details about your project and we'll get back to you to discuss requirements and next steps.
      </PageHero>
      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div><h2 className="sr-only">Request a quote</h2><ContactForm defaultService={service} /></div>
        <aside aria-label="Contact details" className="space-y-3">
          {items.map(({ icon: I, label, value, href }) => {
            const inner = (<><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-accent"><I className="h-5 w-5" aria-hidden /></span><span className="min-w-0"><span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span><span className="block break-all font-medium">{value}</span></span></>);
            return href
              ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card-surface flex items-center gap-4 p-4">{inner}</a>
              : <div key={label} className="card-surface flex items-center gap-4 p-4">{inner}</div>;
          })}
        </aside>
      </section>
    </>
  );
}
