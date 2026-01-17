"use client";

import { useState } from 'react';
import { useJsonEditorStore } from '@/store/jsonEditorStore';
import { Button } from '@/components/ui/button';
import {
  Wand2,
  Minimize2,
  Copy,
  Download,
  Upload,
  Trash2,
  Check,
  Sun,
  Moon,
  Wrench,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function JsonToolbar() {
  const {
    jsonContent,
    formatJson,
    minifyJson,
    fixJson,
    clearContent,
    editorTheme,
    toggleTheme,
    setJsonContent,
  } = useJsonEditorStore();

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `json-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = (e: any) => {
      const file = e.target?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target?.result as string;
          setJsonContent(content);
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-2 p-4 bg-muted/30 rounded-lg border">
        {/* Format */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={formatJson}
              disabled={!jsonContent}
            >
              <Wand2 className="h-4 w-4 mr-2" />
              Format
            </Button>
          </TooltipTrigger>
          <TooltipContent>Beautify JSON with indentation</TooltipContent>
        </Tooltip>

        {/* Minify */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={minifyJson}
              disabled={!jsonContent}
            >
              <Minimize2 className="h-4 w-4 mr-2" />
              Minify
            </Button>
          </TooltipTrigger>
          <TooltipContent>Remove all whitespace</TooltipContent>
        </Tooltip>

        {/* Fix JSON */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={fixJson}
              disabled={!jsonContent}
            >
              <Wrench className="h-4 w-4 mr-2" />
              Fix
            </Button>
          </TooltipTrigger>
          <TooltipContent>Auto-fix common JSON errors (missing quotes, trailing commas, etc.)</TooltipContent>
        </Tooltip>

        {/* Copy */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              disabled={!jsonContent}
            >
              {copied ? (
                <Check className="h-4 w-4 mr-2 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 mr-2" />
              )}
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Copy to clipboard</TooltipContent>
        </Tooltip>

        {/* Download */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              disabled={!jsonContent}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </TooltipTrigger>
          <TooltipContent>Download as .json file</TooltipContent>
        </Tooltip>

        {/* Upload */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm" onClick={handleUpload}>
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </TooltipTrigger>
          <TooltipContent>Upload JSON file</TooltipContent>
        </Tooltip>

        <div className="ml-auto flex items-center gap-2">
          {/* Theme Toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm" onClick={toggleTheme}>
                {editorTheme === 'vs-dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle theme</TooltipContent>
          </Tooltip>

          {/* Clear */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={clearContent}
                disabled={!jsonContent}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </TooltipTrigger>
            <TooltipContent>Clear all content</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
