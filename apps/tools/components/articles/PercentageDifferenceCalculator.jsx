import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PercentageDifferenceCalculator() {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    When comparing two numbers, it’s easy to get confused. Should you use percentage change? Or percentage difference?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    If you are tracking growth over time (like sales from 2023 to 2024), you want percentage <em>change</em>. But if you are comparing two separate things—like the price of a laptop at Store A vs. Store B—you need the <strong>percentage difference</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    In this guide, we’ll explain exactly what percentage difference is, give you the formula, and show you how to calculate it without getting a headache.
                </p>
            </div>

            {/* What is Percentage Difference */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">What is Percentage Difference?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong>Percentage difference</strong> is used when you want to compare two values, but neither is necessarily the "original" or "start" value. Instead of comparing one against the other, you compare the difference between them to their <strong>average</strong>.
                </p>
                <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Key Difference: Change vs. Difference</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Percentage Change:</strong> Used for values over time (Old vs. New). Can be positive or negative.</li>
                        <li><strong>Percentage Difference:</strong> Used for two static values (Item A vs. Item B). Always positive.</li>
                    </ul>
                </div>
            </div>

            {/* Formula */}
            <Card className="bg-secondary/20 border-l-4 border-l-primary">
                <CardHeader>
                    <CardTitle className="text-2xl">The Percentage Difference Formula</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-mono bg-background p-4 rounded-md text-center mb-4">
                        Percentage Difference = (|V1 - V2| / ((V1 + V2) / 2)) × 100
                    </p>
                    <div className="space-y-2">
                        <p><strong>Top Part:</strong> Absolute difference between the two numbers.</p>
                        <p><strong>Bottom Part:</strong> Average of the two numbers.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Step-by-Step Guide */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Step-by-Step Calculation Guide</h2>
                <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Scenario: Comparing Smartphone Prices</h3>
                    <p className="mb-2">Phone A: <strong>$800</strong> | Phone B: <strong>$900</strong></p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li><strong>Find Absolute Difference:</strong> |800 - 900| = 100</li>
                        <li><strong>Find Average:</strong> (800 + 900) / 2 = 850</li>
                        <li><strong>Divide Difference by Average:</strong> 100 / 850 = 0.1176</li>
                        <li><strong>Convert to %:</strong> 0.1176 × 100 = 11.76%</li>
                    </ol>
                    <p className="mt-4 font-semibold">Result: The percentage difference is 11.76%.</p>
                </div>
            </div>

            <Separator />

            {/* Real-Life Examples */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Real-Life Examples</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Comparing Salaries</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Offer A: $50k | Offer B: $55k</p>
                            <p className="font-bold text-primary text-xl">9.52% Difference</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Science Experiments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Test 1: 10.2g | Test 2: 10.4g</p>
                            <p className="font-bold text-primary text-xl">1.94% Difference</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Health Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Reading 1 vs Reading 2</p>
                            <p className="font-bold text-primary text-xl">Compare Consistency</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Internal Link */}
            <Card className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20 border-none">
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Health Comparisons</h3>
                        <p className="text-muted-foreground">
                            Comparing your health stats to averages? Use our BMI calculator to see where you fit in the healthy range.
                        </p>
                    </div>
                    <Link href="/tools/bmi-calculator">
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium transition-colors">
                            Check BMI
                        </button>
                    </Link>
                </CardContent>
            </Card>

            {/* FAQs */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Can percentage difference be negative?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                No. Because we use the absolute value of the difference, percentage difference is always positive.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">What if the two numbers are the same?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Then the difference is 0, and the percentage difference is 0%.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Why do we divide by the average?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Dividing by the average prevents bias. It provides a neutral baseline for comparison.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
