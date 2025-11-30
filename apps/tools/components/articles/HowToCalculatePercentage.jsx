import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HowToCalculatePercentage() {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Percentages are everywhere. From calculating discounts during a sale to determining the tip at a restaurant, or analyzing financial growth in business, understanding <strong>how to calculate percentage</strong> is an essential life skill. Yet, for many, the concept can still feel a bit daunting.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    If you’ve ever found yourself asking, "What is the percentage of this number?" or "How do I calculate percentage increase?", you are in the right place. This ultimate guide will walk you through everything you need to know about percentages, including the basic formulas, real-life examples, and how to use online tools to make the process instant.
                </p>
            </div>

            {/* What is a Percentage */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">What is a Percentage?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    At its core, a <strong>percentage</strong> is a number or ratio expressed as a fraction of 100. The word comes from the Latin phrase <em>per centum</em>, which literally means "by the hundred." It is denoted using the percent sign, "<strong>%</strong>".
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Think of it this way: if you have 100 apples and 30 of them are red, then 30% of your apples are red. It’s a standardized way of comparing quantities, regardless of the total amount.
                </p>
            </div>

            {/* Basic Formula */}
            <Card className="bg-secondary/20 border-l-4 border-l-primary">
                <CardHeader>
                    <CardTitle className="text-2xl">The Basic Percentage Formula</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-xl font-mono bg-background p-4 rounded-md text-center mb-4">
                        Percentage = (Part / Whole) × 100
                    </p>
                    <div className="space-y-2">
                        <p><strong>Part:</strong> The portion of the whole you are focusing on.</p>
                        <p><strong>Whole:</strong> The total amount.</p>
                        <p><strong>100:</strong> The multiplier that converts the decimal into a percentage.</p>
                    </div>
                </CardContent>
            </Card>

            {/* How to Calculate Percentage of a Number */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">How to Calculate Percentage of a Number</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Often, you need to find a specific percentage of a total number. For instance, "What is 20% of 150?"
                </p>
                <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Real-Life Example: Calculating a Tip</h3>
                    <p className="mb-2">You are at a restaurant, and the bill is $80. You want to leave a 15% tip.</p>
                    <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li><strong>Percentage:</strong> 15% → 0.15</li>
                        <li><strong>Total:</strong> $80</li>
                        <li><strong>Calculation:</strong> 0.15 × 80 = 12</li>
                    </ol>
                    <p className="mt-4 font-semibold">You should leave a $12 tip.</p>
                </div>
            </div>

            <Separator />

            {/* Increase and Decrease */}
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Percentage Increase</h3>
                    <p className="text-muted-foreground mb-4">
                        Crucial for tracking growth, like salary raises or traffic stats.
                    </p>
                    <div className="bg-secondary/20 p-4 rounded-lg">
                        <p className="font-mono text-sm mb-2">((New - Old) / Old) × 100</p>
                        <p className="text-sm">
                            <strong>Example:</strong> Salary goes from $50k to $55k.<br />
                            ($5k / $50k) × 100 = <strong>10% raise</strong>.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4">Percentage Decrease</h3>
                    <p className="text-muted-foreground mb-4">
                        Used for calculating discounts and losses.
                    </p>
                    <div className="bg-secondary/20 p-4 rounded-lg">
                        <p className="font-mono text-sm mb-2">((Old - New) / Old) × 100</p>
                        <p className="text-sm">
                            <strong>Example:</strong> $200 jacket on sale for $150.<br />
                            ($50 / $200) × 100 = <strong>25% off</strong>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Internal Link */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-none">
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Check Your Health Metrics</h3>
                        <p className="text-muted-foreground">
                            Percentages are also used in health, like body fat percentage. While BMI isn't a percentage, it's a vital health metric.
                        </p>
                    </div>
                    <Link href="/tools/bmi-calculator">
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md font-medium transition-colors">
                            Try BMI Calculator
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
                            <CardTitle className="text-lg">How do I calculate a percentage between two numbers?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                To find the percentage of one number (X) in relation to another (Y), divide X by Y and multiply by 100. Formula: (X / Y) × 100.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">How do I take 20% off a price?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Multiply the original price by 0.80 (which represents the remaining 80%). Or calculate 20% and subtract it.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">How do I calculate percentage on a calculator?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Most calculators have a % button. To find 15% of 200: Type 200, press x, type 15, press %. The result 30 will appear.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
