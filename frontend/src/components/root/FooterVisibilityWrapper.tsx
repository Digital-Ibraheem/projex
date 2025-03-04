"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/root/Footer";

export default function FooterVisibilityWrapper() {
  const pathname = usePathname();
  const hideFooterPages = ["/create"];

  if (hideFooterPages.includes(pathname)) return null;

  return <Footer />;
}
