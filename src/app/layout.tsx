import type { Metadata } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Chrome } from "@/components/Chrome";
import { SharpenFilter } from "@/components/SharpenFilter";
import { StructuredData } from "@/components/StructuredData";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aivanguard.org"),
  title: {
    default: "AI Vanguard — Student voice on AI in education",
    template: "%s · AI Vanguard",
  },
  description:
    "AI Vanguard is a student-led nonprofit advancing student participation in AI education policy through research, district collaboration, and a national network of student leaders.",
  keywords: [
    "AI in education",
    "student voice",
    "AI policy",
    "nonprofit",
    "youth-led",
    "K-12 AI policy",
    "AI Vanguard",
    "policy advocacy",
    "student representatives",
  ],
  authors: [{ name: "AI Vanguard" }],
  creator: "AI Vanguard",
  publisher: "AI Vanguard",
  openGraph: {
    title: "AI Vanguard",
    description:
      "Student-led nonprofit shaping how AI is used in education.",
    url: "https://aivanguard.org",
    siteName: "AI Vanguard",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Vanguard — Student voice on AI in education",
    description:
      "AI Vanguard is a student-led nonprofit advancing student participation in AI education policy through research, district collaboration, and a national network of student leaders.",
  },
  icons: {
    icon: [
      { url: "/img/brand/aivanguard-mark.png", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.ico" },
    ],
    apple: "/img/brand/aivanguard-mark.png",
    shortcut: "/img/brand/aivanguard-mark.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <SharpenFilter />
        <Chrome>{children}</Chrome>
        <Analytics />
      </body>
    </html>
  );
}
