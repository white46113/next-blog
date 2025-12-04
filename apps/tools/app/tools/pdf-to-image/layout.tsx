import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PDF to Image Converter - Free Online Tool",
    description: "Convert PDF files to images (PNG, JPEG, WebP) instantly. Free, fast, and privacy-focused. All processing happens in your browser.",
    keywords: ["pdf to image", "pdf to png", "pdf to jpeg", "pdf to webp", "pdf converter", "free pdf converter", "online pdf converter"],
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/pdf-to-image",
    },
    openGraph: {
        title: "PDF to Image Converter - Free Online Tool",
        description: "Convert PDF files to images (PNG, JPEG, WebP) instantly. Free, fast, and privacy-focused.",
        url: "https://tools.weebcoder.com/tools/pdf-to-image",
        type: "website",
    },
};

export default function PdfToImageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
