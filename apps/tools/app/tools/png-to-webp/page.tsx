"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Upload, FileImage, Download, Zap, CheckCircle2 } from "lucide-react";

export default function PngToWebpPage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [converting, setConverting] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [quality, setQuality] = useState([85]);
    const [converted, setConverted] = useState(false);
    const [originalSize, setOriginalSize] = useState<number>(0);
    const [convertedSize, setConvertedSize] = useState<number>(0);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setOriginalSize(file.size);
            setConverted(false);
            setConvertedSize(0);

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
                // Create canvas
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                // Draw image on canvas
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('Could not get canvas context');
                }
                ctx.drawImage(img, 0, 0);

                // Convert to WebP blob
                canvas.toBlob(
                    (blob) => {
                        if (!blob) {
                            setConverting(false);
                            alert("Error converting image. Please try again.");
                            return;
                        }

                        setConvertedSize(blob.size);

                        // Create download link
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = selectedFile.name.replace(/\.png$/i, '.webp');
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);

                        setConverting(false);
                        setConverted(true);
                    },
                    'image/webp',
                    quality[0] / 100
                );
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
        setOriginalSize(0);
        setConvertedSize(0);
        setQuality([85]);
    };

    const formatFileSize = (bytes: number) => {
        return (bytes / 1024 / 1024).toFixed(2);
    };

    const calculateSavings = () => {
        if (originalSize === 0 || convertedSize === 0) return 0;
        return Math.round(((originalSize - convertedSize) / originalSize) * 100);
    };

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Tools
                    </Link>
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
                        {!selectedFile ? (
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
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-sm text-muted-foreground">PNG (MAX. 10MB)</p>
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
                                                {formatFileSize(selectedFile.size)} MB
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={handleReset} variant="ghost" size="sm">
                                        Remove
                                    </Button>
                                </div>

                                {/* Quality Slider */}
                                {!converted && (
                                    <div className="space-y-3 p-4 border rounded-lg">
                                        <div className="flex justify-between items-center">
                                            <Label htmlFor="quality-slider">Quality: {quality[0]}%</Label>
                                            <span className="text-xs text-muted-foreground">
                                                {quality[0] >= 90 ? 'High' : quality[0] >= 70 ? 'Medium' : 'Low'}
                                            </span>
                                        </div>
                                        <Slider
                                            id="quality-slider"
                                            min={1}
                                            max={100}
                                            step={1}
                                            value={quality}
                                            onValueChange={setQuality}
                                            className="w-full"
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            Higher quality = larger file size. 85% is recommended for most images.
                                        </p>
                                    </div>
                                )}

                                {/* Conversion Stats */}
                                {converted && convertedSize > 0 && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg space-y-2">
                                        <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium">
                                            <CheckCircle2 className="h-5 w-5" />
                                            <span>WebP downloaded successfully!</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Original</p>
                                                <p className="font-bold">{formatFileSize(originalSize)} MB</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Converted</p>
                                                <p className="font-bold">{formatFileSize(convertedSize)} MB</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Saved</p>
                                                <p className="font-bold text-green-600 dark:text-green-400">
                                                    {calculateSavings()}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Convert Button */}
                                {!converted && (
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
                                                <Zap className="mr-2 h-4 w-4" />
                                                Convert to WebP
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
