import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Anime Blog",
    description: "Privacy Policy for Anime Blog - Learn how we handle your data and protect your privacy.",
    alternates: {
        canonical: "https://anime.weebcoder.com/privacy",
    },
};

export default function PrivacyPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 27, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Introduction</h2>
                    <p>
                        Welcome to Anime Blog ("we," "our," or "us"). We are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you visit
                        our website at <Link href="/" className="text-primary hover:underline">anime.weebcoder.com</Link>.
                    </p>

                    <h2>Information We Collect</h2>
                    <h3>Information You Provide</h3>
                    <p>
                        We do not collect any personal information directly from you. We do not require registration,
                        and we do not store any user data on our servers.
                    </p>

                    <h3>Automatically Collected Information</h3>
                    <p>When you visit our website, certain information may be automatically collected, including:</p>
                    <ul>
                        <li><strong>Log Data:</strong> Your IP address, browser type, operating system, and pages visited</li>
                        <li><strong>Cookies:</strong> Small data files stored on your device (see Cookies section below)</li>
                        <li><strong>Analytics Data:</strong> Usage statistics collected through Google Analytics</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>The automatically collected information is used to:</p>
                    <ul>
                        <li>Improve our website's functionality and user experience</li>
                        <li>Analyze website traffic and usage patterns</li>
                        <li>Detect and prevent technical issues</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2>Cookies and Tracking Technologies</h2>
                    <p>We use cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use:</p>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                        <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements (Google AdSense)</li>
                    </ul>
                    <p>
                        You can control cookies through your browser settings. However, disabling cookies may affect
                        your ability to use certain features of our website.
                    </p>

                    <h2>Third-Party Services</h2>
                    <h3>Google Analytics</h3>
                    <p>
                        We use Google Analytics to analyze website traffic. Google Analytics uses cookies to collect
                        information about your use of our website. This information is used to compile reports and help
                        us improve our website. For more information, visit{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Google's Privacy Policy
                        </a>.
                    </p>

                    <h3>Google AdSense</h3>
                    <p>
                        We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to
                        serve ads based on your prior visits to our website or other websites. You can opt out of
                        personalized advertising by visiting{" "}
                        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            Google Ads Settings
                        </a>.
                    </p>

                    <h2>Data Retention</h2>
                    <p>
                        Since we do not collect or store personal information directly, there is no user data to retain.
                        Analytics and advertising data is retained according to Google's data retention policies.
                    </p>

                    <h2>Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access information about how your data is processed</li>
                        <li>Opt out of personalized advertising</li>
                        <li>Clear cookies from your browser</li>
                        <li>Request information about data collected through third-party services</li>
                    </ul>

                    <h2>Children's Privacy</h2>
                    <p>
                        Our website is not intended for children under the age of 13. We do not knowingly collect
                        information from children under 13. If you believe we have collected information from a child
                        under 13, please <Link href="/contact" className="text-primary hover:underline">contact us</Link> immediately.
                    </p>

                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page
                        with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please{" "}
                        <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                    </p>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Related Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-primary hover:underline">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>
                            </li>
                        </ul>
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
