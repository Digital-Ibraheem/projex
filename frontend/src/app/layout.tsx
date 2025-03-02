import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/root/Navbar";
import Footer from "@/components/root/Footer";
import FooterVisibilityWrapper from "@/components/root/FooterVisibilityWrapper"; // New Wrapper
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({ weight: "400", subsets: ["latin"], variable: "--font-roboto" });


export const metadata: Metadata = {
  title: "Projex",
  description: "Build projects and showcase your skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <AuthProvider>
        <ModalProvider>
          <body className="antialiased">
            <Navbar />
            <main tabIndex={0} className="pt-[90px]"> {/* Adjust this value based on your navbar height */}
              {children}
            </main>
            <FooterVisibilityWrapper />
          </body>
        </ModalProvider>
      </AuthProvider>
    </html>
  );
}
