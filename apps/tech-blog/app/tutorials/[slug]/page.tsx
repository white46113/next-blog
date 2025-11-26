import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const getTutorial = (slug: string) => {
    const tutorials: Record<string, any> = {
        "nextjs-14-fullstack-app": {
            title: "Building a Full-Stack App with Next.js 14",
            content: `
        <h2>What You'll Learn</h2>
        <p>In this comprehensive tutorial, you'll learn how to build a modern full-stack application using the latest features of Next.js 14.</p>
        
        <h2>Prerequisites</h2>
        <ul>
          <li>Basic knowledge of React</li>
          <li>Node.js installed on your machine</li>
          <li>Familiarity with TypeScript (helpful but not required)</li>
        </ul>
        
        <h2>Step 1: Setting Up Your Project</h2>
        <pre><code>npx create-next-app@latest my-app --typescript</code></pre>
        
        <h2>Step 2: Installing Dependencies</h2>
        <p>We'll need Prisma for database management and NextAuth for authentication.</p>
        
        <h2>Step 3: Creating Your First API Route</h2>
        <p>Next.js 14 introduces powerful server actions...</p>
      `,
            author: "Tech Team",
            date: "Nov 20, 2024",
            readTime: "15 min read",
            difficulty: "Intermediate",
            tags: ["Next.js", "TypeScript", "Full-Stack"],
        },
    };

    return tutorials[slug] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const tutorial = getTutorial(params.slug);

    if (!tutorial) {
        return {
            title: "Tutorial Not Found",
        };
    }

    return {
        title: `${tutorial.title} | TechBlog Tutorials`,
        description: tutorial.content.substring(0, 160),
        alternates: {
            canonical: `https://tech.weebcoder.com/tutorials/${params.slug}`,
        },
        openGraph: {
            title: tutorial.title,
            description: tutorial.content.substring(0, 160),
            type: "article",
            url: `https://tech.weebcoder.com/tutorials/${params.slug}`,
        },
    };
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
    const tutorial = getTutorial(params.slug);

    if (!tutorial) {
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
                    <Link href="/tutorials">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Tutorials
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Tutorial Header */}
                <div className="mb-8">
                    <Badge className="mb-4 bg-green-600">
                        <BookOpen className="mr-1 h-3 w-3" />
                        Tutorial
                    </Badge>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {tutorial.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{tutorial.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{tutorial.readTime}</span>
                        </div>
                        <Badge variant="outline">{tutorial.difficulty}</Badge>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tutorial.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </div>

                {/* Info Card */}
                <Card className="mb-8 bg-muted/50">
                    <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground">
                            💡 <strong>Tip:</strong> Follow along with the code examples and don't hesitate to experiment!
                        </p>
                    </CardContent>
                </Card>

                <Separator className="my-8" />

                {/* Tutorial Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <article dangerouslySetInnerHTML={{ __html: tutorial.content }} />
                </div>

                <Separator className="my-12" />

                {/* Navigation */}
                <div className="flex items-center justify-between">
                    <Link href="/tutorials">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            More Tutorials
                        </Button>
                    </Link>
                    <Button>Next Tutorial</Button>
                </div>
            </main>
        </div>
    );
}
