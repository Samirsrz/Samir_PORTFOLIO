import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} — Full-Stack Web Developer`,
  description: profile.heroSub,
  openGraph: {
    title: `${profile.name} — Full-Stack Web Developer`,
    description: profile.heroSub,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-bg font-sans text-ink selection:bg-accent">
        {children}
      </body>
    </html>
  );
}
