"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Zap, CheckCircle2, XCircle, Loader2, RefreshCw, Search, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function InstantIndexingPage() {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [checkingStatus, setCheckingStatus] = useState(false);
    const [urlStatus, setUrlStatus] = useState<any>(null);

    // Get all site URLs
    const siteUrls = [
        { url: 'https://tech.weebcoder.com/', label: 'Homepage' },
        { url: 'https://tech.weebcoder.com/articles', label: 'Articles Index' },
        { url: 'https://tech.weebcoder.com/about', label: 'About' },
        { url: 'https://tech.weebcoder.com/contact', label: 'Contact' },
        { url: 'https://tech.weebcoder.com/privacy', label: 'Privacy' },
        { url: 'https://tech.weebcoder.com/terms', label: 'Terms' },
        ...Object.keys(articles).map(slug => ({
            url: `https://tech.weebcoder.com/articles/${slug}`,
            label: articles[slug as keyof typeof articles].title
        }))
    ];

    const submitUrl = async (urlToSubmit?: string) => {
        const targetUrl = urlToSubmit || url;
        if (!targetUrl) {
            setError("Please enter a URL");
            return;
        }

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch('/api/index-url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: targetUrl,
                    type: 'URL_UPDATED'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setResult(data);
                setError(null);
            } else {
                setError(data.error || 'Failed to submit URL');
                setResult(null);
            }
        } catch (err: any) {
            setError(err.message || 'Network error');
            setResult(null);
        } finally {
            setLoading(false);
        }
    };

    const checkUrlStatus = async () => {
        if (!url) {
            setError("Please enter a URL");
            return;
        }

        setCheckingStatus(true);
        setError(null);
        setUrlStatus(null);

        try {
            const response = await fetch(`/api/index-url?url=${encodeURIComponent(url)}`);
            const data = await response.json();

            if (response.ok) {
                setUrlStatus(data);
                setError(null);
            } else {
                setError(data.error || 'Failed to check URL status');
                setUrlStatus(null);
            }
        } catch (err: any) {
            setError(err.message || 'Network error');
            setUrlStatus(null);
        } finally {
            setCheckingStatus(false);
        }
    };

    const submitAllUrls = async () => {
        setLoading(true);
        setError(null);
        let successCount = 0;
        let failCount = 0;

        for (const item of siteUrls) {
            try {
                const response = await fetch('/api/index-url', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        url: item.url,
                        type: 'URL_UPDATED'
                    }),
                });

                if (response.ok) {
                    successCount++;
                } else {
                    failCount++;
                }

                // Wait 1 second between requests to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (err) {
                failCount++;
            }
        }

        setLoading(false);
        setResult({
            success: true,
            message: `Submitted ${successCount} URLs successfully. ${failCount} failed.`,
            bulk: true,
            successCount,
            failCount
        });
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            T
                        </div>
                        <span className="font-bold text-xl tracking-tight">TechBlog Admin</span>
                    </Link>
                    <Badge variant="outline" className="gap-1">
                        <Zap className="h-3 w-3" />
                        Instant Indexing
                    </Badge>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Page Header */}
                <div className="mb-12 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                        <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Google Instant Indexing
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Submit URLs to Google's Indexing API for instant crawling and indexing
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Manual Submission */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LinkIcon className="h-5 w-5" />
                                Submit Single URL
                            </CardTitle>
                            <CardDescription>
                                Submit a specific URL for instant indexing
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">URL to Index</label>
                                <Input
                                    type="url"
                                    placeholder="https://tech.weebcoder.com/articles/..."
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="h-12"
                                />
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    onClick={() => submitUrl()}
                                    disabled={loading}
                                    className="flex-1"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <Zap className="mr-2 h-4 w-4" />
                                            Submit URL
                                        </>
                                    )}
                                </Button>
                                <Button
                                    onClick={checkUrlStatus}
                                    disabled={checkingStatus}
                                    variant="outline"
                                >
                                    {checkingStatus ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Search className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>

                            {/* Status Display */}
                            {urlStatus && (
                                <Alert className="bg-blue-50 dark:bg-blue-900/20 border-blue-200">
                                    <Search className="h-4 w-4 text-blue-600" />
                                    <AlertTitle className="text-blue-800 dark:text-blue-300">
                                        URL Status
                                    </AlertTitle>
                                    <AlertDescription className="text-blue-700 dark:text-blue-400">
                                        <pre className="text-xs mt-2 overflow-auto">
                                            {JSON.stringify(urlStatus.data, null, 2)}
                                        </pre>
                                    </AlertDescription>
                                </Alert>
                            )}
                        </CardContent>
                    </Card>

                    {/* Bulk Submission */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <RefreshCw className="h-5 w-5" />
                                Bulk Submit All URLs
                            </CardTitle>
                            <CardDescription>
                                Submit all site URLs at once ({siteUrls.length} URLs)
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Alert>
                                <AlertDescription>
                                    This will submit all {siteUrls.length} URLs to Google's Indexing API.
                                    Rate limited to 1 URL per second.
                                </AlertDescription>
                            </Alert>

                            <Button
                                onClick={submitAllUrls}
                                disabled={loading}
                                variant="outline"
                                className="w-full h-12"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Submitting All URLs...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Submit All {siteUrls.length} URLs
                                    </>
                                )}
                            </Button>

                            <div className="text-sm text-muted-foreground space-y-1">
                                <p><strong>Included URLs:</strong></p>
                                <ul className="list-disc list-inside text-xs space-y-0.5 max-h-40 overflow-y-auto">
                                    <li>Homepage</li>
                                    <li>Articles Index</li>
                                    <li>{Object.keys(articles).length} Article Pages</li>
                                    <li>About, Contact, Privacy, Terms</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Results */}
                {result && (
                    <Alert className="mt-8 bg-green-50 dark:bg-green-900/20 border-green-200">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <AlertTitle className="text-green-800 dark:text-green-300">
                            {result.bulk ? 'Bulk Submission Complete' : 'Success'}
                        </AlertTitle>
                        <AlertDescription className="text-green-700 dark:text-green-400">
                            {result.message}
                            {result.bulk && (
                                <div className="mt-2 space-y-1">
                                    <p>✅ Successful: {result.successCount}</p>
                                    <p>❌ Failed: {result.failCount}</p>
                                </div>
                            )}
                            {!result.bulk && result.data && (
                                <pre className="text-xs mt-2 overflow-auto max-h-40">
                                    {JSON.stringify(result.data, null, 2)}
                                </pre>
                            )}
                        </AlertDescription>
                    </Alert>
                )}

                {error && (
                    <Alert className="mt-8 bg-red-50 dark:bg-red-900/20 border-red-200">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <AlertTitle className="text-red-800 dark:text-red-300">Error</AlertTitle>
                        <AlertDescription className="text-red-700 dark:text-red-400">
                            {error}
                        </AlertDescription>
                    </Alert>
                )}

                {/* Quick Actions */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Quick Submit - All Pages</CardTitle>
                        <CardDescription>Click any URL to submit instantly</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            {siteUrls.map((item) => (
                                <Button
                                    key={item.url}
                                    variant="ghost"
                                    size="sm"
                                    className="justify-start text-left h-auto py-2"
                                    onClick={() => submitUrl(item.url)}
                                    disabled={loading}
                                >
                                    <Zap className="mr-2 h-3 w-3 shrink-0" />
                                    <span className="truncate text-xs">{item.label}</span>
                                </Button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Info Card */}
                <Alert className="mt-8">
                    <AlertTitle>How it works</AlertTitle>
                    <AlertDescription className="space-y-2">
                        <p>This tool uses Google's Indexing API to notify Google about new or updated content.</p>
                        <ul className="list-disc list-inside text-sm space-y-1">
                            <li>URLs are submitted for instant crawling (usually within minutes)</li>
                            <li>Best used for new content or important updates</li>
                            <li>Daily quota: 200 URLs per day</li>
                            <li>Check URL status to see last notification time</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            </main>
        </div>
    );
}
