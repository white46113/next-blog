import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User, BookOpen } from "lucide-react";
import { posts } from "@/lib/posts";

export const metadata = {
    title: 'Anime Posts - Latest Anime Guides & Recommendations | Anime Blog',
    description: 'Browse our comprehensive collection of anime posts covering recommendations, guides, reviews, and insights. Discover your next favorite anime series.',
    alternates: {
        canonical: 'https://anime.weebcoder.com/posts',
    },
    openGraph: {
        title: 'Anime Posts - Latest Anime Guides & Recommendations',
        description: 'Browse our comprehensive collection of anime posts covering recommendations, guides, reviews, and insights.',
        type: 'website',
        url: 'https://anime.weebcoder.com/posts',
        siteName: 'Anime Blog',
        images: [
            {
                url: 'https://anime.weebcoder.com/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Anime Blog Posts',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anime Posts - Latest Anime Guides & Recommendations',
        description: 'Browse our comprehensive collection of anime posts covering recommendations, guides, reviews, and insights.',
        images: ['https://anime.weebcoder.com/og-image.jpg'],
    },
};

export default function PostsPage() {
    const postsList = Object.entries(posts).map(([slug, post]) => ({
        slug,
        ...post,
    }));

    // Group posts by category
    const categories = Array.from(new Set(postsList.map(p => p.category)));

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Anime Posts",
                    "description": "Comprehensive collection of anime guides, recommendations, and insights",
                    "url": "https://anime.weebcoder.com/posts",
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": postsList.map((post, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Article",
                                "headline": post.title,
                                "description": post.description,
                                "url": `https://anime.weebcoder.com/posts/${post.slug}`,
                                "datePublished": post.date,
                                "author": {
                                    "@type": "Person",
                                    "name": post.author || "Anime Blog Team"
                                },
                                "image": post.image,
                                "wordCount": post.wordCount
                            }
                        }))
                    }
                })
            }} />

            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tight">Anime Blog</span>
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
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                        All Posts
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Anime Posts & Guides
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Comprehensive guides, recommendations, and insights for anime fans of all levels
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="max-w-6xl mx-auto space-y-12">
                    {categories.map((category) => {
                        const categoryPosts = postsList.filter(p => p.category === category);

                        return (
                            <div key={category} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold">{category}</h2>
                                    <Badge variant="secondary">
                                        {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'}
                                    </Badge>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryPosts.map((post) => (
                                        <Link key={post.slug} href={`/posts/${post.slug}`}>
                                            <Card className="group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 h-full cursor-pointer border-pink-500/20">
                                                <CardHeader>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge variant="outline" className="text-xs border-pink-500/30">
                                                            {post.category}
                                                        </Badge>
                                                        <span className="text-xs text-muted-foreground">{post.date}</span>
                                                    </div>
                                                    <CardTitle className="line-clamp-2 group-hover:text-pink-500 transition-colors">
                                                        {post.title}
                                                    </CardTitle>
                                                    <CardDescription className="line-clamp-3">
                                                        {post.description}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <BookOpen className="h-3 w-3" />
                                                            <span>{post.wordCount} words</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                                                        <User className="h-3 w-3" />
                                                        <span>{post.author}</span>
                                                    </div>
                                                    <Button variant="ghost" className="w-full justify-between group-hover:bg-pink-500/10">
                                                        Read Post
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
                <div className="max-w-2xl mx-auto mt-16 text-center space-y-6 p-8 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-lg border border-pink-500/20">
                    <h2 className="text-2xl font-bold">Never Miss a Post</h2>
                    <p className="text-muted-foreground">
                        Subscribe to our newsletter for weekly anime recommendations, guides, and insights delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        />
                        <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t mt-16">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Anime Blog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
