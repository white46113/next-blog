import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Anime Blog",
    description: "Terms and Conditions for using Anime Blog - Read our terms of service and user agreement.",
    alternates: {
        canonical: "https://anime.weebcoder.com/terms",
    },
};

export default function TermsPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 27, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>Agreement to Terms</h2>
                    <p>
                        By accessing and using Anime Blog at{" "}
                        <Link href="/" className="text-primary hover:underline">anime.weebcoder.com</Link>,
                        you agree to be bound by these Terms and Conditions. If you do not agree with any part of
                        these terms, please do not use our website.
                    </p>

                    <h2>Use of Website</h2>
                    <h3>Permitted Use</h3>
                    <p>You may use our website for:</p>
                    <ul>
                        <li>Reading anime reviews, recommendations, and articles</li>
                        <li>Browsing content for personal, non-commercial purposes</li>
                        <li>Sharing our content via social media (with proper attribution)</li>
                    </ul>

                    <h3>Prohibited Use</h3>
                    <p>You may NOT:</p>
                    <ul>
                        <li>Copy, reproduce, or republish our content without permission</li>
                        <li>Use automated tools to scrape or download content</li>
                        <li>Attempt to hack, disrupt, or damage the website</li>
                        <li>Use the website for any illegal or unauthorized purpose</li>
                        <li>Impersonate any person or entity</li>
                    </ul>

                    <h2>Intellectual Property</h2>
                    <p>
                        All content on Anime Blog, including text, images, logos, and design, is owned by us or our
                        content suppliers and is protected by copyright and intellectual property laws.
                    </p>
                    <p>
                        Anime titles, characters, and related imagery are trademarks of their respective owners.
                        We do not claim ownership of any anime properties discussed on this website.
                    </p>

                    <h2>User Content and Comments</h2>
                    <p>
                        If we enable comments or user submissions in the future, you agree that:
                    </p>
                    <ul>
                        <li>You own the rights to any content you submit</li>
                        <li>Your content does not violate any laws or third-party rights</li>
                        <li>We may moderate, edit, or remove content at our discretion</li>
                        <li>You grant us a license to use, display, and distribute your content</li>
                    </ul>

                    <h2>Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites (streaming services, merchandise stores, etc.).
                        We are not responsible for the content, privacy policies, or practices of these external sites.
                    </p>

                    <h2>Advertising</h2>
                    <p>
                        We use Google AdSense to display advertisements on our website. Advertisers may use cookies
                        to serve ads based on your browsing history. See our{" "}
                        <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for more information.
                    </p>

                    <h2>Disclaimer of Warranties</h2>
                    <p>
                        Our website is provided "as is" without any warranties, express or implied. We do not guarantee:
                    </p>
                    <ul>
                        <li>The accuracy or completeness of content</li>
                        <li>Uninterrupted or error-free service</li>
                        <li>That defects will be corrected</li>
                        <li>That the website is free from viruses or harmful components</li>
                    </ul>

                    <h2>Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Anime Blog shall not be liable for any indirect,
                        incidental, special, or consequential damages arising from your use of the website.
                    </p>

                    <h2>Reviews and Opinions</h2>
                    <p>
                        All reviews and opinions expressed on this website are our own and based on our personal
                        viewing experiences. We are not affiliated with any anime studios, distributors, or streaming services
                        unless explicitly stated.
                    </p>

                    <h2>Age Restrictions</h2>
                    <p>
                        Some anime content discussed on this website may be intended for mature audiences. We provide
                        content ratings when available, but parents and guardians should use their discretion when
                        allowing minors to access our content.
                    </p>

                    <h2>Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                        immediately upon posting. Your continued use of the website after changes constitutes acceptance
                        of the new terms.
                    </p>

                    <h2>Governing Law</h2>
                    <p>
                        These Terms and Conditions are governed by and construed in accordance with applicable laws.
                        Any disputes shall be resolved in the appropriate courts.
                    </p>

                    <h2>Contact Information</h2>
                    <p>
                        If you have questions about these Terms and Conditions, please{" "}
                        <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                    </p>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Related Pages</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
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
