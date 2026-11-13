import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, NAV } from "@/lib/site";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">Engineering Intelligence. Building Solutions. Software and AI engineering from Uganda.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-3 text-sm font-semibold">Company</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 text-sm font-semibold">Get in touch</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 break-all hover:text-foreground"><Mail className="h-4 w-4 shrink-0" />{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4 shrink-0" />{CONTACT.phoneDisplay}</a></li>
            <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" />{CONTACT.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} OMXE Technologies. All rights reserved.</div>
    </footer>
  );
}
