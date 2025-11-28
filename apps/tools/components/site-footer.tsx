import Link from "next/link";

export function SiteFooter() {
    return (
        <footer className="py-12 px-4 bg-background border-t">
            <div className="container mx-auto text-center text-sm text-muted-foreground">
                <p>© 2024 Tools. All rights reserved.</p>
                <p>
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                    {" | "}
                    <Link href="/terms" className="hover:underline">Terms of Service</Link>
                    {" | "}
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </p>
            </div>
        </footer>
    );
}
