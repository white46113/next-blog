import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Tech Blog",
    description: "Get in touch with Tech Blog.",
    alternates: {
        canonical: "https://tech.weebcoder.com/contact",
    },
};

export default function ContactPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
                <p className="text-xl text-muted-foreground mb-12">Have questions or suggestions? We'd love to hear from you!</p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader>
                            <Mail className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Email Us</CardTitle>
                            <CardDescription>For inquiries, partnerships, or feedback</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <a href="mailto:contact@weebcoder.com" className="text-primary hover:underline text-lg">contact@weebcoder.com</a>
                            <p className="text-sm text-muted-foreground mt-2">We respond within 24-48 hours</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <MessageSquare className="h-10 w-10 text-primary mb-2" />
                            <CardTitle>Social Media</CardTitle>
                            <CardDescription>Connect with us</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm"><strong>Twitter:</strong> @weebcoder</p>
                            <p className="text-sm text-muted-foreground mt-2">Follow for tech updates</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Why Reach Out?</h2>
                    <p>
                        At Tech Blog, we value our community above all else. Whether you're a reader with a burning question, a developer looking to contribute, or a company seeking partnership, your feedback drives us forward. We're committed to building a transparent platform where communication flows freely.
                    </p>
                    <p>
                        Your voice matters. Every suggestion, critique, and question helps us improve our content and better serve the tech community. We read every email personally and respond thoughtfully. Unlike many sites that hide behind contact forms and automated responses, we believe in genuine human connection.
                    </p>
                    <p>
                        Over the years, reader feedback has shaped our editorial direction, helped us identify and fix technical errors, and inspired entirely new content series. Some of our most popular tutorials started as questions in readers' emails. Your input doesn't just reach us—it influences thousands of other learners.
                    </p>

                    <h2>How Can We Help You?</h2>
                    <p>
                        To ensure we get your message to the right person and provide the fastest response, here are the best ways to contact us based on your needs:
                    </p>
                    <ul>
                        <li><strong>Content Feedback:</strong> Found a typo? Spotted outdated information? Have a suggestion for a new tutorial topic? We love hearing from you. Every piece of feedback helps us maintain the highest quality standards.</li>
                        <li><strong>Technical Support:</strong> Having trouble accessing a page or downloading a resource? Experiencing issues with code examples? Let our support team know with details about your browser, operating system, and the specific problem.</li>
                        <li><strong>Partnerships & Sponsorships:</strong> Interested in advertising, sponsorships, or cross-promotions? We work with companies that align with our values and serve our audience. Reach out with details about your proposal.</li>
                        <li><strong>Guest Posting & Contributions:</strong> Want to write for Tech Blog? We welcome expert contributors who can provide unique insights and high-quality tutorials. Send us your pitch with your background, proposed topic, and writing samples.</li>
                        <li><strong>Bug Reports & Security Issues:</strong> Found a security vulnerability on our site? We take security seriously. Please email us with details, and we'll respond promptly with acknowledgment and action plans.</li>
                        <li><strong>Media & Press Inquiries:</strong> Journalists and bloggers looking for quotes, data, or expert commentary can reach us directly. We typically respond to media requests within a few hours during business days.</li>
                    </ul>

                    <h2>What to Include in Your Message</h2>
                    <p>
                        To help us assist you faster, please include:
                    </p>
                    <ul>
                        <li>A clear, specific subject line</li>
                        <li>Relevant details (article URLs, error messages, screenshots if applicable)</li>
                        <li>Your technical environment (if reporting bugs): browser version, OS, device type</li>
                        <li>How we can best help you—be specific about what you need</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>
                    <p>Before you email us, you might find your answer here:</p>
                    <ul>
                        <li><strong>What is your response time?</strong> We typically respond to all inquiries within 24-48 hours during business days (Monday-Friday). Urgent security issues receive priority and are addressed within hours.</li>
                        <li><strong>Do you accept guest posts?</strong> Yes, but we have strict quality guidelines. Articles must be original, technically accurate, well-researched, and provide genuine value. We don't publish promotional content disguised as tutorials.</li>
                        <li><strong>Can I use your code snippets?</strong> Absolutely! All code examples on our site are free to use in your personal and commercial projects. Attribution is appreciated but not required. We release code under permissive licenses to help the community.</li>
                        <li><strong>Do you offer consulting or custom development?</strong> Tech Blog is an educational platform. We don't provide consulting services, but we can recommend trusted professionals in our network for complex projects.</li>
                        <li><strong>Can you help debug my code?</strong> While we can't provide individual debugging services, we encourage you to post detailed questions on Stack Overflow or GitHub. We often answer questions there and link to our tutorials when relevant.</li>
                        <li><strong>How do I report inappropriate comments?</strong> Use the report button on comments or email us with the comment URL. We moderate all comments and remove spam, harassment, or off-topic content promptly.</li>
                    </ul>

                    <h2>Operating Hours</h2>
                    <p>
                        Our team operates primarily during standard business hours (Monday - Friday, 9:00 AM - 6:00 PM EST). While our website is available 24/7, responses to direct inquiries may be delayed during weekends and public holidays.
                    </p>
                    <p>
                        For time-sensitive matters, clearly mark your email subject as "URGENT" and we'll prioritize it. However, please reserve this for genuine emergencies—most technical questions can wait for our standard response time.
                    </p>

                    <h2>Community Guidelines</h2>
                    <p>
                        When contacting us, please:
                    </p>
                    <ul>
                        <li>Be respectful and professional in all communications</li>
                        <li>Avoid sending the same message multiple times (we read everything once)</li>
                        <li>Provide context and be specific about your needs</li>
                        <li>Understand that we receive high email volume and prioritize based on urgency and community impact</li>
                    </ul>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-primary hover:underline">About Us</Link></li>
                            <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
                        </ul>
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
