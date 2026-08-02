import classNames from "classnames";
import { Suspense } from "react";

import { Figtree, Source_Serif_4 } from "next/font/google";
import { Metadata } from "next";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { baseURL, home } from "@/resources";

const figtree = Figtree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://" + baseURL),
  title: {
    default: home.title,
    template: `%s · Toufic Hajj`,
  },
  description: home.description,
  openGraph: {
    title: home.title,
    description: home.description,
    url: `https://${baseURL}`,
    siteName: "Toufic Hajj",
    locale: "en_CA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={classNames(figtree.variable, sourceSerif.variable)}
      suppressHydrationWarning
    >
      <body style={{ margin: 0 }} suppressHydrationWarning>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
