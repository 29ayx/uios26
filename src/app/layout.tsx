import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iOS UI Tailwind Glassmorphism",
  description:
    "A Next.js showcase of modern iOS-style glassmorphism components built with Tailwind CSS — buttons, cards, navbars, dark & light theme toggle.",
  keywords: [
    "glassmorphism",
    "tailwind",
    "iOS UI",
    "blur",
    "frosted glass",
    "next.js",
    "react components",
  ],
  openGraph: {
    title: "iOS UI Tailwind Glassmorphism",
    description:
      "Modern glassmorphic UI kit built with Next.js & Tailwind CSS. Dark/light themes, interactive shine animations, and copy-ready snippets.",
    url: "https://your-site-domain.com/",
    siteName: "iOS UI Tailwind Glassmorphism",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iOS UI Tailwind Glassmorphism",
    description:
      "Modern glassmorphic UI kit built with Next.js & Tailwind CSS. Dark/light themes, interactive shine animations, and copy-ready snippets.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
