import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Code, BookOpen, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Tech Blog",
    description: "Learn more about Tech Blog's mission to demystify technology for everyone. Discover our team, our history, values, and our commitment to providing high-quality programming tutorials, in-depth articles, and tech insights that empower developers.",
    alternates: {
        canonical: "https://tech.weebcoder.com/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">T</div>
                        <span className="font-bold text-xl tracking-tight">Tech Blog</span>
                    </Link>
                    <Link href="/"><Button variant="ghost" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Home</Button></Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About Tech Blog</h1>
                <p className="text-xl text-muted-foreground mb-12">Your source for technology insights, programming tutorials, and in-depth technical articles.</p>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2>Our Mission</h2>
                    <p>
                        At Tech Blog, we are driven by a single mission: to demystify technology for everyone. In an era where digital literacy is more important than ever, we strive to bridge the gap between complex technical concepts and everyday understanding. Whether you're a curious beginner taking your first steps into coding or a seasoned developer looking to stay ahead of the curve, our platform is designed to support your journey.
                    </p>
                    <p>
                        We believe that knowledge should be free, accessible, and easy to digest. That's why we commit to high-quality, research-backed content that prioritizes clarity without sacrificing depth. Every article undergoes rigorous review to ensure technical accuracy while maintaining readability for diverse audiences.
                    </p>
                    <p>
                        Technology evolves rapidly, and so do we. Our team stays on the cutting edge of industry trends, framework updates, and emerging best practices to deliver content that's not just current, but forward-thinking. We don't just report on technology—we help you master it.
                    </p>

                    <h2>Our History</h2>
                    <p>
                        Founded in 2024, Tech Blog started as a small personal project to document coding challenges and solutions. It quickly grew into a community-driven platform where technology enthusiasts from around the world come to learn, share, and innovate. What began with simple tutorials has evolved into a comprehensive resource covering everything from mobile security to enterprise-level software architecture.
                    </p>
                    <p>
                        Today, we serve thousands of readers monthly, from students learning their first programming language to senior engineers architecting complex distributed systems. Our growth reflects a simple truth: when you create genuinely helpful content, people notice and return.
                    </p>

                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Integrity:</strong> We research thoroughly and fact-check every article to ensure you get accurate information. Our writers test code examples, verify security recommendations, and cite authoritative sources.</li>
                        <li><strong>Inclusivity:</strong> We write for everyone, regardless of their technical background. Jargon is explained, assumptions are questioned, and examples are practical and relatable.</li>
                        <li><strong>Innovation:</strong> We embrace new technologies and methodologies, constantly updating our content. Legacy articles are reviewed quarterly to reflect current best practices.</li>
                        <li><strong>Community:</strong> We value our readers' feedback and foster a supportive learning environment. Questions in comments are answered, suggestions shape our editorial calendar, and community contributions are celebrated.</li>
                        <li><strong>Transparency:</strong> When we make mistakes, we correct them publicly. When we don't know something, we say so. Trust is earned through honesty, not false authority.</li>
                    </ul>

                    <h2>What We Offer</h2>
                    <p>
                        Our content ecosystem is built around three core pillars, each designed to serve a specific learning need:
                    </p>
                    <ul>
                        <li>
                            <strong>Blog Posts:</strong> Quick, digestible insights on the latest tech trends, industry news, and gadget reviews. Perfect for staying informed on the go. These 5-10 minute reads keep you current without overwhelming your schedule.
                        </li>
                        <li>
                            <strong>Tutorials:</strong> Comprehensive, step-by-step guides that take you from "Hello World" to "Deployment." We cover languages like Python, JavaScript, TypeScript, and frameworks like React and Next.js. Each tutorial includes working code examples, troubleshooting sections, and real-world project ideas.
                        </li>
                        <li>
                            <strong>Articles:</strong> In-depth technical deep dives and white-paper style analysis. These pieces explore the "why" and "how" behind major technologies, offering architectural insights for serious developers. Expect 15-30 minute reads with diagrams, performance benchmarks, and opinionated recommendations based on production experience.
                        </li>
                    </ul>

                    <h2>Our Commitment to Quality</h2>
                    <p>
                        Every piece of content published on Tech Blog goes through a multi-stage editorial process. We don't publish articles just to fill space—each one must provide genuine value. Our writers are practitioners first: developers who code daily, security professionals who audit systems, and technologists who live the challenges they write about.
                    </p>
                    <p>
                        We also recognize that the tech industry has serious diversity and accessibility challenges. That's why we actively work to feature diverse voices, consider different perspectives, and ensure our tutorials work across operating systems and environments. Technology should empower everyone, and our content reflects that belief.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <Code className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Practical Examples</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                We don't just talk theory. Every tutorial includes real-world code snippets, downloadable project files, and live demos to help you apply what you learn immediately.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <BookOpen className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Structured Learning</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Our learning paths are carefully curated to guide you through concepts logically. No more jumping between disconnected tutorials; we provide a roadmap for success.
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Lightbulb className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Innovative</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Stay ahead with coverage of emerging technologies</CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">Content</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/blog" className="text-primary hover:underline">Blog Posts</Link></li>
                                <li><Link href="/tutorials" className="text-primary hover:underline">Tutorials</Link></li>
                                <li><Link href="/articles" className="text-primary hover:underline">Articles</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Information</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
                                <li><Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Tech Blog. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms</Link>
                        <Link href="/about" className="hover:text-foreground">About</Link>
                        <Link href="/contact" className="hover:text-foreground">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
