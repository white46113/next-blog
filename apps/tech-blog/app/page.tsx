import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Code, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Tech Blog - Latest Technology News & Tutorials',
    description: 'Your go-to resource for technology insights, programming tutorials, and in-depth technical articles.',
    alternates: {
        canonical: 'https://tech.weebcoder.com',
    },
};

export default function HomePage() {
    const contentTypes = [
        {
            title: "Blog Posts",
            description: "Quick reads and insights on the latest tech trends",
            icon: FileText,
            href: "/blog",
            count: "50+ posts",
            color: "text-blue-600"
        },
        {
            title: "Tutorials",
            description: "Step-by-step guides to master new technologies",
            icon: BookOpen,
            href: "/tutorials",
            count: "30+ tutorials",
            color: "text-green-600"
        },
        {
            title: "Articles",
            description: "In-depth analysis and technical deep dives",
            icon: Code,
            href: "/articles",
            count: "40+ articles",
            color: "text-purple-600"
        }
    ];

    const featuredContent = [
        {
            type: "Tutorial",
            title: "Building a Full-Stack App with Next.js 14",
            excerpt: "Learn how to build a modern full-stack application using Next.js 14, TypeScript, and Prisma.",
            slug: "nextjs-14-fullstack-app",
            category: "tutorials",
            readTime: "15 min read",
            date: "Nov 20, 2024"
        },
        {
            type: "Article",
            title: "The Future of Web Development in 2025",
            excerpt: "Exploring emerging trends, frameworks, and technologies that will shape web development.",
            slug: "future-web-development-2025",
            category: "articles",
            readTime: "10 min read",
            date: "Nov 18, 2024"
        },
        {
            type: "Blog",
            title: "10 VS Code Extensions Every Developer Needs",
            excerpt: "Boost your productivity with these essential VS Code extensions for modern development.",
            slug: "vscode-extensions-2024",
            category: "blog",
            readTime: "5 min read",
            date: "Nov 15, 2024"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            T
                        </div>
                        <span className="font-bold text-xl tracking-tight">TechBlog</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link href="/blog" className="transition-colors hover:text-primary">Blog</Link>
                        <Link href="/tutorials" className="transition-colors hover:text-primary">Tutorials</Link>
                        <Link href="/articles" className="transition-colors hover:text-primary">Articles</Link>
                    </nav>
                    <Button size="sm">Subscribe</Button>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-20 md:py-32 px-4 border-b bg-gradient-to-b from-background to-muted/20">
                    <div className="container mx-auto max-w-4xl text-center space-y-8">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full">
                            New: 2025 Tech Trends Guide
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                            Learn, Build, and <span className="text-primary">Innovate</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Your go-to resource for technology insights, programming tutorials, and in-depth technical articles.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button size="lg" className="h-12 px-8 text-lg">
                                Explore Content <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                                Latest Posts
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Content Types */}
                <section className="py-20 px-4">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-2">Browse by Type</h2>
                            <p className="text-muted-foreground">Choose your learning path</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {contentTypes.map((type) => (
                                <Link key={type.href} href={type.href}>
                                    <Card className="group hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-4">
                                                <type.icon className={`h-10 w-10 ${type.color}`} />
                                                <Badge variant="secondary">{type.count}</Badge>
                                            </div>
                                            <CardTitle className="group-hover:text-primary transition-colors">
                                                {type.title}
                                            </CardTitle>
                                            <CardDescription>{type.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button variant="ghost" className="w-full justify-between">
                                                Browse {type.title}
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Content */}
                <section className="py-20 px-4 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Content</h2>
                                <p className="text-muted-foreground">Hand-picked for you</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredContent.map((content) => (
                                <Link key={content.slug} href={`/${content.category}/${content.slug}`}>
                                    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
                                        <CardHeader>
                                            <Badge className="w-fit mb-2">{content.type}</Badge>
                                            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                                {content.title}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-2">
                                                {content.excerpt}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <span>{content.date}</span>
                                                <span>{content.readTime}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-20 px-4 border-t">
                    <div className="container mx-auto max-w-xl text-center space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
                        <p className="text-muted-foreground">
                            Get the latest tutorials, articles, and tech insights delivered to your inbox weekly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            <Button size="lg">Subscribe</Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2024 TechBlog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
