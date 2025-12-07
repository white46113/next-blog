import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Construction, ArrowLeft, Bell } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog - Coming Soon | TechBlog',
    description: 'Our blog section is currently under construction. Check back soon for quick reads and insights on the latest tech trends.',
    alternates: {
        canonical: 'https://tech.weebcoder.com/blog',
    },
    robots: {
        index: false,
        follow: true,
    },
};

export default function BlogComingSoon() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            T
                        </div>
                        <span className="font-bold text-xl tracking-tight">TechBlog</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                        <Construction className="h-10 w-10 text-primary" />
                    </div>

                    <div className="space-y-4">
                        <Badge className="bg-blue-600 hover:bg-blue-700">Coming Soon</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Blog Section Under Construction
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                            We're working hard to bring you quick reads and insights on the latest tech trends. Stay tuned!
                        </p>
                    </div>

                    <Card className="text-left">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5 text-primary" />
                                Get Notified When We Launch
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Subscribe to our newsletter and be the first to know when our blog section goes live.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <Button>Notify Me</Button>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="pt-8">
                        <p className="text-sm text-muted-foreground mb-4">
                            In the meantime, check out our existing content:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/articles">
                                <Button variant="outline">Browse Articles</Button>
                            </Link>
                            <Link href="/tutorials">
                                <Button variant="outline">View Tutorials</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 TechBlog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
