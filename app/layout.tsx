import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "CatbearArtstudio Official",
    description: "Welcome to our CatbearArtstudio Official",
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
