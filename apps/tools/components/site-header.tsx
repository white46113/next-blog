import Link from "next/link";
import { Wrench } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                        <Wrench className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Tools</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/#converters" className="transition-colors hover:text-primary">Converters</Link>
                    <Link href="/#calculators" className="transition-colors hover:text-primary">Calculators</Link>
                </nav>
            </div>
        </header>
    );
}
