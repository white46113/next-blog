import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Tech Blog - Insights & Tutorials",
  description: "Explore the latest in technology, coding tutorials, and industry insights. A blog designed for developers and tech enthusiasts.",
  keywords: ["Technology", "Programming", "Web Development", "React", "Next.js", "Tutorials", "Tech Blog"],
  authors: [{ name: "Blog Author" }],
  openGraph: {
    title: "Modern Tech Blog - Insights & Tutorials",
    description: "Explore the latest in technology, coding tutorials, and industry insights.",
    type: "website",
    siteName: "Modern Tech Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Tech Blog - Insights & Tutorials",
    description: "Explore the latest in technology, coding tutorials, and industry insights.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
