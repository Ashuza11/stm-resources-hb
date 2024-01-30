import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Maarifa Corporation",
    description: "Le meilleur Investissement pour votre avenir",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <header className="px-6 py-2 shadow-md sticky top-0 bg-white">
                    <Navbar />
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
