import { FileJson } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import JsonEditorClient from './JsonEditorClient';

export default function JsonEditorPage() {
  // JSON-LD Schema - SERVER RENDERED
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
      {/* SERVER-RENDERED SCHEMA - Google sees this immediately */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* SERVER-RENDERED HEADER - Google sees this immediately */}
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

        {/* SERVER-RENDERED SEO CONTENT - Google sees this immediately */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <section className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold tracking-tight">Online JSON Editor &amp; Validator</h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              A powerful online JSON editor built with Monaco Editor, the same code editor that powers Visual Studio Code.
              Edit, validate, format, and visualize JSON data directly in your browser with professional-grade features
              including syntax highlighting, real-time error detection, IntelliSense, and bracket matching. Perfect for
              developers working with API responses, configuration files, or any JSON data structure.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              This free JSON tool offers both a code view for direct editing and an interactive tree view for visualizing
              complex nested structures. Format messy JSON with one click, minify for production, or validate syntax
              instantly. All processing happens locally in your browser—your data never leaves your device, ensuring
              complete privacy and security.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Whether you're debugging API responses, editing configuration files, or learning JSON structure, this editor
              provides the tools you need. Upload existing JSON files, edit them with VS Code-quality features, and download
              the results. Recent files are automatically saved to your browser's local storage for quick access.
            </p>

            <div className="bg-muted/30 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold mb-3">Example JSON Structure:</h3>
              <pre className="bg-background p-4 rounded-md overflow-x-auto text-sm border">
                {`{
  "user": {
    "id": 12345,
    "name": "John Doe",
    "email": "john@example.com",
    "active": true,
    "roles": ["admin", "editor"],
    "preferences": {
      "theme": "dark",
      "notifications": true
    }
  }
}`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Paste your JSON above into the editor below to validate, format, or visualize its structure.
              </p>
            </div>
          </section>
        </div>

        {/* CLIENT COMPONENT - Monaco Editor + Zustand */}
        <JsonEditorClient />

        {/* SERVER-RENDERED SEO CONTENT - Google sees this immediately */}
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
        </div>
      </div>
    </div>
  );
}
