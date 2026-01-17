import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "QR Code Generator - Free Online QR Code Maker",
    description: "Generate QR codes instantly for URLs, text, contact info, WiFi, and more. Free, fast, and customizable. Download high-resolution QR codes for print and digital use.",
    keywords: [
        "qr code generator",
        "qr code maker",
        "free qr code",
        "create qr code",
        "qr code creator",
        "generate qr code",
        "online qr code generator",
        "qr code for url",
        "custom qr code",
    ],
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/qr-code-generator",
    },
    openGraph: {
        title: "QR Code Generator - Free Online QR Code Maker",
        description: "Generate QR codes instantly for URLs, text, contact info, WiFi, and more. Free, fast, and customizable.",
        url: "https://tools.weebcoder.com/tools/qr-code-generator",
        type: "website",
        siteName: "WeebCoder Tools",
    },
    twitter: {
        card: "summary_large_image",
        title: "QR Code Generator - Free Online QR Code Maker",
        description: "Generate QR codes instantly for URLs, text, contact info, WiFi, and more. Free, fast, and customizable.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function QRCodeGeneratorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
