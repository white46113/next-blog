"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function GstVatCalculator() {
    const [amount, setAmount] = useState(1000);
    const [taxRate, setTaxRate] = useState(18);
    const [mode, setMode] = useState("exclusive"); // exclusive (add tax) or inclusive (remove tax)

    const [netAmount, setNetAmount] = useState(0);
    const [taxAmount, setTaxAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const val = parseFloat(amount);
        const rate = parseFloat(taxRate);

        if (!isNaN(val) && !isNaN(rate)) {
            if (mode === "exclusive") {
                // Add GST: Amount is Net, calculate Tax and Total
                const tax = (val * rate) / 100;
                const total = val + tax;
                setNetAmount(val);
                setTaxAmount(tax);
                setTotalAmount(total);
            } else {
                // Remove GST: Amount is Total, calculate Net and Tax
                const net = (val * 100) / (100 + rate);
                const tax = val - net;
                setNetAmount(net);
                setTaxAmount(tax);
                setTotalAmount(val);
            }
        } else {
            setNetAmount(0);
            setTaxAmount(0);
            setTotalAmount(0);
        }
    }, [amount, taxRate, mode]);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 2,
        }).format(value);
    };

    const commonRates = [5, 12, 18, 28];

    return (
        <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Calculate GST (Goods and Services Tax) or VAT (Value Added Tax) easily. Use this tool to either <strong>add tax</strong> to a net amount or <strong>remove tax</strong> from a total amount to find the original value.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>GST / VAT Calculator</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="exclusive" onValueChange={setMode} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="exclusive">Add GST (Exclusive)</TabsTrigger>
                            <TabsTrigger value="inclusive">Remove GST (Inclusive)</TabsTrigger>
                        </TabsList>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="amount">
                                        {mode === "exclusive" ? "Net Amount (without Tax)" : "Total Amount (with Tax)"}
                                    </Label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-2.5 text-muted-foreground">₹</span>
                                        <Input
                                            id="amount"
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="pl-8"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="taxRate">Tax Rate (%)</Label>
                                    <Input
                                        id="taxRate"
                                        type="number"
                                        value={taxRate}
                                        onChange={(e) => setTaxRate(e.target.value)}
                                    />
                                    <div className="flex gap-2 mt-2">
                                        {commonRates.map((r) => (
                                            <Button
                                                key={r}
                                                variant={taxRate == r ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => setTaxRate(r)}
                                                className="flex-1"
                                            >
                                                {r}%
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-secondary/10 rounded-lg p-6 space-y-4 border border-primary/10">
                                <h3 className="font-semibold text-lg mb-4">Calculation Result</h3>

                                <div className="flex justify-between items-center p-3 bg-background rounded border">
                                    <span className="text-muted-foreground">Net Amount</span>
                                    <span className="font-mono font-medium">{formatCurrency(netAmount)}</span>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-background rounded border">
                                    <span className="text-muted-foreground">GST / Tax Amount ({taxRate}%)</span>
                                    <span className="font-mono font-medium text-amber-500">+{formatCurrency(taxAmount)}</span>
                                </div>

                                <div className="flex justify-between items-center p-4 bg-primary/5 rounded border border-primary/20">
                                    <span className="font-bold text-lg">Total Amount</span>
                                    <span className="font-mono font-bold text-xl text-primary">{formatCurrency(totalAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </CardContent>
            </Card>

            {/* Additional Information & SEO Content */}
            <div className="space-y-8 mt-12">
                {/* Common GST Slabs in India */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">GST Slabs in India (2024)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-3 px-4 font-semibold">GST Rate</th>
                                        <th className="text-left py-3 px-4 font-semibold">Category</th>
                                        <th className="text-left py-3 px-4 font-semibold">Common Items</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="py-3 px-4 font-medium">0% (Nil Rate)</td>
                                        <td className="py-3 px-4">Essential Goods</td>
                                        <td className="py-3 px-4">Fresh fruits, vegetables, milk, bread, salt, grains</td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="py-3 px-4 font-medium">5%</td>
                                        <td className="py-3 px-4">Common Use Items</td>
                                        <td className="py-3 px-4">Tea, coffee, edible oil, medicines, footwear below ₹1000</td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="py-3 px-4 font-medium">12%</td>
                                        <td className="py-3 px-4">Standard Goods</td>
                                        <td className="py-3 px-4">Butter, cheese, mobiles, processed foods, business class air tickets</td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="py-3 px-4 font-medium">18%</td>
                                        <td className="py-3 px-4">Majority of Goods & Services</td>
                                        <td className="py-3 px-4">Hair oil, toothpaste, capital goods, financial services, restaurants</td>
                                    </tr>
                                    <tr className="border-b hover:bg-muted/50">
                                        <td className="py-3 px-4 font-medium">28%</td>
                                        <td className="py-3 px-4">Luxury & Demerit Goods</td>
                                        <td className="py-3 px-4">Automobiles, ACs, cement, cigarettes, luxury hotels</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>

                {/* When to Use Each Mode */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">When to Use Add vs Remove GST</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 border rounded-lg bg-green-50 dark:bg-green-900/20">
                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                    <span className="mr-2">➕</span> Add GST (Exclusive Mode)
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Vendors/Sellers:</strong> Calculating final price for customers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Business Quotes:</strong> Preparing invoices with tax breakup</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Price Lists:</strong> Creating MRP labels with tax included</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Export Documentation:</strong> Calculating tax for domestic sales</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                    <span className="mr-2">➖</span> Remove GST (Inclusive Mode)
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Consumers/Buyers:</strong> Finding actual product cost</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Expense Analysis:</strong> Separating tax from total expense</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Accounting:</strong> Recording net amount in books</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">✓</span>
                                        <span><strong>Tax Filing:</strong> Calculating input tax credit (ITC)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* GST vs VAT Comparison */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">GST vs VAT: Key Differences</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-3 px-4 font-semibold">Aspect</th>
                                            <th className="text-left py-3 px-4 font-semibold">GST (Goods & Services Tax)</th>
                                            <th className="text-left py-3 px-4 font-semibold">VAT (Value Added Tax)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">Applicability</td>
                                            <td className="py-3 px-4">Both goods and services</td>
                                            <td className="py-3 px-4">Only on goods</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">Tax Structure</td>
                                            <td className="py-3 px-4">Dual (CGST, SGST, IGST)</td>
                                            <td className="py-3 px-4">Single point taxation</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">Cascading Effect</td>
                                            <td className="py-3 px-4">Eliminated through ITC</td>
                                            <td className="py-3 px-4">Present in many cases</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">Compliance</td>
                                            <td className="py-3 px-4">Online filing, unified returns</td>
                                            <td className="py-3 px-4">State-wise variations</td>
                                        </tr>
                                        <tr className="border-b hover:bg-muted/50">
                                            <td className="py-3 px-4 font-medium">Threshold Limit</td>
                                            <td className="py-3 px-4">₹20 lakhs (₹10 lakhs for special states)</td>
                                            <td className="py-3 px-4">Varies by state (₹5-₹10 lakhs)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                <strong>Note:</strong> GST replaced VAT in India from July 1, 2017. However, VAT is still applicable in many countries worldwide.
                            </p>
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
                                <h3 className="font-bold">Q: What is the difference between CGST, SGST, and IGST?</h3>
                                <div className="text-muted-foreground space-y-2">
                                    <p><strong>CGST (Central GST):</strong> Collected by Central Government on intra-state sales</p>
                                    <p><strong>SGST (State GST):</strong> Collected by State Government on intra-state sales</p>
                                    <p><strong>IGST (Integrated GST):</strong> Collected by Central Government on inter-state sales</p>
                                    <p className="text-sm mt-2">For 18% GST in Maharashtra: 9% CGST + 9% SGST. For Delhi to Maharashtra: 18% IGST</p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">Q: How to calculate GST for multiple items with different rates?</h3>
                                <p className="text-muted-foreground">
                                    Calculate tax for each item separately using its applicable rate, then sum up all taxes.
                                    Use our calculator multiple times for different rates or use a spreadsheet for bulk calculations.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">Q: Is GST applicable on exports and imports?</h3>
                                <p className="text-muted-foreground">
                                    <strong>Exports:</strong> Zero-rated (0% GST), eligible for Input Tax Credit refund<br />
                                    <strong>Imports:</strong> IGST is levied, treated as inter-state supply. Customs duty + IGST applicable.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold">Q: What is Input Tax Credit (ITC) in GST?</h3>
                                <p className="text-muted-foreground">
                                    ITC allows businesses to reduce tax paid on inputs from tax payable on outputs.
                                    If you paid ₹1,000 GST on purchases and collected ₹2,000 GST on sales, you pay only ₹1,000 (₹2,000 - ₹1,000) to government.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* GST Calculation Examples */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Real-World GST Calculation Examples</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-bold mb-3">Example 1: Restaurant Bill Calculation</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Food Bill (excluding tax)</span>
                                        <span>₹1,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>GST @ 5% (restaurant service)</span>
                                        <span>₹50</span>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t">
                                        <span>Total Payable</span>
                                        <span>₹1,050</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <h4 className="font-bold mb-3">Example 2: Mobile Phone Purchase</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Mobile Price (excluding tax)</span>
                                        <span>₹20,000</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>GST @ 18% (electronics)</span>
                                        <span>₹3,600</span>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t">
                                        <span>MRP (Maximum Retail Price)</span>
                                        <span>₹23,600</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 border rounded-lg">
                                <h4 className="font-bold mb-3">Example 3: Finding Original Price</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Total Bill Paid (including GST)</span>
                                        <span>₹11,800</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>GST @ 18% (already included)</span>
                                        <span>₹1,800</span>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t">
                                        <span>Actual Product Value</span>
                                        <span>₹10,000</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">
                                        Use "Remove GST" mode when you know total amount but need original price
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* SEO Rich Content */}
                <div className="space-y-6 prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold">Complete Guide to GST Calculation in India</h2>

                    <p>
                        Our <strong>GST/VAT Calculator</strong> simplifies tax calculations for businesses, accountants, and consumers across India.
                        Whether you're a small business owner in Gujarat, a trader in Tamil Nadu, or a consumer in Uttar Pradesh,
                        understanding GST calculations is essential for compliance and financial planning.
                    </p>

                    <h3 className="text-xl font-bold mt-6">Why Accurate GST Calculation Matters</h3>

                    <p>
                        GST miscalculations can lead to:
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Penalties:</strong> Up to 100% of tax amount for deliberate evasion</li>
                        <li><strong>Cash Flow Issues:</strong> Overpayment or underpayment affecting business operations</li>
                        <li><strong>Legal Complications:</strong> Notices from GST department for incorrect filing</li>
                        <li><strong>Loss of ITC:</strong> Incorrect Input Tax Credit claims leading to financial loss</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6">GST Compliance Timeline for Businesses</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-3 px-4 font-semibold">Frequency</th>
                                    <th className="text-left py-3 px-4 font-semibold">Return Type</th>
                                    <th className="text-left py-3 px-4 font-semibold">Due Date</th>
                                    <th className="text-left py-3 px-4 font-semibold">Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-muted/50">
                                    <td className="py-3 px-4 font-medium">Monthly</td>
                                    <td className="py-3 px-4">GSTR-3B</td>
                                    <td className="py-3 px-4">20th of next month</td>
                                    <td className="py-3 px-4">Summary return with tax payment</td>
                                </tr>
                                <tr className="border-b hover:bg-muted/50">
                                    <td className="py-3 px-4 font-medium">Monthly/Quarterly</td>
                                    <td className="py-3 px-4">GSTR-1</td>
                                    <td className="py-3 px-4">11th of next month</td>
                                    <td className="py-3 px-4">Outward supplies details</td>
                                </tr>
                                <tr className="border-b hover:bg-muted/50">
                                    <td className="py-3 px-4 font-medium">Annually</td>
                                    <td className="py-3 px-4">GSTR-9</td>
                                    <td className="py-3 px-4">31st December</td>
                                    <td className="py-3 px-4">Annual return</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold mt-6">Tips for Efficient GST Management</h3>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 border rounded-lg">
                            <h4 className="font-bold mb-2">For Businesses</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Maintain proper tax invoices with HSN codes</li>
                                <li>Reconcile GSTR-2A/2B monthly</li>
                                <li>Use accounting software with GST compliance</li>
                                <li>Claim ITC within prescribed time limits</li>
                            </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h4 className="font-bold mb-2">For Consumers</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                <li>Always ask for GST invoice for purchases above ₹200</li>
                                <li>Check GST rate on items before purchase</li>
                                <li>Verify HSN code on expensive purchases</li>
                                <li>Use our calculator to verify bill accuracy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mt-6">
                        <h3 className="font-bold text-lg mb-2">⚠️ Important Reminder</h3>
                        <p>
                            GST rates may change based on GST Council recommendations. Always verify current rates on
                            <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer" className="mx-1 font-bold">
                                official GST portal
                            </a>
                            before final calculations. This calculator is for estimation purposes only.
                        </p>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg">
                        <h3 className="text-2xl font-bold mb-4">GST Calculation Checklist</h3>
                        <p className="mb-4">
                            Before finalizing any GST calculation, ensure you have:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        <span>Correct HSN/SAC code for item/service</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        <span>Proper invoice format with GSTIN</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        <span>Place of supply determined</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        <span>Time of supply identified</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        <span>Reverse charge mechanism considered</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-2">✓</span>
                                        <span>Exemptions and special rates checked</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-4 font-medium">
                            Bookmark this GST calculator for quick access during billing, purchasing, or accounting tasks!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
