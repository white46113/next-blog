import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calculator, FileImage, QrCode, Download, Bug, Search, Percent, Crop } from 'lucide-react';

interface Tool {
    name: string;
    href: string;
    description: string;
    category: string;
    icon: any;
}

const allTools: Tool[] = [
    { name: "BMI Calculator", href: "/tools/bmi-calculator", description: "Calculate your Body Mass Index", category: "Calculator", icon: Calculator },
    { name: "Percentage Calculator", href: "/tools/percentage-calculator", description: "Calculate percentages easily", category: "Calculator", icon: Percent },
    { name: "Crop Image", href: "/tools/crop-image", description: "Crop images to exact dimensions with aspect ratios", category: "Converter", icon: Crop },
    { name: "JPG to PDF", href: "/tools/jpg-to-pdf", description: "Convert JPG images to PDF", category: "Converter", icon: FileImage },
    { name: "PDF to Image", href: "/tools/pdf-to-image", description: "Convert PDF to PNG/JPEG/WebP", category: "Converter", icon: FileImage },
    { name: "PNG to WebP", href: "/tools/png-to-webp", description: "Convert PNG to modern WebP format", category: "Converter", icon: FileImage },
    { name: "QR Code Generator", href: "/tools/qr-code-generator", description: "Generate QR codes instantly", category: "Generator", icon: QrCode },
    { name: "YouTube Thumbnail Downloader", href: "/tools/youtube-thumbnail-downloader", description: "Download YouTube thumbnails in HD", category: "Downloader", icon: Download },
    { name: "HTTP Request Tester", href: "/tools/form-data-debugger", description: "Test APIs online - Postman alternative", category: "Developer", icon: Bug },
    { name: "SEO Crawler", href: "/tools/seo-crawler", description: "Find indexing issues on your site", category: "Developer", icon: Search },
];

function getCategoryColor(category: string): string {
    const colors: Record<string, string> = {
        'Calculator': 'from-green-500 to-emerald-500',
        'Converter': 'from-blue-500 to-cyan-500',
        'Generator': 'from-purple-500 to-pink-500',
        'Downloader': 'from-orange-500 to-red-500',
        'Developer': 'from-violet-500 to-indigo-500',
    };
    return colors[category] || 'from-gray-500 to-slate-500';
}

export default function RelatedTools({ currentPath, category, maxItems = 3 }: { currentPath: string; category?: string; maxItems?: number }) {
    // Filter out current tool and get related tools
    let relatedTools = allTools
        .filter(tool => tool.href !== currentPath)
        .filter(tool => !category || tool.category === category);

    // If we don't have enough from same category, add from other categories
    if (relatedTools.length < maxItems) {
        const additionalTools = allTools
            .filter(tool => tool.href !== currentPath && !relatedTools.find(t => t.href === tool.href))
            .slice(0, maxItems - relatedTools.length);
        relatedTools = [...relatedTools, ...additionalTools];
    }

    relatedTools = relatedTools.slice(0, maxItems);

    if (relatedTools.length === 0) {
        return null;
    }

    return (
        <div className="mt-16 space-y-6">
            <div className="border-t pt-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Related Tools
                </h2>
                <p className="text-muted-foreground mb-6">
                    Try these other free tools that might help you
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    {relatedTools.map((tool) => {
                        const gradientColor = getCategoryColor(tool.category);
                        const Icon = tool.icon;
                        return (
                            <Link key={tool.href} href={tool.href}>
                                <Card className="h-full group cursor-pointer relative overflow-hidden
                                    bg-background/40 backdrop-blur-sm
                                    border-2 border-transparent
                                    hover:border-green-500/50
                                    hover:shadow-xl hover:shadow-green-500/10
                                    transition-all duration-300 hover:scale-[1.02]
                                    before:absolute before:inset-0 before:rounded-lg
                                    before:p-[2px] before:bg-gradient-to-br before:from-green-500/20 before:to-emerald-600/20
                                    before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradientColor} flex items-center justify-center`}>
                                                <Icon className="h-5 w-5 text-white" />
                                            </div>
                                            <Badge variant="outline" className="text-xs">
                                                {tool.category}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-lg line-clamp-2 group-hover:text-green-500 transition-colors">
                                            {tool.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <CardDescription className="line-clamp-2">
                                            {tool.description}
                                        </CardDescription>
                                        <div className="flex items-center justify-between text-sm pt-2 border-t">
                                            <span className="text-xs font-medium text-green-600">Free Tool</span>
                                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-green-500" />
                                        </div>
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
