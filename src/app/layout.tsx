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

/**
 * Metadata = information about the page for browsers
 * 
 * Next.js automatically uses this for:
 * - <title> tag
 * - <meta name="description">
 * - Open Graph tags (social sharing)
 */
export const metadata: Metadata = {
  title: "Zipply - Job Application Tracker",
  description: "Track and manage job applications efficiently",
};


/**
 * RootLayout Component
 * Wraps all pages. {children} is the page content.
 * suppressHydrationWarning prevents React warnings for client-server rendering mismatch on HTML elementseg: with user preferences on client side for light/dark mode
 */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
