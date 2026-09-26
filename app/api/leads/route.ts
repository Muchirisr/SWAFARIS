import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";
import { leadRequestSchema } from "@/lib/validation/leadRequest";
import { sendLeadNotification } from "@/lib/notifications/sendLeadNotification";

export async function POST(request: Request) {
  // Guard 1: the body must be parseable JSON.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  // Guard 2: the JSON must match the lead request schema.
  const parsed = leadRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Invalid lead submission.",
        issues: parsed.error.issues.map((issue) => ({
          field: issue.path.map(String).join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  const { name, email, phone, message, channel } = parsed.data;

  const lead = await prisma.lead.create({
    data: {
      name,
      email,
      phone: phone ?? null,
      message: message ?? null,
      channel,
    },
  });

  // Deliberately awaited but isolated: sendLeadNotification never throws
  // (it catches internally), so a Resend outage can't turn a saved lead
  // into a failed request.
  await sendLeadNotification({ id: lead.id, name, email, phone, message, channel });

  return NextResponse.json({ id: lead.id });
}