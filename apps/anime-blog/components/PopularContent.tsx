import Link from 'next/link';
import { Flame } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PopularItem {
    title: string;
    url: string;
    readTime: string;
}

const popularItems: PopularItem[] = [
    { title: 'Top 10 Anime to Watch in 2025', url: '/posts/top-10-anime-2025', readTime: '10 min' },
    { title: 'Best Anime Like Solo Leveling', url: '/posts/best-anime-like-solo-leveling', readTime: '12 min' },
    { title: 'Best Romance Anime', url: '/posts/best-romance-anime', readTime: '15 min' },
    { title: 'Action Anime Primer', url: '/posts/action-anime-primer', readTime: '20 min' },
    { title: 'Isekai Anime Primer', url: '/posts/isekai-anime-primer', readTime: '25 min' }
];

export default function PopularContent() {
    const gradientColor = 'from-pink-500 to-purple-500';

    return (
        <div className="mt-12">
            <Card className="bg-background/40 backdrop-blur-sm border-2">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <Flame className={`h-5 w-5 bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`} />
                        <CardTitle className={`text-lg bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
                            Trending Posts
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
                                    <p className="text-sm font-medium line-clamp-2 group-hover:text-pink-500 transition-colors">
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
        </div>
    );
}
