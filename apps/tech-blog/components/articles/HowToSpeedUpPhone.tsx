import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, Zap, Battery, Trash2, RefreshCw, Layers, Settings, Shield, HelpCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export default function HowToSpeedUpPhone() {
    const whySlowDown = [
        {
            title: "Storage Bloat",
            description: "When your internal storage is nearly full (typically above 85-90%), your phone doesn't have the \"breathing room\" it needs to operate efficiently.",
            icon: Layers
        },
        {
            title: "Software & Updates",
            description: "An outdated OS can have bugs, while a new update might be poorly optimized for older hardware.",
            icon: RefreshCw
        },
        {
            title: "App Misbehavior",
            description: "Apps running background processes, tracking location, and syncing data constantly can drain RAM and CPU.",
            icon: AlertTriangle
        },
        {
            title: "Battery Health Degradation",
            description: "A degraded battery can't supply peak power, causing the system to throttle processor speed to prevent shutdowns.",
            icon: Battery
        },
        {
            title: "Digital Clutter",
            description: "Accumulated cached files, old downloads, and duplicate photos slow down file indexing.",
            icon: Trash2
        }
    ];

    const quickFixes = [
        {
            step: 1,
            title: "The Golden Rule: Restart Your Phone",
            description: "Clears RAM and closes background processes. Do this at least once a week.",
            action: "Hold power + volume down (or just power on older iPhones) and select 'Restart'."
        },
        {
            step: 2,
            title: "Check Your Storage Health",
            description: "Keep at least 15-20% of your storage free.",
            action: "iPhone: Settings > General > iPhone Storage. Android: Settings > Storage."
        },
        {
            step: 3,
            title: "Update Everything",
            description: "Install OS and app updates for bug fixes and optimizations.",
            action: "Update OS in Settings. Update apps via App Store or Play Store."
        }
    ];

    const deepClean = [
        {
            title: "Declutter Your Storage Like a Pro",
            points: [
                "Offload Unused Apps (iOS) or Clear App Cache (Android)",
                "Use Google Photos/iCloud to back up and remove local images",
                "Delete old screenshots, videos, and downloads"
            ]
        },
        {
            title: "Manage Apps and Background Activity",
            points: [
                "Check battery settings to identify resource hogs",
                "Restrict background data for non-essential apps (Android)",
                "Limit Background App Refresh (iOS)",
                "Uninstall unused apps"
            ]
        },
        {
            title: "Streamline Home Screen & Animations",
            points: [
                "Remove unnecessary widgets and live wallpapers",
                "Reduce animation speeds in Developer Options (Android)",
                "Enable 'Reduce Motion' in Accessibility settings (iOS)"
            ]
        }
    ];

    const advancedTips = [
        {
            title: "The Nuclear Option: Factory Reset",
            description: "Wipes everything for a 'like new' experience. MUST BACKUP FIRST.",
            icon: AlertTriangle
        },
        {
            title: "Check Your Battery Health",
            description: "If capacity is low (<80% on iPhone), replace the battery to restore peak performance.",
            icon: Battery
        },
        {
            title: "Network and Connectivity Tweaks",
            description: "Reset Network Settings to fix connectivity-related lag.",
            icon: Settings
        }
    ];

    const faqs = [
        { q: "Will clearing my cache delete any important data?", a: "No, it only removes temporary files. Your passwords, photos, and docs are safe." },
        { q: "How often should I restart my phone?", a: "Once a week is a good rule of thumb to clear RAM and stuck processes." },
        { q: "I've done everything, but it's still slow. What now?", a: "A Factory Reset is the most effective solution. Ensure you backup first!" },
        { q: "Can a phone case cause overheating and slowness?", a: "Yes, thick cases can trap heat, causing thermal throttling. Remove it during heavy use." },
        { q: "Does having too many browser tabs open slow down my phone?", a: "Absolutely. Each tab consumes RAM. Close unused tabs regularly." },
        { q: "My storage is full, what should I delete first?", a: "Check Downloads folder, streaming app caches, and old message attachments." },
        { q: "Are 'booster' apps worth it?", a: "Generally no. Built-in tools are safer and more effective." },
        { q: "Can an old SIM card cause slowness?", a: "Rarely, but it can cause network lag. Replace it if it's very old." },
        { q: "How does battery health affect speed?", a: "Degraded batteries cause the OS to throttle performance to prevent shutdowns." },
        { q: "Should I update my old phone (2020 or earlier)?", a: "Research first. Latest OS versions might be too heavy for older hardware." }
    ];

    return (
        <div className="space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tech.weebcoder.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://tech.weebcoder.com/articles" },
                                { "@type": "ListItem", "position": 3, "name": "How to Speed Up Your Phone", "item": "https://tech.weebcoder.com/articles/how-to-speed-up-your-phone" }
                            ]
                        },
                        {
                            "@type": "Article",
                            "headline": "How to Speed Up Your Phone: Your 2025 Guide to a Faster Device",
                            "description": "Is your phone feeling slow? Our definitive 2025 guide reveals proven strategies to speed up your Android or iPhone.",
                            "image": "https://tech.weebcoder.com/default-article-image.jpg",
                            "author": { "@type": "Person", "name": "Tech Team", "url": "https://tech.weebcoder.com/authors/tech-team" },
                            "publisher": { "@type": "Organization", "name": "TechBlog", "logo": { "@type": "ImageObject", "url": "https://tech.weebcoder.com/logo.png" } },
                            "datePublished": "2025-01-15",
                            "dateModified": "2025-01-15",
                            "mainEntityOfPage": "https://tech.weebcoder.com/articles/how-to-speed-up-your-phone",
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.q,
                                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
                            }))
                        }
                    ]
                })
            }} />

            {/* Introduction */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                <p className="text-lg leading-relaxed">
                    There’s nothing more frustrating than a slow phone. That lag when you open an app, the keyboard that can't keep up,
                    the camera that takes forever to launch—it can make even the most expensive device feel ancient.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Before you resign yourself to an expensive upgrade, know this: in most cases, you can dramatically speed up your phone without spending a dime.
                    This is your ultimate, step-by-step playbook for 2025.
                </p>
            </div>

            {/* Why Do Phones Slow Down? */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Understanding the "Why": Why Do Phones Slow Down?</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {whySlowDown.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Card key={idx} className="h-full">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-full bg-primary/10">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                    </div>
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Phase 1: Quick Fixes */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm">Phase 1</Badge>
                    <h2 className="text-3xl font-bold">The Essential Quick Fixes (Under 10 Minutes)</h2>
                </div>
                <div className="grid gap-6">
                    {quickFixes.map((fix) => (
                        <Card key={fix.step} className="border-l-4 border-l-green-500">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold dark:bg-green-900 dark:text-green-300">
                                        {fix.step}
                                    </span>
                                    {fix.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-2 text-muted-foreground">{fix.description}</p>
                                <div className="bg-muted p-3 rounded-md text-sm font-medium flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-600" />
                                    {fix.action}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Phase 2: Deep Clean */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="h-8 text-sm">Phase 2</Badge>
                    <h2 className="text-3xl font-bold">The Deep Clean - Freeing Up Space & Resources</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {deepClean.map((item, idx) => (
                        <Card key={idx} className="h-full">
                            <CardHeader>
                                <CardTitle className="text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Phase 3: Advanced Optimization */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge variant="destructive" className="h-8 text-sm">Phase 3</Badge>
                    <h2 className="text-3xl font-bold">Advanced Optimization</h2>
                </div>
                <div className="grid gap-6">
                    {advancedTips.map((tip, idx) => {
                        const Icon = tip.icon;
                        return (
                            <Card key={idx}>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="p-3 rounded-full bg-secondary">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl">{tip.title}</CardTitle>
                                        <CardDescription className="mt-1 text-base">{tip.description}</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Platform Specific Tips */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                            <Smartphone className="h-5 w-5" />
                            For Android Users
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm"><strong>Leverage "Digital Wellbeing":</strong> Use Focus Mode to pause distracting apps.</p>
                        <p className="text-sm"><strong>Try a Lighter Launcher:</strong> Nova Launcher or Lawnchair can reduce load.</p>
                        <p className="text-sm"><strong>Use "Lite" Apps:</strong> Facebook Lite uses less memory and storage.</p>
                    </CardContent>
                </Card>
                <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                            <Smartphone className="h-5 w-5" />
                            For iPhone Users
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm"><strong>Disable Heavy Effects:</strong> Turn on "Reduce Transparency" in Accessibility.</p>
                        <p className="text-sm"><strong>Manage iCloud Photos:</strong> Sign out/in to iCloud to refresh thumbnail cache.</p>
                        <p className="text-sm"><strong>Review Location Services:</strong> Set apps to "While Using" or "Never".</p>
                    </CardContent>
                </Card>
            </div>

            {/* Prevention */}
            <div className="bg-secondary/30 p-6 rounded-xl border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Prevention: Keep It Fast
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                            <span className="font-semibold">Be a Smart Shopper</span>
                            <p className="text-sm text-muted-foreground">Check reviews/size before downloading.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                            <span className="font-semibold">Regular Hygiene</span>
                            <p className="text-sm text-muted-foreground">Clear cache/downloads monthly.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                            <span className="font-semibold">Mindful Charging</span>
                            <p className="text-sm text-muted-foreground">Keep battery between 20-80%.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                            <span className="font-semibold">Embrace Cloud</span>
                            <p className="text-sm text-muted-foreground">Offload photos periodically.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Conclusion */}
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Conclusion</AlertTitle>
                <AlertDescription>
                    A slow phone doesn't have to be your reality. Treat your phone like a computer; a little regular maintenance prevents a major slowdown later.
                </AlertDescription>
            </Alert>
        </div>
    );
}
