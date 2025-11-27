import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Code, BookOpen, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Tech Blog",
    description: "Learn about Tech Blog - Your source for technology insights and programming tutorials.",
    alternates: {
        canonical: "https://tech.weebcoder.com/about",
    },
};

export default function AboutPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">About Tech Blog</h1>
                <p className="text-xl text-muted-foreground mb-12">Your source for technology insights, programming tutorials, and in-depth technical articles.</p>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2>Our Mission</h2>
                    <p>We're passionate about making technology accessible to everyone. Whether you're a beginner learning to code or an experienced developer exploring new frameworks, we provide quality content to help you grow.</p>

                    <h2>What We Offer</h2>
                    <ul>
                        <li><strong>Blog Posts:</strong> Quick insights on latest tech trends</li>
                        <li><strong>Tutorials:</strong> Step-by-step guides to master new technologies</li>
                        <li><strong>Articles:</strong> In-depth analysis of web development, AI, and software engineering</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <Code className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Practical</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Real-world examples and code you can use immediately</CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <BookOpen className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Educational</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Learn concepts thoroughly with clear explanations</CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Lightbulb className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Innovative</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Stay ahead with coverage of emerging technologies</CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">Content</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/blog" className="text-primary hover:underline">Blog Posts</Link></li>
                                <li><Link href="/tutorials" className="text-primary hover:underline">Tutorials</Link></li>
                                <li><Link href="/articles" className="text-primary hover:underline">Articles</Link></li>
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
