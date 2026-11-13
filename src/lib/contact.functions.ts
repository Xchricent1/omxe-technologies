import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { contactSchema } from "./contact";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"]!;
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const sb = createClient(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });
    const { error } = await sb.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      organization: data.organization || null,
      service: data.service,
      description: data.description,
    });
    if (error) {
      console.error("inquiry insert failed", error.message);
      throw new Error("We couldn't send your inquiry. Please try again or email us directly.");
    }
    return { ok: true };
  });
