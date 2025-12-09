import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { articles } from '@/lib/articles';

interface RelatedArticle {
    slug: string;
    title: string;
    description: string;
    category: string;
    readTime: string;
}

export default function RelatedArticles({ currentSlug, category }: { currentSlug: string; category?: string }) {
    // Get related articles based on category or just get other articles
    const relatedArticles: RelatedArticle[] = Object.entries(articles)
        .filter(([slug]) => slug !== currentSlug)
        .map(([slug, article]) => ({
            slug,
            title: article.title,
            description: article.description,
            category: article.category || 'Technology',
            readTime: article.readTime
        }))
        .filter(article => !category || article.category === category)
        .slice(0, 3);

    // If we don't have enough related articles from the same category, add more from other categories
    if (relatedArticles.length < 3) {
        const additionalArticles = Object.entries(articles)
            .filter(([slug]) => slug !== currentSlug && !relatedArticles.find(a => a.slug === slug))
            .map(([slug, article]) => ({
                slug,
                title: article.title,
                description: article.description,
                category: article.category || 'Technology',
                readTime: article.readTime
            }))
            .slice(0, 3 - relatedArticles.length);

        relatedArticles.push(...additionalArticles);
    }

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <div className="mt-16 space-y-6">
            <div className="border-t pt-8">
                <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {relatedArticles.map((article) => (
                        <Link key={article.slug} href={`/articles/${article.slug}`}>
                            <Card className="h-full hover:shadow-lg transition-all hover:scale-105 cursor-pointer">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-primary">{article.category}</span>
                                        <span className="text-xs text-muted-foreground">•</span>
                                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                                    </div>
                                    <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
