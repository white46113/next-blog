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
                { name: "PNG to WebP", href: "/tools/png-to-webp", description: "Convert PNG to modern WebP format" },
            ],
            color: "text-blue-600"
        },
        {
            title: "Calculators",
            description: "Health and fitness calculators",
            icon: Calculator,
            tools: [
                { name: "BMI Calculator", href: "/tools/bmi-calculator", description: "Calculate your Body Mass Index" },
            ],
            color: "text-green-600"
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            <Wrench className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Tools</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="#converters" className="transition-colors hover:text-primary">Converters</Link>
                        <Link href="#calculators" className="transition-colors hover:text-primary">Calculators</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-1">
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
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2024 Tools. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
