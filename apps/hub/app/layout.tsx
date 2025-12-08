import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WeebCoder - Your Hub for Anime, Tech & Tools",
    description: "Discover anime reviews, tech tutorials, and free online tools. Your one-stop destination for entertainment, learning, and productivity.",
    keywords: ["anime", "tech tutorials", "online tools", "anime reviews", "technology", "free tools"],
    authors: [{ name: "WeebCoder" }],
    openGraph: {
        title: "WeebCoder - Your Hub for Anime, Tech & Tools",
        description: "Discover anime reviews, tech tutorials, and free online tools.",
        url: "https://weebcoder.com",
        siteName: "WeebCoder",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "WeebCoder - Your Hub for Anime, Tech & Tools",
        description: "Discover anime reviews, tech tutorials, and free online tools.",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
