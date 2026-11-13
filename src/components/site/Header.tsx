import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/omxe-logo-mark.webp.asset.json";
import { NAV } from "@/lib/site";

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="OMXE Technologies home">
      <img src={logo.url} alt="" width={36} height={36} className="h-9 w-9 shrink-0 rounded-lg bg-foreground p-0.5" />
      <span className="truncate font-display text-lg font-bold tracking-tight">
        OMXE <span className="font-medium text-muted-foreground">Technologies</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-x grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} activeOptions={{ exact: true }} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex">Request a Quote</Link>
          <button type="button" className="btn btn-ghost p-2 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }} className="block rounded-md px-3 py-3 font-medium text-muted-foreground hover:bg-secondary hover:text-foreground data-[status=active]:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-2"><Link to="/contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">Request a Quote</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
