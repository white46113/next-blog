import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Laptop, DollarSign, Battery, Zap, CheckCircle2, AlertCircle, Info, Award, BookOpen, Code, Palette, GraduationCap, ShoppingCart, Sparkles } from "lucide-react";

export default function BestLaptopsForStudents2025() {
    const keyFactors = [
        {
            icon: Laptop,
            title: "Portability & Design",
            description: "Your laptop goes everywhere - from lecture halls to coffee shops. Look for 13-15 inch screens that balance workspace with portability.",
            points: [
                "Lightweight design (under 4 lbs/1.8 kg ideal)",
                "Durable build quality for daily transport",
                "Slim profile that fits in backpacks easily",
                "Comfortable keyboard for long typing sessions"
            ]
        },
        {
            icon: Battery,
            title: "Battery Life",
            description: "Nothing kills productivity like hunting for chargers mid-lecture. Modern laptops now offer 10-20+ hours of real-world use.",
            points: [
                "Minimum 8 hours for full-day classes",
                "Efficient processors (M-series, Intel Ultra)",
                "Fast charging capabilities",
                "Power management features"
            ]
        },
        {
            icon: Zap,
            title: "Performance",
            description: "You don't need gaming-level specs for most student work, but smooth multitasking is essential.",
            points: [
                "8-16GB RAM for multitasking",
                "Modern CPU (Intel Core i5/i7, AMD Ryzen 5/7, Apple M-series)",
                "256GB+ SSD storage minimum",
                "Integrated graphics handles most tasks"
            ]
        },
        {
            icon: DollarSign,
            title: "Value & Budget",
            description: "The best laptop isn't always the most expensive - it's the one that meets your needs without breaking the bank.",
            points: [
                "Set realistic budget based on major/needs",
                "Watch for student discounts and seasonal sales",
                "Consider refurbished or last-gen models",
                "Factor in longevity (3-5 year lifespan)"
            ]
        }
    ];

    const premiumPicks = [
        {
            name: "ASUS Zenbook 14 OLED",
            processor: "Intel Core Ultra",
            category: "Premium All-Rounder",
            icon: Sparkles,
            color: "blue",
            features: [
                "Stunning OLED display perfect for reading and media",
                "Powerful Intel Ultra processor handles multitasking effortlessly",
                "Premium aluminum build feels professional",
                "Excellent battery life for all-day use",
                "Lightweight and portable design",
                "Great for content creators and power users"
            ],
            bestFor: "Students who want premium features without compromise",
            priceRange: "Premium ($1,000+)"
        },
        {
            name: "Samsung Galaxy Book5",
            processor: "Intel Core Ultra",
            category: "Best Everyday Choice",
            icon: CheckCircle2,
            color: "green",
            features: [
                "Perfect balance of performance and portability",
                "Long battery life gets you through full school days",
                "Sleek, professional design",
                "Excellent display for productivity work",
                "Strong multitasking capabilities",
                "Reliable build quality"
            ],
            bestFor: "Most students seeking reliable everyday performance",
            priceRange: "Mid-Range ($700-$1,000)"
        },
        {
            name: "Apple MacBook Pro",
            processor: "M4 Chip",
            category: "Power User Champion",
            icon: Award,
            color: "purple",
            features: [
                "Industry-leading battery life (15-20+ hours)",
                "Exceptional performance for creative work",
                "Premium Retina display with perfect color accuracy",
                "Seamless Apple ecosystem integration",
                "Future-proof for 5+ years",
                "Best-in-class trackpad and keyboard",
                "Ideal for video editing, design, and development"
            ],
            bestFor: "Creative students and those needing maximum power",
            priceRange: "Premium ($1,500+)"
        }
    ];

    const budgetPicks = [
        {
            name: "Lenovo V15 G4",
            processor: "AMD Ryzen 5",
            category: "Best Budget Option",
            icon: DollarSign,
            color: "amber",
            features: [
                "Excellent price-to-performance ratio",
                "Large 15.6-inch screen for productivity",
                "AMD Ryzen delivers solid performance",
                "Ample ports for accessories",
                "Good battery life for the price",
                "Perfect starter laptop"
            ],
            bestFor: "Budget-conscious students and first-time buyers",
            priceRange: "Budget ($400-$600)"
        },
        {
            name: "Dell Inspiron 15",
            processor: "Intel Core i5",
            category: "Reliable Workhorse",
            icon: Laptop,
            color: "slate",
            features: [
                "Trusted Dell reliability and support",
                "Solid performance for everyday tasks",
                "Comfortable full-size keyboard",
                "Easy to upgrade and maintain",
                "Good build quality",
                "Excellent customer service"
            ],
            bestFor: "Students who value reliability and brand support",
            priceRange: "Budget-Mid ($500-$800)"
        },
        {
            name: "HP 15-fd0492TU",
            processor: "Intel Core i5",
            category: "Everyday Workhorse",
            icon: BookOpen,
            color: "teal",
            features: [
                "Strong everyday performance",
                "Comfortable for long typing sessions",
                "Reliable HP build quality",
                "Good battery life",
                "Professional appearance",
                "Great for essays and research"
            ],
            bestFor: "Students focused on traditional schoolwork",
            priceRange: "Mid-Range ($600-$900)"
        }
    ];

    const studentTypes = [
        {
            type: "Creative & Design Students",
            icon: Palette,
            needs: ["High-resolution display", "Color accuracy", "GPU performance", "Adobe suite compatibility"],
            recommendations: [
                {
                    laptop: "MacBook Pro M4",
                    why: "Industry-standard for creative work, exceptional display, powerful performance for video editing and design"
                },
                {
                    laptop: "ASUS Zenbook 14 OLED",
                    why: "OLED display with vibrant colors, strong CPU for photo editing and light video work"
                }
            ],
            tips: "Invest in a good external monitor and graphics tablet. Consider AppleCare+ or extended warranty for expensive machines."
        },
        {
            type: "Computer Science & Engineering",
            icon: Code,
            needs: ["Fast processor", "16GB+ RAM", "SSD storage", "Good keyboard", "Unix/Linux compatibility"],
            recommendations: [
                {
                    laptop: "ASUS Zenbook 14 OLED",
                    why: "Powerful Intel Ultra CPU handles compilation and VMs, excellent keyboard for long coding sessions"
                },
                {
                    laptop: "Samsung Galaxy Book5",
                    why: "Strong multitasking, good battery for coding marathons, solid build quality"
                },
                {
                    laptop: "MacBook Pro M4",
                    why: "Unix-based macOS, exceptional performance, long battery life for all-day coding"
                }
            ],
            tips: "Prioritize RAM and SSD speed. You'll often run IDEs, databases, and virtual machines simultaneously."
        },
        {
            type: "Business & Liberal Arts",
            icon: GraduationCap,
            needs: ["Long battery life", "Good keyboard", "Portability", "Microsoft Office compatibility"],
            recommendations: [
                {
                    laptop: "Samsung Galaxy Book5",
                    why: "Perfect balance of features, excellent for essays and presentations, professional appearance"
                },
                {
                    laptop: "Dell Inspiron 15",
                    why: "Reliable, comfortable keyboard, good value, Microsoft Office runs smoothly"
                },
                {
                    laptop: "HP 15-fd0492TU",
                    why: "Solid performance for research and writing, comfortable for long typing sessions"
                }
            ],
            tips: "Focus on battery life and keyboard comfort. Consider Microsoft 365 student subscription for Office suite."
        }
    ];

    const tech2025Trends = [
        {
            title: "AI-Powered Features",
            description: "Modern laptops now include on-device AI for smart features like automatic transcription, intelligent photo editing, and enhanced productivity tools.",
            impact: "Makes note-taking, research, and content creation faster and easier"
        },
        {
            title: "OLED & High-Refresh Displays",
            description: "OLED screens offer incredible contrast and color accuracy, while high-refresh displays (90Hz+) make everything feel smoother.",
            impact: "Better for reading, media consumption, and creative work"
        },
        {
            title: "Extended Battery Life",
            description: "Thanks to efficient ARM-based processors (Apple M-series) and Intel's new Ultra chips, laptops now routinely exceed 15+ hours of real-world use.",
            impact: "Full-day battery life without carrying chargers"
        },
        {
            title: "Faster Storage & Memory",
            description: "PCIe 4.0/5.0 SSDs and DDR5 RAM have become standard, dramatically improving load times and multitasking.",
            impact: "Snappier performance across all tasks"
        }
    ];

    const buyingTips = [
        {
            icon: ShoppingCart,
            title: "Time Your Purchase",
            tips: [
                "Back-to-school sales (July-September) offer best discounts",
                "Black Friday/Cyber Monday can save 20-40%",
                "Check manufacturer's student discount programs",
                "Last-gen models drop in price when new ones launch",
                "Refurbished units from official stores save money"
            ]
        },
        {
            icon: AlertCircle,
            title: "Don't Overbuy",
            tips: [
                "More specs ≠ better value for most students",
                "Focus on what you'll actually use daily",
                "Future-proofing has diminishing returns",
                "Gaming laptops are overkill unless you game",
                "Cloud storage reduces need for huge SSDs"
            ]
        },
        {
            icon: CheckCircle2,
            title: "Think Long-Term",
            tips: [
                "Aim for a laptop that lasts 3-5 years",
                "Consider upgradeability (RAM, storage)",
                "Check warranty and support options",
                "Read real user reviews, not just specs",
                "Test the keyboard and trackpad in person if possible"
            ]
        }
    ];

    const faqs = [
        {
            q: "What's the ideal budget for a student laptop in 2025?",
            a: "For most students, $600-$1,000 offers the best value with solid performance, good battery life, and durability. Budget options ($400-$600) work fine for basic tasks like essays and browsing. Premium laptops ($1,000+) are worth it for creative work, engineering, or if you want a machine that lasts 5+ years. Avoid spending under $400 as these laptops often compromise on build quality and longevity."
        },
        {
            q: "Should I buy a Windows laptop, MacBook, or Chromebook?",
            a: "Windows laptops (like Dell, HP, ASUS, Lenovo) offer the most variety and compatibility with software used in most college courses. MacBooks are excellent for creative students, those in the Apple ecosystem, or computer science students who prefer Unix-based systems. Chromebooks are budget-friendly but limited - only suitable if your work is primarily web-based and you don't need specific desktop software."
        },
        {
            q: "How much RAM and storage do I really need?",
            a: "For most students: 8GB RAM and 256GB SSD is the minimum. 16GB RAM is ideal if you multitask heavily, run virtual machines, or use creative software. For storage, 256GB works if you use cloud storage, but 512GB offers more comfort. Computer science and creative students should aim for 16GB RAM and 512GB SSD at minimum."
        },
        {
            q: "Is it worth buying a laptop with an OLED display?",
            a: "OLED displays offer stunning visuals with perfect blacks and vibrant colors, making them excellent for media consumption, reading, and creative work. However, they cost more and can drain battery faster. If you spend lots of time reading documents or watching videos, OLED is worth it. For purely text-based work, a good IPS display saves money without sacrificing much."
        },
        {
            q: "Can I game on a student laptop?",
            a: "Most student laptops can handle casual or older games, but not AAA titles at high settings. Integrated graphics (Intel Iris Xe, AMD Radeon) work fine for esports titles like League of Legends or Valorant. If gaming is important, consider laptops with dedicated GPUs (NVIDIA RTX 3050+), but expect to pay more and sacrifice battery life. For serious gaming, a desktop or gaming laptop is better."
        },
        {
            q: "How important is battery life for a student laptop?",
            a: "Extremely important. You'll attend classes, study sessions, and work in cafes where outlets aren't always available. Aim for at least 8 hours of real-world battery life (not manufacturer claims). Modern efficient processors (Apple M-series, Intel Ultra) can deliver 10-20+ hours. Check reviews for actual battery tests, not just specs."
        },
        {
            q: "Should I buy directly from the manufacturer or a retailer?",
            a: "Both have pros and cons. Manufacturers (Dell, Apple, HP) often have student discounts, customization options, and direct support. Retailers (Amazon, Best Buy) offer competitive pricing, bundle deals, and easier returns. For premium laptops, buying direct ensures authenticity and warranty coverage. For budget laptops, compare both - retailers often have better sales."
        },
        {
            q: "Is a 2-in-1 laptop or tablet better for students?",
            a: "It depends on your note-taking style. 2-in-1 laptops (like Surface or Lenovo Yoga) work well if you want to handwrite notes with a stylus. However, traditional laptops offer better typing ergonomics and value. iPads with keyboards are great for reading and light work but struggle with complex tasks like coding or heavy multitasking. For most students, a traditional laptop is more versatile."
        },
        {
            q: "What's the difference between Intel and AMD processors?",
            a: "Both offer excellent performance in 2025. Intel Core i5/i7 and Ultra chips are common in student laptops with good efficiency. AMD Ryzen 5/7 processors often offer better value and multi-core performance. For everyday tasks, both work equally well - focus more on RAM, SSD, and battery life. Apple's M-series chips (M3, M4) are in a league of their own for efficiency and performance."
        },
        {
            q: "Do I need a dedicated graphics card (GPU)?",
            a: "For most students: no. Integrated graphics handle web browsing, video playback, office work, and even light photo editing. You need a dedicated GPU only if you're: doing serious video editing (Adobe Premiere), 3D modeling (Blender), gaming, or machine learning. Dedicated GPUs add cost and reduce battery life significantly."
        }
    ];

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Best Laptops for Students in 2025: Your Complete Buying Guide
                </h1>
                <p className="text-xl text-muted-foreground">
                    Choosing the perfect laptop for school doesn't have to be overwhelming. This comprehensive guide breaks down exactly what students need to consider in 2025, from budget-friendly workhorses to premium powerhouses that'll last through graduation and beyond.
                </p>
            </div>

            {/* Introduction */}
            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Why This Guide Matters</AlertTitle>
                <AlertDescription>
                    Your laptop is your most important academic tool - it's where you write essays, attend virtual classes, research topics, collaborate on projects, and occasionally binge-watch shows between study sessions. The right choice makes school easier; the wrong one becomes a daily frustration. This guide helps you find the perfect match for your needs and budget.
                </AlertDescription>
            </Alert>

            {/* Key Factors Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm">Step 1</Badge>
                    <h2 className="text-3xl font-bold">Essential Factors to Consider</h2>
                </div>
                <p className="text-muted-foreground">
                    Before diving into specific recommendations, understand what actually matters for student laptops. These four factors will guide your decision more than any spec sheet.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    {keyFactors.map((factor, idx) => (
                        <Card key={idx} className="h-full border-l-4 border-l-primary">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-full bg-primary/10">
                                        <factor.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{factor.title}</CardTitle>
                                </div>
                                <CardDescription className="text-base">{factor.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {factor.points.map((point, pidx) => (
                                        <li key={pidx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* 2025 Tech Trends */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm" variant="secondary">2025 Edition</Badge>
                    <h2 className="text-3xl font-bold">What's Different About Laptops in 2025</h2>
                </div>
                <p className="text-muted-foreground">
                    Laptop technology has made significant leaps in the past few years. Here's what's new and why it matters for students.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    {tech2025Trends.map((trend, idx) => (
                        <Card key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-blue-600" />
                                    {trend.title}
                                </CardTitle>
                                <CardDescription className="text-base">{trend.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                                    <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                    <span className="font-medium">{trend.impact}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Premium Picks */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm">Step 2</Badge>
                    <h2 className="text-3xl font-bold">Best Overall Picks: Premium & Mid-Range</h2>
                </div>
                <p className="text-muted-foreground">
                    These laptops offer the best balance of performance, battery life, and build quality. They're investments that'll serve you well through your entire academic career.
                </p>
                <div className="grid gap-6 lg:grid-cols-3">
                    {premiumPicks.map((laptop, idx) => (
                        <Card key={idx} className={`h-full border-2 border-${laptop.color}-200 dark:border-${laptop.color}-800`}>
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`p-2 rounded-full bg-${laptop.color}-100 dark:bg-${laptop.color}-950`}>
                                        <laptop.icon className={`h-5 w-5 text-${laptop.color}-600 dark:text-${laptop.color}-400`} />
                                    </div>
                                    <Badge variant="outline" className="text-xs">{laptop.category}</Badge>
                                </div>
                                <CardTitle className="text-xl">{laptop.name}</CardTitle>
                                <CardDescription className="text-sm font-medium text-primary">
                                    {laptop.processor}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {laptop.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-2 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t space-y-2">
                                    <div className="flex items-start gap-2 text-sm">
                                        <Award className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium">Best For</div>
                                            <div className="text-muted-foreground">{laptop.bestFor}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <DollarSign className="h-4 w-4 text-green-600 flex-shrink-0" />
                                        <span className="font-medium">{laptop.priceRange}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Budget Picks */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm">Step 3</Badge>
                    <h2 className="text-3xl font-bold">Best Value & Budget Options</h2>
                </div>
                <p className="text-muted-foreground">
                    You don't need to spend $1,000+ to get a great student laptop. These options deliver excellent performance for everyday schoolwork without the premium price tag.
                </p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {budgetPicks.map((laptop, idx) => (
                        <Card key={idx} className="h-full">
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`p-2 rounded-full bg-${laptop.color}-100 dark:bg-${laptop.color}-950`}>
                                        <laptop.icon className={`h-5 w-5 text-${laptop.color}-600 dark:text-${laptop.color}-400`} />
                                    </div>
                                    <Badge variant="secondary" className="text-xs">{laptop.category}</Badge>
                                </div>
                                <CardTitle className="text-xl">{laptop.name}</CardTitle>
                                <CardDescription className="text-sm font-medium text-primary">
                                    {laptop.processor}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {laptop.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-2 text-sm">
                                            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4 border-t space-y-2">
                                    <div className="flex items-start gap-2 text-sm">
                                        <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="font-medium">Best For</div>
                                            <div className="text-muted-foreground">{laptop.bestFor}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <DollarSign className="h-4 w-4 text-green-600 flex-shrink-0" />
                                        <span className="font-medium text-green-700 dark:text-green-400">{laptop.priceRange}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Student Type Recommendations */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm">Step 4</Badge>
                    <h2 className="text-3xl font-bold">Recommendations by Major & Lifestyle</h2>
                </div>
                <p className="text-muted-foreground">
                    Different students have different needs. Here's what works best based on your field of study and typical daily tasks.
                </p>
                <div className="grid gap-6">
                    {studentTypes.map((type, idx) => (
                        <Card key={idx} className="border-l-4 border-l-blue-500">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-950">
                                        <type.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <CardTitle className="text-2xl">{type.type}</CardTitle>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {type.needs.map((need, nidx) => (
                                        <Badge key={nidx} variant="secondary" className="text-xs">
                                            {need}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <h4 className="font-semibold">Top Recommendations:</h4>
                                    {type.recommendations.map((rec, ridx) => (
                                        <div key={ridx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <div className="space-y-1">
                                                <div className="font-medium">{rec.laptop}</div>
                                                <div className="text-sm text-muted-foreground">{rec.why}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <Alert>
                                    <Info className="h-4 w-4" />
                                    <AlertTitle>Pro Tip</AlertTitle>
                                    <AlertDescription>{type.tips}</AlertDescription>
                                </Alert>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Buying Tips */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <Badge className="h-8 text-sm">Step 5</Badge>
                    <h2 className="text-3xl font-bold">Smart Buying Strategies</h2>
                </div>
                <p className="text-muted-foreground">
                    Getting the best laptop isn't just about specs - it's about timing, avoiding common mistakes, and thinking long-term.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                    {buyingTips.map((tip, idx) => (
                        <Card key={idx} className="h-full">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-full bg-primary/10">
                                        <tip.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {tip.tips.map((point, pidx) => (
                                        <li key={pidx} className="flex items-start gap-2 text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Quick Comparison Table */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Quick Comparison Table</h2>
                <div className="rounded-lg border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Laptop</th>
                                    <th className="px-4 py-3 text-left font-semibold">Best For</th>
                                    <th className="px-4 py-3 text-left font-semibold">Price Range</th>
                                    <th className="px-4 py-3 text-left font-semibold">Key Strength</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr>
                                    <td className="px-4 py-3 font-medium">ASUS Zenbook 14 OLED</td>
                                    <td className="px-4 py-3 text-sm">Premium performance</td>
                                    <td className="px-4 py-3 text-sm">$1,000+</td>
                                    <td className="px-4 py-3 text-sm">OLED display + power</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Samsung Galaxy Book5</td>
                                    <td className="px-4 py-3 text-sm">Best everyday</td>
                                    <td className="px-4 py-3 text-sm">$700-$1,000</td>
                                    <td className="px-4 py-3 text-sm">Perfect balance</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">MacBook Pro M4</td>
                                    <td className="px-4 py-3 text-sm">Creative & power users</td>
                                    <td className="px-4 py-3 text-sm">$1,500+</td>
                                    <td className="px-4 py-3 text-sm">Battery + performance</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Lenovo V15 G4</td>
                                    <td className="px-4 py-3 text-sm">Budget students</td>
                                    <td className="px-4 py-3 text-sm">$400-$600</td>
                                    <td className="px-4 py-3 text-sm">Best value</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Dell Inspiron 15</td>
                                    <td className="px-4 py-3 text-sm">Reliable all-rounder</td>
                                    <td className="px-4 py-3 text-sm">$500-$800</td>
                                    <td className="px-4 py-3 text-sm">Trusted brand</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">HP 15-fd0492TU</td>
                                    <td className="px-4 py-3 text-sm">Everyday productivity</td>
                                    <td className="px-4 py-3 text-sm">$600-$900</td>
                                    <td className="px-4 py-3 text-sm">Comfortable typing</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`}>
                            <AccordionTrigger className="text-left font-medium text-base">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            {/* Conclusion */}
            <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Final Thoughts</AlertTitle>
                <AlertDescription className="space-y-2">
                    <p>
                        Choosing the right student laptop in 2025 doesn't have to be overwhelming. Focus on the fundamentals: battery life, portability, and performance that matches your actual needs - not marketing hype. Whether you're working with a tight budget or investing in a premium machine, there's a perfect laptop for every student.
                    </p>
                    <p className="font-medium">
                        Remember: the best laptop is the one that makes your academic life easier, not the one with the most impressive spec sheet. Prioritize what you'll use daily - reliable battery, comfortable keyboard, and smooth performance for your specific major.
                    </p>
                    <p>
                        And most importantly, take advantage of student discounts, time your purchase around sales, and don't overbuy features you'll never use. Your laptop should feel like an upgrade to your productivity, not just another expensive device in your backpack.
                    </p>
                </AlertDescription>
            </Alert>
        </div>
    );
}
