import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Tech Blog",
    description: "Get in touch with Tech Blog.",
    alternates: {
        canonical: "https://tech.weebcoder.com/contact",
    },
};

export default function ContactPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12">Have questions or suggestions? We'd love to hear from you!</p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader>
                            <Mail className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Email Us</CardTitle>
                            <CardDescription>For inquiries, partnerships, or feedback</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <a href="mailto:contact@weebcoder.com" className="text-primary hover:underline text-lg">contact@weebcoder.com</a>
                            <p className="text-sm text-muted-foreground mt-2">We respond within 24-48 hours</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <MessageSquare className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Social Media</CardTitle>
                            <CardDescription>Connect with us</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm"><strong>Twitter:</strong> @weebcoder</p>
                            <p className="text-sm text-muted-foreground mt-2">Follow for tech updates</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>What Can We Help With?</h2>
                    <ul>
                        <li>General inquiries about our content</li>
                        <li>Tutorial requests and topic suggestions</li>
                        <li>Partnerships and collaborations</li>
                        <li>Technical issues with the website</li>
                    </ul>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-primary hover:underline">About Us</Link></li>
                            <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
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
