import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Tech Blog",
    description: "Read our Privacy Policy to understand how Tech Blog collects, uses, and protects your personal data. We are committed to transparency, data security, and respecting your privacy rights. Learn about cookies, analytics, and your data rights.",
    alternates: {
        canonical: "https://tech.weebcoder.com/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            T
                        </div>
                        <span className="font-bold text-xl tracking-tight">Tech Blog</span>
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
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Tech Blog ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about our data practices. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at <Link href="/" className="text-primary hover:underline">tech.weebcoder.com</Link>. By using our Service, you agree to the collection and use of information in accordance with this policy.
                    </p>
                    <p>
                        Your privacy matters to us. We only collect data necessary to improve your experience and understand how our content serves you. We never sell your personal information to third parties, and we limit data collection to what's essential for operating a modern educational platform.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <h3>Information You Provide</h3>
                    <p>
                        We do not collect any personal information directly from you unless you voluntarily provide it (e.g., by contacting us via email). We do not require registration, and we do not store any user profiles on our servers.
                    </p>

                    <h3>Automatically Collected Information</h3>
                    <p>When you visit our website, certain information may be automatically collected, including:</p>
                    <ul>
                        <li><strong>Log Data:</strong> Your IP address, browser type, operating system, referral pages, and timestamps.</li>
                        <li><strong>Cookies:</strong> Small data files stored on your device to enhance user experience.</li>
                        <li><strong>Analytics Data:</strong> Usage statistics collected through Google Analytics to help us understand how visitors interact with our content.</li>
                    </ul>

                    <h2>3. How We Use Your Information</h2>
                    <p>The automatically collected information is used to:</p>
                    <ul>
                        <li>Monitor and analyze trends, usage, and activities in connection with our Service.</li>
                        <li>Improve our website's functionality, performance, and user experience.</li>
                        <li>Detect, prevent, and address technical issues and security breaches.</li>
                        <li>Comply with applicable legal obligations.</li>
                    </ul>

                    <h2>4. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    </p>
                    <ul>
                        <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., security cookies).</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics).</li>
                        <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements (Google AdSense).</li>
                    </ul>

                    <h2>5. Third-Party Services</h2>
                    <h3>Google Analytics</h3>
                    <p>
                        We use Google Analytics to analyze website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy & Terms web page</a>.
                    </p>

                    <h3>Google AdSense</h3>
                    <p>
                        We use Google AdSense to display advertisements. Google uses cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.
                    </p>

                    <h2>6. Data Security</h2>
                    <p>
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>

                    <h2>7. Data Retention</h2>
                    <p>
                        We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>

                    <h2>8. Children's Privacy</h2>
                    <p>
                        Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>

                    <h2>9. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>

                    <h2>10. Your Rights</h2>
                    <p>
                        Depending on your location, you may have certain rights regarding your personal data, including:
                    </p>
                    <ul>
                        <li>The right to access the personal data we hold about you</li>
                        <li>The right to request correction of inaccurate data</li>
                        <li>The right to request deletion of your data (subject to legal obligations)</li>
                        <li>The right to object to or restrict certain processing activities</li>
                        <li>The right to data portability</li>
                    </ul>
                    <p>
                        To exercise these rights, please contact us using the information below. We will respond to your request within 30 days.
                    </p>

                    <h2>11. Contact Us</h2>
                    <p>
                        If you have questions about this Privacy Policy, concerns about how we handle your data, or wish to exercise your privacy rights, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>. We take all privacy inquiries seriously and will respond promptly to your concerns.
                    </p>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Related Pages</h3>
                        <ul className="space-y-2">
                            <li><Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link></li>
                            <li><Link href="/about" className="text-primary hover:underline">About Us</Link></li>
                            <li><Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </main>

            <footer className="py-8 px-4 bg-muted/30 border-t mt-12">
                <div className="container mx-auto text-center text-sm text-muted-foreground">
                    <p>© 2025 Tech Blog. All rights reserved.</p>
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
