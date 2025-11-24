import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Tech Blog - Latest Technology News & Tutorials",
    description: "Explore the latest in technology, programming tutorials, and in-depth articles about web development, AI, and software engineering.",
    icons: {
        icon: "/favicon.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
