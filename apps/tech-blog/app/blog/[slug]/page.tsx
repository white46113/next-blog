import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// This would normally come from a CMS or markdown files
const getBlogPost = (slug: string) => {
    const posts: Record<string, any> = {
        "vscode-extensions-2024": {
            title: "10 VS Code Extensions Every Developer Needs",
            content: `
        <h2>Introduction</h2>
        <p>Visual Studio Code has become the go-to editor for developers worldwide. Here are the essential extensions that will supercharge your productivity.</p>
        
        <h2>1. Prettier - Code Formatter</h2>
        <p>Automatically format your code to maintain consistency across your project.</p>
        
        <h2>2. ESLint</h2>
        <p>Identify and fix problems in your JavaScript code before runtime.</p>
        
        <h2>3. GitLens</h2>
        <p>Supercharge Git capabilities with blame annotations and repository insights.</p>
        
        <p>And 7 more amazing extensions...</p>
      `,
            author: "Tech Team",
            date: "Nov 15, 2024",
            readTime: "5 min read",
            tags: ["VS Code", "Productivity", "Tools"],
        },
    };

    return posts[slug] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | TechBlog`,
        description: post.content.substring(0, 160),
        openGraph: {
            title: post.title,
            description: post.content.substring(0, 160),
            type: "article",
        },
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug);

    if (!post) {
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
                    <Link href="/blog">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Article Header */}
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                        <span>By {post.author}</span>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Article Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <article dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <Separator className="my-12" />

                {/* Share & Navigation */}
                <div className="flex items-center justify-between">
                    <Link href="/blog">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            More Blog Posts
                        </Button>
                    </Link>
                    <Button>Share Article</Button>
                </div>
            </main>
        </div>
    );
}
