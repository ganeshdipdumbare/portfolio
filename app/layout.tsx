import type { Metadata } from "next";
import { Syne, Space_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "./components/sections/Header";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ganeshdip Dumbare | Senior Software Engineer",
  description: "Portfolio of Ganeshdip Dumbare, Senior Software Engineer specializing in Backend Development, Golang, and Cloud Computing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${spaceMono.variable} ${pixelifySans.variable} antialiased bg-background text-midground min-h-screen font-mono uppercase`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}


