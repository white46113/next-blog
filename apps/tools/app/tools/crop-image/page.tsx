"use client";

import { useState, useRef } from "react";
import ReactCrop, { Crop, PixelCrop, centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Crop as CropIcon, Upload, Download, RotateCw, Square, Maximize2, Image as ImageIcon, X, Move } from "lucide-react";
import RelatedTools from "@/components/RelatedTools";
import CrossAppLinks from "@/components/CrossAppLinks";

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number | undefined
) {
  if (!aspect) {
    // Free-form crop - just center a box 80% of image size
    return centerCrop(
      {
        unit: "%",
        width: 80,
        height: 80,
      },
      mediaWidth,
      mediaHeight
    );
  }

  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 80,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function CropImagePage() {
  const [image, setImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect, setAspect] = useState<number | undefined>(undefined);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>("png");
  const [quality, setQuality] = useState<number>(95);
  const [showResult, setShowResult] = useState(false);
  const [scale, setScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);

  const imgRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Free Online Image Cropper",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Free online tool to crop images to any size, dimension, or aspect ratio. Perfect for social media images, profile pictures, and web graphics.",
    "featureList": [
      "Interactive drag-and-drop cropping with corner handles",
      "Resize crop area by dragging corners and edges",
      "Multiple aspect ratio presets (1:1, 16:9, 4:3, 3:2)",
      "Free-form cropping",
      "Zoom and rotate controls",
      "Multiple output formats (PNG, JPEG, WebP)",
      "Quality control for compressed formats",
      "Real-time preview",
      "No file upload to server - 100% client-side",
      "Support for JPG, PNG, WebP, and GIF images",
      "Mobile-friendly touch controls",
    ],
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setCroppedImage(null);
        setShowResult(false);
        setScale(1);
        setRotate(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, aspect));
  };

  const handleAspectChange = (value: string) => {
    const aspectRatios: { [key: string]: number | undefined } = {
      free: undefined,
      "1:1": 1,
      "16:9": 16 / 9,
      "9:16": 9 / 16,
      "4:3": 4 / 3,
      "3:2": 3 / 2,
    };
    const newAspect = aspectRatios[value];
    setAspect(newAspect);

    if (imgRef.current && newAspect) {
      const { width, height } = imgRef.current;
      setCrop(centerAspectCrop(width, height, newAspect));
    }
  };

  const getCroppedImg = async () => {
    if (!completedCrop || !imgRef.current) return;

    const image = imgRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height
    );

    return new Promise<string>((resolve) => {
      const mimeType = outputFormat === "jpg" ? "image/jpeg" : `image/${outputFormat}`;
      const qualityValue = outputFormat === "png" ? 1 : quality / 100;
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            throw new Error("Canvas is empty");
          }
          const fileUrl = URL.createObjectURL(blob);
          resolve(fileUrl);
        },
        mimeType,
        qualityValue
      );
    });
  };

  const handleCrop = async () => {
    try {
      const croppedImageUrl = await getCroppedImg();
      if (croppedImageUrl) {
        setCroppedImage(croppedImageUrl);
        setShowResult(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const downloadImage = () => {
    if (!croppedImage) return;

    const link = document.createElement("a");
    const extension = outputFormat === "jpg" ? "jpg" : outputFormat;
    const baseName = imageName.replace(/\.[^/.]+$/, "");
    link.download = `${baseName}-cropped.${extension}`;
    link.href = croppedImage;
    link.click();
  };

  const resetCrop = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current;
      setCrop(centerAspectCrop(width, height, aspect));
    }
    setScale(1);
    setRotate(0);
    setCroppedImage(null);
    setShowResult(false);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <CropIcon className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Free Online Image Cropper</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crop images by dragging corners and edges - just like a real photo editor.
              Resize, reposition, and get perfect crops every time.
            </p>
          </div>

          {/* Main Cropping Interface */}
          {!showResult ? (
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  {image ? "Drag Corners to Crop" : "Upload Your Image"}
                </CardTitle>
                <CardDescription>
                  {image
                    ? "Drag the corners and edges of the crop box to resize. Drag the center to move it. Perfect your crop then click 'Crop Image'."
                    : "Choose an image file to start cropping. All processing happens in your browser."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!image ? (
                  <div
                    className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:border-primary transition-colors bg-muted/10"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG, WebP, or GIF (max 10MB)</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Interactive Crop Area with Corner Dragging */}
                    <div className="relative rounded-lg overflow-hidden bg-black/5 p-4">
                      <div className="flex items-center justify-center">
                        <ReactCrop
                          crop={crop}
                          onChange={(c) => setCrop(c)}
                          onComplete={(c) => setCompletedCrop(c)}
                          aspect={aspect}
                          className="max-w-full"
                        >
                          <img
                            ref={imgRef}
                            src={image}
                            alt="Source"
                            onLoad={onImageLoad}
                            style={{
                              transform: `scale(${scale}) rotate(${rotate}deg)`,
                              maxHeight: "500px",
                              maxWidth: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </ReactCrop>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                        <Move className="h-3 w-3" />
                        Drag corners to resize
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label className="mb-2 block">Aspect Ratio</Label>
                        <div className="grid grid-cols-3 gap-2">
                          <Button
                            variant={aspect === undefined ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAspectChange("free")}
                            className="text-xs"
                          >
                            Free
                          </Button>
                          <Button
                            variant={aspect === 1 ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAspectChange("1:1")}
                            className="text-xs"
                          >
                            <Square className="h-3 w-3 mr-1" />
                            1:1
                          </Button>
                          <Button
                            variant={aspect === 16 / 9 ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAspectChange("16:9")}
                            className="text-xs"
                          >
                            16:9
                          </Button>
                          <Button
                            variant={aspect === 9 / 16 ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAspectChange("9:16")}
                            className="text-xs"
                          >
                            9:16
                          </Button>
                          <Button
                            variant={aspect === 4 / 3 ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAspectChange("4:3")}
                            className="text-xs"
                          >
                            4:3
                          </Button>
                          <Button
                            variant={aspect === 3 / 2 ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleAspectChange("3:2")}
                            className="text-xs"
                          >
                            3:2
                          </Button>
                        </div>
                      </div>

                      <div>
                        <Label>Zoom: {Math.round(scale * 100)}%</Label>
                        <Slider
                          value={[scale]}
                          onValueChange={(value) => setScale(value[0])}
                          min={0.5}
                          max={2}
                          step={0.1}
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label>Output Format</Label>
                        <Select value={outputFormat} onValueChange={setOutputFormat}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="png">PNG (Lossless)</SelectItem>
                            <SelectItem value="jpg">JPG (Compressed)</SelectItem>
                            <SelectItem value="webp">WebP (Modern)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {outputFormat !== "png" && (
                        <div>
                          <Label>Quality: {quality}%</Label>
                          <Slider
                            value={[quality]}
                            onValueChange={(value) => setQuality(value[0])}
                            min={1}
                            max={100}
                            step={1}
                            className="mt-2"
                          />
                        </div>
                      )}
                    </div>

                    {completedCrop && (
                      <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                        <strong>Crop Size:</strong> {Math.round(completedCrop.width)} × {Math.round(completedCrop.height)} pixels
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={handleCrop} className="flex-1" size="lg" disabled={!completedCrop}>
                        <CropIcon className="mr-2 h-4 w-4" />
                        Crop Image
                      </Button>
                      <Button onClick={resetCrop} variant="outline" size="lg">
                        <RotateCw className="mr-2 h-4 w-4" />
                        Reset
                      </Button>
                      <Button
                        onClick={() => {
                          setImage(null);
                          setCroppedImage(null);
                          setImageName("");
                          setShowResult(false);
                        }}
                        variant="outline"
                        size="lg"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        New Image
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            /* Result View */
            <Card className="mb-8 shadow-lg border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-green-600" />
                      Your Cropped Image
                    </CardTitle>
                    <CardDescription>
                      Perfect! Your image has been cropped. Download it below.
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowResult(false)}
                    className="shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 bg-muted/10 flex items-center justify-center">
                  {croppedImage && (
                    <img
                      src={croppedImage}
                      alt="Cropped result"
                      className="max-w-full h-auto max-h-[500px] rounded"
                    />
                  )}
                </div>
                <div className="flex gap-3">
                  <Button onClick={downloadImage} size="lg" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Download Image
                  </Button>
                  <Button onClick={() => setShowResult(false)} variant="outline" size="lg">
                    Adjust Crop
                  </Button>
                  <Button
                    onClick={() => {
                      setImage(null);
                      setCroppedImage(null);
                      setImageName("");
                      setShowResult(false);
                    }}
                    variant="outline"
                    size="lg"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    New Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* About Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About Our Free Image Cropper Tool</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p>
                Welcome to the most intuitive and user-friendly online image cropping tool available.
                Designed to work exactly like professional photo editors, our tool makes cropping images
                effortless with draggable corner handles. Whether you're preparing images for social media,
                creating profile pictures, designing website graphics, or simply need to trim unwanted
                portions from your photos, our free image cropper delivers professional results with
                zero learning curve.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Why Use Our Image Cropper?</h3>
              <p>
                In today's digital world, having the right image dimensions is crucial. Social media
                platforms, websites, and applications all have specific image size requirements. Our
                cropping tool eliminates the guesswork by offering preset aspect ratios for popular
                platforms while also giving you complete freedom with custom dimensions. Unlike many
                online tools that upload your images to remote servers, our cropper processes everything
                directly in your browser, ensuring your privacy and security remain intact.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Intuitive Corner Dragging Interface</h3>
              <p>
                We've designed this tool to feel familiar and professional. Just like desktop photo editors
                like Photoshop or GIMP, you can grab the corners of the crop box to resize it, drag the
                edges to adjust width or height, and drag the center to reposition the entire crop area.
                The interactive crop box lets you see exactly what your final image will look like before
                you commit. No more guessing with numbers and sliders - what you see is what you get.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Key Features That Set Us Apart</h3>
              <p>
                Our image cropper is packed with professional-grade features designed to give you
                precise control over your images. The aspect ratio presets include 1:1 for Instagram
                posts and profile pictures, 16:9 for YouTube thumbnails and widescreen displays, 9:16
                for Instagram Stories and TikTok videos, 4:3 for standard photography, and 3:2 for
                traditional photo prints. If these presets don't match your needs, you can easily
                switch to free-form cropping for complete creative control with independent width and
                height adjustment.
              </p>

              <p>
                The tool supports multiple output formats including PNG for lossless quality with
                transparency support, JPG for smaller file sizes perfect for web use, and WebP for
                the best compression ratios with modern browser support. You have complete control
                over the quality settings, allowing you to balance file size against image quality
                based on your specific needs. The zoom feature lets you scale your image for easier
                precise cropping of small details.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Perfect for Every Use Case</h3>
              <p>
                Social media managers will appreciate the preset aspect ratios that match platform
                requirements perfectly. Photographers can quickly crop images to standard print sizes
                or create custom crops that highlight the best parts of their compositions. Web
                developers can prepare images with exact pixel dimensions for responsive designs,
                ensuring optimal loading times and visual consistency. Content creators can create
                multiple versions of the same image for different platforms without switching between
                complex software applications.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Privacy and Security First</h3>
              <p>
                Your privacy matters to us. Unlike many online image tools, our cropper runs entirely
                in your web browser using HTML5 Canvas technology. This means your images are never
                uploaded to our servers or any third-party services. Everything happens locally on
                your device, ensuring your photos remain completely private and secure. This approach
                also makes the tool incredibly fast since there's no upload or download time involved.
                You can even use it offline once the page has loaded.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">How to Use the Image Cropper</h3>
              <p>
                Using our tool is straightforward and intuitive. Start by clicking the upload area
                or dragging and dropping your image file. The tool accepts all common image formats
                including JPG, PNG, WebP, and GIF. Once your image loads, you'll see it displayed
                with an interactive crop box overlay with visible corner handles.
              </p>

              <p>
                Grab any corner of the crop box and drag to resize it proportionally. Grab the edges
                to adjust just the width or height. Click and drag inside the crop box to move it
                around your image without changing its size. The crop box shows exactly what portion
                of your image will be kept.
              </p>

              <p>
                Select your desired aspect ratio by clicking one of the preset buttons, which will
                lock the crop box to that specific ratio. Choose "Free" for custom dimensions where
                you can resize independently in any direction. Use the zoom slider to scale your image
                up or down, making it easier to crop small details or fit larger images within view.
              </p>

              <p>
                Choose your output format based on your needs - PNG for graphics with transparency,
                JPG for photographs, or WebP for modern web applications. If you selected JPG or WebP,
                adjust the quality slider to find the perfect balance between file size and image
                quality. Once you're happy with your crop, click "Crop Image" to process your selection.
                Your cropped image appears immediately, ready for download with a single click.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Tips for Best Results</h3>
              <p>
                For social media images, always use the appropriate aspect ratio preset to ensure
                your images display correctly without unexpected cropping by the platform. When preparing
                images for web use, consider using WebP format for significantly smaller file sizes
                without noticeable quality loss - most modern browsers support it. If you need transparency
                in your final image, always choose PNG as your output format since JPG doesn't support
                transparent backgrounds.
              </p>

              <p>
                For print purposes, maintain higher quality settings (90-100%) to ensure crisp, clear
                results. When cropping portraits, pay attention to composition rules like the rule of
                thirds to create more visually appealing results. Use the zoom feature to scale your
                image for easier precise cropping. The reset button is your friend - use it to quickly
                try different cropping approaches without reloading your image.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Completely Free, No Limitations</h3>
              <p>
                Our image cropping tool is completely free to use with no hidden costs, subscription
                requirements, or usage limits. There's no watermark added to your cropped images, and
                you can crop as many images as you need. We believe professional-quality image editing
                tools should be accessible to everyone, whether you're a professional designer, a small
                business owner, or someone who occasionally needs to crop a photo.
              </p>

              <p>
                Start cropping your images today and experience the perfect combination of simplicity,
                power, and privacy. No registration required, no software to download - just upload
                your image and get professional results in seconds. The corner-dragging interface makes
                it feel natural and professional, while the advanced features give you precise control
                when you need it.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <Square className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Drag Corner Handles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grab corners to resize, edges to adjust width/height, and drag the center to move.
                  Full control just like desktop photo editors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Maximize2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Visual Crop Box</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  See exactly what you're cropping with the interactive overlay. No surprises -
                  the crop box shows your exact selection.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CropIcon className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Multiple Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Export in PNG, JPG, or WebP format with customizable quality settings. Perfect for
                  any use case from web to print.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Is this image cropper really free?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! Our tool is completely free with no hidden fees, watermarks, or limitations.
                  Crop as many images as you need.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Are my images uploaded to your servers?</h4>
                <p className="text-sm text-muted-foreground">
                  No. All image processing happens directly in your browser. Your images never leave
                  your device, ensuring complete privacy and security.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How do I resize the crop area?</h4>
                <p className="text-sm text-muted-foreground">
                  Simply drag the corners to resize proportionally, or drag the edges to adjust width
                  or height independently. Drag the center to move the entire crop box.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I crop images for Instagram or other social media?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We provide preset aspect ratios for popular platforms including 1:1 for
                  Instagram posts, 16:9 for YouTube, and 9:16 for Stories.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Does this work on mobile devices?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! The tool is fully responsive and supports touch gestures. Drag corners and edges
                  with your finger just like on desktop.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Related Tools */}
          <RelatedTools currentPath="/tools/crop-image" category="Converter" />

          {/* Cross App Links */}
          <CrossAppLinks />
        </div>
      </div>
    </>
  );
}
