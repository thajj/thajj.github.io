import "@/styles/globals.css";
import "@/styles/main.scss";
import "@/components/once-ui/tokens/index.scss";

import classNames from "classnames";

import { Flex, Background } from "@/components/once-ui/components";

import { baseURL, effects, home, person, style } from "@/resources";
import { ThemeProvider } from "@/components/ThemeProvider";

import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

import { Metadata } from "next";
import { Header } from "@/components/Header";
import { RouteGuard } from "@/components/RouteGuard";
import { Footer } from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://" + baseURL),
  title: home.title,
  description: home.description,
  openGraph: {
    title: `${person.firstName}'s Portfolio`,
    description: "Portfolio website showcasing my work.",
    url: `https://${baseURL}`,
    siteName: `${person.firstName}'s Portfolio`,
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

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

type FontConfig = {
  variable: string;
};

const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;

const code = Source_Code_Pro({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        primary.variable,
        secondary ? secondary.variable : "",
        tertiary ? tertiary.variable : "",
        code.variable
      )}
      suppressHydrationWarning
    >
      <Flex
        style={{ minHeight: "100vh" }}
        as="body"
        fillWidth
        margin="0"
        padding="0"
        direction="column"
      >
        <ThemeProvider>
          <GoogleAnalytics />
          <Background
            gradient={effects.gradient}
            dots={effects.dots}
            lines={effects.lines}
          />
          <Flex fillWidth minHeight="16"></Flex>
          <Header />
          <Flex
            zIndex={0}
            fillWidth
            paddingY="l"
            paddingX="l"
            justifyContent="center"
            flex={1}
          >
            <Flex justifyContent="center" fillWidth minHeight="0">
              <RouteGuard>{children}</RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </ThemeProvider>
      </Flex>
    </Flex>
  );
}
