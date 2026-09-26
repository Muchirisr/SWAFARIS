// lib/notifications/sendLeadNotification.ts
// Fires an email notification when a new lead is captured. Deliberately
// isolated from the DB write in app/api/leads/route.ts: the lead is
// already saved by the time this runs, so a notification failure must
// never surface as a failed lead submission to the traveler.
//
// FROM/TO are env-driven so the swap to a verified domain later is a
// config change, not a code change:
//   RESEND_API_KEY          - required
//   LEAD_NOTIFICATION_TO    - required; until a domain is verified with
//                              Resend, this MUST be the email address the
//                              Resend account was signed up with — their
//                              sandbox sender (onboarding@resend.dev) can
//                              only deliver to that one address.
//   LEAD_NOTIFICATION_FROM  - optional, defaults to the Resend sandbox
//                              sender. Set this once a domain is verified.

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = process.env.LEAD_NOTIFICATION_FROM ?? "Swafaris Leads <onboarding@resend.dev>";

export interface LeadNotificationInput {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  channel: string;
}

export async function sendLeadNotification(lead: LeadNotificationInput): Promise<void> {
  const to = process.env.LEAD_NOTIFICATION_TO;
  if (!to) {
    console.error("LEAD_NOTIFICATION_TO is not set — skipping lead notification email.");
    return;
  }

  const lines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    lead.phone ? `Phone: ${lead.phone}` : null,
    `Channel: ${lead.channel}`,
    lead.message ? `\nMessage:\n${lead.message}` : null,
    `\nLead ID: ${lead.id}`,
  ].filter((line): line is string => line !== null);

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to,
      subject: `New Swafaris inquiry: ${lead.name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    // Never let this block the response — the lead is already saved.
    console.error("Failed to send lead notification email:", err);
  }
}