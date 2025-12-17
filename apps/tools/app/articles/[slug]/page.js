import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "../../../lib/articles";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import RelatedArticles from "@/components/RelatedArticles";
import CrossAppLinks from "@/components/CrossAppLinks";
import PopularContent from "@/components/PopularContent";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    const articleUrl = `https://tools.weebcoder.com/articles/${slug}`;
    const imageUrl = 'https://tools.weebcoder.com/og-image.png';

    return {
        title: article.title,
        description: article.description,
        alternates: {
            canonical: articleUrl,
        },
        openGraph: {
            type: 'article',
            url: articleUrl,
            title: article.title,
            description: article.description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            publishedTime: new Date(article.date).toISOString(),
            authors: ['Tools Team'],
            siteName: 'WeebCoder Tools',
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.description,
            images: [imageUrl],
            creator: '@weebcoder',
        },
    };
}

export default async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const ArticleComponent = article.component;

    // JSON-LD structured data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://tools.weebcoder.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Articles",
                        "item": "https://tools.weebcoder.com/articles"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": article.title,
                        "item": `https://tools.weebcoder.com/articles/${slug}`
                    }
                ]
            },
            {
                "@type": "Article",
                "headline": article.title,
                "description": article.description,
                "articleBody": article.excerpt || article.description,
                "image": "https://tools.weebcoder.com/og-image.png",
                "wordCount": article.wordCount || 2000,
                "author": {
                    "@type": "Organization",
                    "name": "Tools Team"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "WeebCoder Tools",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://tools.weebcoder.com/logo.png"
                    }
                },
                "datePublished": new Date(article.date).toISOString(),
                "dateModified": new Date(article.date).toISOString(),
                "mainEntityOfPage": `https://tools.weebcoder.com/articles/${slug}`
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Header */}


            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Article Header */}
                <article>
                    <div className="mb-8">
                        <Badge className="mb-4 bg-primary">Guide</Badge>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{article.readTime}</span>
                            </div>
                            <span>By Tools Team</span>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <ArticleComponent />
                </article>

                {/* Related Articles */}
                <RelatedArticles currentSlug={slug} />

                {/* Cross-App Links */}
                <CrossAppLinks />

                {/* Popular Content */}
                <PopularContent />

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t">
                    <Link href="/">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Tools
                        </Button>
                    </Link>
                    {/* <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button> */}
                </div>
            </main>


        </div>
    );
}
