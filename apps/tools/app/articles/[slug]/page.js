import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "../../../lib/articles";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} | Tools`,
        description: article.description,
        alternates: {
            canonical: `https://tools.weebcoder.com/articles/${slug}`,
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

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}


            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Article Header */}
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
