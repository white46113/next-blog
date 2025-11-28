import { Inter } from "next/font/google";
import '../../styles/globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://tools.weebcoder.com'),
    title: {
        default: 'Free Online Tools - Converters & Calculators',
        template: '%s | WeebCoder Tools'
    },
    description: "Free online tools for file conversion, image processing, and calculations. No registration required, privacy-focused.",
    keywords: ['online tools', 'converters', 'calculators', 'free tools', 'file conversion', 'image processing', 'utilities'],
    authors: [{ name: 'WeebCoder' }],
    creator: 'WeebCoder',
    publisher: 'WeebCoder',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: "/favicon.svg",
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://tools.weebcoder.com',
        siteName: 'WeebCoder Tools',
        title: 'Free Online Tools - Converters & Calculators',
        description: 'Free online tools for file conversion, image processing, and calculations. No registration required, privacy-focused.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'WeebCoder Tools',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Online Tools - Converters & Calculators',
        description: 'Free online tools for file conversion, image processing, and calculations. No registration required, privacy-focused.',
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

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col">
                    <SiteHeader />
                    <main className="flex-1">{children}</main>
                    <SiteFooter />
                </div>
            </body>
        </html>
    );
}
