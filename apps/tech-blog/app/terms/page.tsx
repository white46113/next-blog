import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Tech Blog",
    description: "Terms and Conditions for using Tech Blog.",
    alternates: {
        canonical: "https://tech.weebcoder.com/terms",
    },
};

export default function TermsPage() {
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
                <h1 className="text-4xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
                <p className="text-muted-foreground mb-8">Last updated: November 27, 2025</p>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By accessing Tech Blog at <Link href="/" className="text-primary hover:underline">tech.weebcoder.com</Link>, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                    <p>
                        These Terms constitute a legally binding agreement between you and Tech Blog. We reserve the right to update these Terms at any time, and your continued use of the website after changes constitutes acceptance of the modified Terms. We recommend reviewing this page periodically to stay informed of any updates.
                    </p>

                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Tech Blog's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul>
                        <li>Modify or copy the materials beyond what's necessary for personal learning;</li>
                        <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial) without attribution;</li>
                        <li>Attempt to decompile or reverse engineer any software contained on Tech Blog's website;</li>
                        <li>Remove any copyright or other proprietary notations from the materials; or</li>
                        <li>Transfer the materials to another person or "mirror" the materials on any other server without permission.</li>
                    </ul>
                    <p>
                        However, code examples and snippets provided in tutorials are explicitly offered for use in your personal and commercial projects under permissive licensing. When using code examples, attribution to Tech Blog is appreciated but not legally required unless specifically stated.
                    </p>

                    <h2>3. User Responsibilities</h2>
                    <p>
                        As a user of this website, you agree to use it responsibly and ethically. You must not use our website to harass, abuse, or harm others, or to post any content that is offensive, defamatory, illegal, or violates the rights of others. You are responsible for ensuring that your account information (if applicable) is accurate, current, and secure.
                    </p>
                    <p>
                        Specifically, you agree not to:
                    </p>
                    <ul>
                        <li>Attempt to gain unauthorized access to our systems or networks</li>
                        <li>Introduce viruses, malware, or other malicious code</li>
                        <li>Scrape, crawl, or harvest content using automated tools beyond reasonable personal use</li>
                        <li>Impersonate Tech Blog staff, contributors, or other users</li>
                        <li>Engage in any activity that disrupts or interferes with the website's operation</li>
                    </ul>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        The content on Tech Blog, including text, graphics, logos, images, videos, and software, is the property of Tech Blog or its content suppliers and is protected by international copyright laws. Unauthorized use of this content is strictly prohibited unless explicitly permitted by these Terms.
                    </p>
                    <p>
                        We respect the intellectual property rights of others and expect users to do the same. If you believe content on our site infringes your copyright, please contact us with detailed information including the copyrighted work, the allegedly infringing content's location, and your contact information.
                    </p>

                    <h2>5. Disclaimer</h2>
                    <p>
                        The materials on Tech Blog's website are provided on an 'as is' basis. Tech Blog makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                    <p>
                        Further, Tech Blog does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. Technical information and code examples may become outdated, and we make reasonable efforts to update content but cannot guarantee complete accuracy at all times.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        In no event shall Tech Blog or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tech Blog's website, even if Tech Blog or a Tech Blog authorized representative has been notified orally or in writing of the possibility of such damage.
                    </p>

                    <h2>7. Accuracy of Materials</h2>
                    <p>
                        The materials appearing on Tech Blog's website could include technical, typographical, or photographic errors. Tech Blog does not warrant that any of the materials on its website are accurate, complete, or current. Tech Blog may make changes to the materials contained on its website at any time without notice. However, Tech Blog does not make any commitment to update the materials.
                    </p>

                    <h2>8. Links</h2>
                    <p>
                        Tech Blog has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tech Blog of the site. Use of any such linked website is at the user's own risk.
                    </p>

                    <h2>9. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Tech Blog operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>

                    <h2>10. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
                    </p>

                    <div className="mt-12 p-6 bg-muted rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Related Pages</h3>
                        <ul className="space-y-2">
                            <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link></li>
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
