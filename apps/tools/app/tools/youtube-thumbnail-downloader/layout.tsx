import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free",
    description: "Download high-quality YouTube video thumbnails in multiple resolutions. Free, fast, and easy - no watermark, no registration required.",
    keywords: ["youtube thumbnail downloader", "download youtube thumbnail", "youtube thumbnail", "hd thumbnail", "thumbnail downloader", "free thumbnail downloader"],
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/youtube-thumbnail-downloader",
    },
    openGraph: {
        title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free",
        description: "Download high-quality YouTube video thumbnails in multiple resolutions. Free, fast, and easy - no watermark, no registration required.",
        url: "https://tools.weebcoder.com/tools/youtube-thumbnail-downloader",
        type: "website",
        siteName: "WeebCoder Tools",
    },
    twitter: {
        card: "summary_large_image",
        title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free",
        description: "Download high-quality YouTube video thumbnails in multiple resolutions. Free, fast, and easy - no watermark, no registration required.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function YouTubeThumbnailDownloaderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
