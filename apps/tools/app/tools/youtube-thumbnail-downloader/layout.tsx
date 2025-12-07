import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "YouTube Thumbnail Downloader - Download HD Thumbnails Free",
    description: "Download high-quality YouTube video thumbnails in multiple resolutions. Free, fast, and easy - no watermark, no registration required.",
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/youtube-thumbnail-downloader",
    },
};

export default function YouTubeThumbnailDownloaderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
