import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


const getArticle = (slug: string) => {
    const articles: Record<string, any> = {
        "future-web-development-2025": {
            title: "The Future of Web Development in 2025",
            content: `
        <h2>Executive Summary</h2>
        <p>The web development landscape is evolving rapidly. This article explores the key trends and technologies that will define the future of web development.</p>
        
        <h2>1. Server Components Revolution</h2>
        <p>React Server Components are changing how we think about data fetching and rendering. This paradigm shift enables better performance and developer experience.</p>
        
        <h2>2. Edge Computing Goes Mainstream</h2>
        <p>Edge functions and edge rendering are becoming the standard for modern web applications, reducing latency and improving user experience globally.</p>
        
        <h2>3. AI-Assisted Development</h2>
        <p>AI tools are transforming how developers write code, from autocomplete to entire feature generation.</p>
        
        <h2>Conclusion</h2>
        <p>The future of web development is exciting, with new tools and paradigms emerging to solve old problems in innovative ways.</p>
      `,
            author: "Tech Team",
            date: "Nov 18, 2024",
            readTime: "10 min read",
            tags: ["Web Development", "Future Tech", "Trends"],
            category: "Analysis",
        },
    };

    return articles[slug] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const article = getArticle(params.slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} | TechBlog Articles`,
        description: article.content.substring(0, 160),
        openGraph: {
            title: article.title,
            description: article.content.substring(0, 160),
            type: "article",
        },
    };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const article = getArticle(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            T
                        </div>
                        <span className="font-bold text-xl tracking-tight">TechBlog</span>
                    </Link>
                    <Link href="/articles">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Articles
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Article Header */}
                <div className="mb-8">
                    <Badge className="mb-4 bg-purple-600">
                        <FileText className="mr-1 h-3 w-3" />
                        {article.category}
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-6 text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                        </div>
                        <span>By {article.author}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <article dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <Link href="/articles">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            More Articles
                        </Button>
                    </Link>
                    <Button>Share Article</Button>
                </div>
            </main>
        </div>
    );
}
