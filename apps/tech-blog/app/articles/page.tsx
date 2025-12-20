"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Clock, User, Search, Filter, TrendingUp, BookOpen, ArrowLeft, Calendar } from "lucide-react";
import { articles } from "@/lib/articles";
import { useState, useMemo } from "react";

export default function ArticlesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const articlesList = Object.entries(articles).map(([slug, article]) => ({
        slug,
        ...article,
    }));

    // Get unique categories
    const categories = Array.from(new Set(articlesList.map(a => a.category)));

    // Filter articles based on search and category
    const filteredArticles = useMemo(() => {
        return articlesList.filter(article => {
            const matchesSearch = searchQuery === "" ||
                article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.category.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = selectedCategory === null || article.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [articlesList, searchQuery, selectedCategory]);

    // Get featured article (most recent or highest word count)
    const featuredArticle = articlesList.sort((a, b) => (b.wordCount || 0) - (a.wordCount || 0))[0];

    // Calculate stats
    const totalArticles = articlesList.length;
    const totalReadTime = articlesList.reduce((acc, article) => {
        const minutes = parseInt(article.readTime.split(' ')[0]);
        return acc + minutes;
    }, 0);

    return (
        <div className="min-h-screen bg-background">
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

            <main className="container mx-auto px-4 py-12">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link href="/" className="hover:text-foreground">Home</Link>
                    <span>/</span>
                    <span className="text-foreground">Articles</span>
                </div>

                {/* Page Header with Stats */}
                <div className="max-w-4xl mx-auto text-center mb-12 space-y-6">
                    <Badge className="bg-purple-600 hover:bg-purple-700">
                        <BookOpen className="w-3 h-3 mr-1" />
                        Article Library
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        In-Depth Tech <span className="text-primary">Articles</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Expert guides, detailed tutorials, and comprehensive walkthroughs covering Windows, Android, security, and performance optimization
                    </p>

                    {/* Stats Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold">{totalArticles}</div>
                                <div className="text-xs text-muted-foreground">Articles</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                                <Clock className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold">{totalReadTime}</div>
                                <div className="text-xs text-muted-foreground">Min. Read Time</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                <Filter className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-bold">{categories.length}</div>
                                <div className="text-xs text-muted-foreground">Categories</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                    <div className="max-w-6xl mx-auto mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-orange-500" />
                            <h2 className="text-xl font-bold">Featured Article</h2>
                        </div>
                        <Link href={`/articles/${featuredArticle.slug}`}>
                            <Card className="group hover:shadow-2xl transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <CardHeader className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Badge className="bg-orange-600 hover:bg-orange-700">
                                                <TrendingUp className="w-3 h-3 mr-1" />
                                                Featured
                                            </Badge>
                                            <Badge variant="outline">{featuredArticle.category}</Badge>
                                        </div>
                                        <CardTitle className="text-3xl group-hover:text-primary transition-colors">
                                            {featuredArticle.title}
                                        </CardTitle>
                                        <CardDescription className="text-base line-clamp-3">
                                            {featuredArticle.description}
                                        </CardDescription>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{featuredArticle.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{featuredArticle.readTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <User className="h-4 w-4" />
                                                <span>{featuredArticle.author}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <div className="space-y-4 w-full">
                                            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                                                <div className="text-sm font-medium text-muted-foreground">What you'll learn:</div>
                                                <ul className="space-y-1 text-sm">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">•</span>
                                                        <span>Comprehensive step-by-step instructions</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">•</span>
                                                        <span>Expert tips and best practices</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">•</span>
                                                        <span>Real-world examples and solutions</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-primary mt-0.5">•</span>
                                                        <span>{featuredArticle.wordCount?.toLocaleString()} words of detailed content</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <Button size="lg" className="w-full group-hover:bg-primary/90">
                                                Read Featured Article
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </Link>
                    </div>
                )}

                {/* Search and Filter Section */}
                <div className="max-w-6xl mx-auto mb-8 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search articles by title, description, or category..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 h-12"
                            />
                        </div>
                        {/* Category Filter */}
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                            <Button
                                variant={selectedCategory === null ? "default" : "outline"}
                                onClick={() => setSelectedCategory(null)}
                                size="sm"
                                className="whitespace-nowrap"
                            >
                                All Articles ({totalArticles})
                            </Button>
                            {categories.map((category) => {
                                const count = articlesList.filter(a => a.category === category).length;
                                return (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        onClick={() => setSelectedCategory(category)}
                                        size="sm"
                                        className="whitespace-nowrap"
                                    >
                                        {category} ({count})
                                    </Button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="text-sm text-muted-foreground">
                        {filteredArticles.length === totalArticles ? (
                            <span>Showing all {totalArticles} articles</span>
                        ) : (
                            <span>Found {filteredArticles.length} of {totalArticles} articles</span>
                        )}
                    </div>
                </div>

                {/* Articles Grid */}
                <div className="max-w-6xl mx-auto">
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredArticles.map((article) => (
                                <Link key={article.slug} href={`/articles/${article.slug}`}>
                                    <Card className="group hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full cursor-pointer flex flex-col">
                                        <CardHeader className="flex-1">
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <Badge variant="outline" className="text-xs">
                                                    {article.category}
                                                </Badge>
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {article.date.split(',')[0]}
                                                </span>
                                            </div>
                                            <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors mb-2">
                                                {article.title}
                                            </CardTitle>
                                            <CardDescription className="line-clamp-3 text-sm">
                                                {article.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-0">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{article.readTime}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <User className="h-3 w-3" />
                                                    <span>{article.author}</span>
                                                </div>
                                                {article.wordCount && (
                                                    <div className="flex items-center gap-1">
                                                        <BookOpen className="h-3 w-3" />
                                                        <span>{(article.wordCount / 1000).toFixed(1)}k</span>
                                                    </div>
                                                )}
                                            </div>
                                            <Button
                                                variant="ghost"
                                                className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary"
                                            >
                                                Read Article
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 space-y-4">
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                                <Search className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold">No articles found</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Try adjusting your search query or filters to find what you're looking for.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory(null);
                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>

                {/* Browse by Category Section (if no filters) */}
                {searchQuery === "" && selectedCategory === null && (
                    <div className="max-w-6xl mx-auto mt-16 space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
                            <p className="text-muted-foreground">Explore our articles organized by topic</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map((category) => {
                                const categoryArticles = articlesList.filter(a => a.category === category);
                                const totalWords = categoryArticles.reduce((acc, a) => acc + (a.wordCount || 0), 0);

                                return (
                                    <Card
                                        key={category}
                                        className="group hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                                <Filter className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                                {category}
                                            </CardTitle>
                                            <CardDescription>
                                                {categoryArticles.length} {categoryArticles.length === 1 ? 'article' : 'articles'}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2 text-sm text-muted-foreground">
                                                <div className="flex items-center justify-between">
                                                    <span>Total content:</span>
                                                    <span className="font-medium">{(totalWords / 1000).toFixed(0)}k words</span>
                                                </div>
                                                <div className="pt-2">
                                                    <Button variant="ghost" className="w-full justify-between text-xs group-hover:bg-primary/10">
                                                        View Articles
                                                        <ArrowRight className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="max-w-3xl mx-auto mt-20 text-center space-y-6 p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg border">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Never Miss an Update</h2>
                        <p className="text-muted-foreground">
                            Get the latest tech insights, tutorials, and in-depth guides delivered straight to your inbox every week.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="h-12"
                        />
                        <Button size="lg" className="h-12 px-8">
                            Subscribe
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Join 10,000+ developers already subscribed. Unsubscribe anytime.
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t mt-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="font-semibold mb-3">Content</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/articles" className="hover:text-foreground">Articles</Link></li>
                                <li><Link href="/tutorials" className="hover:text-foreground">Tutorials</Link></li>
                                <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">Company</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">Legal</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                                <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-3">Categories</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setSelectedCategory(cat)}
                                            className="hover:text-foreground text-left"
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground pt-8 border-t">
                        <p>© 2025 TechBlog. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
