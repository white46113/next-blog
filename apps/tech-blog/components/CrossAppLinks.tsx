import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Sparkles } from 'lucide-react';

interface CrossAppLink {
    title: string;
    description: string;
    url: string;
    app: 'tools' | 'anime' | 'tech';
    badge: string;
}

// Helper function to get app color
function getAppColor(app: string): string {
    const colors: Record<string, string> = {
        'tools': 'from-green-500 to-emerald-500',
        'anime': 'from-pink-500 to-purple-500',
        'tech': 'from-blue-500 to-cyan-500',
    };
    return colors[app] || 'from-gray-500 to-slate-500';
}

// Helper function to get app background
function getAppBackground(app: string): string {
    const backgrounds: Record<string, string> = {
        'tools': 'bg-green-500/5 hover:bg-green-500/10',
        'anime': 'bg-pink-500/5 hover:bg-pink-500/10',
        'tech': 'bg-blue-500/5 hover:bg-blue-500/10',
    };
    return backgrounds[app] || 'bg-gray-500/5';
}

export default function CrossAppLinks({ currentApp }: { currentApp: 'tech' | 'tools' | 'anime' }) {
    // Define cross-app suggestions based on current app
    const suggestions: CrossAppLink[] = [];

    if (currentApp === 'tech') {
        suggestions.push(
            {
                title: 'Free Percentage Calculator - 5 Easy Methods',
                description: 'Master percentage calculations for business, finance, and daily life with our comprehensive guide and free calculator',
                url: 'https://tools.weebcoder.com/articles/how-to-calculate-percentage',
                app: 'tools',
                badge: 'From Tools'
            },
            {
                title: 'Free Loan EMI Calculator 2025',
                description: 'Calculate accurate EMI for home loans, car loans, and personal loans instantly with amortization schedules',
                url: 'https://tools.weebcoder.com/articles/loan-emi-calculator',
                app: 'tools',
                badge: 'From Tools'
            },
            {
                title: 'Top 10 Anime to Watch in 2025',
                description: 'Take a break and discover the best anime series defining 2025, from Attack on Titan to Demon Slayer',
                url: 'https://anime.weebcoder.com/posts/top-10-anime-2025',
                app: 'anime',
                badge: 'From Anime Blog'
            }
        );
    } else if (currentApp === 'tools') {
        suggestions.push(
            {
                title: 'Speed Up Your Phone: 15 Proven Ways',
                description: 'Boost Android or iPhone performance up to 300% with quick 2-minute fixes and advanced optimizations',
                url: 'https://tech.weebcoder.com/articles/how-to-speed-up-your-phone',
                app: 'tech',
                badge: 'From Tech Blog'
            },
            {
                title: 'Android Storage Full? 15 Ways to Fix',
                description: 'Reclaim 5-50GB on Android without deleting photos. Find hidden storage hogs and optimize space',
                url: 'https://tech.weebcoder.com/articles/android-storage-guide',
                app: 'tech',
                badge: 'From Tech Blog'
            },
            {
                title: 'Best Anime Like Solo Leveling',
                description: 'Discover anime with OP protagonists, unique leveling systems, and epic battles',
                url: 'https://anime.weebcoder.com/posts/best-anime-like-solo-leveling',
                app: 'anime',
                badge: 'From Anime Blog'
            }
        );
    } else if (currentApp === 'anime') {
        suggestions.push(
            {
                title: 'Android Storage Guide - Free Up Space',
                description: 'Free up 5-50GB on your device to download more anime without deleting your favorite shows',
                url: 'https://tech.weebcoder.com/articles/android-storage-guide',
                app: 'tech',
                badge: 'From Tech Blog'
            },
            {
                title: '10 Signs Your Phone Is Hacked',
                description: 'Protect your device and personal data with this complete security guide and step-by-step fixes',
                url: 'https://tech.weebcoder.com/articles/10-signs-your-phone-is-hacked',
                app: 'tech',
                badge: 'From Tech Blog'
            },
            {
                title: 'Free Percentage Calculator & Guide',
                description: 'Calculate discounts, grades, and percentages instantly with our easy-to-use free tools',
                url: 'https://tools.weebcoder.com/articles/how-to-calculate-percentage',
                app: 'tools',
                badge: 'From Tools'
            }
        );
    }

    if (suggestions.length === 0) {
        return null;
    }

    return (
        <div className="mt-12 space-y-6">
            <div className="border-t pt-8">
                <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        You Might Also Like
                    </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                    Explore more content from our other platforms
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suggestions.map((link, index) => {
                        const gradientColor = getAppColor(link.app);
                        const bgColor = getAppBackground(link.app);
                        return (
                            <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer nofollow">
                                <Card className={`h-full group cursor-pointer relative overflow-hidden
                                    ${bgColor}
                                    border-2 border-transparent
                                    hover:border-primary/30
                                    hover:shadow-lg
                                    transition-all duration-300`}>
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full
                                                bg-gradient-to-r ${gradientColor} text-white`}>
                                                {link.badge}
                                            </span>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                            {link.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">
                                            {link.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
