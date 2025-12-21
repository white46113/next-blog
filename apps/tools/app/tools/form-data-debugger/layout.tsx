import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HTTP Request Tester - Online API Testing Tool Free | Postman Alternative",
    description: "Free online HTTP request tester and API debugging tool. Send real GET, POST, PUT, DELETE requests. View responses, headers, timing. Generate code in cURL, Python, JavaScript, PHP. No installation required.",
    keywords: ["http request tester", "api testing tool", "postman alternative", "rest api tester", "api debugger", "http client", "curl generator", "api testing", "form data debugger"],
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/form-data-debugger",
    },
    openGraph: {
        title: "HTTP Request Tester - Online API Testing Tool Free | Postman Alternative",
        description: "Free online HTTP request tester and API debugging tool. Send real GET, POST, PUT, DELETE requests. View responses, headers, timing. Generate code in cURL, Python, JavaScript, PHP.",
        url: "https://tools.weebcoder.com/tools/form-data-debugger",
        type: "website",
        siteName: "WeebCoder Tools",
    },
    twitter: {
        card: "summary_large_image",
        title: "HTTP Request Tester - Online API Testing Tool Free",
        description: "Free online HTTP request tester and API debugging tool. Send real GET, POST, PUT, DELETE requests. View responses, headers, timing.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function FormDataDebuggerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
