"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileImage, Download } from "lucide-react";

export default function JpgToPdfPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [converting, setConverting] = useState(false);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleConvert = async () => {
        if (!selectedFile) return;

        setConverting(true);
        // Simulated conversion - in real app, use a library like jsPDF
        setTimeout(() => {
            setConverting(false);
            alert("Conversion complete! (This is a demo)");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                            T
                        </div>
                        <span className="font-bold text-xl tracking-tight">Tools</span>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            All Tools
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
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
                                    {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                                </p>
                                <p className="text-sm text-muted-foreground">JPG or JPEG (MAX. 10MB)</p>
                            </label>
                        </div>

                        {selectedFile && (
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
                                <Button onClick={() => setSelectedFile(null)} variant="ghost" size="sm">
                                    Remove
                                </Button>
                            </div>
                        )}

                        <Button
                            onClick={handleConvert}
                            disabled={!selectedFile || converting}
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
            </main>
        </div>
    );
}
