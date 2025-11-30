import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function WhatIsPercentage() {
    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    You see them everywhere: on sale tags, in weather forecasts, on battery indicators, and in tax returns. But <strong>what is percentage</strong> exactly?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    At its simplest, a percentage is a way of expressing a number as a fraction of 100. It is a universal language for comparing quantities, measuring change, and understanding proportions. In this article, we’ll dive deep into the definition, explore the fascinating history behind the symbol, and look at how percentages shape our modern world.
                </p>
            </div>

            {/* Definition */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Definition: What Does "Percent" Mean?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    The word "percent" comes from the Latin phrase <strong>"per centum"</strong>, which literally translates to "by the hundred" or "for every hundred."
                </p>
                <div className="bg-muted p-6 rounded-lg">
                    <p className="mb-2">Mathematically, a percentage is a dimensionless number used to express a ratio.</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Symbol:</strong> %</li>
                        <li><strong>Example:</strong> 50% means 50 out of 100, or the fraction 50/100, or the decimal 0.50.</li>
                    </ul>
                </div>
            </div>

            {/* History */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">The History of Percentage</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold">Ancient Rome</h3>
                        <p className="text-muted-foreground">
                            Long before the decimal system existed, Ancient Roman computations were often made in fractions of 1/100. Emperor Augustus levied a tax known as <em>centesima rerum venalium</em>—a 1/100 tax on goods sold at auction.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Evolution of the Symbol (%)</h3>
                        <p className="text-muted-foreground">
                            The "%" symbol evolved from scribal abbreviations of the Italian term <em>per cento</em>. It started as "p 100", then "p cento", and eventually the "100" morphed into the two circles and slash we use today.
                        </p>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Uses in Daily Life */}
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Uses of Percentage in Daily Life</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Finance & Business</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Interest Rates (APY)</li>
                                <li>Discounts (40% OFF)</li>
                                <li>Taxes (Sales tax, Income tax)</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Health & Fitness</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Body Fat Percentage</li>
                                <li>Nutritional Labels (% Daily Value)</li>
                                <li>BMI (Body Mass Index)</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Technology</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Battery Life (15% remaining)</li>
                                <li>Download Progress (85% complete)</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Statistics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                <li>Election Results</li>
                                <li>Weather Forecasts (30% chance of rain)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Internal Link */}
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-none">
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-8 gap-6">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Understand Your Health Stats</h3>
                        <p className="text-muted-foreground">
                            Percentages help you understand nutrition and fitness. Use our BMI calculator to get a baseline for your health journey.
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
                            <CardTitle className="text-lg">Who invented the percentage symbol?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                It evolved over centuries. Italian mathematician Luca Pacioli (1494) is often credited with formalizing the use of percentages in commercial arithmetic.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Is percent the same as percentile?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                No. Percent is a portion of a whole. Percentile compares your score to others (e.g., being in the 80th percentile means you scored better than 80% of people).
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Can you have a percentage greater than 100?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Yes. If something grows beyond its original size, it exceeds 100%. For example, if revenue triples, it has grown by 200% and is now 300% of its original size.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
