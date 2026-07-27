import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/client";

interface LeadRequestBody {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  channel: "form" | "whatsapp" | "email";
}

export async function POST(request: Request) {
  const body: LeadRequestBody = await request.json();

  if (!body.name?.trim() || !body.email?.trim()) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  const lead = await prisma.lead.create({
    data: {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || null,
      message: body.message?.trim() || null,
      channel: body.channel ?? "form",
    },
  });

  return NextResponse.json({ id: lead.id });
}