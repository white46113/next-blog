"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    Search,
    AlertCircle,
    CheckCircle2,
    AlertTriangle,
    Info,
    Download,
    Clock,
    Globe,
    FileText,
    Image as ImageIcon,
    Link2,
    Smartphone,
    Zap,
    TrendingUp,
    Copy,
    Check,
    Loader2,
} from "lucide-react";

interface SEOIssue {
    category: 'critical' | 'warning' | 'info' | 'success';
    title: string;
    description: string;
    recommendation?: string;
}

interface SEOAnalysis {
    url: string;
    timestamp: number;
    httpStatus: number;
    loadTime: number;
    issues: SEOIssue[];
    stats: {
        title: string;
        titleLength: number;
        description: string;
        descriptionLength: number;
        h1Count: number;
        h1Text: string[];
        imageCount: number;
        imagesWithoutAlt: number;
        wordCount: number;
        internalLinks: number;
        externalLinks: number;
        hasViewport: boolean;
        hasCanonical: boolean;
        canonicalUrl: string;
        hasNoindex: boolean;
        hasNofollow: boolean;
        robotsTxtAllows: boolean;
        contentType: string;
    };
}

export default function SEOCrawler() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [analysis, setAnalysis] = useState<SEOAnalysis | null>(null);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const analyzeUrl = async () => {
        if (!url) return;

        setLoading(true);
        setError("");
        setAnalysis(null);

        try {
            const response = await fetch('/api/seo-crawler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Failed to analyze URL');
                return;
            }

            setAnalysis(data);
        } catch (err: any) {
            setError(err.message || 'Failed to analyze URL');
        } finally {
            setLoading(false);
        }
    };

    const getIssueIcon = (category: string) => {
        switch (category) {
            case 'critical':
                return <AlertCircle className="h-5 w-5 text-red-500" />;
            case 'warning':
                return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
            case 'info':
                return <Info className="h-5 w-5 text-blue-500" />;
            case 'success':
                return <CheckCircle2 className="h-5 w-5 text-green-500" />;
            default:
                return <Info className="h-5 w-5" />;
        }
    };

    const getIssueBadgeColor = (category: string) => {
        switch (category) {
            case 'critical':
                return 'bg-red-500/10 text-red-600 border-red-500/20';
            case 'warning':
                return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
            case 'info':
                return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
            case 'success':
                return 'bg-green-500/10 text-green-600 border-green-500/20';
            default:
                return '';
        }
    };

    const exportReport = () => {
        if (!analysis) return;

        const report = {
            ...analysis,
            exportedAt: new Date().toISOString(),
        };

        const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `seo-analysis-${new Date().getTime()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const copyReport = () => {
        if (!analysis) return;

        const text = analysis.issues
            .map(issue => `${issue.category.toUpperCase()}: ${issue.title}\n${issue.description}${issue.recommendation ? `\nRecommendation: ${issue.recommendation}` : ''}\n`)
            .join('\n');

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const criticalCount = analysis?.issues.filter(i => i.category === 'critical').length || 0;
    const warningCount = analysis?.issues.filter(i => i.category === 'warning').length || 0;
    const successCount = analysis?.issues.filter(i => i.category === 'success').length || 0;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SEO Crawler & Indexing Checker",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Free SEO crawler tool to identify indexing issues, analyze meta tags, check content quality, and optimize for search engines.",
        featureList: [
            "Detect noindex tags",
            "Check canonical URLs",
            "Analyze content quality",
            "Measure page performance",
            "Verify mobile optimization",
            "Check robots.txt blocking",
            "Validate HTTP status codes",
            "Analyze meta tags and headings",
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl mb-4">
                        <Search className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-primary">
                        SEO Crawler & Indexing Checker
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Analyze your webpages for SEO issues. Detect noindex tags, canonicalization problems, thin content, performance issues, and more.
                    </p>
                </div>

                {/* URL Input */}
                <Card className="border-none shadow-2xl mb-8 bg-gradient-to-br from-card to-card/50 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" />
                            Enter URL to Analyze
                        </CardTitle>
                        <CardDescription>
                            Enter the full URL of the page you want to analyze for SEO and indexing issues
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <Input
                                    type="url"
                                    placeholder="https://example.com/page"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && analyzeUrl()}
                                    className="text-base"
                                    disabled={loading}
                                />
                            </div>
                            <Button
                                onClick={analyzeUrl}
                                disabled={loading || !url}
                                className="px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <Search className="mr-2 h-4 w-4" />
                                        Analyze
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Error Display */}
                {error && (
                    <Alert variant="destructive" className="mb-8 border-2">
                        <AlertCircle className="h-5 w-5" />
                        <AlertDescription className="ml-2">
                            <p className="font-semibold">Analysis Failed</p>
                            <p className="text-sm mt-1">{error}</p>
                        </AlertDescription>
                    </Alert>
                )}

                {/* Results */}
                {analysis && (
                    <div className="space-y-6">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Card className="border-none shadow-lg bg-gradient-to-br from-red-500/10 to-red-600/5">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Critical Issues</p>
                                            <p className="text-3xl font-bold text-red-600">{criticalCount}</p>
                                        </div>
                                        <AlertCircle className="h-10 w-10 text-red-500 opacity-50" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/5">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Warnings</p>
                                            <p className="text-3xl font-bold text-yellow-600">{warningCount}</p>
                                        </div>
                                        <AlertTriangle className="h-10 w-10 text-yellow-500 opacity-50" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-gradient-to-br from-green-500/10 to-green-600/5">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Passed Checks</p>
                                            <p className="text-3xl font-bold text-green-600">{successCount}</p>
                                        </div>
                                        <CheckCircle2 className="h-10 w-10 text-green-500 opacity-50" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5">
                                <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground">Load Time</p>
                                            <p className="text-3xl font-bold text-blue-600">{analysis.loadTime}ms</p>
                                        </div>
                                        <Clock className="h-10 w-10 text-blue-500 opacity-50" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Page Info */}
                        <Card className="border-none shadow-xl">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <FileText className="h-5 w-5" />
                                        Page Information
                                    </CardTitle>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" onClick={copyReport}>
                                            {copied ? (
                                                <>
                                                    <Check className="h-4 w-4 mr-1" />
                                                    Copied
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-4 w-4 mr-1" />
                                                    Copy
                                                </>
                                            )}
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={exportReport}>
                                            <Download className="h-4 w-4 mr-1" />
                                            Export JSON
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">URL</Label>
                                        <p className="text-sm font-mono break-all bg-muted p-2 rounded">{analysis.url}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">HTTP Status</Label>
                                        <Badge className={analysis.httpStatus < 400 ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}>
                                            {analysis.httpStatus}
                                        </Badge>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">Title ({analysis.stats.titleLength} chars)</Label>
                                        <p className="text-sm bg-muted p-2 rounded">{analysis.stats.title || 'No title'}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-sm text-muted-foreground">Meta Description ({analysis.stats.descriptionLength} chars)</Label>
                                        <p className="text-sm bg-muted p-2 rounded">{analysis.stats.description || 'No description'}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">{analysis.stats.wordCount}</p>
                                        <p className="text-xs text-muted-foreground">Words</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">{analysis.stats.h1Count}</p>
                                        <p className="text-xs text-muted-foreground">H1 Tags</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">{analysis.stats.imageCount}</p>
                                        <p className="text-xs text-muted-foreground">Images</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-primary">{analysis.stats.internalLinks}</p>
                                        <p className="text-xs text-muted-foreground">Internal Links</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Issues Accordion */}
                        <Card className="border-none shadow-xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5" />
                                    SEO Analysis Results
                                </CardTitle>
                                <CardDescription>
                                    Detailed breakdown of all checks performed on your page
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="multiple" className="w-full">
                                    {analysis.issues.map((issue, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="hover:no-underline">
                                                <div className="flex items-center gap-3 flex-1">
                                                    {getIssueIcon(issue.category)}
                                                    <span className="font-medium text-left flex-1">{issue.title}</span>
                                                    <Badge variant="outline" className={getIssueBadgeColor(issue.category)}>
                                                        {issue.category}
                                                    </Badge>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="pl-8 space-y-2 pt-2">
                                                    <p className="text-sm text-muted-foreground">{issue.description}</p>
                                                    {issue.recommendation && (
                                                        <div className="mt-3 p-3 bg-primary/5 border-l-4 border-primary rounded">
                                                            <p className="text-sm font-medium text-primary mb-1">💡 Recommendation</p>
                                                            <p className="text-sm">{issue.recommendation}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Info Section */}
                <Card className="border-none shadow-xl mt-12 bg-gradient-to-br from-muted/50 to-muted/20">
                    <CardHeader>
                        <CardTitle>What This Tool Checks</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Indexability Issues</h3>
                                        <p className="text-sm text-muted-foreground">Noindex tags, robots.txt blocking, X-Robots-Tag headers</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileText className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Meta Tags & Structure</h3>
                                        <p className="text-sm text-muted-foreground">Title, description, canonical URLs, heading structure</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Content Quality</h3>
                                        <p className="text-sm text-muted-foreground">Word count, thin content detection, duplicate content hints</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <Zap className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Performance</h3>
                                        <p className="text-sm text-muted-foreground">Page load time, HTTP status codes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Smartphone className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Mobile Optimization</h3>
                                        <p className="text-sm text-muted-foreground">Viewport meta tag, responsive design indicators</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <ImageIcon className="h-5 w-5 text-primary mt-0.5" />
                                    <div>
                                        <h3 className="font-semibold">Image Optimization</h3>
                                        <p className="text-sm text-muted-foreground">Alt text validation, image count analysis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
