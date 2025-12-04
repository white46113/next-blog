"use client";

import "./polyfill";
import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Upload, FileText, Download, CheckCircle2, Settings } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import JSZip from "jszip";

// Configure PDF.js worker
if (typeof window !== "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
}

type ImageFormat = "png" | "jpeg" | "webp";

export default function PdfToImagePage() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [converting, setConverting] = useState(false);
    const [converted, setConverted] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [format, setFormat] = useState<ImageFormat>("png");
    const [quality, setQuality] = useState(90);
    const [scale, setScale] = useState(2);
    const [convertedImages, setConvertedImages] = useState<string[]>([]);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "PDF to Image Converter",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "Free online PDF to Image converter. Convert your PDF documents to PNG, JPEG, or WebP images instantly in your browser.",
        "featureList": [
            "Convert PDF to PNG, JPEG, or WebP",
            "Multi-page PDF support",
            "Adjustable quality and resolution",
            "Instant conversion in browser",
            "Privacy-focused - files never leave your device",
            "Download as ZIP for multi-page PDFs"
        ]
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setConverted(false);
            setConvertedImages([]);
            setErrorMessage(null);

            try {
                // Load PDF to get page count and preview
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                setPageCount(pdf.numPages);

                // Generate preview of first page
                const page = await pdf.getPage(1);
                const viewport = page.getViewport({ scale: 0.5 });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");

                if (context) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                    }).promise;

                    setPreviewUrl(canvas.toDataURL());
                }
            } catch (error) {
                console.error("Error loading PDF:", error);
                const errorMsg = error instanceof Error ? error.message : "Unknown error";
                setErrorMessage(`Error loading PDF: ${errorMsg}`);
                alert(`Error loading PDF: ${errorMsg}\n\nPlease make sure you selected a valid PDF file.`);
            }
        }
    };

    const handleConvert = async () => {
        if (!selectedFile) return;

        setConverting(true);

        try {
            const arrayBuffer = await selectedFile.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const images: string[] = [];

            // Convert each page
            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");

                if (context) {
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    await page.render({
                        canvasContext: context,
                        viewport: viewport,
                    }).promise;

                    // Convert to selected format
                    let mimeType = "image/png";
                    let qualityValue = 1;

                    if (format === "jpeg") {
                        mimeType = "image/jpeg";
                        qualityValue = quality / 100;
                    } else if (format === "webp") {
                        mimeType = "image/webp";
                        qualityValue = quality / 100;
                    }

                    const imageDataUrl = canvas.toDataURL(mimeType, qualityValue);
                    images.push(imageDataUrl);
                }
            }

            setConvertedImages(images);
            setConverted(true);

            // Auto-download if single page
            if (images.length === 1) {
                downloadImage(images[0], 0);
            }
        } catch (error) {
            console.error("Error converting PDF:", error);
            alert("Error converting PDF. Please try again.");
        } finally {
            setConverting(false);
        }
    };

    const downloadImage = (dataUrl: string, index: number) => {
        const link = document.createElement("a");
        const fileName = selectedFile?.name.replace(/\.pdf$/i, "") || "converted";
        link.download = `${fileName}_page_${index + 1}.${format}`;
        link.href = dataUrl;
        link.click();
    };

    const downloadAllAsZip = async () => {
        if (convertedImages.length === 0) return;

        try {
            const zip = new JSZip();
            const fileName = selectedFile?.name.replace(/\.pdf$/i, "") || "converted";

            // Add each image to zip
            for (let i = 0; i < convertedImages.length; i++) {
                const base64Data = convertedImages[i].split(",")[1];
                zip.file(`${fileName}_page_${i + 1}.${format}`, base64Data, { base64: true });
            }

            // Generate and download zip
            const blob = await zip.generateAsync({ type: "blob" });
            const link = document.createElement("a");
            link.download = `${fileName}_images.zip`;
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error("Error creating ZIP:", error);
            alert("Error creating ZIP file. Please try again.");
        }
    };

    const handleReset = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setConverted(false);
        setConverting(false);
        setConvertedImages([]);
        setPageCount(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
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
                    <h1 className="text-4xl font-bold tracking-tight mb-4">PDF to Image Converter</h1>
                    <p className="text-lg text-muted-foreground">
                        Convert your PDF documents to high-quality images. Support for PNG, JPEG, and WebP formats.
                    </p>
                </div>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Upload PDF</CardTitle>
                        <CardDescription>Select a PDF file to convert to images</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {!selectedFile ? (
                            <div className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary transition-colors cursor-pointer">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="application/pdf"
                                    onChange={handleFileSelect}
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <p className="text-lg font-medium mb-2">
                                        Click to upload or drag and drop
                                    </p>
                                    <p className="text-sm text-muted-foreground">PDF files (MAX. 50MB)</p>
                                </label>
                            </div>
                        ) : (
                            <>
                                {/* Preview */}
                                {previewUrl && (
                                    <div className="border rounded-lg p-4 bg-muted/30">
                                        <p className="text-sm font-medium mb-3">Preview (Page 1):</p>
                                        <div className="flex justify-center">
                                            <img
                                                src={previewUrl}
                                                alt="PDF Preview"
                                                className="max-h-64 rounded-lg shadow-md"
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* File Info */}
                                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <FileText className="h-8 w-8 text-primary" />
                                        <div>
                                            <p className="font-medium">{selectedFile.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB • {pageCount} {pageCount === 1 ? "page" : "pages"}
                                            </p>
                                        </div>
                                    </div>
                                    <Button onClick={handleReset} variant="ghost" size="sm">
                                        Remove
                                    </Button>
                                </div>

                                {/* Conversion Settings */}
                                {!converted && (
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg flex items-center gap-2">
                                                <Settings className="h-5 w-5" />
                                                Conversion Settings
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {/* Format Selection */}
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">Output Format</label>
                                                <div className="flex gap-2">
                                                    <Button
                                                        variant={format === "png" ? "default" : "outline"}
                                                        onClick={() => setFormat("png")}
                                                        className="flex-1"
                                                    >
                                                        PNG
                                                    </Button>
                                                    <Button
                                                        variant={format === "jpeg" ? "default" : "outline"}
                                                        onClick={() => setFormat("jpeg")}
                                                        className="flex-1"
                                                    >
                                                        JPEG
                                                    </Button>
                                                    <Button
                                                        variant={format === "webp" ? "default" : "outline"}
                                                        onClick={() => setFormat("webp")}
                                                        className="flex-1"
                                                    >
                                                        WebP
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Quality Slider (for JPEG/WebP) */}
                                            {(format === "jpeg" || format === "webp") && (
                                                <div>
                                                    <label className="text-sm font-medium mb-2 block">
                                                        Quality: {quality}%
                                                    </label>
                                                    <input
                                                        type="range"
                                                        min="1"
                                                        max="100"
                                                        value={quality}
                                                        onChange={(e) => setQuality(Number(e.target.value))}
                                                        className="w-full"
                                                    />
                                                </div>
                                            )}

                                            {/* Scale/Resolution */}
                                            <div>
                                                <label className="text-sm font-medium mb-2 block">
                                                    Resolution: {scale}x
                                                </label>
                                                <input
                                                    type="range"
                                                    min="1"
                                                    max="4"
                                                    step="0.5"
                                                    value={scale}
                                                    onChange={(e) => setScale(Number(e.target.value))}
                                                    className="w-full"
                                                />
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    Higher resolution = larger file size
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}

                                {/* Convert Button */}
                                {!converted ? (
                                    <Button
                                        onClick={handleConvert}
                                        disabled={converting}
                                        className="w-full"
                                        size="lg"
                                    >
                                        {converting ? (
                                            `Converting... (${pageCount} ${pageCount === 1 ? "page" : "pages"})`
                                        ) : (
                                            <>
                                                <Download className="mr-2 h-4 w-4" />
                                                Convert to {format.toUpperCase()}
                                            </>
                                        )}
                                    </Button>
                                ) : (
                                    <>
                                        {/* Success Message */}
                                        <div className="flex items-center justify-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg">
                                            <CheckCircle2 className="h-5 w-5" />
                                            <span className="font-medium">
                                                Successfully converted {convertedImages.length} {convertedImages.length === 1 ? "page" : "pages"}!
                                            </span>
                                        </div>

                                        {/* Download Options */}
                                        {convertedImages.length > 1 && (
                                            <div className="space-y-2">
                                                <Button
                                                    onClick={downloadAllAsZip}
                                                    className="w-full"
                                                    size="lg"
                                                >
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Download All as ZIP
                                                </Button>
                                                <div className="text-center text-sm text-muted-foreground">
                                                    or download individual pages below
                                                </div>
                                            </div>
                                        )}

                                        {/* Individual Page Downloads */}
                                        {convertedImages.length > 1 && (
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {convertedImages.map((img, index) => (
                                                    <div key={index} className="border rounded-lg p-2 hover:border-primary transition-colors">
                                                        <img
                                                            src={img}
                                                            alt={`Page ${index + 1}`}
                                                            className="w-full h-32 object-contain mb-2 rounded"
                                                        />
                                                        <Button
                                                            onClick={() => downloadImage(img, index)}
                                                            variant="outline"
                                                            size="sm"
                                                            className="w-full"
                                                        >
                                                            Page {index + 1}
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Convert Another */}
                                        <Button
                                            onClick={handleReset}
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Convert Another PDF
                                        </Button>
                                    </>
                                )}
                            </>
                        )}
                    </CardContent>
                </Card>

                {/* How it works */}
                <Card>
                    <CardHeader>
                        <h2 className="text-2xl font-bold">How it works</h2>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Upload your PDF</h3>
                                <p className="text-sm text-muted-foreground">Select the PDF file you want to convert</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Choose settings</h3>
                                <p className="text-sm text-muted-foreground">Select output format (PNG, JPEG, WebP), quality, and resolution</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Convert instantly</h3>
                                <p className="text-sm text-muted-foreground">All processing happens in your browser - your files never leave your device</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                                4
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Download images</h3>
                                <p className="text-sm text-muted-foreground">Download individual images or all pages as a ZIP file</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
