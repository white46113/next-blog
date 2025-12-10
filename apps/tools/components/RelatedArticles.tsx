import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from '@/lib/articles';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface RelatedArticle {
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
}

// Helper function to determine category from article content
function getArticleCategory(slug: string, title: string): string {
    if (slug.includes('percentage') || title.includes('Percentage')) return 'Percentage';
    if (slug.includes('loan') || slug.includes('emi')) return 'Finance';
    if (slug.includes('gst') || slug.includes('vat')) return 'Tax';
    return 'Calculator';
}

// Helper function to get category color
function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        'Percentage': 'from-purple-500 to-pink-500',
        'Finance': 'from-green-500 to-emerald-500',
        'Tax': 'from-blue-500 to-cyan-500',
        'Calculator': 'from-orange-500 to-amber-500',
    };
    return colors[category] || 'from-gray-500 to-slate-500';
}

export default function RelatedArticles({ currentSlug }: { currentSlug: string }) {
    // Get related articles based on category or just get other articles
    const currentArticle = articles[currentSlug as keyof typeof articles];
    const currentCategory = currentArticle ? getArticleCategory(currentSlug, currentArticle.title) : '';

    const relatedArticles: RelatedArticle[] = Object.entries(articles)
        .filter(([slug]) => slug !== currentSlug)
        .map(([slug, article]) => ({
            slug,
            title: article.title,
            description: article.description,
            category: getArticleCategory(slug, article.title),
            readTime: article.readTime
        }))
        // Prioritize same category
        .sort((a, b) => {
            if (a.category === currentCategory && b.category !== currentCategory) return -1;
            if (a.category !== currentCategory && b.category === currentCategory) return 1;
            return 0;
        })
        .slice(0, 3);

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <div className="mt-16 space-y-6">
            <div className="border-t pt-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Related Guides & Tools
                </h2>
                <p className="text-muted-foreground mb-6">
                    Continue learning with these helpful resources
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((article) => {
                        const gradientColor = getCategoryColor(article.category);
                        return (
                            <Link key={article.slug} href={`/articles/${article.slug}`}>
                                <Card className="h-full group cursor-pointer relative overflow-hidden
                                    bg-background/40 backdrop-blur-sm
                                    border-2 border-transparent
                                    hover:border-primary/50
                                    hover:shadow-xl hover:shadow-primary/10
                                    transition-all duration-300 hover:scale-[1.02]
                                    before:absolute before:inset-0 before:rounded-lg
                                    before:p-[2px] before:bg-gradient-to-br before:from-primary/20 before:to-purple-600/20
                                    before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full
                                                bg-gradient-to-r ${gradientColor} text-white`}>
                                                {article.category}
                                            </span>
                                        </div>
                                        <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <CardDescription className="line-clamp-3">
                                            {article.description}
                                        </CardDescription>
                                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
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
