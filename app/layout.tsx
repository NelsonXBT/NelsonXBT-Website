import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { portrait, site } from "@/content/site";
import "./globals.css";

/**
 * One family for the whole site. Hierarchy comes from size, weight and
 * tracking rather than from a second, more decorative typeface.
 */
const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Practical Crypto Knowledge`,
    template: `%s — ${site.name}`,
  },
  description:
    "NelsonXBT is the personal brand of Nelson Edeh. Practical crypto education, insights and ideas to help you understand the space and navigate its opportunities.",
  applicationName: site.name,
  authors: [{ name: site.person }],
  creator: site.person,
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — Practical Crypto Knowledge`,
    description:
      "Practical crypto education, insights and ideas from Nelson Edeh.",
    images: [
      { url: portrait.src, width: 1500, height: 1500, alt: portrait.alt },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Practical Crypto Knowledge`,
    description:
      "Practical crypto education, insights and ideas from Nelson Edeh.",
    images: [portrait.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
