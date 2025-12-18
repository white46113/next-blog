"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, Copy, Check, Code2, Trash2, Clock, AlertCircle, History, Download, Upload, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface RequestConfig {
    method: string;
    url: string;
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    body: string;
}

interface ResponseData {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    body: string;
    time: number;
    error?: string;
}

interface SavedRequest {
    id: string;
    name: string;
    config: RequestConfig;
    timestamp: number;
}

export default function HttpRequestTester() {
    const [request, setRequest] = useState<RequestConfig>({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        headers: {
            "Content-Type": "application/json",
        },
        queryParams: {},
        body: "",
    });

    const [response, setResponse] = useState<ResponseData | null>(null);
    const [loading, setLoading] = useState(false);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [savedRequests, setSavedRequests] = useState<SavedRequest[]>([]);
    const [activeTab, setActiveTab] = useState("response");

    // Load saved requests from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("http-tester-requests");
        if (saved) {
            try {
                setSavedRequests(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load saved requests", e);
            }
        }
    }, []);

    // Save requests to localStorage
    const saveRequestToHistory = (config: RequestConfig) => {
        const newRequest: SavedRequest = {
            id: Date.now().toString(),
            name: `${config.method} ${new URL(config.url).pathname}`,
            config,
            timestamp: Date.now(),
        };
        const updated = [newRequest, ...savedRequests].slice(0, 20); // Keep last 20
        setSavedRequests(updated);
        localStorage.setItem("http-tester-requests", JSON.stringify(updated));
    };

    const loadRequest = (saved: SavedRequest) => {
        setRequest(saved.config);
        setResponse(null);
    };

    const deleteRequest = (id: string) => {
        const updated = savedRequests.filter(r => r.id !== id);
        setSavedRequests(updated);
        localStorage.setItem("http-tester-requests", JSON.stringify(updated));
    };

    const clearHistory = () => {
        setSavedRequests([]);
        localStorage.removeItem("http-tester-requests");
    };

    const sendRequest = async () => {
        setLoading(true);
        setResponse(null);
        const startTime = Date.now();

        try {
            // Build URL with query params
            const url = new URL(request.url);
            Object.entries(request.queryParams).forEach(([key, value]) => {
                if (key && value) url.searchParams.append(key, value);
            });

            // Prepare fetch options
            const options: RequestInit = {
                method: request.method,
                headers: request.headers,
            };

            // Add body for non-GET requests
            if (request.method !== "GET" && request.method !== "HEAD" && request.body) {
                options.body = request.body;
            }

            // Send request
            const res = await fetch(url.toString(), options);
            const endTime = Date.now();

            // Parse response headers
            const responseHeaders: Record<string, string> = {};
            res.headers.forEach((value, key) => {
                responseHeaders[key] = value;
            });

            // Parse response body
            const contentType = res.headers.get("content-type") || "";
            let body = "";

            if (contentType.includes("application/json")) {
                const json = await res.json();
                body = JSON.stringify(json, null, 2);
            } else {
                body = await res.text();
            }

            setResponse({
                status: res.status,
                statusText: res.statusText,
                headers: responseHeaders,
                body,
                time: endTime - startTime,
            });

            // Save to history
            saveRequestToHistory(request);
            setActiveTab("response");

        } catch (error: any) {
            const endTime = Date.now();
            setResponse({
                status: 0,
                statusText: "Error",
                headers: {},
                body: "",
                time: endTime - startTime,
                error: error.message || "Failed to send request. Check CORS or network connectivity.",
            });
            setActiveTab("response");
        } finally {
            setLoading(false);
        }
    };

    const updateHeader = (key: string, value: string, oldKey?: string) => {
        const newHeaders = { ...request.headers };
        if (oldKey && oldKey !== key) {
            delete newHeaders[oldKey];
        }
        if (key) {
            newHeaders[key] = value;
        }
        setRequest({ ...request, headers: newHeaders });
    };

    const addHeader = () => {
        const key = `Header-${Object.keys(request.headers).length + 1}`;
        const newHeaders = { ...request.headers, [key]: "" };
        setRequest({ ...request, headers: newHeaders });
    };

    const removeHeader = (key: string) => {
        const newHeaders = { ...request.headers };
        delete newHeaders[key];
        setRequest({ ...request, headers: newHeaders });
    };

    const updateQueryParam = (key: string, value: string, oldKey?: string) => {
        const newParams = { ...request.queryParams };
        if (oldKey && oldKey !== key) {
            delete newParams[oldKey];
        }
        if (key) {
            newParams[key] = value;
        }
        setRequest({ ...request, queryParams: newParams });
    };

    const addQueryParam = () => {
        const key = `param${Object.keys(request.queryParams).length + 1}`;
        const newParams = { ...request.queryParams, [key]: "" };
        setRequest({ ...request, queryParams: newParams });
    };

    const removeQueryParam = (key: string) => {
        const newParams = { ...request.queryParams };
        delete newParams[key];
        setRequest({ ...request, queryParams: newParams });
    };

    const generateCode = (language: string) => {
        // Handle invalid URLs gracefully
        let url: URL;
        let urlString = request.url;

        try {
            url = new URL(request.url);
            Object.entries(request.queryParams).forEach(([key, value]) => {
                if (key && value) url.searchParams.append(key, value);
            });
            urlString = url.toString();
        } catch (error) {
            // If URL is invalid, use it as-is
            urlString = request.url;
        }

        const headersStr = Object.entries(request.headers)
            .filter(([k, v]) => k && v)
            .map(([k, v]) => `"${k}": "${v}"`)
            .join(", ");

        switch (language) {
            case "curl":
                const headers = Object.entries(request.headers)
                    .filter(([k, v]) => k && v)
                    .map(([k, v]) => `-H "${k}: ${v}"`)
                    .join(" \\\n  ");

                if (request.method === "GET") {
                    return `curl -X GET "${urlString}" \\\n  ${headers}`;
                }
                return `curl -X ${request.method} "${urlString}" \\\n  ${headers} \\\n  -d '${request.body}'`;

            case "javascript":
                const fetchBody = request.method !== "GET" && request.body
                    ? `,\n  body: ${request.body}`
                    : "";
                return `fetch("${urlString}", {
  method: "${request.method}",
  headers: {${headersStr}}${fetchBody}
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`;

            case "python":
                const pythonBody = request.method !== "GET" && request.body
                    ? `,\n    data=${request.body}`
                    : "";
                return `import requests

headers = {${headersStr}}
response = requests.${request.method.toLowerCase()}("${urlString}", headers=headers${pythonBody})
print(response.json())`;

            case "nodejs":
                const axiosBody = request.method !== "GET" && request.body
                    ? `,\n  data: ${request.body}`
                    : "";
                return `const axios = require('axios');

axios({
  method: '${request.method.toLowerCase()}',
  url: '${urlString}',
  headers: {${headersStr}}${axiosBody}
})
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`;

            case "php":
                return `<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "${urlString}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${request.method}");
${request.body ? `curl_setopt($ch, CURLOPT_POSTFIELDS, '${request.body}');` : ""}
$response = curl_exec($ch);
curl_close($ch);
echo $response;
?>`;

            case "go":
                return `package main

import (
    "fmt"
    "net/http"
    "io/ioutil"
)

func main() {
    client := &http.Client{}
    req, _ := http.NewRequest("${request.method}", "${urlString}", nil)
    ${Object.entries(request.headers).filter(([k, v]) => k && v).map(([k, v]) => `req.Header.Add("${k}", "${v}")`).join("\n    ")}
    
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
    
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
}`;

            default:
                return "";
        }
    };

    const copyCode = (language: string) => {
        const code = generateCode(language);
        navigator.clipboard.writeText(code);
        setCopiedCode(language);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    const exportRequests = () => {
        const data = JSON.stringify(savedRequests, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `http-requests-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const importRequests = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target?.result as string);
                const updated = [...imported, ...savedRequests];
                setSavedRequests(updated);
                localStorage.setItem("http-tester-requests", JSON.stringify(updated));
            } catch (error) {
                alert("Failed to import requests");
            }
        };
        reader.readAsText(file);
    };

    const getStatusColor = (status: number) => {
        if (status >= 200 && status < 300) return "text-green-600 bg-green-500/10";
        if (status >= 300 && status < 400) return "text-blue-600 bg-blue-500/10";
        if (status >= 400 && status < 500) return "text-orange-600 bg-orange-500/10";
        if (status >= 500) return "text-red-600 bg-red-500/10";
        return "text-gray-600 bg-gray-500/10";
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "HTTP Request Tester",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Free online HTTP request tester and API debugging tool. Send real requests, view responses, and generate code.",
        featureList: [
            "Send real HTTP requests",
            "View response headers and body",
            "Measure response time",
            "Generate code in 6+ languages",
            "Save request history",
            "Export/import collections",
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do I test an API without Postman?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Use this free online HTTP request tester. Enter your API URL, select the method, add headers, and click Send. You'll see the real response instantly in your browser.",
                },
            },
            {
                "@type": "Question",
                name: "Can I test POST requests online?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Select POST method, enter your URL, add headers (like Content-Type: application/json), input your JSON body, and click Send to see the real API response.",
                },
            },
            {
                "@type": "Question",
                name: "Does this tool work with CORS-protected APIs?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Browser-based tools are subject to CORS restrictions. If you encounter CORS errors, the API needs to allow requests from this domain, or you can use the generated code in your backend/terminal.",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                {/* Header */}
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
                        <Send className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        HTTP Request Tester
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Test APIs instantly. Send real HTTP requests, view responses, and generate code in 6+ languages. No installation required.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 mb-12">
                    {/* Request Builder */}
                    <div className="lg:col-span-8 space-y-4">
                        <Card className="border-none shadow-xl">
                            <CardHeader>
                                <CardTitle>Request Builder</CardTitle>
                                <CardDescription>Configure and send your HTTP request</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {/* Method and URL */}
                                <div className="flex gap-2">
                                    <Select value={request.method} onValueChange={(value) => setRequest({ ...request, method: value })}>
                                        <SelectTrigger className="w-32">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="GET">GET</SelectItem>
                                            <SelectItem value="POST">POST</SelectItem>
                                            <SelectItem value="PUT">PUT</SelectItem>
                                            <SelectItem value="DELETE">DELETE</SelectItem>
                                            <SelectItem value="PATCH">PATCH</SelectItem>
                                            <SelectItem value="HEAD">HEAD</SelectItem>
                                            <SelectItem value="OPTIONS">OPTIONS</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input
                                        value={request.url}
                                        onChange={(e) => setRequest({ ...request, url: e.target.value })}
                                        placeholder="https://api.example.com/endpoint"
                                        className="flex-1"
                                    />
                                    <Button onClick={sendRequest} disabled={loading || !request.url} className="px-8">
                                        {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send</>}
                                    </Button>
                                </div>

                                <Tabs defaultValue="headers" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3">
                                        <TabsTrigger value="headers">Headers</TabsTrigger>
                                        <TabsTrigger value="params">Query Params</TabsTrigger>
                                        <TabsTrigger value="body">Body</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="headers" className="space-y-2 mt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <Label className="text-sm font-medium">Request Headers</Label>
                                            <Button size="sm" variant="outline" onClick={addHeader}>+ Add</Button>
                                        </div>
                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {Object.entries(request.headers).map(([key, value]) => (
                                                <div key={key} className="flex gap-2">
                                                    <Input
                                                        value={key}
                                                        onChange={(e) => updateHeader(e.target.value, value, key)}
                                                        placeholder="Header name"
                                                        className="text-sm"
                                                    />
                                                    <Input
                                                        value={value}
                                                        onChange={(e) => updateHeader(key, e.target.value)}
                                                        placeholder="Header value"
                                                        className="text-sm"
                                                    />
                                                    <Button size="sm" variant="ghost" onClick={() => removeHeader(key)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="params" className="space-y-2 mt-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <Label className="text-sm font-medium">Query Parameters</Label>
                                            <Button size="sm" variant="outline" onClick={addQueryParam}>+ Add</Button>
                                        </div>
                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {Object.entries(request.queryParams).map(([key, value]) => (
                                                <div key={key} className="flex gap-2">
                                                    <Input
                                                        value={key}
                                                        onChange={(e) => updateQueryParam(e.target.value, value, key)}
                                                        placeholder="Parameter name"
                                                        className="text-sm"
                                                    />
                                                    <Input
                                                        value={value}
                                                        onChange={(e) => updateQueryParam(key, e.target.value)}
                                                        placeholder="Parameter value"
                                                        className="text-sm"
                                                    />
                                                    <Button size="sm" variant="ghost" onClick={() => removeQueryParam(key)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="body" className="space-y-2 mt-4">
                                        <Label className="text-sm font-medium">Request Body</Label>
                                        <Textarea
                                            value={request.body}
                                            onChange={(e) => setRequest({ ...request, body: e.target.value })}
                                            placeholder='{"key": "value"}'
                                            className="font-mono text-sm min-h-40"
                                            disabled={request.method === "GET" || request.method === "HEAD"}
                                        />
                                        {(request.method === "GET" || request.method === "HEAD") && (
                                            <p className="text-xs text-muted-foreground">GET and HEAD requests cannot have a body</p>
                                        )}
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>

                        {/* Response Viewer */}
                        {response && (
                            <Card className="border-none shadow-xl bg-gradient-to-br from-card to-muted/20">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            Response
                                            {!response.error && (
                                                <Badge variant="secondary" className="text-xs font-normal">
                                                    {response.body.length} bytes
                                                </Badge>
                                            )}
                                        </CardTitle>
                                        <div className="flex items-center gap-2">
                                            <Badge className={`${getStatusColor(response.status)} font-semibold`}>
                                                {response.status} {response.statusText}
                                            </Badge>
                                            <Badge variant="outline" className="flex items-center gap-1 font-mono">
                                                <Clock className="h-3 w-3" />
                                                {response.time}ms
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {response.error ? (
                                        <Alert variant="destructive" className="border-2">
                                            <AlertCircle className="h-5 w-5" />
                                            <AlertDescription className="ml-2">
                                                <div className="space-y-2">
                                                    <p className="font-semibold text-base">Request Failed</p>
                                                    <p className="text-sm">{response.error}</p>
                                                    <div className="mt-3 p-3 bg-destructive/10 rounded-md text-xs space-y-1">
                                                        <p className="font-semibold">Common causes:</p>
                                                        <ul className="list-disc list-inside space-y-1 ml-2">
                                                            <li>CORS restrictions (API doesn't allow browser requests)</li>
                                                            <li>Network connectivity issues</li>
                                                            <li>Invalid or unreachable URL</li>
                                                            <li>Server errors or timeouts</li>
                                                        </ul>
                                                        <p className="mt-2 font-semibold">💡 Solution:</p>
                                                        <p>Use the generated code in your backend or terminal to bypass CORS.</p>
                                                    </div>
                                                </div>
                                            </AlertDescription>
                                        </Alert>
                                    ) : (
                                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                            <TabsList className="grid w-full grid-cols-2 mb-4">
                                                <TabsTrigger value="response" className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4" />
                                                    Response Body
                                                </TabsTrigger>
                                                <TabsTrigger value="headers" className="flex items-center gap-2">
                                                    <Code2 className="h-4 w-4" />
                                                    Headers ({Object.keys(response.headers).length})
                                                </TabsTrigger>
                                            </TabsList>

                                            <TabsContent value="response" className="mt-0 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <Label className="text-sm font-medium text-muted-foreground">
                                                        {response.body.trim().startsWith('{') || response.body.trim().startsWith('[')
                                                            ? 'JSON Response'
                                                            : 'Response Content'}
                                                    </Label>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => {
                                                            navigator.clipboard.writeText(response.body);
                                                            setCopiedCode('response-body');
                                                            setTimeout(() => setCopiedCode(null), 2000);
                                                        }}
                                                    >
                                                        {copiedCode === 'response-body' ? (
                                                            <><Check className="h-3 w-3 mr-1" /> Copied</>
                                                        ) : (
                                                            <><Copy className="h-3 w-3 mr-1" /> Copy</>
                                                        )}
                                                    </Button>
                                                </div>
                                                <div className="relative group">
                                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                                    <div className="relative bg-slate-950 dark:bg-slate-900 rounded-lg p-4 max-h-[500px] overflow-auto border border-slate-800">
                                                        <pre className="text-xs font-mono text-slate-100 whitespace-pre-wrap leading-relaxed">
                                                            {response.body || <span className="text-slate-500 italic">Empty response</span>}
                                                        </pre>
                                                    </div>
                                                </div>
                                            </TabsContent>

                                            <TabsContent value="headers" className="mt-0 space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <Label className="text-sm font-medium text-muted-foreground">
                                                        Response Headers
                                                    </Label>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => {
                                                            const headersText = Object.entries(response.headers)
                                                                .map(([k, v]) => `${k}: ${v}`)
                                                                .join('\n');
                                                            navigator.clipboard.writeText(headersText);
                                                            setCopiedCode('response-headers');
                                                            setTimeout(() => setCopiedCode(null), 2000);
                                                        }}
                                                    >
                                                        {copiedCode === 'response-headers' ? (
                                                            <><Check className="h-3 w-3 mr-1" /> Copied</>
                                                        ) : (
                                                            <><Copy className="h-3 w-3 mr-1" /> Copy</>
                                                        )}
                                                    </Button>
                                                </div>
                                                <div className="space-y-2">
                                                    {Object.entries(response.headers).map(([key, value]) => (
                                                        <div
                                                            key={key}
                                                            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors border border-transparent hover:border-primary/20"
                                                        >
                                                            <div className="flex-shrink-0 w-1/3">
                                                                <span className="text-xs font-semibold text-primary break-all">
                                                                    {key}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <span className="text-xs font-mono text-muted-foreground break-all">
                                                                    {value}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar - History */}
                    <div className="lg:col-span-4 space-y-4">
                        <Card className="border-none shadow-xl">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <History className="h-5 w-5" />
                                        History
                                    </CardTitle>
                                    <div className="flex gap-1">
                                        <Button size="sm" variant="ghost" onClick={exportRequests} title="Export">
                                            <Download className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="ghost" onClick={() => document.getElementById("import-file")?.click()} title="Import">
                                            <Upload className="h-4 w-4" />
                                        </Button>
                                        <input
                                            id="import-file"
                                            type="file"
                                            accept=".json"
                                            onChange={importRequests}
                                            className="hidden"
                                        />
                                        <Button size="sm" variant="ghost" onClick={clearHistory} title="Clear all">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <CardDescription>Recent requests (last 20)</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 max-h-96 overflow-y-auto">
                                    {savedRequests.length === 0 ? (
                                        <p className="text-sm text-muted-foreground text-center py-8">
                                            No saved requests yet. Send a request to see it here.
                                        </p>
                                    ) : (
                                        savedRequests.map((saved) => (
                                            <div
                                                key={saved.id}
                                                className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer group"
                                                onClick={() => loadRequest(saved)}
                                            >
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="outline" className="text-xs">
                                                            {saved.config.method}
                                                        </Badge>
                                                        <span className="text-sm font-medium truncate">
                                                            {saved.name}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground truncate">
                                                        {new Date(saved.timestamp).toLocaleString()}
                                                    </p>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="opacity-0 group-hover:opacity-100"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        deleteRequest(saved.id);
                                                    }}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Code Generator */}
                <Card className="border-none shadow-xl mb-12">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code2 className="h-5 w-5" />
                            Code Generator
                        </CardTitle>
                        <CardDescription>Copy code to use in your application</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="curl">
                            <TabsList className="grid w-full grid-cols-6">
                                <TabsTrigger value="curl">cURL</TabsTrigger>
                                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                <TabsTrigger value="python">Python</TabsTrigger>
                                <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                                <TabsTrigger value="php">PHP</TabsTrigger>
                                <TabsTrigger value="go">Go</TabsTrigger>
                            </TabsList>

                            {["curl", "javascript", "python", "nodejs", "php", "go"].map((lang) => (
                                <TabsContent key={lang} value={lang} className="mt-4">
                                    <div className="relative">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute top-2 right-2 z-10"
                                            onClick={() => copyCode(lang)}
                                        >
                                            {copiedCode === lang ? (
                                                <><Check className="h-4 w-4 mr-2" /> Copied!</>
                                            ) : (
                                                <><Copy className="h-4 w-4 mr-2" /> Copy</>
                                            )}
                                        </Button>
                                        <div className="bg-muted/50 rounded-lg p-4 pr-24 overflow-x-auto">
                                            <pre className="text-xs font-mono whitespace-pre">
                                                {generateCode(lang)}
                                            </pre>
                                        </div>
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </CardContent>
                </Card>

                {/* SEO Content */}
                <div className="max-w-4xl mx-auto space-y-12">
                    <section className="prose prose-gray dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-4">Free Online API Tester</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Test REST APIs instantly without installing Postman or any other software. Send real HTTP requests, view responses with headers and timing, and generate code in 6+ programming languages. Perfect for quick API testing and debugging.
                                </p>
                            </div>
                            <div className="bg-muted/30 p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                                <ul className="space-y-2 list-none pl-0">
                                    {[
                                        "Send real HTTP requests (GET, POST, PUT, DELETE, etc.)",
                                        "View response body, headers, and timing",
                                        "Save request history (last 20 requests)",
                                        "Generate code in cURL, Python, JavaScript, PHP, Go, Node.js",
                                        "Export/import request collections",
                                        "100% free, no registration required",
                                        "Privacy-focused (all data stored locally)"
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">How to Use</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Quick Start</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ol className="space-y-3 list-decimal list-inside text-muted-foreground text-sm">
                                            <li>Select HTTP method (GET, POST, PUT, DELETE, etc.)</li>
                                            <li>Enter your API endpoint URL</li>
                                            <li>Add headers if needed (e.g., Authorization, Content-Type)</li>
                                            <li>Add query parameters or request body</li>
                                            <li>Click "Send" to execute the request</li>
                                            <li>View response body, headers, and timing</li>
                                            <li>Copy generated code in your preferred language</li>
                                        </ol>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Common Use Cases</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-muted-foreground text-sm">
                                            <li>• Testing REST APIs during development</li>
                                            <li>• Debugging API endpoints</li>
                                            <li>• Learning how APIs work</li>
                                            <li>• Generating code snippets for documentation</li>
                                            <li>• Testing authentication flows</li>
                                            <li>• Inspecting API responses</li>
                                            <li>• Quick API prototyping</li>
                                            <li>• Sharing API requests with team members</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-2">Everything you need to know about our HTTP Request Tester</p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Is this a Postman alternative?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes! This is a free, browser-based alternative to Postman for quick API testing. While it doesn't have all of Postman's advanced features, it's perfect for simple API testing, debugging, and generating code snippets without installing any software.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Does this actually send real HTTP requests?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes! This tool sends real HTTP requests from your browser to the API endpoint you specify. You'll see actual responses including status codes, headers, body content, and response timing.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Why am I getting CORS errors?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        CORS (Cross-Origin Resource Sharing) is a browser security feature. If the API doesn't allow requests from this domain, you'll see a CORS error. Solutions: 1) Use the generated code in your backend/terminal, 2) Ask the API owner to enable CORS, or 3) Use a CORS proxy for testing (not recommended for production).
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Is my data stored on your servers?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        No! All data is stored locally in your browser using localStorage. Your API keys, requests, and responses never leave your device. We don't have any servers collecting your data.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-5" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Can I save and share my requests?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes! Your last 20 requests are automatically saved in your browser. You can export your request collection as a JSON file and share it with team members, who can then import it into their browser.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-6" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        What programming languages are supported for code generation?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        We support code generation in 6 languages: cURL (command line), JavaScript (fetch API), Python (requests library), Node.js (axios), PHP (cURL), and Go (net/http). Simply configure your request and copy the code in your preferred language.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-7" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                                        Is this tool completely free?
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes! This HTTP request tester is 100% free with no limits, no registration required, and no hidden fees. Use it as much as you want for testing and debugging your APIs.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
