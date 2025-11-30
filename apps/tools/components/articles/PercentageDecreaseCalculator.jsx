import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PercentageDecreaseCalculator() {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    In a world of sales, discounts, and fluctuating markets, understanding <strong>percentage decrease</strong> is essential. Whether you are a shopper trying to figure out how much you'll save on a deal, or a business owner analyzing a drop in sales, knowing how to calculate the decline is key to making smart decisions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    This guide will explain exactly what percentage decrease is, provide the formula you need, and walk you through practical examples so you can calculate it with confidence.
                </p>
            </div>

            {/* What is Percentage Decrease */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">What is Percentage Decrease?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong>Percentage decrease</strong> measures the reduction in value of a variable, expressed as a percentage of its original value. It answers the question: "How much smaller is this number now compared to what it used to be?"
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Discounts:</strong> "20% off" means the price has decreased by 20%.</li>
                    <li><strong>Depreciation:</strong> How much value a car loses over time.</li>
                    <li><strong>Weight Loss:</strong> Tracking progress in a fitness journey.</li>
                    <li><strong>Business Metrics:</strong> Analyzing drops in revenue or customer retention.</li>
                </ul>
            </div>

            {/* Formula */}
            <Card className="bg-secondary/20 border-l-4 border-l-primary">
                <CardHeader>
                    <CardTitle className="text-2xl">The Percentage Decrease Formula</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-mono bg-background p-4 rounded-md text-center mb-4">
                        Percentage Decrease = ((Original Value - New Value) / Original Value) × 100
                    </p>
                    <div className="space-y-2">
                        <p><strong>Original Value:</strong> The starting number (must be larger).</p>
                        <p><strong>New Value:</strong> The ending number (must be smaller).</p>
                        <p><strong>Difference:</strong> The amount lost or reduced.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Step-by-Step Guide */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Step-by-Step Calculation Guide</h2>
                <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Scenario: Buying a Laptop on Sale</h3>
                    <p className="mb-2">A laptop was originally priced at <strong>$1,000</strong>, but it is now on sale for <strong>$800</strong>.</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li><strong>Find the Difference:</strong> $1000 - $800 = $200</li>
                        <li><strong>Divide by Original:</strong> $200 / $1000 = 0.20</li>
                        <li><strong>Convert to %:</strong> 0.20 × 100 = 20%</li>
                    </ol>
                    <p className="mt-4 font-semibold">Result: The laptop is 20% off.</p>
                </div>
            </div>

            <Separator />

            {/* Real-Life Examples */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Real-Life Examples</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Car Depreciation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Bought: $30k | Now: $24k</p>
                            <p className="font-bold text-primary text-xl">20% Value Loss</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Weight Loss</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Start: 200lbs | Now: 180lbs</p>
                            <p className="font-bold text-primary text-xl">10% Body Weight</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Energy Efficiency</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Old Bill: $150 | New: $90</p>
                            <p className="font-bold text-primary text-xl">40% Savings</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Internal Link */}
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-none">
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Health & Fitness Goals</h3>
                        <p className="text-muted-foreground">
                            Tracking weight loss? Don't forget to check your BMI to ensure you are in a healthy range.
                        </p>
                    </div>
                    <Link href="/tools/bmi-calculator">
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium transition-colors">
                            Calculate BMI
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
                            <CardTitle className="text-lg">How do I calculate a 20% decrease?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                To decrease a number by 20%, multiply it by 0.80 (since 100% - 20% = 80%). Example: 50 × 0.80 = 40.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">What is the difference between percentage decrease and percentage change?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Percentage decrease is a specific type of percentage change where the value goes down. Percentage change covers both increases and decreases.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Is a 50% decrease the same as dividing by 2?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Yes! Decreasing a number by 50% is exactly the same as cutting it in half.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
