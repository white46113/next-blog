"use client";

import { useJsonEditorStore } from '@/store/jsonEditorStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, History, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import JsonToolbar from './components/JsonToolbar';
import JsonEditorTabs from './components/JsonEditorTabs';

export default function JsonEditorClient() {
    const { recentFiles, loadFromRecent, deleteFromRecent, clearRecent } = useJsonEditorStore();

    return (
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
    );
}
