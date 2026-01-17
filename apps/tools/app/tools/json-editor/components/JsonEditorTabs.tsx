"use client";

import { useJsonEditorStore } from '@/store/jsonEditorStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, TreePine } from 'lucide-react';
import dynamic from 'next/dynamic';
import JsonTreeView from './JsonTreeView';

// Lazy load Monaco Editor to reduce initial bundle size
const JsonMonacoEditor = dynamic(() => import('./JsonMonacoEditor'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center bg-muted/20 rounded-lg">
      <div className="text-center space-y-2">
        <div className="text-4xl">⚙️</div>
        <p className="text-muted-foreground">Loading editor...</p>
      </div>
    </div>
  ),
});

export default function JsonEditorTabs() {
  const { editorMode, setEditorMode } = useJsonEditorStore();

  return (
    <Tabs value={editorMode} onValueChange={(value) => setEditorMode(value as 'code' | 'tree')}>
      <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-6">
        <TabsTrigger value="code" className="flex items-center gap-2">
          <Code2 className="h-4 w-4" />
          Code View
        </TabsTrigger>
        <TabsTrigger value="tree" className="flex items-center gap-2">
          <TreePine className="h-4 w-4" />
          Tree View
        </TabsTrigger>
      </TabsList>

      <TabsContent value="code" className="mt-0">
        <JsonMonacoEditor />
      </TabsContent>

      <TabsContent value="tree" className="mt-0">
        <JsonTreeView />
      </TabsContent>
    </Tabs>
  );
}
