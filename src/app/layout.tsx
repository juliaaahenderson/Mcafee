import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SentinelOne Secure | Enterprise-Grade Cybersecurity & Threat Protection",
  description: "Protect your digital life with enterprise-grade threat detection, AI-powered malware defense, real-time ransomware protection, and lightning-fast performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
