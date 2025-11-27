import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Wrench, Lock, Zap, DollarSign } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | WeebCoder Tools",
    description: "Learn about WeebCoder Tools - Free, privacy-focused online tools.",
    alternates: {
        canonical: "https://tools.weebcoder.com/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                            <Wrench className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-xl tracking-tight">Tools</span>
                    </Link>
                    <Link href="/"><Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button></Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About WeebCoder Tools</h1>
                <p className="text-xl text-muted-foreground mb-12">Free online tools for file conversion, image processing, and calculations. Privacy-focused and no registration required.</p>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2>Our Mission</h2>
                    <p>We believe online tools should be free, fast, and respect your privacy. That's why all our tools run entirely in your browser—your data never leaves your device.</p>

                    <h2>What We Offer</h2>
                    <ul>
                        <li><strong>File Converters:</strong> Convert images, documents, and more</li>
                        <li><strong>Calculators:</strong> Health, finance, and utility calculators</li>
                        <li><strong>Image Tools:</strong> Resize, compress, and edit images</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <Lock className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Privacy First</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>All processing happens in your browser. Your files never leave your device.</CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Zap className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Lightning Fast</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>No uploads or downloads. Instant results with client-side processing.</CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <DollarSign className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>100% Free</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>No registration, no limits, no hidden fees. Use as much as you want.</CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">Tools</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/tools" className="text-primary hover:underline">All Tools</Link></li>
                                <li><Link href="/tools/bmi-calculator" className="text-primary hover:underline">BMI Calculator</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Information</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
                                <li><Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 WeebCoder Tools. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms</Link>
                        <Link href="/about" className="hover:text-foreground">About</Link>
                        <Link href="/contact" className="hover:text-foreground">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
