import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/sections/Header";
import { Gopher } from "./components/ui/Gopher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Gopher />
      </body>
    </html>
  );
}
