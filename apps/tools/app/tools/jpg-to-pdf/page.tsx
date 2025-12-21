"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileImage, Download, CheckCircle2 } from "lucide-react";
import { jsPDF } from "jspdf";
import RelatedTools from "@/components/RelatedTools";
import CrossAppLinks from "@/components/CrossAppLinks";

export default function JpgToPdfPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [converting, setConverting] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [converted, setConverted] = useState(false);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "JPG to PDF Converter",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online JPG to PDF converter. Convert your JPG images to PDF documents instantly in your browser.",
        "featureList": [
            "Convert JPG/JPEG to PDF",
            "Instant conversion in browser",
            "Privacy-focused - files never leave your device"
        ]
    };


    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setConverted(false);

            // Create preview
            const reader = new FileReader();
            reader.onload = (event) => {
                setPreviewUrl(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleConvert = async () => {
        if (!selectedFile || !previewUrl) return;

        setConverting(true);

        try {
            // Create a new image element
            const img = new Image();
            img.src = previewUrl;

            img.onload = () => {
                // Create PDF with appropriate dimensions
                const pdf = new jsPDF({
                    orientation: img.width > img.height ? 'landscape' : 'portrait',
                    unit: 'px',
                });

                // Get page dimensions
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();

                // Calculate scaling to fit image on page while maintaining aspect ratio
                const imgAspectRatio = img.width / img.height;
                const pageAspectRatio = pageWidth / pageHeight;

                let finalWidth, finalHeight;

                if (imgAspectRatio > pageAspectRatio) {
                    // Image is wider than page
                    finalWidth = pageWidth;
                    finalHeight = pageWidth / imgAspectRatio;
                } else {
                    // Image is taller than page
                    finalHeight = pageHeight;
                    finalWidth = pageHeight * imgAspectRatio;
                }

                // Center the image
                const x = (pageWidth - finalWidth) / 2;
                const y = (pageHeight - finalHeight) / 2;

                // Add image to PDF
                pdf.addImage(previewUrl, 'JPEG', x, y, finalWidth, finalHeight);

                // Generate filename
                const fileName = selectedFile.name.replace(/\.(jpg|jpeg)$/i, '.pdf');

                // Save the PDF
                pdf.save(fileName);

                setConverting(false);
                setConverted(true);
            };

            img.onerror = () => {
                setConverting(false);
                alert("Error loading image. Please try again.");
            };
        } catch (error) {
            setConverting(false);
            alert("Error converting image. Please try again.");
            console.error(error);
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setConverted(false);
        setConverting(false);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* JSON-LD Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Tools
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">JPG to PDF Converter</h1>
                    <p className="text-lg text-muted-foreground">
                        Convert your JPG images to PDF documents instantly. All processing happens in your browser.
                    </p>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Upload Image</CardTitle>
                        <CardDescription>Select a JPG image to convert to PDF</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {!selectedFile ? (
                            <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/jpeg,image/jpg"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <FileImage className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <p className="text-lg font-medium mb-2">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-sm text-muted-foreground">JPG or JPEG (MAX. 10MB)</p>
                                </label>
                            </div>
                        ) : (
                            <>
                                {/* Preview */}
                                {previewUrl && (
                                    <div className="border rounded-lg p-4 bg-muted/30">
                                        <p className="text-sm font-medium mb-3">Preview:</p>
                                        <div className="flex justify-center">
                                            <img
                                                src={previewUrl}
                                                alt="Preview"
                                                className="max-h-64 rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* File Info */}
                                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <FileImage className="h-8 w-8 text-primary" />
                                        <div>
                                            <p className="font-medium">{selectedFile.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={handleReset} variant="ghost" size="sm">
                                        Remove
                                    </Button>
                                </div>

                                {/* Convert Button */}
                                {converted ? (
                                    <div className="flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                                        <CheckCircle2 className="h-5 w-5" />
                                        <span className="font-medium">PDF downloaded successfully!</span>
                                    </div>
                                ) : (
                                    <Button
                                        onClick={handleConvert}
                                        disabled={converting}
                                        className="w-full"
                                        size="lg"
                                    >
                                        {converting ? (
                                            "Converting..."
                                        ) : (
                                            <>
                                                <Download className="mr-2 h-4 w-4" />
                                                Convert to PDF
                                            </>
                                        )}
                                    </Button>
                                )}

                                {/* Convert Another */}
                                {converted && (
                                    <Button
                                        onClick={handleReset}
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Convert Another Image
                                    </Button>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>How it works</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Upload your JPG image</h3>
                                <p className="text-sm text-muted-foreground">Select the image file from your device</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Convert instantly</h3>
                                <p className="text-sm text-muted-foreground">Processing happens in your browser - your file never leaves your device</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Download your PDF</h3>
                                <p className="text-sm text-muted-foreground">Get your converted PDF file immediately</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Related Tools */}
                <RelatedTools currentPath="/tools/jpg-to-pdf" category="Converter" />

                {/* Cross-App Links */}
                <CrossAppLinks />
            </main>
        </div>
    );
}
