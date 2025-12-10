import Link from 'next/link';
import { Flame, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PopularItem {
    title: string;
    url: string;
    readTime: string;
}

export default function PopularContent({ app }: { app: 'tech' | 'tools' | 'anime' }) {
    // Define popular content based on app
    const popularItems: PopularItem[] = [];

    if (app === 'tech') {
        popularItems.push(
            { title: '10 Signs Your Phone Is Hacked', url: '/articles/10-signs-your-phone-is-hacked', readTime: '12 min' },
            { title: 'How to Speed Up Your Phone', url: '/articles/how-to-speed-up-your-phone', readTime: '10 min' },
            { title: 'Android Storage Guide', url: '/articles/android-storage-guide', readTime: '15 min' },
            { title: 'Windows 11 Problems & Fixes', url: '/articles/windows-11-guide', readTime: '12 min' },
            { title: 'Speed Up Windows 11', url: '/articles/how-to-speed-up-windows-11', readTime: '18 min' }
        );
    } else if (app === 'tools') {
        popularItems.push(
            { title: 'How to Calculate Percentage', url: '/articles/how-to-calculate-percentage', readTime: '10 min' },
            { title: 'Percentage Increase Calculator', url: '/articles/percentage-increase-calculator', readTime: '12 min' },
            { title: 'Loan EMI Calculator', url: '/articles/loan-emi-calculator', readTime: '5 min' },
            { title: 'GST/VAT Calculator', url: '/articles/gst-vat-calculator', readTime: '5 min' },
            { title: 'What is Percentage?', url: '/articles/what-is-percentage', readTime: '10 min' }
        );
    } else if (app === 'anime') {
        popularItems.push(
            { title: 'Top 10 Anime to Watch in 2025', url: '/posts/top-10-anime-2025', readTime: '10 min' },
            { title: 'Best Anime Like Solo Leveling', url: '/posts/best-anime-like-solo-leveling', readTime: '12 min' },
            { title: 'Best Romance Anime', url: '/posts/best-romance-anime', readTime: '15 min' },
            { title: 'Action Anime Primer', url: '/posts/action-anime-primer', readTime: '20 min' },
            { title: 'Isekai Anime Primer', url: '/posts/isekai-anime-primer', readTime: '25 min' }
        );
    }

    const gradientColor = app === 'tech' ? 'from-blue-500 to-cyan-500' :
        app === 'tools' ? 'from-green-500 to-emerald-500' :
            'from-pink-500 to-purple-500';

    return (
        <Card className="sticky top-20 bg-background/40 backdrop-blur-sm border-2">
            <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                    <Flame className={`h-5 w-5 bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`} />
                    <CardTitle className={`text-lg bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
                        Trending Now
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                {popularItems.map((item, index) => (
                    <Link key={index} href={item.url}>
                        <div className="group flex gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                            <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br ${gradientColor} 
                                flex items-center justify-center text-white text-sm font-bold`}>
                                {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {item.readTime}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </CardContent>
        </Card>
    );
}
