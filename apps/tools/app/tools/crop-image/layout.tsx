import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Online Image Cropper - Crop Photos & Images Perfectly | WeebCoder Tools",
  description: "Crop images online for free with our powerful image cropper tool. Crop photos to any size, custom dimensions, or aspect ratio. Perfect for social media, websites, and profiles. No upload required - works in your browser.",
  keywords: [
    "crop image",
    "image cropper",
    "crop photo",
    "crop picture online",
    "free image crop tool",
    "resize and crop image",
    "photo cropper",
    "crop image to size",
    "custom crop dimensions",
    "aspect ratio crop",
    "square crop image",
    "crop for instagram",
    "crop for facebook",
    "crop for twitter",
    "online image editor",
    "crop jpg",
    "crop png",
    "crop webp",
    "browser image crop",
    "no upload crop tool",
  ],
  alternates: {
    canonical: "https://tools.weebcoder.com/tools/crop-image",
  },
  openGraph: {
    title: "Free Online Image Cropper - Crop Photos & Images Perfectly",
    description: "Crop images online for free with our powerful image cropper tool. Crop photos to any size, custom dimensions, or aspect ratio. Perfect for social media, websites, and profiles.",
    url: "https://tools.weebcoder.com/tools/crop-image",
    siteName: "WeebCoder Tools",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tools.weebcoder.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Image Cropper Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Image Cropper - Crop Photos & Images Perfectly",
    description: "Crop images online for free with our powerful image cropper tool. Crop photos to any size, custom dimensions, or aspect ratio.",
    images: ["https://tools.weebcoder.com/og-image.jpg"],
  },
};

export default function CropImageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
