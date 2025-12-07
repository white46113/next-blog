import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import type { Metadata } from "next";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
    title: 'Tech Articles - In-Depth Technology Guides & Tutorials | TechBlog',
    description: 'Browse our comprehensive collection of in-depth technology articles covering Windows, Android, security, performance optimization, and more. Expert guides with step-by-step instructions.',
    alternates: {
        canonical: 'https://tech.weebcoder.com/articles',
    },
    openGraph: {
        title: 'Tech Articles - In-Depth Technology Guides & Tutorials',
        description: 'Browse our comprehensive collection of in-depth technology articles covering Windows, Android, security, performance optimization, and more.',
        type: 'website',
        url: 'https://tech.weebcoder.com/articles',
        siteName: 'TechBlog',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tech Articles - In-Depth Technology Guides & Tutorials',
        description: 'Browse our comprehensive collection of in-depth technology articles covering Windows, Android, security, performance optimization, and more.',
    },
};

export default function ArticlesPage() {
    const articlesList = Object.entries(articles).map(([slug, article]) => ({
        slug,
        ...article,
    }));

    // Group articles by category
    const categories = Array.from(new Set(articlesList.map(a => a.category)));

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Tech Articles",
                    "description": "Comprehensive collection of in-depth technology articles and guides",
                    "url": "https://tech.weebcoder.com/articles",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": articlesList.map((article, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Article",
                                "headline": article.title,
                                "description": article.description,
                                "url": `https://tech.weebcoder.com/articles/${article.slug}`,
                                "datePublished": article.date,
                                "author": {
                                    "@type": "Person",
                                    "name": article.author || "Tech Team"
                                }
                            }
                        }))
                    }
                })
            }} />

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
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge className="bg-purple-600 hover:bg-purple-700">Articles</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        In-Depth Tech Articles
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Comprehensive guides and tutorials covering Windows, Android, security, and performance optimization
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="max-w-6xl mx-auto space-y-12">
                    {categories.map((category) => {
                        const categoryArticles = articlesList.filter(a => a.category === category);

                        return (
                            <div key={category} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold">{category}</h2>
                                    <Badge variant="secondary">{categoryArticles.length} {categoryArticles.length === 1 ? 'article' : 'articles'}</Badge>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryArticles.map((article) => (
                                        <Link key={article.slug} href={`/articles/${article.slug}`}>
                                            <Card className="group hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                                                <CardHeader>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge variant="outline" className="text-xs">
                                                            {article.category}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">{article.date}</span>
                                                    </div>
                                                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                                        {article.title}
                                                    </CardTitle>
                                                    <CardDescription className="line-clamp-3">
                                                        {article.description}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            <span>{article.readTime}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <User className="h-3 w-3" />
                                                            <span>{article.author}</span>
                                                        </div>
                                                    </div>
                                                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                                                        Read Article
                                                        <ArrowRight className="h-4 w-4" />
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="max-w-2xl mx-auto mt-16 text-center space-y-6 p-8 bg-muted/30 rounded-lg border">
                    <h2 className="text-2xl font-bold">Want More Tech Insights?</h2>
                    <p className="text-muted-foreground">
                        Subscribe to our newsletter for weekly tech tips, tutorials, and in-depth guides delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <Button size="lg">Subscribe</Button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t mt-16">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 TechBlog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
