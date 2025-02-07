import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Projex",
  description: "Build projects and showcase your skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
