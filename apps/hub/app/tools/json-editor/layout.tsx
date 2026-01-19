import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Editor Online - Monaco Editor with Tree View | Free JSON Validator",
  description: "Free online JSON editor with Monaco Editor (VS Code), tree view, real-time validation, format/minify, and download. Edit, validate, and visualize JSON instantly in your browser.",
  keywords: [
    "json editor",
    "monaco editor",
    "json validator",
    "json formatter",
    "json minifier",
    "json tree view",
    "online json editor",
    "vs code json",
    "json beautifier",
    "json viewer",
  ],
  alternates: {
    canonical: "https://tools.weebcoder.com/tools/json-editor",
  },
  openGraph: {
    title: "JSON Editor Online - Monaco Editor with Tree View | Free JSON Validator",
    description: "Free online JSON editor with Monaco Editor (VS Code), tree view, real-time validation, format/minify, and download. Edit and visualize JSON instantly.",
    url: "https://tools.weebcoder.com/tools/json-editor",
    type: "website",
    siteName: "WeebCoder Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Editor Online - Monaco Editor with Tree View",
    description: "Free online JSON editor with Monaco Editor, tree view, real-time validation, and formatting tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JsonEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
