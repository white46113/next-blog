import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Smartphone, Battery, Zap, Database, Thermometer, MessageSquare, HardDrive, AlertTriangle, Users, Shield, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

export default function PhoneHacked() {
    const hackingSigns = [
        {
            number: 1,
            title: "Your Phone Suddenly Becomes Extremely Slow",
            icon: Smartphone,
            description: "A hacked phone often becomes noticeably slower. Apps may take longer to open, your home screen may lag, or simple tasks like texting may freeze.",
            reasons: [
                "Spyware constantly sends your data to a remote server",
                "Keyloggers record your taps and slow everything down",
                "Malware hijacks your phone's processing power"
            ],
            warning: "If your phone was fast a week ago but now feels like an old device, investigate immediately."
        },
        {
            number: 2,
            title: "Your Battery Drains Much Faster Than Normal",
            icon: Battery,
            description: "Rapid battery drain is one of the strongest signs of a hacked device. Malware often runs 24/7, even when the screen is off.",
            reasons: [
                "Spyware using GPS to track your location",
                "Malicious apps running secretly in the background",
                "Cryptomining malware using your phone's CPU"
            ],
            warning: "If your phone is hot and the battery dies early even with normal use, someone may be spying on you."
        },
        {
            number: 3,
            title: "You See Strange Apps You Didn't Install",
            icon: Zap,
            description: "If you ever see apps on your phone that you don't remember installing, consider it a major red flag.",
            reasons: [
                "Spyware disguised as utility apps",
                "Adware that blasts you with ads",
                "Remote control apps to monitor your device"
            ],
            warning: "Always delete unknown apps immediately."
        },
        {
            number: 4,
            title: "Your Data Usage Suddenly Spikes",
            icon: Database,
            description: "A hacked phone may use far more mobile data than normal. This is because stolen data is uploaded automatically to the hacker.",
            reasons: [
                "Screen recorders",
                "Keyloggers sending logs every minute",
                "Spyware uploading photos, messages, and contact lists",
                "Apps that constantly communicate with third-party servers"
            ],
            warning: "If you're not watching videos yet your mobile data is draining fast, malware is likely the cause."
        },
        {
            number: 5,
            title: "Your Phone Gets Hot Even When Not in Use",
            icon: Thermometer,
            description: "A warm phone usually means something is running. But if it's hot even while idle, this is a sign that hidden malware might be active.",
            reasons: [
                "Spyware recording audio or screen activity",
                "Apps mining cryptocurrency in the background",
                "Malicious scripts running constantly"
            ],
            warning: "If your phone heats up during basic tasks, act fast."
        },
        {
            number: 6,
            title: "You Receive Unknown Texts or Links",
            icon: MessageSquare,
            description: "Hackers often use SMS phishing (\"smishing\") to infect your phone.",
            reasons: [
                "\"Your package is waiting: click here…\"",
                "\"Your account is locked. Verify now…\"",
                "Random numbers sending codes or weird characters"
            ],
            warning: "If you clicked suspicious links, malware may already be installed on your device."
        },
        {
            number: 7,
            title: "Your Phone Runs Out of Storage Without Reason",
            icon: HardDrive,
            description: "Suddenly losing storage is another common hacking symptom.",
            reasons: [
                "Saving logs, screenshots, or recordings",
                "Generating junk data",
                "Downloading malicious modules"
            ],
            warning: "If your storage fills up overnight, it's not a coincidence — it's likely malware collecting files."
        },
        {
            number: 8,
            title: "Random Pop-Ups or Ads Appear",
            icon: AlertTriangle,
            description: "If you're seeing pop-ups outside of your browser, your phone is almost certainly infected with adware.",
            reasons: [
                "Ads showing on the home screen",
                "Ads appearing when no app is open",
                "Redirects to strange websites"
            ],
            warning: "This type of malware often comes bundled with fake apps, modded apps, or pirated content."
        },
        {
            number: 9,
            title: "Your Contacts Receive Messages You Did Not Send",
            icon: Users,
            description: "If your friends say: \"Why did you send me that weird link?\" — then your phone might be hacked.",
            reasons: [
                "Phishing links",
                "Malicious files",
                "Fake pleas for money",
                "Spam SMS or WhatsApp messages"
            ],
            warning: "This is one of the clearest signs of spyware infection."
        },
        {
            number: 10,
            title: "You Notice Strange Activity on Your Accounts",
            icon: Shield,
            description: "Often, the phone is hacked first — and your accounts get hacked next.",
            reasons: [
                "Unknown devices logged into your Google or Apple account",
                "Password reset emails you didn't request",
                "Bank alerts or strange transactions",
                "Social media posts you didn't make"
            ],
            warning: "If multiple accounts are compromised, your device could have a deep infection."
        }
    ];

    const removalSteps = [
        { step: 1, title: "Delete Suspicious Apps", description: "Uninstall anything you don't recognize or no longer use." },
        { step: 2, title: "Run a Full Malware Scan", description: "Use trusted antivirus tools like Bitdefender Mobile Security, Malwarebytes, or Avast Mobile Security." },
        { step: 3, title: "Change Your Passwords", description: "Start with your email, bank accounts, and social media." },
        { step: 4, title: "Enable Two-Factor Authentication (2FA)", description: "This prevents hackers from logging back in." },
        { step: 5, title: "Update Your Phone's Software", description: "System updates patch vulnerabilities attackers often exploit." },
        { step: 6, title: "Reset Your Phone (Last Resort)", description: "A factory reset removes nearly all malware — including spyware." }
    ];

    const faqs = [
        { q: "Can my phone be hacked without me knowing?", a: "Yes. Most modern spyware is designed to stay hidden." },
        { q: "Can someone hack my phone through a call?", a: "No, but they can trick you into installing malware." },
        { q: "What is the first thing I should do if I suspect hacking?", a: "Check your installed apps and look for anything unfamiliar." },
        { q: "Will factory resetting remove all malware?", a: "Yes—except in extremely rare cases involving advanced spyware." },
        { q: "Can iPhones get hacked too?", a: "Yes. They are harder to hack, but not impossible." }
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
                                { "@type": "ListItem", "position": 3, "name": "10 Signs Your Phone Is Hacked", "item": "https://tech.weebcoder.com/articles/10-signs-your-phone-is-hacked" }
                            ]
                        },
                        {
                            "@type": "Article",
                            "headline": "10 Signs Your Phone Is Hacked (And How to Fix It Fast)",
                            "alternativeHeadline": "How to Know If Your Phone Has Been Hacked",
                            "description": "A complete 3,000-word guide explaining the top signs your phone has been hacked, how to check for malware, and how to remove a hacker from your device.",
                            "image": "https://tech.weebcoder.com/default-article-image.jpg",
                            "author": { "@type": "Person", "name": "Tech Team", "url": "https://tech.weebcoder.com/authors/tech-team" },
                            "publisher": { "@type": "Organization", "name": "TechBlog", "logo": { "@type": "ImageObject", "url": "https://tech.weebcoder.com/logo.png" } },
                            "datePublished": "2025-01-10",
                            "dateModified": "2025-01-10",
                            "wordCount": "3000",
                            "inLanguage": "en",
                            "mainEntityOfPage": "https://tech.weebcoder.com/articles/10-signs-your-phone-is-hacked",
                            "keywords": ["phone hacked", "smartphone security", "mobile hacking signs", "remove hacker phone", "phone spyware", "how to tell if phone is hacked"]
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
                    Your phone is the most personal device you own — it holds your messages, passwords, photos, bank apps, and even your identity.
                    So when a hacker gets access to it, the results can be disastrous. From stolen money to leaked data, phone hacking is more
                    common today than ever before.
                </p>

                <Alert className="my-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Alarming Statistic</AlertTitle>
                    <AlertDescription>
                        Cybersecurity reports show that mobile cyberattacks have increased by over 300% in the last 2 years.
                    </AlertDescription>
                </Alert>

                <p className="text-lg leading-relaxed">
                    If you've noticed strange behavior on your device, you might be wondering: <strong>"Is my phone hacked?"</strong>
                    This in-depth guide will help you recognize the warning signs early, understand how hackers infiltrate smartphones,
                    and learn exactly what to do next.
                </p>

                <p className="text-lg leading-relaxed">
                    Below are the <strong>10 most common signs your phone is hacked</strong>, explained in simple, user-friendly language.
                    If you notice two or more of these happening on your device, take action immediately.
                </p>
            </div>

            {/* 10 Signs */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">10 Warning Signs Your Phone Is Hacked</h2>
                <div className="grid gap-6">
                    {hackingSigns.map((sign) => {
                        const Icon = sign.icon;
                        return (
                            <Card key={sign.number} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <Badge variant="outline" className="mb-2">Sign #{sign.number}</Badge>
                                            <CardTitle className="text-xl mb-2">{sign.title}</CardTitle>
                                            <CardDescription className="text-base">{sign.description}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                                <XCircle className="h-4 w-4 text-destructive" />
                                                Why this happens:
                                            </h4>
                                            <ul className="space-y-1 ml-6">
                                                {sign.reasons.map((reason, idx) => (
                                                    <li key={idx} className="text-sm text-muted-foreground">• {reason}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <Alert variant="destructive">
                                            <AlertTriangle className="h-4 w-4" />
                                            <AlertDescription className="text-sm">
                                                {sign.warning}
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>

            {/* How Hackers Break In */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-4">How Do Hackers Break Into Phones?</h2>
                <p className="text-lg leading-relaxed">
                    To protect yourself, it helps to understand how hackers get inside your device. The most common methods include:
                </p>

                <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                    {[
                        { title: "Phishing Links", desc: "Via SMS, email, or WhatsApp" },
                        { title: "Fake Apps", desc: "That secretly contain malware" },
                        { title: "Public Wi-Fi Attacks", desc: "Man-in-the-Middle attacks" },
                        { title: "Malicious Websites", desc: "With hidden downloads" },
                        { title: "Spyware", desc: "Installed by someone you know" }
                    ].map((method, idx) => (
                        <Card key={idx}>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-base">{method.title}</CardTitle>
                                <CardDescription className="text-sm">{method.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                        Modern malware is designed to stay hidden, making early detection critical.
                    </AlertDescription>
                </Alert>
            </div>

            {/* How to Remove Hacker */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">How to Remove a Hacker From Your Phone</h2>
                <p className="text-lg text-muted-foreground">Follow this step-by-step action plan:</p>

                <div className="space-y-4">
                    {removalSteps.map((step) => (
                        <Card key={step.step} className="border-l-4 border-l-primary">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                            {step.step}
                                        </div>
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg mb-1">{step.title}</CardTitle>
                                        <CardDescription>{step.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Protection Tips */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-4">How to Protect Your Phone From Future Hacks</h2>
                <p className="text-lg leading-relaxed">Prevention is easier than recovery. Follow these cybersecurity habits:</p>

                <div className="grid md:grid-cols-2 gap-3 not-prose my-6">
                    {[
                        "Never click suspicious links",
                        "Install apps only from official app stores",
                        "Use a VPN on public Wi-Fi",
                        "Regularly update your device",
                        "Avoid installing modded or cracked apps",
                        "Use strong, unique passwords",
                        "Install a reputable mobile security app"
                    ].map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{tip}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Conclusion */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
                <p className="text-lg leading-relaxed">
                    Your smartphone is a digital extension of your life — and hackers know it. Recognizing the early warning signs is the
                    best way to protect your privacy, your finances, and your identity. If you noticed any suspicious behavior on your device,
                    take action immediately. The faster you respond, the less damage a hacker can do.
                </p>

                <Alert className="my-6">
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Stay Protected</AlertTitle>
                    <AlertDescription>
                        Stay safe, stay aware, and protect your digital world.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
    );
}
