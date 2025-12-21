"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Download, Youtube, AlertCircle, Image as ImageIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import RelatedTools from "@/components/RelatedTools";
import CrossAppLinks from "@/components/CrossAppLinks";

export default function YouTubeThumbnailDownloader() {
    const [url, setUrl] = useState("");
    const [videoId, setVideoId] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Extract YouTube Video ID from URL
    const extractVideoId = (url: string): string | null => {
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
            /^([a-zA-Z0-9_-]{11})$/
        ];

        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match && match[1]) {
                return match[1];
            }
        }
        return null;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setVideoId("");

        if (!url.trim()) {
            setError("Please enter a YouTube URL");
            return;
        }

        const id = extractVideoId(url);
        if (!id) {
            setError("Invalid YouTube URL. Please check and try again.");
            return;
        }

        setVideoId(id);
    };

    // Generate thumbnail URLs (YouTube's standard format)
    const getThumbnailUrls = (id: string) => {
        const baseUrl = `https://img.youtube.com/vi/${id}`;
        return [
            { quality: "Max Resolution", url: `${baseUrl}/maxresdefault.jpg`, resolution: "1280x720" },
            { quality: "Standard Definition", url: `${baseUrl}/sddefault.jpg`, resolution: "640x480" },
            { quality: "High Quality", url: `${baseUrl}/hqdefault.jpg`, resolution: "480x360" },
            { quality: "Medium Quality", url: `${baseUrl}/mqdefault.jpg`, resolution: "320x180" },
            { quality: "Default", url: `${baseUrl}/default.jpg`, resolution: "120x90" },
        ];
    };

    const handleDownload = async (thumbnailUrl: string, quality: string) => {
        setLoading(true);
        try {
            // Fetch the image
            const response = await fetch(thumbnailUrl);
            const blob = await response.blob();

            // Create download link
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `youtube-thumbnail-${videoId}-${quality.toLowerCase().replace(/\s+/g, "-")}.jpg`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            setError("Failed to download thumbnail. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const thumbnailUrls = videoId ? getThumbnailUrls(videoId) : [];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "YouTube Thumbnail Downloader",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description:
            "Free online YouTube Thumbnail Downloader. Download high-quality thumbnails from any YouTube video in multiple resolutions.",
        featureList: [
            "Download YouTube thumbnails in HD",
            "Multiple resolution options",
            "No watermark",
            "Free and unlimited",
            "No registration required",
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do I download a YouTube thumbnail?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply paste the YouTube video URL into the input field, click 'Get Thumbnails', and choose your preferred resolution to download.",
                },
            },
            {
                "@type": "Question",
                name: "Is this YouTube thumbnail downloader free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this tool is 100% free to use with no limits, no watermarks, and no registration required.",
                },
            },
            {
                "@type": "Question",
                name: "What resolutions are available?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can download thumbnails in multiple resolutions: Max Resolution (1280x720), Standard Definition (640x480), High Quality (480x360), Medium Quality (320x180), and Default (120x90).",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                {/* Header */}
                <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
                        <Youtube className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        YouTube Thumbnail Downloader
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Download high-quality thumbnails from any YouTube video in multiple resolutions.
                        <br className="hidden md:block" />
                        100% free, no watermark, no registration required.
                    </p>
                </div>

                {/* Main Tool Area */}
                <div className="grid lg:grid-cols-12 gap-8 mb-20">
                    {/* Input Section */}
                    <div className="lg:col-span-12 space-y-6">
                        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Enter YouTube URL</CardTitle>
                                <CardDescription>Paste any YouTube video URL to get thumbnails</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="youtube-url" className="text-base font-medium">
                                            YouTube Video URL
                                        </Label>
                                        <div className="flex gap-3">
                                            <Input
                                                id="youtube-url"
                                                type="text"
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                                placeholder="https://youtube.com/watch?v=... or https://youtu.be/..."
                                                className="h-14 text-lg px-4 shadow-sm border-muted-foreground/20 focus-visible:ring-primary flex-1"
                                            />
                                            <Button
                                                type="submit"
                                                className="h-14 px-8 text-lg font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5"
                                                disabled={loading}
                                            >
                                                <Youtube className="mr-2 h-5 w-5" />
                                                {loading ? "Processing..." : "Get Thumbnails"}
                                            </Button>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Supports all YouTube URL formats including shorts, embed, and standard links.
                                        </p>
                                    </div>

                                    {error && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>{error}</AlertDescription>
                                        </Alert>
                                    )}
                                </form>
                            </CardContent>
                        </Card>

                        {/* Features List */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: "HD Quality", desc: "Up to 1280x720" },
                                { title: "No Watermark", desc: "Clean downloads" },
                                { title: "Unlimited", desc: "No download limits" },
                                { title: "Privacy", desc: "Browser-based" }
                            ].map((feature) => (
                                <Card key={feature.title} className="bg-muted/50 border-none">
                                    <CardContent className="p-4 flex flex-col items-center text-center">
                                        <span className="font-semibold text-primary">{feature.title}</span>
                                        <span className="text-sm text-muted-foreground">{feature.desc}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                {videoId && (
                    <div className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">Available Thumbnails</CardTitle>
                                <CardDescription>Choose your preferred resolution and download</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {thumbnailUrls.map((thumbnail) => (
                                        <Card key={thumbnail.quality} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                                            <div className="relative aspect-video bg-muted overflow-hidden">
                                                <img
                                                    src={thumbnail.url}
                                                    alt={`YouTube thumbnail ${thumbnail.quality}`}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = "none";
                                                        const parent = target.parentElement;
                                                        if (parent) {
                                                            const fallback = parent.querySelector(".fallback") as HTMLElement;
                                                            if (fallback) {
                                                                fallback.style.display = "flex";
                                                            }
                                                        }
                                                    }}
                                                />
                                                <div className="fallback hidden absolute inset-0 items-center justify-center bg-muted text-muted-foreground text-sm">
                                                    <div className="text-center">
                                                        <ImageIcon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                                        Not available
                                                    </div>
                                                </div>
                                            </div>
                                            <CardContent className="p-4 space-y-3">
                                                <div className="space-y-1">
                                                    <h3 className="font-semibold text-lg">{thumbnail.quality}</h3>
                                                    <p className="text-sm text-muted-foreground">{thumbnail.resolution}</p>
                                                </div>
                                                <Button
                                                    onClick={() => handleDownload(thumbnail.url, thumbnail.quality)}
                                                    className="w-full shadow-md hover:shadow-lg transition-all"
                                                    disabled={loading}
                                                >
                                                    <Download className="mr-2 h-4 w-4" />
                                                    {loading ? "Downloading..." : "Download"}
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* SEO Content Section */}
                <div className="max-w-4xl mx-auto space-y-16">
                    <section className="prose prose-gray dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-6">What Is a YouTube Thumbnail Downloader?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A YouTube Thumbnail Downloader is a free online tool that allows you to download high-quality thumbnail images from any YouTube video. Simply paste the video URL, and you can download thumbnails in various resolutions, from standard quality to maximum resolution (1280x720).
                                </p>
                            </div>
                            <div className="bg-muted/30 p-8 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Why use our tool?</h3>
                                <ul className="space-y-3 list-none pl-0">
                                    {[
                                        "Download thumbnails in multiple resolutions",
                                        "No watermark on downloaded images",
                                        "100% free with unlimited downloads",
                                        "No registration or login required",
                                        "Works with all YouTube video formats",
                                        "Fast and secure browser-based processing"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">How to Use & Common Use Cases</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">How to Download</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                                            <li>Copy the URL of any YouTube video from your browser.</li>
                                            <li>Paste the URL into the input field above.</li>
                                            <li>Click "Get Thumbnails" to see all available resolutions.</li>
                                            <li>Choose your preferred quality and click "Download".</li>
                                        </ol>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Popular Uses</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                                            <li>• Video editing</li>
                                            <li>• Social media posts</li>
                                            <li>• Blog articles</li>
                                            <li>• Presentations</li>
                                            <li>• Research projects</li>
                                            <li>• Content creation</li>
                                            <li>• Marketing materials</li>
                                            <li>• Educational content</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="mt-16 bg-muted/30 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold tracking-tight mb-4">Understanding YouTube Thumbnail Resolutions</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    YouTube stores thumbnails in multiple resolutions to accommodate different display sizes and use cases. Here's what each resolution is best for:
                                </p>
                                <ul className="space-y-2 pl-6">
                                    <li><strong>Max Resolution (1280x720):</strong> Best for high-quality prints, professional presentations, and large displays.</li>
                                    <li><strong>Standard Definition (640x480):</strong> Perfect for blog posts, social media, and general web use.</li>
                                    <li><strong>High Quality (480x360):</strong> Ideal for smaller web images and email newsletters.</li>
                                    <li><strong>Medium Quality (320x180):</strong> Suitable for thumbnails and preview images.</li>
                                    <li><strong>Default (120x90):</strong> Best for very small icons or placeholders.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-2">Everything you need to know about downloading YouTube thumbnails</p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Is it legal to download YouTube thumbnails?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        YouTube thumbnails are publicly accessible images. However, they may be copyrighted by the content creator. Always respect copyright laws and use thumbnails appropriately. For commercial use, it's best to get permission from the video owner.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Do you store the thumbnails I download?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        No. All processing happens in your browser. We don't store any thumbnails or URLs. Your privacy is completely protected.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Why is Max Resolution not available for some videos?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Not all YouTube videos have maximum resolution thumbnails. Older videos or videos uploaded in lower quality may not have the 1280x720 version available. In such cases, try downloading a lower resolution option.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Can I download thumbnails from private or unlisted videos?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        No. This tool only works with public YouTube videos. Private and unlisted videos have restricted access, and their thumbnails cannot be downloaded using this method.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Is there a limit to how many thumbnails I can download?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        No limits! You can download as many thumbnails as you need, completely free. There are no daily limits, no registration requirements, and no hidden fees.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        What format are the downloaded thumbnails?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        All thumbnails are downloaded in JPG format, which is the standard format YouTube uses for storing thumbnails. JPG provides a good balance between image quality and file size.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </section>

                    {/* Related Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RelatedTools currentPath="/tools/youtube-thumbnail-downloader" category="Downloader" />
                        <CrossAppLinks />
                    </div>
                </div>
            </div>
        </div>
    );
}
