import {
  Heading,
  Flex,
  Button,
  Avatar,
  RevealFx,
} from "../components/once-ui/components";

import { about, baseURL, home, person } from "@/resources";
import { Highlight } from "@/components/ui/hero-highlight";

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

export default function Home() {
  return (
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
            image: `https://${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `https://${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
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
            <div className="text-muted-foreground font-mono text-xl leading-relaxed">
              <p>
                Hi, I&apos;m Toufic, a passionate{" "}
                <RevealFx delay={0.1}>
                  <Highlight className="text-black dark:text-white">
                    Full Stack Developer
                  </Highlight>
                </RevealFx>{" "}
                who loves turning complex challenges into seamless solutions.
              </p>
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
    </>
  );
}
