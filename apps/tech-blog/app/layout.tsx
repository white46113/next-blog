import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { GoogleAnalytics } from "@repo/lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://tech.weebcoder.com'),
    title: {
        default: 'Tech Blog - Latest Technology News & Tutorials',
        template: '%s | Tech Blog'
    },
    description: "Explore the latest in technology, programming tutorials, and in-depth articles about web development, AI, and software engineering.",
    keywords: ['technology', 'programming', 'web development', 'tutorials', 'AI', 'software engineering', 'coding', 'tech news'],
    authors: [{ name: 'WeebCoder' }],
    creator: 'WeebCoder',
    publisher: 'WeebCoder',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tech.weebcoder.com',
        siteName: 'Tech Blog',
        title: 'Tech Blog - Latest Technology News & Tutorials',
        description: 'Explore the latest in technology, programming tutorials, and in-depth articles about web development, AI, and software engineering.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Tech Blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Blog - Latest Technology News & Tutorials',
        description: 'Explore the latest in technology, programming tutorials, and in-depth articles about web development, AI, and software engineering.',
        images: ['/og-image.png'],
        creator: '@weebcoder',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <GoogleAnalytics />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
