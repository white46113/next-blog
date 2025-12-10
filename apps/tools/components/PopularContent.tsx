import Link from 'next/link';
import { Flame, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface PopularItem {
    title: string;
    url: string;
    readTime: string;
}

const popularItems: PopularItem[] = [
    { title: 'How to Calculate Percentage', url: '/articles/how-to-calculate-percentage', readTime: '10 min' },
    { title: 'Percentage Increase Calculator', url: '/articles/percentage-increase-calculator', readTime: '12 min' },
    { title: 'Loan EMI Calculator', url: '/articles/loan-emi-calculator', readTime: '5 min' },
    { title: 'GST/VAT Calculator', url: '/articles/gst-vat-calculator', readTime: '5 min' },
    { title: 'What is Percentage?', url: '/articles/what-is-percentage', readTime: '10 min' }
];

export default function PopularContent() {
    const gradientColor = 'from-green-500 to-emerald-500';

    return (
        <div className="mt-12">
            <Card className="bg-background/40 backdrop-blur-sm border-2">
                <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                        <Flame className={`h-5 w-5 bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`} />
                        <CardTitle className={`text-lg bg-gradient-to-r ${gradientColor} bg-clip-text text-transparent`}>
                            Popular Guides
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
        </div>
    );
}
