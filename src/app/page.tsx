import { motion } from "framer-motion";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
} from "../components/once-ui/components";

import { about, baseURL, home, person } from "@/resources";
import { renderJSX } from "@/resources/content";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default function Home() {
  return (
    // <HeroParallax products={products} />
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      {/* <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    ></Flex> */}
      <Flex
        fillWidth
        direction="column"
        alignItems="center"
        paddingY="l"
        gap="m"
      >
        <Flex direction="column" fillWidth maxWidth="s" gap="m">
          <RevealFx translateY="4">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2}>
            {/* <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="body-default-l"
            > */}
            <div className="text-muted-foreground font-mono text-xl leading-relaxed">
              <p>
                Hi, I&apos;m Toufic 👋, a passionate{" "}
                <RevealFx delay={0.1}>
                  <Highlight className="text-black dark:text-white">
                    DEVELOPER
                  </Highlight>
                </RevealFx>{" "}
                who loves turning complex problems into elegant solutions and{" "}
                <RevealFx delay={0.2}>
                  <Highlight className="text-black dark:text-white">
                    LEADING TEAMS
                  </Highlight>
                </RevealFx>{" "}
                to achieve greatness.
              </p>
              {/* {renderJSX(home.subline)} */}
              {/* </Text> */}
            </div>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Button
              data-border="rounded"
              href="/about"
              variant="tertiary"
              suffixIcon="chevronRight"
              size="m"
            >
              <Flex gap="8" alignItems="center">
                {about.avatar.display && (
                  <Avatar
                    style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                About me
              </Flex>
            </Button>
          </RevealFx>
        </Flex>
      </Flex>
      {/* <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth paddingX="20">
          <Posts range={[1, 2]} columns="2" />
        </Flex>
      )}
      <Projects range={[2]} /> */}
      {/* {newsletter.display && <Mailchimp />} */}
    </>
  );
}
