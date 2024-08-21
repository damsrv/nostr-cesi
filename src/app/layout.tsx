import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import { NDKProvider } from "@/hooks/useNDK";
import Navbar from "@/components/Navbar/Navbar";

const inter = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "LeBonMentor",
    description:
        "LeBonMentor est une plateforme de mentorat en ligne. Trouvez un mentor ou devenez mentor.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <NDKProvider>
                <body
                    className={
                        "flex flex-col min-h-screen bg-background font-sans antialiased " +
                        inter.variable
                    }
                >
                    <Navbar />
                    {children}
                </body>
            </NDKProvider>
        </html>
    );
}
