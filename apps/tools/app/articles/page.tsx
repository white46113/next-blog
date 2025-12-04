import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { articles } from "../../lib/articles";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Articles - Guides & Tutorials | Tools',
    description: 'Browse our collection of comprehensive guides and tutorials on percentage calculations, loan EMI, GST/VAT, and more financial tools.',
    alternates: {
        canonical: 'https://tools.weebcoder.com/articles',
    },
    openGraph: {
        type: 'website',
        url: 'https://tools.weebcoder.com/articles',
        title: 'Articles - Guides & Tutorials',
        description: 'Browse our collection of comprehensive guides and tutorials on percentage calculations, loan EMI, GST/VAT, and more financial tools.',
        images: [
            {
                url: 'https://tools.weebcoder.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'WeebCoder Tools Articles',
            },
        ],
        siteName: 'WeebCoder Tools',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Articles - Guides & Tutorials',
        description: 'Browse our collection of comprehensive guides and tutorials on percentage calculations, loan EMI, GST/VAT, and more financial tools.',
        images: ['https://tools.weebcoder.com/og-image.png'],
        creator: '@weebcoder',
    },
};

export default function ArticlesPage() {
    const articlesList = Object.entries(articles).map(([slug, article]) => ({
        slug,
        ...article,
    }));

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Articles - Guides & Tutorials",
        "description": "Browse our collection of comprehensive guides and tutorials on percentage calculations, loan EMI, GST/VAT, and more financial tools.",
        "url": "https://tools.weebcoder.com/articles",
        "publisher": {
            "@type": "Organization",
            "name": "WeebCoder Tools",
            "logo": {
                "@type": "ImageObject",
                "url": "https://tools.weebcoder.com/logo.png"
            }
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <Badge variant="secondary" className="mb-4">Knowledge Base</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Articles & Guides
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive tutorials and guides to help you master calculations and financial tools
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articlesList.map((article) => (
                        <Link key={article.slug} href={`/articles/${article.slug}`}>
                            <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                <CardHeader>
                                    <Badge className="w-fit mb-2 bg-primary">Guide</Badge>
                                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3">
                                        {article.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Categories Section */}
                <div className="mt-16 p-8 bg-muted/30 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4 text-center">Article Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {[
                            { name: "Percentage", count: 5 },
                            { name: "Calculators", count: 2 },
                            { name: "Finance", count: 2 },
                            { name: "Guides", count: 7 }
                        ].map((category) => (
                            <div key={category.name} className="text-center p-4 bg-background rounded-lg">
                                <p className="font-semibold">{category.name}</p>
                                <p className="text-sm text-muted-foreground">{category.count} articles</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
