import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HTTP Request Tester - Online API Testing Tool Free | Postman Alternative",
    description: "Free online HTTP request tester and API debugging tool. Send real GET, POST, PUT, DELETE requests. View responses, headers, timing. Generate code in cURL, Python, JavaScript, PHP. No installation required.",
    alternates: {
        canonical: "https://tools.weebcoder.com/tools/form-data-debugger",
    },
};

export default function FormDataDebuggerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
