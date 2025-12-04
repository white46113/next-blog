"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Calculator } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BmiCalculatorPage() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState("");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "BMI Calculator",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online BMI (Body Mass Index) calculator. Calculate your BMI instantly based on your height and weight.",
        "featureList": [
            "Calculate BMI from height and weight",
            "Instant results with category classification",
            "Privacy-focused - all calculations in browser"
        ]
    };


    const calculateBMI = () => {
        const weightNum = parseFloat(weight);
        const heightNum = parseFloat(height) / 100; // convert cm to m

        if (weightNum > 0 && heightNum > 0) {
            const bmiValue = weightNum / (heightNum * heightNum);
            setBmi(parseFloat(bmiValue.toFixed(1)));

            if (bmiValue < 18.5) {
                setCategory("Underweight");
            } else if (bmiValue < 25) {
                setCategory("Normal weight");
            } else if (bmiValue < 30) {
                setCategory("Overweight");
            } else {
                setCategory("Obese");
            }
        }
    };

    const getBmiColor = () => {
        if (!bmi) return "bg-muted";
        if (bmi < 18.5) return "bg-blue-500";
        if (bmi < 25) return "bg-green-500";
        if (bmi < 30) return "bg-yellow-500";
        return "bg-red-500";
    };

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Header */}


            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">BMI Calculator</h1>
                    <p className="text-lg text-muted-foreground">
                        Calculate your Body Mass Index (BMI) to assess your body weight relative to your height.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Enter Your Details</CardTitle>
                            <CardDescription>Input your weight and height</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <Input
                                    id="weight"
                                    type="number"
                                    placeholder="70"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="height">Height (cm)</Label>
                                <Input
                                    id="height"
                                    type="number"
                                    placeholder="175"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>

                            <Button onClick={calculateBMI} className="w-full" size="lg">
                                <Calculator className="mr-2 h-4 w-4" />
                                Calculate BMI
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Your Result</CardTitle>
                            <CardDescription>BMI calculation and category</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {bmi !== null ? (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getBmiColor()} text-white mb-4`}>
                                            <span className="text-4xl font-bold">{bmi}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{category}</h3>
                                        <p className="text-muted-foreground">Your BMI is {bmi}</p>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Underweight</span>
                                            <Badge variant="outline" className="bg-blue-500/10">{"< 18.5"}</Badge>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Normal weight</span>
                                            <Badge variant="outline" className="bg-green-500/10">18.5 - 24.9</Badge>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Overweight</span>
                                            <Badge variant="outline" className="bg-yellow-500/10">25 - 29.9</Badge>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span>Obese</span>
                                            <Badge variant="outline" className="bg-red-500/10">{"≥ 30"}</Badge>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12 text-muted-foreground">
                                    <Calculator className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                    <p>Enter your details and click calculate to see your BMI</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>About BMI</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                        <p>
                            Body Mass Index (BMI) is a measure of body fat based on height and weight. While BMI is a useful screening tool,
                            it doesn't directly measure body fat and may not be accurate for athletes, pregnant women, or elderly individuals.
                        </p>
                        <p className="text-sm text-muted-foreground mt-4">
                            <strong>Note:</strong> This calculator is for informational purposes only and should not replace professional medical advice.
                        </p>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
