import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, HardDrive, Trash2, FileWarning, Image, Music, Download, RefreshCw, Shield, Settings, Database, Clock, CheckCircle2, AlertTriangle, Info, HelpCircle } from "lucide-react";

export default function AndroidStorageGuide() {
    const storageAnatomy = [
        { label: "System Files", value: "8-15GB", color: "bg-gray-500" },
        { label: "Apps", value: "15-30GB", color: "bg-blue-500" },
        { label: "Photos/Videos", value: "20-50GB", color: "bg-purple-500" },
        { label: "Cached Data", value: "2-10GB", color: "bg-yellow-500" },
        { label: "Downloads", value: "5-15GB", color: "bg-green-500" },
        { label: "Other/Misc", value: "3-8GB", color: "bg-red-500" },
    ];

    const quickWins = [
        {
            title: "Google Files 'Clean' Feature",
            icon: Trash2,
            description: "Intelligently identifies junk files, duplicates, and memes.",
            steps: [
                "Install/Open Google Files",
                "Tap 'Clean' tab",
                "Review Junk, Large Files, and Duplicates",
                "Enable 'Smart Storage' in settings"
            ],
            impact: "2-8 GB"
        },
        {
            title: "WhatsApp Storage Management",
            icon: MessageCircle,
            description: "The silent storage hog. Manage media auto-downloads.",
            steps: [
                "Settings > Storage and Data > Manage Storage",
                "Review 'Larger than 5MB' and 'Forwarded Many Times'",
                "Disable Media Auto-Download for all networks",
                "Turn off Media Visibility"
            ],
            impact: "5-15 GB"
        },
        {
            title: "Chrome's Hidden Cache",
            icon: Globe,
            description: "Chrome caches everything. Clear it out.",
            steps: [
                "Settings > Privacy and Security > Clear Browsing Data",
                "Select 'Cached Images and Files' (All Time)",
                "Site Settings > Storage > Clear All Data",
                "Enable 'Lite Mode' if available"
            ],
            impact: "1-3 GB"
        }
    ];

    const advancedTweaks = [
        {
            title: "The 'Other' Storage Mystery",
            description: "App data, system files, and thumbnails.",
            action: "Use SD Maid or manually check /Android/data/ (carefully!). Clear .thumbnail folders.",
            impact: "3-10 GB"
        },
        {
            title: "Google Photos Smart Cleanup",
            description: "Delete local copies of backed-up photos.",
            action: "Profile > Photos Settings > Free Up Space. Ensure backup is complete first!",
            impact: "10-40 GB"
        },
        {
            title: "Streaming Apps Offline Content",
            description: "Spotify, Netflix, YouTube downloads.",
            action: "Clear cache in app settings. Delete watched downloads. Lower download quality.",
            impact: "2-15 GB"
        }
    ];

    const fileMastery = [
        {
            title: "The Download Folder Black Hole",
            points: ["Delete APKs", "Remove old PDFs/Invoices", "Clear memes", "Automate with Tasker"]
        },
        {
            title: "Duplicate Files",
            points: ["Use Google Files or SD Maid", "Delete exact duplicates", "Keep similar burst shots"]
        },
        {
            title: "Thumbnail Cache",
            points: ["Clear Gallery cache", "Delete .thumbnails folders", "Disable auto-play videos"]
        }
    ];

    const appOptimization = [
        { app: "Facebook/Instagram", tip: "Clear cache regularly, use Lite versions, disable auto-play." },
        { app: "Gmail", tip: "Clear local attachments, reduce sync period to 7 days." },
        { app: "Google Maps", tip: "Delete unused offline maps, enable auto-delete." }
    ];

    const systemSolutions = [
        {
            title: "Adoptable Storage (SD Card)",
            description: "Format SD card as internal storage. Great for moving apps and data.",
            warning: "SD card becomes encrypted to device. Slower than internal storage."
        },
        {
            title: "Developer Options",
            description: "Limit background processes to 4. Reduce animation scales to 0.5x.",
            warning: "Advanced users only."
        },
        {
            title: "Factory Reset (No Data Loss)",
            description: "Backup everything, then reset. Restores system performance.",
            warning: "Time-consuming but effective."
        }
    ];

    const faqs = [
        { q: "Is it safe to clear 'Other' storage?", a: "Yes, but use tools like SD Maid. Don't manually delete system folders you don't understand." },
        { q: "Will clearing cache slow down apps?", a: "Temporarily, yes. But it prevents bloat. Apps will rebuild necessary cache." },
        { q: "How often should I clear cache?", a: "Weekly for social media, monthly for browsers, quarterly for everything else." },
        { q: "Clear Cache vs Clear Data?", a: "Cache removes temp files (safe). Data removes logins and settings (use with caution)." },
        { q: "Can I move apps to SD card?", a: "Yes, if the app supports it or via Adoptable Storage." },
        { q: "Why does storage fill up again?", a: "App caches, auto-downloads, and system updates. Automation is key." },
        { q: "Are cleaner apps safe?", a: "Stick to Google Files, SD Maid, or CCleaner. Avoid generic 'boosters'." },
        { q: "What should I NEVER delete?", a: "Android system folders, encrypted files, and app data for essential apps." }
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
                                { "@type": "ListItem", "position": 3, "name": "Android Storage Guide", "item": "https://tech.weebcoder.com/articles/android-storage-guide" }
                            ]
                        },
                        {
                            "@type": "Article",
                            "headline": "The Modern Android Storage Crisis: 15 Proven Ways to Reclaim Space",
                            "description": "Struggling with full storage? Discover 15 proven methods to reclaim 5-50GB of space on your Android device without losing important data.",
                            "image": "https://tech.weebcoder.com/android-storage-guide.jpg",
                            "author": { "@type": "Person", "name": "Tech Team", "url": "https://tech.weebcoder.com/authors/tech-team" },
                            "publisher": { "@type": "Organization", "name": "TechBlog", "logo": { "@type": "ImageObject", "url": "https://tech.weebcoder.com/logo.png" } },
                            "datePublished": "2025-01-28",
                            "dateModified": "2025-01-28",
                            "mainEntityOfPage": "https://tech.weebcoder.com/articles/android-storage-guide"
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

            {/* Header */}
            <div className="space-y-4">
                <Badge className="bg-green-600 hover:bg-green-700">Android Optimization</Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    The Modern Android Storage Crisis: 15 Proven Ways to Reclaim Space
                </h1>
                <p className="text-xl text-muted-foreground">
                    Did you know? The average Android user has 68 apps but uses only 25. Learn how to reclaim 5-50GB without deleting your favorite apps.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</div>
                    <div className="flex items-center gap-1"><Database className="h-4 w-4" /> Updated Jan 28, 2025</div>
                </div>
            </div>

            {/* Anatomy of Storage */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <HardDrive className="h-6 w-6 text-primary" />
                        Understanding Android Storage Anatomy
                    </CardTitle>
                    <CardDescription>Where does all that space actually go?</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {storageAnatomy.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <span className="font-bold">{item.value}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground text-center">
                        The Hidden Truth: Up to 40% of your "used" storage is recoverable without deleting anything important.
                    </p>
                </CardContent>
            </Card>

            {/* Part 1: Quick Wins */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-lg">1</span>
                    The Quick Wins (5-15 GB)
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {quickWins.map((win, idx) => {
                        const Icon = win.icon;
                        return (
                            <Card key={idx} className="flex flex-col">
                                <CardHeader>
                                    <div className="mb-2 p-2 w-fit rounded-lg bg-primary/10">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{win.title}</CardTitle>
                                    <CardDescription>{win.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-4">
                                    <ul className="space-y-2 text-sm">
                                        {win.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 mt-0.5 text-green-500 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto pt-4 border-t">
                                        <span className="font-bold text-green-600">Reclaims: {win.impact}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* Part 2: Advanced Tweaks */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-lg">2</span>
                    Advanced System Tweaks
                </h2>
                <div className="grid gap-6">
                    {advancedTweaks.map((tweak, idx) => (
                        <Card key={idx}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl">{tweak.title}</CardTitle>
                                        <CardDescription className="mt-1">{tweak.description}</CardDescription>
                                    </div>
                                    <Badge variant="secondary">{tweak.impact}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-muted p-3 rounded-md flex gap-2 items-start">
                                    <Settings className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                    <p className="text-sm font-medium">{tweak.action}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Part 3: File Management */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-lg">3</span>
                    File Management Mastery
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {fileMastery.map((item, idx) => (
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle className="text-lg">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {item.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Part 4 & 5: App & System */}
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Smartphone className="h-5 w-5" />
                            App-Specific Optimization
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {appOptimization.map((opt, idx) => (
                            <div key={idx} className="border-b last:border-0 pb-3 last:pb-0">
                                <span className="font-bold block mb-1">{opt.app}</span>
                                <span className="text-sm text-muted-foreground">{opt.tip}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            System-Level Solutions
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {systemSolutions.map((sol, idx) => (
                            <div key={idx} className="border-b last:border-0 pb-3 last:pb-0">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold">{sol.title}</span>
                                    {sol.warning && <Badge variant="outline" className="text-xs text-yellow-600 border-yellow-200">Warning</Badge>}
                                </div>
                                <p className="text-sm text-muted-foreground mb-1">{sol.description}</p>
                                <p className="text-xs text-yellow-600 italic">{sol.warning}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* 7-Day Challenge */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <RefreshCw className="h-6 w-6 text-primary" />
                        The 7-Day Storage Cleanup Challenge
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        {[
                            { day: "Day 1", task: "Assessment & Quick Wins", goal: "5-10 GB" },
                            { day: "Day 2", task: "Media Management", goal: "10-20 GB" },
                            { day: "Day 3", task: "App Optimization", goal: "3-8 GB" },
                            { day: "Day 4", task: "File Organization", goal: "3-10 GB" },
                            { day: "Day 5", task: "System Tweaks", goal: "1-3 GB" },
                            { day: "Day 6", task: "Maintenance Setup", goal: "Future-proof" },
                            { day: "Day 7", task: "Review & Optimize", goal: "25-50 GB Total" },
                        ].map((day, idx) => (
                            <div key={idx} className="bg-background/50 p-3 rounded-lg border">
                                <div className="font-bold text-primary mb-1">{day.day}</div>
                                <div className="text-sm font-medium mb-1">{day.task}</div>
                                <div className="text-xs text-muted-foreground">Goal: {day.goal}</div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

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
            <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900">
                <Info className="h-4 w-4 text-green-600 dark:text-green-400" />
                <AlertTitle className="text-green-800 dark:text-green-300">Final Wisdom</AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-400">
                    Storage management isn't a one-time task—it's an ongoing habit. Automate what you can, review regularly, and understand your usage. Now go reclaim your space!
                </AlertDescription>
            </Alert>
        </div>
    );
}

// Missing icons import fix
function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    )
}
