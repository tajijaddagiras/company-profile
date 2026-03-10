import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Company Profile",
    description: "Welcome to our company profile website",
    icons: {
        icon: "/images/logoheader.jpeg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
