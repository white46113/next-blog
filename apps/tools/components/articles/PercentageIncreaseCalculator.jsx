import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PercentageIncreaseCalculator() {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Whether you're tracking your portfolio's growth, negotiating a salary raise, or analyzing business revenue, understanding <strong>percentage increase</strong> is a vital skill. It allows you to measure growth relative to where you started, providing a clear picture of progress.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    In this guide, we will break down the percentage increase formula, show you exactly how to calculate it step-by-step, and provide real-world examples that you can apply today.
                </p>
            </div>

            {/* What is Percentage Increase */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">What is Percentage Increase?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    <strong>Percentage increase</strong> refers to the difference between a final value and an initial value, expressed as a percentage of the initial value. It answers the question: "How much has this number grown compared to where it started?"
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Unlike absolute change (which just gives you the difference in numbers), percentage increase gives you context. A $10 increase on a $20 item (50%) is much more significant than a $10 increase on a $1000 item (1%).
                </p>
            </div>

            {/* Formula */}
            <Card className="bg-secondary/20 border-l-4 border-l-primary">
                <CardHeader>
                    <CardTitle className="text-2xl">The Percentage Increase Formula</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-mono bg-background p-4 rounded-md text-center mb-4">
                        Percentage Increase = ((New Value - Original Value) / Original Value) × 100
                    </p>
                    <div className="space-y-2">
                        <p><strong>New Value:</strong> The value you have now.</p>
                        <p><strong>Original Value:</strong> The value you started with.</p>
                        <p><strong>Difference:</strong> The gap between the two.</p>
                    </div>
                </CardContent>
            </Card>

            {/* Step-by-Step Guide */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Step-by-Step Calculation Guide</h2>
                <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Scenario: Rent Increase</h3>
                    <p className="mb-2">Imagine your rent was <strong>$1,200</strong> last year, and this year it has gone up to <strong>$1,350</strong>.</p>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                        <li><strong>Find the Difference:</strong> $1350 - $1200 = $150</li>
                        <li><strong>Divide by Original:</strong> $150 / $1200 = 0.125</li>
                        <li><strong>Convert to %:</strong> 0.125 × 100 = 12.5%</li>
                    </ol>
                    <p className="mt-4 font-semibold">Result: Your rent increased by 12.5%.</p>
                </div>
            </div>

            <Separator />

            {/* Real-Life Examples */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Real-Life Examples</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Salary Negotiation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Old: $60k | New: $72k</p>
                            <p className="font-bold text-primary text-xl">20% Raise</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Stock Market</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Buy: $50 | Current: $85</p>
                            <p className="font-bold text-primary text-xl">70% Return</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Website Traffic</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-2">Last: 10k | This: 15k</p>
                            <p className="font-bold text-primary text-xl">50% Growth</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Internal Link */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-none">
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Track Your Health Goals</h3>
                        <p className="text-muted-foreground">
                            Just like tracking financial growth, tracking your body metrics is key to progress. See where you stand today.
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
                            <CardTitle className="text-lg">Can percentage increase be more than 100%?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Absolutely. If a value doubles, the increase is 100%. If it triples, the increase is 200%.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">What if the result is negative?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                If your calculation gives a negative number (e.g., -15%), it means the value has decreased by 15%.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">How do I calculate a 5% increase?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                To increase a number by 5%, multiply it by 1.05. Example: 100 × 1.05 = 105.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
