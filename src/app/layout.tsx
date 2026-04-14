import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Workflow Platform - Automate Your Business",
  description: "Build AI-powered workflows with our no-code platform. Automate business processes, integrate APIs, and scale without limits.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
