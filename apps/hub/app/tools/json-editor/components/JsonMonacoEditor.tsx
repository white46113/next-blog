"use client";

import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import { useJsonEditorStore } from '@/store/jsonEditorStore';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function JsonMonacoEditor() {
  const {
    jsonContent,
    setJsonContent,
    editorTheme,
    isValidJson,
    validationError
  } = useJsonEditorStore();

  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;

    // Configure JSON validation
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: false,
      schemas: [],
      enableSchemaRequest: true,
    });

    // Focus editor
    editor.focus();
  };

  const handleEditorChange = (value: string | undefined) => {
    setJsonContent(value || '');
  };

  return (
    <div className="space-y-4">
      {!isValidJson && validationError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">
            <strong>Invalid JSON:</strong> {validationError}
          </AlertDescription>
        </Alert>
      )}

      <Card className="overflow-hidden border-none shadow-xl">
        <div className="h-[600px]">
          <Editor
            height="100%"
            language="json"
            theme={editorTheme}
            value={jsonContent}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: true },
              fontSize: 14,
              wordWrap: 'on',
              formatOnPaste: true,
              formatOnType: true,
              automaticLayout: true,
              scrollBeyondLastLine: false,
              tabSize: 2,
              insertSpaces: true,
              bracketPairColorization: {
                enabled: true,
              },
              suggest: {
                showKeywords: true,
              },
              quickSuggestions: {
                strings: true,
              },
            }}
          />
        </div>
      </Card>
    </div>
  );
}
