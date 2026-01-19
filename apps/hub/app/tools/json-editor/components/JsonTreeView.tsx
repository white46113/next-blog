"use client";

import { useState, useMemo } from 'react';
import { useJsonEditorStore } from '@/store/jsonEditorStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, ChevronRight, ChevronDown, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TreeNodeProps {
  nodeKey: string;
  value: any;
  depth: number;
  isLast?: boolean;
}

function TreeNode({ nodeKey, value, depth, isLast = false }: TreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(depth < 2);
  const [copied, setCopied] = useState(false);

  const copyValue = () => {
    navigator.clipboard.writeText(JSON.stringify(value, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isObject = typeof value === 'object' && value !== null && !Array.isArray(value);
  const isArray = Array.isArray(value);
  const isPrimitive = !isObject && !isArray;

  const valueType = isArray ? 'array' : isObject ? 'object' : typeof value;
  const itemCount = isArray ? value.length : isObject ? Object.keys(value).length : 0;

  const getValueColor = (val: any) => {
    if (val === null) return 'text-purple-600 dark:text-purple-400';
    if (typeof val === 'boolean') return 'text-blue-600 dark:text-blue-400';
    if (typeof val === 'number') return 'text-green-600 dark:text-green-400';
    if (typeof val === 'string') return 'text-orange-600 dark:text-orange-400';
    return 'text-foreground';
  };

  const renderValue = (val: any) => {
    if (val === null) return 'null';
    if (typeof val === 'string') return `"${val}"`;
    if (typeof val === 'boolean') return val.toString();
    if (typeof val === 'number') return val.toString();
    return '';
  };

  return (
    <div className={cn("group", depth > 0 && "ml-6")}>
      <div className="flex items-start gap-2 py-1.5 px-2 rounded-md hover:bg-muted/50 transition-colors">
        {/* Expand/Collapse Button */}
        {!isPrimitive && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-0.5 flex-shrink-0 hover:bg-muted rounded p-0.5"
          >
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        )}

        {isPrimitive && <div className="w-5" />}

        {/* Key Name */}
        <span className="font-mono text-sm font-semibold text-primary">
          {nodeKey}
        </span>

        {/* Type Badge */}
        <Badge variant="outline" className="text-xs capitalize">
          {valueType}
        </Badge>

        {/* Item Count */}
        {!isPrimitive && (
          <span className="text-xs text-muted-foreground">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
        )}

        {/* Primitive Value */}
        {isPrimitive && (
          <span className={cn("font-mono text-sm", getValueColor(value))}>
            {renderValue(value)}
          </span>
        )}

        {/* Copy Button */}
        <Button
          size="sm"
          variant="ghost"
          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
          onClick={copyValue}
        >
          {copied ? (
            <Check className="h-3 w-3 text-green-600" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
        </Button>
      </div>

      {/* Children */}
      {!isPrimitive && isExpanded && (
        <div className="border-l-2 border-muted ml-3">
          {isArray ? (
            value.map((item: any, index: number) => (
              <TreeNode
                key={index}
                nodeKey={`[${index}]`}
                value={item}
                depth={depth + 1}
                isLast={index === value.length - 1}
              />
            ))
          ) : (
            Object.entries(value).map(([key, val], index, arr) => (
              <TreeNode
                key={key}
                nodeKey={key}
                value={val}
                depth={depth + 1}
                isLast={index === arr.length - 1}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function JsonTreeView() {
  const { jsonContent, isValidJson, validationError } = useJsonEditorStore();

  const parsedData = useMemo(() => {
    if (!jsonContent.trim()) return null;
    try {
      return JSON.parse(jsonContent);
    } catch {
      return null;
    }
  }, [jsonContent]);

  if (!jsonContent.trim()) {
    return (
      <Card className="border-none shadow-xl">
        <CardContent className="flex items-center justify-center h-[600px] text-center">
          <div className="space-y-4">
            <div className="text-6xl">📄</div>
            <h3 className="text-xl font-semibold text-muted-foreground">
              No JSON to Display
            </h3>
            <p className="text-sm text-muted-foreground">
              Switch to Code View or paste JSON to see the tree structure
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!isValidJson || !parsedData) {
    return (
      <Card className="border-none shadow-xl">
        <CardContent className="p-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="ml-2">
              <strong>Cannot Display Tree:</strong> {validationError || 'Invalid JSON'}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-xl">
      <CardHeader>
        <CardTitle>JSON Tree Structure</CardTitle>
      </CardHeader>
      <CardContent className="h-[550px] overflow-auto">
        <TreeNode nodeKey="root" value={parsedData} depth={0} />
      </CardContent>
    </Card>
  );
}
