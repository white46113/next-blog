import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free SEO Crawler - Find Indexing Issues",
    description: "Analyze your webpages for SEO issues. Detect noindex tags, canonicalization problems, thin content, slow loading, mobile issues, robots.txt blocking, and HTTP status errors. Free online SEO audit tool.",
    keywords: [
        "SEO crawler",
        "indexing issues",
        "noindex checker",
        "canonical checker",
        "SEO audit tool",
        "meta tag analyzer",
        "robots.txt checker",
        "page speed checker",
        "mobile SEO checker",
        "content analyzer",
        "SEO analysis",
        "website crawler",
        "SEO diagnostic tool",
    ],
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/seo-crawler",
    },
    openGraph: {
        title: "Free SEO Crawler - Find Indexing Issues | WeebCoder Tools",
        description: "Analyze your webpages for SEO issues. Detect noindex tags, canonicalization problems, thin content, and more.",
        type: "website",
        url: "https://tools.weebcoder.com/tools/seo-crawler",
        siteName: "WeebCoder Tools",
    },
    twitter: {
        card: "summary_large_image",
        title: "Free SEO Crawler - Find Indexing Issues",
        description: "Analyze your webpages for SEO issues. Detect noindex tags, canonicalization problems, thin content, and more.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function SEOCrawlerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
