import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Tech Blog",
    description: "Terms and Conditions for using Tech Blog.",
    alternates: {
        canonical: "https://tech.weebcoder.com/terms",
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">T</div>
                        <span className="font-bold text-xl tracking-tight">Tech Blog</span>
                    </Link>
                    <Link href="/"><Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button></Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 27, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Agreement to Terms</h2>
                    <p>By accessing Tech Blog at <Link href="/" className="text-primary hover:underline">tech.weebcoder.com</Link>, you agree to these Terms and Conditions.</p>

                    <h2>Use of Website</h2>
                    <p>You may use our website for reading technology articles, tutorials, and blog posts for personal, non-commercial purposes.</p>

                    <h2>Prohibited Use</h2>
                    <ul>
                        <li>Copy or republish content without permission</li>
                        <li>Use automated tools to scrape content</li>
                        <li>Attempt to hack or disrupt the website</li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>All content is owned by us or our content suppliers and protected by copyright laws.</p>

                    <h2>Third-Party Links</h2>
                    <p>We may link to third-party websites. We are not responsible for their content or practices.</p>

                    <h2>Advertising</h2>
                    <p>We use Google AdSense. See our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for details.</p>

                    <h2>Disclaimer</h2>
                    <p>Content is provided "as is" without warranties. We do not guarantee accuracy or completeness.</p>

                    <h2>Contact</h2>
                    <p>Questions? <Link href="/contact" className="text-primary hover:underline">Contact us</Link>.</p>

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
                    <p>© 2025 Tech Blog. All rights reserved.</p>
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
