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
                title: 'Free Percentage Calculator',
                description: 'Calculate percentages instantly with our easy-to-use calculator tools',
                url: 'https://tools.weebcoder.com/articles/how-to-calculate-percentage',
                app: 'tools',
                badge: 'From Tools'
            },
            {
                title: 'Top 10 Anime to Watch in 2025',
                description: 'Take a break and discover the best anime series of 2025',
                url: 'https://anime.weebcoder.com/posts/top-10-anime-2025',
                app: 'anime',
                badge: 'From Anime Blog'
            }
        );
    } else if (currentApp === 'tools') {
        suggestions.push(
            {
                title: 'How to Speed Up Your Phone',
                description: 'Optimize your device performance with these proven methods',
                url: 'https://tech.weebcoder.com/articles/how-to-speed-up-your-phone',
                app: 'tech',
                badge: 'From Tech Blog'
            },
            {
                title: 'Best Anime Like Solo Leveling',
                description: 'Discover anime with OP protagonists and leveling systems',
                url: 'https://anime.weebcoder.com/posts/best-anime-like-solo-leveling',
                app: 'anime',
                badge: 'From Anime Blog'
            }
        );
    } else if (currentApp === 'anime') {
        suggestions.push(
            {
                title: 'Android Storage Guide',
                description: 'Free up space on your device to download more anime',
                url: 'https://tech.weebcoder.com/articles/android-storage-guide',
                app: 'tech',
                badge: 'From Tech Blog'
            },
            {
                title: 'Loan EMI Calculator',
                description: 'Plan your finances with our free EMI calculator',
                url: 'https://tools.weebcoder.com/articles/loan-emi-calculator',
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
                <div className="grid md:grid-cols-2 gap-6">
                    {suggestions.map((link, index) => {
                        const gradientColor = getAppColor(link.app);
                        const bgColor = getAppBackground(link.app);
                        return (
                            <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
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
