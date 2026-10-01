import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getSiteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Sun — Programação, simplificada", template: "%s | Sun" },
  description: siteConfig.description,
  applicationName: "Sun",
  keywords: ["Sun", "Luau", "Roblox", "programming language", "linguagem", "open source"],
  authors: [{ name: "BLACKZW" }],
  creator: "BLACKZW",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Sun", title: "Sun — Programação, simplificada", description: siteConfig.description },
  twitter: { card: "summary_large_image", title: "Sun — Programação, simplificada", description: siteConfig.description },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#080a0c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
