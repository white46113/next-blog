// Enhanced Percentage Calculator with SEO Content Sections
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Calculator, Percent, ArrowRight, TrendingUp, Divide } from "lucide-react";
import RelatedTools from "@/components/RelatedTools";
import RelatedArticles from "@/components/RelatedArticles";
import CrossAppLinks from "@/components/CrossAppLinks";

export default function PercentageCalculator() {
    const [xOfY, setXOfY] = useState({ x: "", y: "", result: "" });
    const [incDec, setIncDec] = useState({ from: "", to: "", result: "", type: "" });
    const [xIsWhatPercentOfY, setXIsWhatPercentOfY] = useState({ x: "", y: "", result: "" });

    const calculateXOfY = () => {
        const x = parseFloat(xOfY.x);
        const y = parseFloat(xOfY.y);
        if (!isNaN(x) && !isNaN(y)) {
            const res = (x / 100) * y;
            setXOfY({ ...xOfY, result: res.toString() });
        }
    };

    const calculateIncDec = () => {
        const from = parseFloat(incDec.from);
        const to = parseFloat(incDec.to);
        if (!isNaN(from) && !isNaN(to)) {
            const diff = to - from;
            const percent = (diff / from) * 100;
            setIncDec({ ...incDec, result: Math.abs(percent).toFixed(2) + "%", type: percent >= 0 ? "Increase" : "Decrease" });
        }
    };

    const calculateXIsWhatPercentOfY = () => {
        const x = parseFloat(xIsWhatPercentOfY.x);
        const y = parseFloat(xIsWhatPercentOfY.y);
        if (!isNaN(x) && !isNaN(y) && y !== 0) {
            const res = (x / y) * 100;
            setXIsWhatPercentOfY({ ...xIsWhatPercentOfY, result: res.toFixed(2) + "%" });
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Percentage Calculator",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        description: "Free online percentage calculator. Calculate percentages, percentage increase/decrease, and more instantly.",
        featureList: [
            "Calculate X% of Y",
            "Calculate Percentage Increase/Decrease",
            "Calculate X is what % of Y",
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is a Percentage Calculator?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "A Percentage Calculator helps you quickly compute percentages, percentage increase, percentage decrease, and values based on percentage formulas.",
                },
            },
            {
                "@type": "Question",
                name: "How do I calculate a percentage increase?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "To calculate percentage increase: Subtract the original value from the new value, divide the result by the original value, and multiply by 100.",
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
                        <Calculator className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        Percentage Calculator
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Fast & Accurate Online Percentage Finder. Calculate percentages, increases, decreases, and ratios instantly.
                    </p>
                </div>

                {/* Calculator UI */}
                <div className="grid lg:grid-cols-12 gap-8 mb-20">
                    <div className="lg:col-span-8 lg:col-start-3">
                        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Percent className="h-5 w-5 text-primary" /> Calculate Percentage
                                </CardTitle>
                                <CardDescription>Select the type of calculation you want to perform</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <Tabs defaultValue="x-of-y" className="w-full">
                                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto p-1 bg-muted/50">
                                        <TabsTrigger value="x-of-y" className="py-2.5">What is X% of Y?</TabsTrigger>
                                        <TabsTrigger value="inc-dec" className="py-2.5">% Increase/Decrease</TabsTrigger>
                                        <TabsTrigger value="x-is-what-of-y" className="py-2.5">X is what % of Y?</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="x-of-y" className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                                        <div className="flex flex-col md:flex-row items-center gap-4 justify-center p-6 bg-background/50 rounded-xl border border-border/50">
                                            <span className="text-lg font-medium text-muted-foreground">What is</span>
                                            <div className="relative w-32">
                                                <Input
                                                    type="number"
                                                    placeholder="X"
                                                    value={xOfY.x}
                                                    onChange={(e) => setXOfY({ ...xOfY, x: e.target.value })}
                                                    className="text-center text-lg h-12"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">%</span>
                                            </div>
                                            <span className="text-lg font-medium text-muted-foreground">of</span>
                                            <Input
                                                className="w-32 text-center text-lg h-12"
                                                type="number"
                                                placeholder="Y"
                                                value={xOfY.y}
                                                onChange={(e) => setXOfY({ ...xOfY, y: e.target.value })}
                                            />
                                            <Button size="lg" onClick={calculateXOfY} className="w-full md:w-auto min-w-[120px]">
                                                Calculate
                                            </Button>
                                        </div>
                                        {xOfY.result && (
                                            <div className="p-8 bg-primary/5 rounded-2xl text-center border-2 border-primary/10 animate-in zoom-in-95 duration-300">
                                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Result</p>
                                                <p className="text-5xl font-bold text-primary tracking-tight">{xOfY.result}</p>
                                            </div>
                                        )}
                                    </TabsContent>

                                    <TabsContent value="inc-dec" className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                                        <div className="flex flex-col md:flex-row items-center gap-4 justify-center p-6 bg-background/50 rounded-xl border border-border/50">
                                            <span className="text-lg font-medium text-muted-foreground">From</span>
                                            <Input
                                                className="w-32 text-center text-lg h-12"
                                                type="number"
                                                placeholder="Start"
                                                value={incDec.from}
                                                onChange={(e) => setIncDec({ ...incDec, from: e.target.value })}
                                            />
                                            <span className="text-lg font-medium text-muted-foreground">To</span>
                                            <Input
                                                className="w-32 text-center text-lg h-12"
                                                type="number"
                                                placeholder="End"
                                                value={incDec.to}
                                                onChange={(e) => setIncDec({ ...incDec, to: e.target.value })}
                                            />
                                            <Button size="lg" onClick={calculateIncDec} className="w-full md:w-auto min-w-[120px]">
                                                Calculate
                                            </Button>
                                        </div>
                                        {incDec.result && (
                                            <div className="p-8 bg-primary/5 rounded-2xl text-center border-2 border-primary/10 animate-in zoom-in-95 duration-300">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Result</p>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${incDec.type === 'Increase' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                        {incDec.type}
                                                    </span>
                                                </div>
                                                <p className="text-5xl font-bold text-primary tracking-tight">{incDec.result}</p>
                                            </div>
                                        )}
                                    </TabsContent>

                                    <TabsContent value="x-is-what-of-y" className="space-y-8 animate-in fade-in slide-in-from-bottom-2">
                                        <div className="flex flex-col md:flex-row items-center gap-4 justify-center p-6 bg-background/50 rounded-xl border border-border/50">
                                            <Input
                                                className="w-32 text-center text-lg h-12"
                                                type="number"
                                                placeholder="X"
                                                value={xIsWhatPercentOfY.x}
                                                onChange={(e) => setXIsWhatPercentOfY({ ...xIsWhatPercentOfY, x: e.target.value })}
                                            />
                                            <span className="text-lg font-medium text-muted-foreground">is what % of</span>
                                            <Input
                                                className="w-32 text-center text-lg h-12"
                                                type="number"
                                                placeholder="Y"
                                                value={xIsWhatPercentOfY.y}
                                                onChange={(e) => setXIsWhatPercentOfY({ ...xIsWhatPercentOfY, y: e.target.value })}
                                            />
                                            <Button size="lg" onClick={calculateXIsWhatPercentOfY} className="w-full md:w-auto min-w-[120px]">
                                                Calculate
                                            </Button>
                                        </div>
                                        {xIsWhatPercentOfY.result && (
                                            <div className="p-8 bg-primary/5 rounded-2xl text-center border-2 border-primary/10 animate-in zoom-in-95 duration-300">
                                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Result</p>
                                                <p className="text-5xl font-bold text-primary tracking-tight">{xIsWhatPercentOfY.result}</p>
                                            </div>
                                        )}
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* SEO Content */}
                <div className="max-w-4xl mx-auto space-y-16">
                    <section className="prose prose-gray dark:prose-invert max-w-none">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-6">What Is a Percentage Calculator?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A Percentage Calculator helps you solve percentage-based math problems instantly. Whether you're calculating discounts, tax, business growth, exam scores, or financial changes, this tool makes the process simple and error-free.
                                </p>
                            </div>
                            <div className="bg-muted/30 p-8 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Common Calculations</h3>
                                <ul className="space-y-3 list-none pl-0">
                                    {[
                                        "Discount percentage",
                                        "Percentage change",
                                        "Reverse percentage",
                                        "Percentage difference",
                                        "Profit/loss percentage"
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
                            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">How to Use & Features</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">How to Use</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                                            <li>Choose your calculation type from the tabs.</li>
                                            <li>Enter the numeric values in the input boxes.</li>
                                            <li>Click the calculate button.</li>
                                            <li>View your results instantly.</li>
                                        </ol>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Key Features</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                                            <li>• Instant results</li>
                                            <li>• Mobile friendly</li>
                                            <li>• 100% Free</li>
                                            <li>• No registration</li>
                                            <li>• Privacy focused</li>
                                            <li>• Accurate math</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-2">Common questions about percentage calculations</p>
                        </div>

                        <div className="max-w-3xl mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="q1" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">Is this percentage calculator free?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        Yes, you can use all features completely free. There are no hidden charges or limits.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="q2" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">Does this tool store my data?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        No, all calculations happen in your browser only. We do not store or transmit your input data.
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="q3" className="border rounded-lg px-4 bg-card">
                                    <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">What is percentage difference?</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        The percentage difference measures the relative change between two values. It shows how much a value has increased or decreased in relation to the starting value.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </section>

                    {/* Related Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <RelatedArticles currentSlug="percentage-calculator" />
                        <RelatedTools currentPath="/tools/percentage-calculator" category="Calculator" />
                        <CrossAppLinks />
                    </div>
                </div>
            </div>
        </div>
    );
}
