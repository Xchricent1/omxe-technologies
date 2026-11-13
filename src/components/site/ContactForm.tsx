import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { contactSchema } from "@/lib/contact";
import { submitInquiry } from "@/lib/contact.functions";
import { SERVICE_OPTIONS } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "organization" | "service" | "description", string>>;

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const send = useServerFn(submitInquiry);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof Errors] ??= issue.message;
      setErrors(errs);
      form.querySelector<HTMLElement>(`[name="${Object.keys(errs)[0]}"]`)?.focus();
      return;
    }
    setErrors({});
    setState("sending");
    try {
      await send({ data: parsed.data });
      setState("done");
      form.reset();
    } catch (err) {
      setState("error");
      setMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="card-surface flex flex-col items-center p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-success" aria-hidden />
        <h3 className="mt-4 text-2xl font-bold">Inquiry received</h3>
        <p className="mt-2 max-w-sm text-muted-foreground">Thank you for contacting OMXE Technologies. We'll review your request and get back to you by email.</p>
        <button type="button" className="btn btn-ghost mt-6" onClick={() => setState("idle")}>Send another inquiry</button>
      </div>
    );
  }

  const field = (name: keyof Errors, label: string, input: React.ReactNode, optional = false) => (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">{label}{optional && <span className="text-muted-foreground"> (optional)</span>}</label>
      {input}
      {errors[name] && <p id={`${name}-error`} className="mt-1.5 text-sm text-destructive">{errors[name]}</p>}
    </div>
  );
  const a = (n: keyof Errors) => ({ id: n, name: n, "aria-invalid": !!errors[n], "aria-describedby": errors[n] ? `${n}-error` : undefined, className: "field" });

  return (
    <form noValidate onSubmit={onSubmit} className="card-surface space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Full name", <input {...a("name")} autoComplete="name" maxLength={100} placeholder="Your name" />)}
        {field("email", "Email address", <input {...a("email")} type="email" autoComplete="email" maxLength={255} placeholder="you@company.com" />)}
      </div>
      {field("organization", "Business or organization", <input {...a("organization")} autoComplete="organization" maxLength={150} placeholder="Company name" />, true)}
      {field("service", "Service required", (
        <select {...a("service")} defaultValue={SERVICE_OPTIONS.includes(defaultService) ? defaultService : ""}>
          <option value="" disabled>Select a service</option>
          {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ))}
      {field("description", "Project description", <textarea {...a("description")} rows={5} maxLength={3000} placeholder="Describe the problem you want to solve, your goals and any timelines." />)}
      {state === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />{msg}</p>
      )}
      <button type="submit" disabled={state === "sending"} className="btn btn-primary w-full sm:w-auto">
        {state === "sending" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Submit inquiry"}
      </button>
    </form>
  );
}
