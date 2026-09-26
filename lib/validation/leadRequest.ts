// lib/validation/leadRequest.ts
// Validates POST /api/leads bodies. Same safeParse-in-route pattern as
// lib/validation/onboardingAnswers.ts — bad input becomes a clear 400
// with a list of problems, not an unhandled 500.

import { z } from "zod";

export const leadRequestSchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("A valid email address is required."),
  phone: z
    .string()
    .trim()
    .transform((v) => (v.length > 0 ? v : undefined))
    .optional(),
  message: z
    .string()
    .trim()
    .transform((v) => (v.length > 0 ? v : undefined))
    .optional(),
  channel: z.enum(["form", "whatsapp", "email"]).optional().default("form"),
});

export type LeadRequest = z.infer<typeof leadRequestSchema>;