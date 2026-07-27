"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function InquiryPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, channel: "form" }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      console.error("Lead submission failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <main className="bg-neutral-950 min-h-screen flex items-center">
        <Section>
          <Container className="max-w-xl text-center">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6">Request Received</p>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">We'll be in touch shortly.</h1>
            <p className="text-neutral-400">
              A member of the Swafaris team will reach out to {email} to finalize your itinerary.
            </p>
          </Container>
        </Section>
      </main>
    );
  }

  return (
    <main className="bg-neutral-950 min-h-screen flex items-center">
      <Section>
        <Container className="max-w-xl">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-6 text-center">Begin Planning</p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Your journey is ready. Let&apos;s make it real.
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-5 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-400"
            />
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-400"
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-5 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-400"
            />
            <textarea
              placeholder="Anything you'd like us to know? (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="px-5 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 resize-none"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-8 py-4 rounded-full bg-amber-400 text-neutral-950 font-medium hover:bg-amber-300 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Request Full Itinerary"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                Something went wrong. Please try WhatsApp below instead.
              </p>
            )}
          </form>

          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-neutral-700 text-neutral-200 font-medium hover:border-neutral-500 transition-colors text-center"
            >
              WhatsApp Concierge
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}