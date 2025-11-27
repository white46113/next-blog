import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | WeebCoder Tools",
    description: "Privacy Policy for WeebCoder Tools - Your data never leaves your device.",
    alternates: {
        canonical: "https://tools.weebcoder.com/privacy",
    },
};

export default function PrivacyPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 27, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Introduction</h2>
                    <p>Welcome to WeebCoder Tools. We are committed to protecting your privacy. This Privacy Policy explains how we handle your information at <Link href="/" className="text-primary hover:underline">tools.weebcoder.com</Link>.</p>

                    <h2>Our Privacy-First Approach</h2>
                    <p><strong>Your data never leaves your device.</strong> All tools on our website process files and data entirely in your browser. We do not upload, store, or have access to any files you process.</p>

                    <h2>Information We Collect</h2>
                    <h3>We Do NOT Collect:</h3>
                    <ul>
                        <li>Files you upload or process</li>
                        <li>Personal information</li>
                        <li>User accounts or registration data</li>
                        <li>Any data from the tools you use</li>
                    </ul>

                    <h3>We DO Collect:</h3>
                    <ul>
                        <li><strong>Analytics Data:</strong> Anonymous usage statistics via Google Analytics (page views, browser type)</li>
                        <li><strong>Cookies:</strong> For analytics and advertising purposes only</li>
                    </ul>

                    <h2>How Our Tools Work</h2>
                    <p>All file processing happens in your browser using JavaScript. When you use our tools:</p>
                    <ul>
                        <li>Files are processed locally on your device</li>
                        <li>No data is sent to our servers</li>
                        <li>Results are generated in your browser</li>
                        <li>You download the results directly</li>
                    </ul>

                    <h2>Third-Party Services</h2>
                    <h3>Google Analytics</h3>
                    <p>We use Google Analytics to understand how visitors use our tools. This helps us improve the website.</p>

                    <h3>Google AdSense</h3>
                    <p>We display ads via Google AdSense. You can opt out at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.</p>

                    <h2>Your Rights</h2>
                    <p>Since we don't collect your personal data, there's nothing to delete or access. You can:</p>
                    <ul>
                        <li>Clear cookies from your browser</li>
                        <li>Use ad blockers</li>
                        <li>Disable JavaScript (tools won't work)</li>
                    </ul>

                    <h2>Contact Us</h2>
                    <p>Questions? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>.</p>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Related Pages</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
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
