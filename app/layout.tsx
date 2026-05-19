import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentProof - Reviewer-ready AI workflow evidence",
  description: "Turn raw AI agent logs, repo links, and screenshots into structured proof packs for grants, hackathons, and credit applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
