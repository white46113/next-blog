"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { QrCode, Download, Link as LinkIcon, Type, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function QrCodeGenerator() {
    const [text, setText] = useState("");
    const qrRef = useRef<HTMLDivElement>(null);

    const downloadQRCode = () => {
        const canvas = qrRef.current?.querySelector("canvas");
        if (canvas) {
            const url = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.href = url;
            a.download = "qrcode.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "QR Code Generator",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description:
            "Free online QR Code Generator. Create QR codes for URLs, text, and more instantly.",
        featureList: [
            "Generate QR Code from text or URL",
            "Download QR Code as PNG",
            "Instant generation",
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How do I generate a QR code?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply enter your text or URL into the input field, and the QR code will be generated instantly.",
                },
            },
            {
                "@type": "Question",
                name: "Is this QR code generator free?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this tool is 100% free to use with no limits.",
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

                {/* Header */}
                <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
                        <QrCode className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        QR Code Generator
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Create custom QR codes for your links, text, contact details, and more.
                        <br className="hidden md:block" />
                        Download instantly in high-quality PNG.
                    </p>
                </div>

                {/* Main Tool Area */}
                <div className="grid lg:grid-cols-12 gap-8 mb-20">
                    {/* Input Section */}
                    <div className="lg:col-span-7 space-y-6">
                        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Content Type</CardTitle>
                                <CardDescription>Choose what kind of content you want to encode</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="url" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 mb-8">
                                        <TabsTrigger value="url" className="flex items-center gap-2">
                                            <LinkIcon className="h-4 w-4" /> URL
                                        </TabsTrigger>
                                        <TabsTrigger value="text" className="flex items-center gap-2">
                                            <Type className="h-4 w-4" /> Text
                                        </TabsTrigger>
                                    </TabsList>

                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <Label htmlFor="content" className="text-base font-medium">
                                                Enter Content
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="content"
                                                    placeholder="https://example.com"
                                                    value={text}
                                                    onChange={(e) => setText(e.target.value)}
                                                    className="h-14 text-lg px-4 shadow-sm border-muted-foreground/20 focus-visible:ring-primary"
                                                />
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                                    {text ? <FileText className="h-5 w-5 text-primary" /> : <LinkIcon className="h-5 w-5" />}
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground">
                                                Your QR code will be generated automatically as you type.
                                            </p>
                                        </div>
                                    </div>
                                </Tabs>
                            </CardContent>
                        </Card>

                        {/* Features List (Desktop) */}
                        <div className="hidden lg:grid grid-cols-2 gap-4">
                            {[
                                { title: "Instant", desc: "Generated in real-time" },
                                { title: "Privacy", desc: "Processed in browser" },
                                { title: "High Quality", desc: "Sharp PNG download" },
                                { title: "Free", desc: "No limits or fees" }
                            ].map((feature) => (
                                <Card key={feature.title} className="bg-muted/50 border-none">
                                    <CardContent className="p-4 flex flex-col items-center text-center">
                                        <span className="font-semibold text-primary">{feature.title}</span>
                                        <span className="text-sm text-muted-foreground">{feature.desc}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-24">
                            <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-primary/5 to-background">
                                <CardHeader className="text-center pb-2">
                                    <CardTitle>Preview</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col items-center p-8 space-y-8">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                        <div className="relative bg-white p-6 rounded-xl shadow-sm border" ref={qrRef}>
                                            {text ? (
                                                <QRCodeCanvas
                                                    value={text}
                                                    size={240}
                                                    level="H"
                                                    includeMargin={true}
                                                    className="w-full h-full"
                                                />
                                            ) : (
                                                <div className="w-[240px] h-[240px] flex flex-col items-center justify-center text-muted-foreground/30 bg-muted/10 rounded-lg border-2 border-dashed border-muted-foreground/10">
                                                    <QrCode className="h-24 w-24 mb-4" />
                                                    <span className="text-sm font-medium text-muted-foreground/50">Enter text to generate</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <Button
                                        className="w-full h-12 text-lg font-medium shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 hover:-translate-y-0.5"
                                        disabled={!text}
                                        onClick={downloadQRCode}
                                        size="lg"
                                    >
                                        <Download className="mr-2 h-5 w-5" /> Download PNG
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* SEO Content Section */}
                <div className="max-w-4xl mx-auto space-y-16">
                    <section className="prose prose-gray dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-6">What Is a QR Code Generator?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A QR Code Generator converts your text, links, contact details, or any other information into a scannable QR code. When scanned with a smartphone camera, the QR code instantly opens or displays the encoded information.
                                </p>
                            </div>
                            <div className="bg-muted/30 p-8 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Why use our tool?</h3>
                                <ul className="space-y-3 list-none pl-0">
                                    {[
                                        "Instant QR code creation",
                                        "Works for URLs, text, phone numbers",
                                        "High-resolution PNG downloads",
                                        "No watermark and completely free",
                                        "Mobile-friendly interface"
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">How to Use & Popular Uses</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">How to Create</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                                            <li>Enter your desired text or URL into the input field.</li>
                                            <li>Your QR code appears instantly in the preview box.</li>
                                            <li>Click the download button to save your QR code as a PNG image.</li>
                                        </ol>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Popular Uses</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                                            <li>• Restaurant menus</li>
                                            <li>• Business cards</li>
                                            <li>• Event tickets</li>
                                            <li>• Product packaging</li>
                                            <li>• Marketing posters</li>
                                            <li>• Payment links</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-2">Everything you need to know about our QR Code Generator</p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="item-1" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">Are the QR codes permanent?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes. Once downloaded, the QR code works forever. It is a static QR code that directly encodes your data.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-2" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">Is this tool free to use?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes, it is completely free with no limits. You can generate as many QR codes as you want.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-3" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">Can I use QR codes for commercial purposes?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Absolutely. The generated QR codes can be used anywhere legally, including for business and commercial use.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="item-4" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">Do you store my data?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        No. Everything is processed in your browser only. Your data is never sent to our servers.
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
