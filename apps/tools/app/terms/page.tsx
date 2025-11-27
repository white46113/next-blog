import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | WeebCoder Tools",
    description: "Terms and Conditions for using WeebCoder Tools.",
    alternates: {
        canonical: "https://tools.weebcoder.com/terms",
    },
};

export default function TermsPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 27, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Agreement</h2>
                    <p>By using WeebCoder Tools at <Link href="/" className="text-primary hover:underline">tools.weebcoder.com</Link>, you agree to these terms.</p>

                    <h2>Use of Tools</h2>
                    <p>Our tools are free to use for personal and commercial purposes. You may:</p>
                    <ul>
                        <li>Use any tool unlimited times</li>
                        <li>Process files of any size (browser limits apply)</li>
                        <li>Use for commercial projects</li>
                    </ul>

                    <h2>Prohibited Use</h2>
                    <ul>
                        <li>Attempt to reverse engineer our tools</li>
                        <li>Use automated scripts to abuse the service</li>
                        <li>Redistribute our tools without permission</li>
                    </ul>

                    <h2>No Warranty</h2>
                    <p>Tools are provided "as is". We don't guarantee:</p>
                    <ul>
                        <li>100% accuracy of conversions</li>
                        <li>Uninterrupted service</li>
                        <li>Compatibility with all file types</li>
                    </ul>

                    <h2>Limitation of Liability</h2>
                    <p>We are not liable for any data loss or damages from using our tools. Always keep backups of important files.</p>

                    <h2>Privacy</h2>
                    <p>All processing happens in your browser. See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.</p>

                    <h2>Contact</h2>
                    <p><Link href="/contact" className="text-primary hover:underline">Contact us</Link> with questions.</p>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Related Pages</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/about" className="text-primary hover:underline">About Us</Link></li>
                            <li><Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                        </ul>
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
