"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

export default function LoanEMICalculator() {
    const [principal, setPrincipal] = useState(1000000);
    const [rate, setRate] = useState(10.5);
    const [tenure, setTenure] = useState(5); // in years

    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const p = parseFloat(principal);
        const r = parseFloat(rate) / 12 / 100;
        const n = parseFloat(tenure) * 12;

        if (p > 0 && r > 0 && n > 0) {
            const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            const totalPayment = emiValue * n;
            const interest = totalPayment - p;

            setEmi(Math.round(emiValue));
            setTotalInterest(Math.round(interest));
            setTotalAmount(Math.round(totalPayment));
        } else {
            setEmi(0);
            setTotalInterest(0);
            setTotalAmount(0);
        }
    }, [principal, rate, tenure]);

    const data = [
        { name: "Principal Amount", value: principal },
        { name: "Total Interest", value: totalInterest },
    ];

    const COLORS = ["#10b981", "#f59e0b"];

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Planning to take a loan? Use our <strong>Loan EMI Calculator</strong> to calculate your Equated Monthly Installment (EMI) instantly. Whether it's a home loan, car loan, or personal loan, knowing your EMI helps you plan your finances better.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs */}
                <Card>
                    <CardHeader>
                        <CardTitle>Loan Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="principal">Loan Amount</Label>
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-muted-foreground">₹</span>
                                <Input
                                    id="principal"
                                    type="number"
                                    value={principal}
                                    onChange={(e) => setPrincipal(Number(e.target.value))}
                                    className="pl-8"
                                />
                            </div>
                            <Slider
                                value={[principal]}
                                min={10000}
                                max={10000000}
                                step={10000}
                                onValueChange={(value) => setPrincipal(value[0])}
                                className="mt-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="rate">Interest Rate (%)</Label>
                            <Input
                                id="rate"
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                step="0.1"
                            />
                            <Slider
                                value={[rate]}
                                min={1}
                                max={30}
                                step={0.1}
                                onValueChange={(value) => setRate(value[0])}
                                className="mt-2"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                            <Input
                                id="tenure"
                                type="number"
                                value={tenure}
                                onChange={(e) => setTenure(Number(e.target.value))}
                            />
                            <Slider
                                value={[tenure]}
                                min={1}
                                max={30}
                                step={1}
                                onValueChange={(value) => setTenure(value[0])}
                                className="mt-2"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Results */}
                <Card className="bg-secondary/10 border-primary/20">
                    <CardHeader>
                        <CardTitle>Repayment Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center p-6 bg-background rounded-lg border shadow-sm">
                            <p className="text-muted-foreground mb-1">Monthly EMI</p>
                            <p className="text-4xl font-bold text-primary">{formatCurrency(emi)}</p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Principal Amount</span>
                                <span className="font-medium">{formatCurrency(principal)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Total Interest</span>
                                <span className="font-medium text-amber-500">+{formatCurrency(totalInterest)}</span>
                            </div>
                            <div className="pt-3 border-t flex justify-between font-bold">
                                <span>Total Amount Payable</span>
                                <span>{formatCurrency(totalAmount)}</span>
                            </div>
                        </div>

                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => formatCurrency(value)} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Information & SEO Content */}
            <div className="space-y-8 mt-12">
                {/* Benefits of Using EMI Calculator */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Benefits of Using Our EMI Calculator</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                                <h3 className="font-bold text-lg">Financial Planning</h3>
                                <p className="text-muted-foreground">
                                    Plan your monthly budget effectively by knowing exactly how much you need to set aside for loan repayment.
                                </p>
                            </div>
                            <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                                <h3 className="font-bold text-lg">Comparison Tool</h3>
                                <p className="text-muted-foreground">
                                    Compare different loan offers from various banks to choose the most affordable option.
                                </p>
                            </div>
                            <div className="space-y-2 p-4 bg-muted/30 rounded-lg">
                                <h3 className="font-bold text-lg">Time Saving</h3>
                                <p className="text-muted-foreground">
                                    Get instant results without manual calculations or visiting banks for preliminary estimates.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Types of Loans */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Types of Loans You Can Calculate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Home Loans</h3>
                                    <p className="text-muted-foreground">
                                        Calculate EMI for housing loans with varying interest rates and tenure options. Perfect for planning your dream home purchase.
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="font-medium">Typical Tenure:</span> 15-30 years
                                    </div>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Car Loans</h3>
                                    <p className="text-muted-foreground">
                                        Plan your vehicle purchase with accurate EMI calculations for auto loans from various financiers.
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="font-medium">Typical Tenure:</span> 3-7 years
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Personal Loans</h3>
                                    <p className="text-muted-foreground">
                                        Calculate EMIs for personal loans for weddings, education, medical expenses, or other personal needs.
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="font-medium">Typical Tenure:</span> 1-5 years
                                    </div>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h3 className="font-bold text-lg mb-2">Education Loans</h3>
                                    <p className="text-muted-foreground">
                                        Plan education financing with flexible repayment options including moratorium periods.
                                    </p>
                                    <div className="mt-3 text-sm">
                                        <span className="font-medium">Typical Tenure:</span> 5-15 years
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Tips & Strategies */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Smart Loan Management Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h3 className="font-bold text-lg">Reduce Your EMI Burden</h3>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li><strong>Increase Down Payment:</strong> Pay a higher initial amount to reduce principal and EMI</li>
                                    <li><strong>Opt for Shorter Tenure:</strong> Reduces total interest paid despite higher EMI</li>
                                    <li><strong>Improve Credit Score:</strong> Better scores qualify you for lower interest rates</li>
                                    <li><strong>Compare Lenders:</strong> Different banks offer varying rates and processing fees</li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="font-bold text-lg">When to Consider Prepayment</h3>
                                <p className="text-muted-foreground">
                                    Consider prepaying your loan if you have surplus funds. Early prepayment can significantly reduce total interest.
                                    Check prepayment charges with your lender and calculate potential savings using our calculator.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="font-bold">Q: What is EMI and how is it calculated?</h3>
                                <p className="text-muted-foreground">
                                    EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
                                    It includes both principal repayment and interest. Our calculator uses the standard EMI formula:
                                    EMI = P × r × (1+r)^n / ((1+r)^n - 1)
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">Q: Does the calculator include processing fees and other charges?</h3>
                                <p className="text-muted-foreground">
                                    This calculator shows only the EMI based on principal, interest rate, and tenure. Additional charges like processing fees,
                                    insurance, and GST are not included. Always check with your lender for complete cost breakdown.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">Q: How does changing tenure affect my loan?</h3>
                                <p className="text-muted-foreground">
                                    Longer tenure reduces monthly EMI but increases total interest paid. Shorter tenure increases EMI but reduces total interest.
                                    Use the slider to find the right balance between affordability and total cost.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">Q: Can I calculate EMI for floating interest rates?</h3>
                                <p className="text-muted-foreground">
                                    This calculator assumes a fixed interest rate for the entire tenure. For floating rates, the EMI may change periodically
                                    based on market conditions and RBI policies.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* SEO Rich Content */}
                <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold">Understanding Loan EMI: A Comprehensive Guide</h2>

                    <p>
                        Our <strong>Loan EMI Calculator</strong> is designed to help Indian borrowers make informed financial decisions.
                        Whether you're planning for a home in Mumbai, a car in Delhi, or education in Bangalore, understanding your EMI is crucial for financial stability.
                    </p>

                    <h3 className="text-xl font-bold mt-6">Why EMI Calculation Matters for Indian Borrowers</h3>

                    <p>
                        In today's economy, loans have become essential for achieving life goals. However, mismanaged debt can lead to financial stress.
                        Our calculator helps you:
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Budget Effectively:</strong> Allocate 40-50% of your monthly income to EMIs for comfortable repayment</li>
                        <li><strong>Plan Prepayments:</strong> Save lakhs in interest by planning early repayments</li>
                        <li><strong>Compare Options:</strong> Evaluate loan offers from SBI, HDFC, ICICI, and other banks</li>
                        <li><strong>Understand Breakup:</strong> See how much goes toward principal vs interest each month</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6">Important Factors Affecting Your EMI</h3>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border rounded-lg">
                            <h4 className="font-bold mb-2">Credit Score Impact</h4>
                            <p className="text-sm text-muted-foreground">
                                A CIBIL score above 750 can get you better interest rates, reducing your EMI by 5-10%.
                            </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h4 className="font-bold mb-2">RBI Rate Changes</h4>
                            <p className="text-sm text-muted-foreground">
                                Monitor RBI repo rate changes as they directly affect lending rates and your EMI.
                            </p>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-6">
                        <h3 className="font-bold text-lg mb-2">💡 Pro Tip</h3>
                        <p>
                            Always keep your EMI to income ratio below 50%. If your monthly income is ₹1,00,000, try to keep total EMIs under ₹50,000
                            for comfortable repayment without compromising lifestyle.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold mt-6">Tax Benefits on Loans</h3>

                    <p>
                        Certain loans offer tax benefits under Indian Income Tax Act:
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Home Loans:</strong> Deduction up to ₹2 lakh on interest under Section 24(b) and ₹1.5 lakh on principal under Section 80C</li>
                        <li><strong>Education Loans:</strong> Full interest deduction under Section 80E</li>
                        <li><strong>Loan for House Construction:</strong> Similar benefits as home loans with specific conditions</li>
                    </ul>

                    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">Ready to Apply for a Loan?</h3>
                        <p className="mb-4">
                            Now that you've calculated your potential EMI, here are the next steps:
                        </p>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Check your CIBIL score (should be 750+)</li>
                            <li>Gather necessary documents: Income proof, address proof, ID proof</li>
                            <li>Compare offers from at least 3 banks</li>
                            <li>Read all terms and conditions carefully</li>
                            <li>Consider processing fees, insurance, and other charges</li>
                        </ol>
                        <p className="mt-4 font-medium">
                            Remember: Never borrow more than you can repay. Use our EMI calculator regularly to plan your finances better!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
