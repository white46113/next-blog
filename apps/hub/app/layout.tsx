import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "WeebCoder - Your Hub for Anime, Tech & Tools",
    alternates: {
        canonical: 'https://weebcoder.com',
    },
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
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
            </head>
            <body className="font-sans">{children}</body>
        </html>
    );
}
