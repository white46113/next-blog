"use client";

import { useJsonEditorStore } from '@/store/jsonEditorStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, History, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonToolbar from './components/JsonToolbar';
import JsonEditorTabs from './components/JsonEditorTabs';
import RelatedTools from '@/components/RelatedTools';
import CrossAppLinks from '@/components/CrossAppLinks';

export default function JsonEditor() {
  const { recentFiles, loadFromRecent, deleteFromRecent, clearRecent } = useJsonEditorStore();

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JSON Editor Online",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Free online JSON editor with Monaco Editor, tree view, syntax highlighting, and real-time validation. Format, minify, and visualize JSON instantly.",
    featureList: [
      "Monaco Editor with IntelliSense",
      "Real-time JSON validation",
      "Interactive tree view",
      "Format and minify JSON",
      "Download and upload files",
      "Save recent files",
      "Dark/light theme support",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Monaco Editor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monaco Editor is the code editor that powers VS Code. It provides advanced features like IntelliSense, syntax highlighting, bracket matching, and error detection.",
        },
      },
      {
        "@type": "Question",
        name: "How do I validate JSON?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paste or type your JSON in the editor. The tool automatically validates it in real-time and shows errors with line numbers if the JSON is invalid.",
        },
      },
      {
        "@type": "Question",
        name: "Can I visualize JSON structure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Switch to Tree View to see an interactive, collapsible tree representation of your JSON data. You can expand/collapse nodes and copy values.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-4">
            <FileJson className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            JSON Editor Online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Edit JSON with Monaco Editor. Validate syntax, format code, visualize tree structure, and download files. VS Code-powered editing in your browser.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Main Editor Area */}
          <div className="lg:col-span-9 space-y-4">
            {/* Toolbar */}
            <JsonToolbar />

            {/* Editor/Tree View Tabs */}
            <JsonEditorTabs />
          </div>

          {/* Sidebar - Recent Files */}
          <div className="lg:col-span-3">
            <Card className="border-none shadow-xl sticky top-4">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <History className="h-5 w-5" />
                    Recent
                  </CardTitle>
                  {recentFiles.length > 0 && (
                    <Button size="sm" variant="ghost" onClick={clearRecent} title="Clear all">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <CardDescription>Last 10 files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {recentFiles.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-8">
                      No recent files yet. Edit JSON to save.
                    </p>
                  ) : (
                    recentFiles.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer group"
                        onClick={() => loadFromRecent(file.id)}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <FileJson className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium truncate">
                              {file.name}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {new Date(file.timestamp).toLocaleString()}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteFromRecent(file.id);
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="prose prose-gray dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Professional JSON Editor</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Edit JSON files with Monaco Editor, the same editor that powers Visual Studio Code. Features IntelliSense, syntax highlighting, bracket matching, and real-time validation. Switch between code and tree view for the best editing experience.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    "Monaco Editor (VS Code engine)",
                    "Real-time JSON validation with error messages",
                    "Interactive collapsible tree view",
                    "Format (beautify) and minify operations",
                    "Download and upload .json files",
                    "Save last 10 files locally",
                    "Dark and light theme support",
                    "Copy to clipboard with one click",
                    "100% free, privacy-focused (browser-only)"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">How to Use</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Start</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 list-decimal list-inside text-muted-foreground text-sm">
                      <li>Paste or type JSON in the Code View editor</li>
                      <li>See real-time validation errors (if any)</li>
                      <li>Click "Format" to beautify or "Minify" to compress</li>
                      <li>Switch to Tree View to visualize the structure</li>
                      <li>Expand/collapse nodes in the tree</li>
                      <li>Click "Download" to save as .json file</li>
                      <li>Use "Upload" to load an existing JSON file</li>
                    </ol>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Common Use Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Validate JSON API responses</li>
                      <li>• Format minified JSON for readability</li>
                      <li>• Visualize complex JSON structures</li>
                      <li>• Edit configuration files</li>
                      <li>• Debug JSON parsing errors</li>
                      <li>• Convert between formats</li>
                      <li>• Learn JSON structure visually</li>
                      <li>• Clean up malformed JSON</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-2">Everything you need to know about our JSON Editor</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                    What makes this different from other JSON editors?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    This editor uses Monaco Editor, the same engine that powers VS Code. You get professional features like IntelliSense, bracket matching, and advanced syntax highlighting. Plus, we offer both a code view and an interactive tree view for visualization.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                    Is my JSON data safe and private?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes! All processing happens entirely in your browser. Your JSON never leaves your device or gets sent to any server. Recent files are stored in your browser's local storage only.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                    How do I fix JSON validation errors?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    The editor shows error messages with line numbers. Common issues include missing commas, unclosed brackets, trailing commas, or unquoted keys. The error message will guide you to the exact location and type of error.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                    Can I use this for large JSON files?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Monaco Editor handles large files efficiently (up to several MB). For extremely large files (10MB+), you might experience slower performance due to browser limitations. The tree view is optimized with collapsible nodes to handle complex structures.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4 text-lg font-medium">
                    What's the difference between Code View and Tree View?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Code View shows raw JSON text with syntax highlighting, perfect for editing. Tree View displays JSON as an interactive, collapsible tree structure, ideal for visualizing and understanding complex nested data. You can copy individual values from tree nodes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Related Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RelatedTools currentPath="/tools/json-editor" category="Developer" />
            <CrossAppLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
