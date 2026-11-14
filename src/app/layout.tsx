import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Manrope, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { Grain } from "@/components/grain";
import { RouteAnnouncer } from "@/components/route-announcer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { SoundProvider } from "@/components/sound-provider";
import { TransitionProvider } from "@/components/transition-provider";
import { SITE } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-telugu",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hwa-n.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "THOLU — A cinema older than cinema",
    template: "%s — THOLU",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  keywords: [
    "Tholu Bommalata",
    "leather shadow puppetry",
    "Andhra Pradesh",
    "Nimmalakunta",
    "Indian folk art",
    "endangered craft",
    "shadow play",
    "interactive field guide",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE.name,
    title: "THOLU — A cinema older than cinema",
    description: SITE.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "THOLU — A cinema older than cinema",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "arts",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09080b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      id="top"
      className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} ${notoTelugu.variable}`}
    >
      <body>
        <SkipLink />
        <TransitionProvider>
          <SoundProvider>
            <CursorGlow />
            <Grain />
            <RouteAnnouncer />
            <SiteHeader />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <SiteFooter />
          </SoundProvider>
        </TransitionProvider>
      </body>
    </html>
  );
}
