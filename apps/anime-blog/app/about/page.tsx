import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Target } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Anime Blog",
    description: "Learn about Anime Blog - Your ultimate destination for anime reviews, recommendations, and insights.",
    alternates: {
        canonical: "https://anime.weebcoder.com/about",
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            A
                        </div>
                        <span className="font-bold text-xl tracking-tight">Anime Blog</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight mb-4">About Anime Blog</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Your ultimate destination for anime reviews, recommendations, and insights into the world of Japanese animation.
                </p>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2>Our Mission</h2>
                    <p>
                        At Anime Blog, we're passionate about sharing the magic of Japanese animation with fans around the world.
                        Whether you're a seasoned otaku or just starting your anime journey, we're here to help you discover
                        amazing shows, understand complex narratives, and connect with the vibrant anime community.
                    </p>

                    <h2>What We Do</h2>
                    <p>We provide:</p>
                    <ul>
                        <li><strong>In-Depth Reviews:</strong> Honest, spoiler-free reviews of the latest and classic anime series</li>
                        <li><strong>Curated Recommendations:</strong> Personalized suggestions based on genres, themes, and viewing preferences</li>
                        <li><strong>Season Guides:</strong> Comprehensive coverage of each anime season's must-watch shows</li>
                        <li><strong>Analysis & Insights:</strong> Deep dives into storytelling, animation techniques, and cultural context</li>
                        <li><strong>News & Updates:</strong> Latest announcements, releases, and industry trends</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <Heart className="h-10 w-10 text-purple-600 mb-2" />
                            <CardTitle>Passion-Driven</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                We're anime fans first, writers second. Every review comes from genuine love for the medium.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Users className="h-10 w-10 text-purple-600 mb-2" />
                            <CardTitle>Community-Focused</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                We listen to our readers and create content that helps you discover your next favorite anime.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Target className="h-10 w-10 text-purple-600 mb-2" />
                            <CardTitle>Quality Content</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Every article is carefully researched and written to provide real value to anime enthusiasts.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h2>Our Story</h2>
                    <p>
                        Anime Blog was founded in 2025 with a simple goal: to create a space where anime fans could find
                        trustworthy recommendations and thoughtful analysis. We believe that anime is more than just entertainment—it's
                        an art form that deserves serious discussion and appreciation.
                    </p>

                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Authenticity:</strong> We only recommend shows we genuinely enjoy and believe in</li>
                        <li><strong>Diversity:</strong> We cover anime from all genres, studios, and eras</li>
                        <li><strong>Respect:</strong> We appreciate different tastes and viewing preferences</li>
                        <li><strong>Quality:</strong> We prioritize well-researched, thoughtful content over clickbait</li>
                    </ul>

                    <h2>Join Our Community</h2>
                    <p>
                        We're always looking to connect with fellow anime fans! Follow us on social media, share your thoughts,
                        and let us know what you'd like to see covered next.
                    </p>
                    <p>
                        Have questions or suggestions? <Link href="/contact" className="text-primary hover:underline">Get in touch</Link> —
                        we'd love to hear from you!
                    </p>
                </div>

                <div className="p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2">Explore</h4>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/" className="text-primary hover:underline">Latest Reviews</Link></li>
                                <li><Link href="/" className="text-primary hover:underline">Recommendations</Link></li>
                                <li><Link href="/" className="text-primary hover:underline">Season Guides</Link></li>
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

            {/* Footer */}
            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Anime Blog. All rights reserved.</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground">Terms & Conditions</Link>
                        <Link href="/about" className="hover:text-foreground">About</Link>
                        <Link href="/contact" className="hover:text-foreground">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
