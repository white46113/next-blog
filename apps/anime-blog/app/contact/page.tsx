import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageSquare, Send } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Anime Blog",
    description: "Get in touch with Anime Blog - We'd love to hear from you!",
    alternates: {
        canonical: "https://anime.weebcoder.com/contact",
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tight">Anime Blog</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Have questions, suggestions, or feedback? We'd love to hear from you!
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader>
                            <Mail className="h-10 w-10 text-purple-600 mb-2" />
                            <CardTitle>Email Us</CardTitle>
                            <CardDescription>
                                For general inquiries, partnerships, or feedback
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <a href="mailto:contact@weebcoder.com" className="text-primary hover:underline text-lg">
                                contact@weebcoder.com
                            </a>
                            <p className="text-sm text-muted-foreground mt-2">
                                We typically respond within 24-48 hours
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <MessageSquare className="h-10 w-10 text-purple-600 mb-2" />
                            <CardTitle>Social Media</CardTitle>
                            <CardDescription>
                                Connect with us on social platforms
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <p className="text-sm">
                                    <strong>Twitter:</strong> <span className="text-muted-foreground">@weebcoder</span>
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Follow us for daily anime updates and discussions
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2>What Can We Help You With?</h2>

                    <h3>General Inquiries</h3>
                    <p>
                        Questions about our content, recommendations, or the anime we cover? Feel free to reach out!
                    </p>

                    <h3>Content Suggestions</h3>
                    <p>
                        Have an anime you'd like us to review? Want us to cover a specific topic? Let us know!
                        We're always looking for new ideas and value our readers' input.
                    </p>

                    <h3>Partnerships & Collaborations</h3>
                    <p>
                        Interested in partnering with Anime Blog? We're open to collaborations with anime-related
                        brands, content creators, and industry professionals. Email us with your proposal.
                    </p>

                    <h3>Technical Issues</h3>
                    <p>
                        Experiencing problems with the website? Found a bug or broken link? Please let us know
                        so we can fix it promptly.
                    </p>

                    <h3>Advertising Inquiries</h3>
                    <p>
                        For advertising opportunities and media kit requests, please email us with "Advertising"
                        in the subject line.
                    </p>

                    <h2>Before You Contact Us</h2>
                    <p>Please check our frequently accessed pages:</p>
                    <ul>
                        <li><Link href="/about" className="text-primary hover:underline">About Us</Link> - Learn more about Anime Blog</li>
                        <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> - How we handle your data</li>
                        <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> - Our terms of service</li>
                    </ul>

                    <h2>Response Time</h2>
                    <p>
                        We aim to respond to all inquiries within 24-48 hours during business days. Please note that
                        response times may be longer during weekends and holidays.
                    </p>
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                    <CardHeader>
                        <Send className="h-10 w-10 text-purple-600 mb-2" />
                        <CardTitle>Stay Connected</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Don't miss out on the latest anime reviews and recommendations!
                            Subscribe to our newsletter for weekly updates.
                        </p>
                        <Link href="/">
                            <Button className="bg-purple-600 hover:bg-purple-700">
                                Subscribe to Newsletter
                            </Button>
                        </Link>
                    </CardContent>
                </Card>

                <div className="mt-12 p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="text-primary hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-primary hover:underline">About Us</Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
                        </li>
                    </ul>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Anime Blog. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms & Conditions</Link>
                        <Link href="/about" className="hover:text-foreground">About</Link>
                        <Link href="/contact" className="hover:text-foreground">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
