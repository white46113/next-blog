import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileImage, Calculator, ArrowRight, Wrench, QrCode, Download, Bug, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'All Tools - Free Online Converters & Calculators | WeebCoder Tools',
    description: 'Browse our complete collection of free online tools including image converters, PDF tools, calculators, and more. All tools work in your browser with complete privacy.',
    alternates: {
        canonical: 'https://tools.weebcoder.com/tools',
    },
    openGraph: {
        title: 'All Tools - Free Online Converters & Calculators',
        description: 'Browse our complete collection of free online tools including image converters, PDF tools, calculators, and more.',
        type: 'website',
        url: 'https://tools.weebcoder.com/tools',
        siteName: 'WeebCoder Tools',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'All Tools - Free Online Converters & Calculators',
        description: 'Browse our complete collection of free online tools including image converters, PDF tools, calculators, and more.',
    },
};

export default function ToolsPage() {
    const toolCategories = [
        {
            title: "Image Converters",
            description: "Convert images between different formats",
            icon: FileImage,
            tools: [
                { name: "JPG to PDF", href: "/tools/jpg-to-pdf", description: "Convert JPG images to PDF documents", icon: FileImage },
                { name: "PDF to Image", href: "/tools/pdf-to-image", description: "Convert PDF pages to PNG, JPEG, or WebP", icon: FileImage },
                { name: "PNG to WebP", href: "/tools/png-to-webp", description: "Convert PNG to modern WebP format", icon: FileImage },
                { name: "QR Code Generator", href: "/tools/qr-code-generator", description: "Generate QR codes from text or URL", icon: QrCode },
                { name: "YouTube Thumbnail Downloader", href: "/tools/youtube-thumbnail-downloader", description: "Download YouTube video thumbnails in high quality", icon: Download },
            ],
            color: "text-blue-600",
            bgColor: "bg-blue-500/10"
        },
        {
            title: "Calculators",
            description: "Health and fitness calculators",
            icon: Calculator,
            tools: [
                { name: "BMI Calculator", href: "/tools/bmi-calculator", description: "Calculate your Body Mass Index", icon: Calculator },
                { name: "Percentage Calculator", href: "/tools/percentage-calculator", description: "Calculate percentages, increase/decrease", icon: Calculator },
            ],
            color: "text-green-600",
            bgColor: "bg-green-500/10"
        },
        {
            title: "Developer Tools",
            description: "Tools for developers and API testing",
            icon: Bug,
            tools: [
                { name: "HTTP Request Tester", href: "/tools/form-data-debugger", description: "Test APIs online - Send real requests, view responses, generate code", icon: Bug },
                { name: "SEO Crawler", href: "/tools/seo-crawler", description: "Analyze webpages for indexing issues and SEO problems", icon: Search },
            ],
            color: "text-purple-600",
            bgColor: "bg-purple-500/10"
        },
    ];

    // Flatten all tools for JSON-LD
    const allTools = toolCategories.flatMap(cat => cat.tools);

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "All Tools",
                    "description": "Complete collection of free online tools for file conversion, image processing, and calculations",
                    "url": "https://tools.weebcoder.com/tools",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": allTools.map((tool, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "SoftwareApplication",
                                "name": tool.name,
                                "description": tool.description,
                                "url": `https://tools.weebcoder.com${tool.href}`,
                                "applicationCategory": "WebApplication",
                                "offers": {
                                    "@type": "Offer",
                                    "price": "0",
                                    "priceCurrency": "USD"
                                }
                            }
                        }))
                    }
                })
            }} />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            <Wrench className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">WeebCoder Tools</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge className="bg-primary hover:bg-primary/90">
                        {allTools.length} Free Tools
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        All Tools
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Convert files, process images, and calculate metrics - all in your browser. 100% free, no registration required.
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-2 pt-4">
                        <Badge variant="outline" className="text-xs">🔒 Privacy First</Badge>
                        <Badge variant="outline" className="text-xs">⚡ Lightning Fast</Badge>
                        <Badge variant="outline" className="text-xs">💯 100% Free</Badge>
                        <Badge variant="outline" className="text-xs">📱 Works Offline</Badge>
                    </div>
                </div>

                {/* Tools Grid by Category */}
                <div className="max-w-6xl mx-auto space-y-16">
                    {toolCategories.map((category) => (
                        <div key={category.title} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                                    <category.icon className={`h-6 w-6 ${category.color}`} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">{category.title}</h2>
                                    <p className="text-sm text-muted-foreground">{category.description}</p>
                                </div>
                                <Badge variant="secondary" className="ml-auto">
                                    {category.tools.length} {category.tools.length === 1 ? 'tool' : 'tools'}
                                </Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.tools.map((tool) => (
                                    <Link key={tool.href} href={tool.href}>
                                        <Card className="group hover:shadow-lg transition-all duration-300 h-full cursor-pointer hover:border-primary/50">
                                            <CardHeader>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                                                        <tool.icon className={`h-5 w-5 ${category.color}`} />
                                                    </div>
                                                    <Badge variant="outline" className="text-xs">Free</Badge>
                                                </div>
                                                <CardTitle className="group-hover:text-primary transition-colors">
                                                    {tool.name}
                                                </CardTitle>
                                                <CardDescription>{tool.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                                                    Use Tool
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="max-w-4xl mx-auto mt-20 p-8 bg-muted/30 rounded-lg border">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2">Why Use Our Tools?</h2>
                        <p className="text-muted-foreground">Built with privacy and performance in mind</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="font-semibold mb-2">Privacy First</h3>
                            <p className="text-sm text-muted-foreground">All processing happens in your browser. Your files never leave your device.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="font-semibold mb-2">Lightning Fast</h3>
                            <p className="text-sm text-muted-foreground">No uploads or downloads. Instant results with client-side processing.</p>
                        </div>

                        <div className="text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">💯</span>
                            </div>
                            <h3 className="font-semibold mb-2">100% Free</h3>
                            <p className="text-sm text-muted-foreground">No registration, no limits, no hidden fees. Use as much as you want.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t mt-16">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 WeebCoder Tools. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
