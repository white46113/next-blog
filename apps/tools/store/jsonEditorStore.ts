import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { jsonrepair } from 'jsonrepair';

// Types
interface JsonFile {
  id: string;
  name: string;
  content: string;
  timestamp: number;
}

interface JsonEditorState {
  // JSON Content
  jsonContent: string;
  isValidJson: boolean;
  validationError: string | null;

  // Editor Mode
  editorMode: 'code' | 'tree';

  // Theme
  editorTheme: 'vs-dark' | 'vs-light';

  // Recent Files (last 10)
  recentFiles: JsonFile[];

  // UI State
  isFormatting: boolean;

  // Actions
  setJsonContent: (content: string) => void;
  validateJson: (content: string) => void;
  setEditorMode: (mode: 'code' | 'tree') => void;
  toggleEditorMode: () => void;
  setEditorTheme: (theme: 'vs-dark' | 'vs-light') => void;
  toggleTheme: () => void;

  // File Management
  saveToRecent: (name: string) => void;
  loadFromRecent: (id: string) => void;
  deleteFromRecent: (id: string) => void;
  clearRecent: () => void;

  // JSON Operations
  formatJson: () => void;
  minifyJson: () => void;
  fixJson: () => void;
  clearContent: () => void;
}

export const useJsonEditorStore = create<JsonEditorState>()(
  persist(
    (set, get) => ({
      // Initial State
      jsonContent: '',
      isValidJson: true,
      validationError: null,
      editorMode: 'code',
      editorTheme: 'vs-dark',
      recentFiles: [],
      isFormatting: false,

      // Validation
      validateJson: (content: string) => {
        if (!content.trim()) {
          set({ isValidJson: true, validationError: null });
          return;
        }

        try {
          JSON.parse(content);
          set({ isValidJson: true, validationError: null });
        } catch (error: any) {
          set({
            isValidJson: false,
            validationError: error.message
          });
        }
      },

      // Content Management
      setJsonContent: (content: string) => {
        set({ jsonContent: content });
        get().validateJson(content);
      },

      // Mode Management
      setEditorMode: (mode) => set({ editorMode: mode }),
      toggleEditorMode: () => {
        const current = get().editorMode;
        set({ editorMode: current === 'code' ? 'tree' : 'code' });
      },

      // Theme Management
      setEditorTheme: (theme) => set({ editorTheme: theme }),
      toggleTheme: () => {
        const current = get().editorTheme;
        set({ editorTheme: current === 'vs-dark' ? 'vs-light' : 'vs-dark' });
      },

      // Recent Files
      saveToRecent: (name: string) => {
        const { jsonContent, recentFiles } = get();
        const newFile: JsonFile = {
          id: Date.now().toString(),
          name: name || `untitled-${Date.now()}`,
          content: jsonContent,
          timestamp: Date.now(),
        };

        const updated = [newFile, ...recentFiles].slice(0, 10);
        set({ recentFiles: updated });
      },

      loadFromRecent: (id: string) => {
        const file = get().recentFiles.find(f => f.id === id);
        if (file) {
          set({ jsonContent: file.content });
          get().validateJson(file.content);
        }
      },

      deleteFromRecent: (id: string) => {
        const updated = get().recentFiles.filter(f => f.id !== id);
        set({ recentFiles: updated });
      },

      clearRecent: () => set({ recentFiles: [] }),

      // JSON Operations
      formatJson: () => {
        const { jsonContent } = get();
        try {
          const parsed = JSON.parse(jsonContent);
          const formatted = JSON.stringify(parsed, null, 2);
          set({ jsonContent: formatted, isValidJson: true, validationError: null });
        } catch (error: any) {
          set({ validationError: error.message, isValidJson: false });
        }
      },

      minifyJson: () => {
        const { jsonContent } = get();
        try {
          const parsed = JSON.parse(jsonContent);
          const minified = JSON.stringify(parsed);
          set({ jsonContent: minified, isValidJson: true, validationError: null });
        } catch (error: any) {
          set({ validationError: error.message, isValidJson: false });
        }
      },

      fixJson: () => {
        const { jsonContent } = get();
        try {
          // Use jsonrepair to fix common JSON issues
          const fixed = jsonrepair(jsonContent);
          // Format the fixed JSON for readability
          const parsed = JSON.parse(fixed);
          const formatted = JSON.stringify(parsed, null, 2);
          set({ jsonContent: formatted, isValidJson: true, validationError: null });
        } catch (error: any) {
          set({ validationError: `Unable to fix JSON: ${error.message}`, isValidJson: false });
        }
      },

      clearContent: () => {
        set({ jsonContent: '', isValidJson: true, validationError: null });
      },
    }),
    {
      name: 'json-editor-storage',
      partialize: (state) => ({
        recentFiles: state.recentFiles,
        editorTheme: state.editorTheme,
        editorMode: state.editorMode,
      }),
    }
  )
);
