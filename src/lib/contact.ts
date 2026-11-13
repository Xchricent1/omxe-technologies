import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  organization: z.string().trim().max(150, "Must be under 150 characters").optional().default(""),
  service: z.string().trim().min(1, "Please choose a service").max(100),
  description: z.string().trim().min(10, "Please describe your project (at least 10 characters)").max(3000, "Please keep it under 3000 characters"),
});
export type ContactInput = z.infer<typeof contactSchema>;
