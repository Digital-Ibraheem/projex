import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/root/Navbar";
import Footer from "@/components/root/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
    title: "Projex - Create",
    description: "Create and collaborate on projects.",
};

export default function CreateLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar transparent={false} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
