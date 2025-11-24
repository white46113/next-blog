"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileImage, Download, Zap } from "lucide-react";

export default function PngToWebpPage() {
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
        // Simulated conversion
        setTimeout(() => {
            setConverting(false);
            alert("Conversion complete! (This is a demo)");
        }, 1500);
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
                    <h1 className="text-4xl font-bold tracking-tight mb-4">PNG to WebP Converter</h1>
                    <p className="text-lg text-muted-foreground">
                        Convert PNG images to modern WebP format for better compression and faster loading times.
                    </p>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Upload Image</CardTitle>
                        <CardDescription>Select a PNG image to convert to WebP</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                            <input
                                type="file"
                                accept="image/png"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="file-upload"
                            />
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <FileImage className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                <p className="text-lg font-medium mb-2">
                                    {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                                </p>
                                <p className="text-sm text-muted-foreground">PNG (MAX. 10MB)</p>
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
                                    <Zap className="mr-2 h-4 w-4" />
                                    Convert to WebP
                                </>
                            )}
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Why WebP?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-muted rounded-lg">
                                <h3 className="font-semibold mb-2">🎯 Better Compression</h3>
                                <p className="text-sm text-muted-foreground">Up to 30% smaller file size compared to PNG</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg">
                                <h3 className="font-semibold mb-2">⚡ Faster Loading</h3>
                                <p className="text-sm text-muted-foreground">Smaller files mean faster page loads</p>
                            </div>
                            <div className="p-4 bg-muted rounded-lg">
                                <h3 className="font-semibold mb-2">✨ Modern Format</h3>
                                <p className="text-sm text-muted-foreground">Supported by all modern browsers</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
