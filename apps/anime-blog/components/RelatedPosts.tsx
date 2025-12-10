import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from '@/lib/posts';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface RelatedPost {
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
    wordCount?: number;
}

// Helper function to get category color
function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        'Recommendations': 'from-pink-500 to-rose-500',
        'Guides': 'from-cyan-500 to-blue-500',
        'Reviews': 'from-orange-500 to-red-500',
        'News': 'from-green-500 to-emerald-500',
    };
    return colors[category] || 'from-purple-500 to-indigo-500';
}

export default function RelatedPosts({ currentSlug, category }: { currentSlug: string; category?: string }) {
    // Get related posts based on category or just get other posts
    const relatedPosts: RelatedPost[] = Object.entries(posts)
        .filter(([slug]) => slug !== currentSlug)
        .map(([slug, post]) => ({
            slug,
            title: post.title,
            description: post.description,
            category: post.category || 'Anime',
            readTime: post.readTime,
            wordCount: post.wordCount
        }))
        .filter(post => !category || post.category === category)
        .slice(0, 3);

    // If we don't have enough related posts from the same category, add more from other categories
    if (relatedPosts.length < 3) {
        const additionalPosts = Object.entries(posts)
            .filter(([slug]) => slug !== currentSlug && !relatedPosts.find(p => p.slug === slug))
            .map(([slug, post]) => ({
                slug,
                title: post.title,
                description: post.description,
                category: post.category || 'Anime',
                readTime: post.readTime,
                wordCount: post.wordCount
            }))
            .slice(0, 3 - relatedPosts.length);

        relatedPosts.push(...additionalPosts);
    }

    if (relatedPosts.length === 0) {
        return null;
    }

    return (
        <div className="mt-16 space-y-6">
            <div className="border-t pt-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    More Anime Content
                </h2>
                <p className="text-muted-foreground mb-6">
                    Continue your anime journey with these posts
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((post) => {
                        const gradientColor = getCategoryColor(post.category);
                        return (
                            <Link key={post.slug} href={`/posts/${post.slug}`}>
                                <Card className="h-full group cursor-pointer relative overflow-hidden
                                    bg-background/40 backdrop-blur-sm
                                    border-2 border-transparent
                                    hover:border-pink-500/50
                                    hover:shadow-xl hover:shadow-pink-500/10
                                    transition-all duration-300 hover:scale-[1.02]
                                    before:absolute before:inset-0 before:rounded-lg
                                    before:p-[2px] before:bg-gradient-to-br before:from-pink-500/20 before:to-purple-600/20
                                    before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full
                                                bg-gradient-to-r ${gradientColor} text-white`}>
                                                {post.category}
                                            </span>
                                        </div>
                                        <CardTitle className="text-lg line-clamp-2 group-hover:text-pink-500 transition-colors">
                                            {post.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <CardDescription className="line-clamp-3">
                                            {post.description}
                                        </CardDescription>
                                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                                {post.wordCount && (
                                                    <div className="flex items-center gap-1">
                                                        <BookOpen className="h-3.5 w-3.5" />
                                                        <span>{post.wordCount.toLocaleString()} words</span>
                                                    </div>
                                                )}
                                            </div>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-pink-500" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
