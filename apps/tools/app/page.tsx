import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileImage, Calculator, Wrench, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Free Online Tools - Converters & Calculators',
    description: 'Convert files, process images, and calculate metrics - all in your browser. Your data never leaves your device.',
    alternates: {
        canonical: 'https://tools.weebcoder.com',
    },
};

export default function HomePage() {
    const toolCategories = [
        {
            title: "Image Converters",
            description: "Convert images between different formats",
            icon: FileImage,
            tools: [
                { name: "JPG to PDF", href: "/tools/jpg-to-pdf", description: "Convert JPG images to PDF documents" },
                { name: "PDF to Image", href: "/tools/pdf-to-image", description: "Convert PDF pages to PNG, JPEG, or WebP" },
                { name: "PNG to WebP", href: "/tools/png-to-webp", description: "Convert PNG to modern WebP format" },
                { name: "QR Code Generator", href: "/tools/qr-code-generator", description: "Generate QR codes from text or URL" },
                { name: "YouTube Thumbnail Downloader", href: "/tools/youtube-thumbnail-downloader", description: "Download YouTube video thumbnails in high quality" },
            ],
            color: "text-blue-600"
        },
        {
            title: "Calculators",
            description: "Health and fitness calculators",
            icon: Calculator,
            tools: [
                { name: "BMI Calculator", href: "/tools/bmi-calculator", description: "Calculate your Body Mass Index" },
                { name: "Percentage Calculator", href: "/tools/percentage-calculator", description: "Calculate percentages, increase/decrease" },
            ],
            color: "text-green-600"
        },
    ];

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebSite",
                            "@id": "https://tools.weebcoder.com/#website",
                            "url": "https://tools.weebcoder.com/",
                            "name": "WeebCoder Tools",
                            "description": "Free online tools for file conversion, image processing, and calculations. No registration required, privacy-focused.",
                            "publisher": {
                                "@id": "https://tools.weebcoder.com/#organization"
                            },
                            "inLanguage": "en-US"
                        },
                        {
                            "@type": "Organization",
                            "@id": "https://tools.weebcoder.com/#organization",
                            "name": "WeebCoder",
                            "url": "https://tools.weebcoder.com/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://tools.weebcoder.com/logo.png",
                                "width": 512,
                                "height": 512
                            },
                            "sameAs": [
                                "https://tools.weebcoder.com/"
                            ]
                        }
                    ]
                })
            }} />

            {/* Hero Section */}
            <section className="py-20 md:py-32 px-4 border-b bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                    <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full">
                        100% Free • No Registration • Privacy First
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                        Free Online <span className="text-primary">Tools</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Convert files, process images, and calculate metrics - all in your browser. Your data never leaves your device.
                    </p>
                </div>
            </section>

            {/* Tool Categories */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        {toolCategories.map((category) => (
                            <div key={category.title} id={category.title.toLowerCase().replace(' ', '-')}>
                                <div className="flex items-center gap-3 mb-8">
                                    <category.icon className={`h-8 w-8 ${category.color}`} />
                                    <div>
                                        <h2 className="text-3xl font-bold tracking-tight">{category.title}</h2>
                                        <p className="text-muted-foreground">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.tools.map((tool) => (
                                        <Link key={tool.href} href={tool.href}>
                                            <Card className="group hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                                                <CardHeader>
                                                    <CardTitle className="group-hover:text-primary transition-colors">
                                                        {tool.name}
                                                    </CardTitle>
                                                    <CardDescription>{tool.description}</CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <Button variant="ghost" className="w-full justify-between">
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
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4 bg-muted/30 border-y">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Why Use Our Tools?</h2>
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
            </section>
        </>
    );
}
